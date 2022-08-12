const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const Lecturer = require("../models/lecturerModel");
const User = require("../models/userModel");
const sendMail = require("../config/mail");

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const ext = file?.originalname?.split(".")[1];
    cb(null, `${req.query._up}.${ext}`);
  },
});
const upload = multer({ storage: Storage });

//@GET lecturers
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const department = req.query.department || "";

    const lecturers = await Lecturer.find({});
    res.json(lecturers);
  })
);

//@GET lecturer by id
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const professionalID = req.query.id;

    const lecturer = await Lecturer.find({ professionalID });

    if (_.isEmpty(lecturer)) {
      return res.json("No Such lecturer exits");
    }
    res.json(lecturer[0]);
  })
);

//@POST lecturers
router.post(
  "/",
  upload.single("profile"),
  AsyncHandler(async (req, res) => {
    const newLecturer = req.body;
    newLecturer.profile = req.file?.filename;

    const lecturer = await Lecturer.create(newLecturer);

    if (lecturer) {
      const hashedPassword = await bcrypt.hash(lecturer.professionalID, 10);
      const user = await User.create({
        username: lecturer.professionalID,
        email: lecturer.email,
        password: hashedPassword,
        role: "lecturer",
      });

      if (user) {
        const htmlText = `<div>
        <h2 style='color:#5aa7a7;text-decoration:underline;'>RESULTS SYSTEM</h2>
        <p>Dear ${lecturer.fullname}, 
        <p>You have been enrolled successfully on the results system.
        Your username is <b style='text-decoration:underline;'> ${lecturer.professionalID}</b>, and  your default password is <b style='text-decoration:underline;'>${lecturer.professionalID}</b>.</p>
        <p> You can log on into the <i style='color:#5aa7a7;text-decoration:underline;'> setting page </i> of the system to change your password.</p>
        <p>Thank You !!!</p>
        </div>`;

        sendMail(htmlText);
      }
    }

    res.json(lecturer);
  })
);

//@PUT lecturers
router.put(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.body._id;

    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid lecturer id",
      });
    }

    const modifiedLecturer = req.body;
    const updatedLecturer = await Lecturer.findByIdAndUpdate(
      id,
      modifiedLecturer,
      {
        upsert: true,
        new: true,
      }
    );
    res.json(updatedLecturer);
  })
);

//@PUT lecturers
// router.patch(
//   "/",
//   AsyncHandler(async (req, res) => {
//     const updatedIndexNumbers = req.body;

//     let response = [];
//     updatedIndexNumbers.map(async (lecturer) => {
//       if (!mongoose.isValidObjectId(lecturer.id)) {
//         return res.json({
//           error: true,
//           message: "Invalid lecturer id",
//         });
//       }
//       const updatedlecturer = await lecturer.findByIdAndUpdate(
//         lecturer.id,
//         { indexNumber: lecturer.indexNumber },
//         {
//           new: true,
//         }
//       );

//       response.push(updatedlecturer);
//     });

//     res.json(response);
//   })
// );

//@DELETE lecturer
router.delete(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.query.id;

    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid lecturer id",
      });
    }

    const lecturer = await Lecturer.findByIdAndRemove(id);
    if (lecturer === null) {
      return res.json({
        error: true,
        mesaage: "No lecturer with such id",
      });
    }
    res.json(lecturer);
  })
);

module.exports = router;