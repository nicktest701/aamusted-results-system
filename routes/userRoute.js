const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyJWT = require("../middlewares/verifyJWT");
const sendMail = require("../config/mail");

const User = require("../models/userModel");
const Student = require("../models/studentModel");
const Lecturer = require("../models/lecturerModel");

//@PGET all users
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const users = await User.find({ role: { $nin: ["student", "lecturer"] } });

    if (!users) {
      return res.status(404).json("Error fetching information");
    }
    res.json(users);
  })
);

//@PGET all users
router.get(
  "/auth",
  verifyJWT,
  AsyncHandler(async (req, res) => {
    res.json(req.session.user);
  })
);

//@GET user by username
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    const username = req.body.username;
    const user = await User.findByUsername(username?.trim());

    if (_.isEmpty(user[0])) {
      return res.status(404).json("Invalid Username or Password!");
    }
    const isTrue = bcrypt.compareSync(req.body.password, user[0].password);
    if (!isTrue) {
      return res.status(404).json("Invalid Username or Password!");
    }

    if (user[0].active === false) {
      return res
        .status(404)
        .json(
          "Your account has been disabled? Try contacting your administrator."
        );
    }

    let loggedInUser;
    if (user[0].role === "student") {
      const student = await Student.find({ indexNumber: user[0].username });

      if (!student) {
        return res
          .status(404)
          .json("Unable to verify account with this username");
      }
      loggedInUser = {
        studentId: student[0]._id,
        username: student[0].fullname,
        indexNumber: student[0].indexNumber,
        programme: student[0].programme,
        role: user[0].role,
        profile: student[0].profile,
        active: user[0].active,
      };
    } else if (user[0].role === "lecturer") {
      const lecturer = await Lecturer.find({
        professionalID: user[0].username,
      });

      if (lecturer.length === 0) {
        return res
          .status(404)
          .json("Unable to verify account with this username");
      }

      loggedInUser = {
        id: lecturer[0]._id,
        username: lecturer[0].fullname,
        professionalID: lecturer[0].professionalID,
        role: user[0].role,
        profile: lecturer[0].profile,
        active: user[0].active,
      };
    } else {
      loggedInUser = {
        id: user[0]._id,
        username: user[0].username,
        role: user[0].role,
        active: user[0].active,
      };
    }

    // req.session.user = loggedInUser;

    const token = jwt.sign(loggedInUser, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    loggedInUser.token = token;

    res.json(loggedInUser);
  })
);

//@PUT add new user
router.put(
  "/",
  AsyncHandler(async (req, res) => {
    const newUser = req.body;
    const reservedPassword = req.body.password;
    const username = req.body.username;

    const itExists = await User.findByUsername(username?.trim());
    if (!_.isEmpty(itExists)) {
      return res
        .status(404)
        .json("An account with this Username already exits!");
    }

    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;
    const user = await User.create(newUser);

    if (!user) {
      return res.status(404).json("Error Saving user info!");
    }

    if (user) {
      if (process.env.NODE_ENV === "production") {
        const settingsUrl = `${process.env.REACT_APP_BASE_URL}info/settings`;
        const htmlText = `<div>
  <h2 style='color:#5aa7a7;text-decoration:underline;'>AAMUSTED</h2>
  <p>Dear ${user.username}, 
  <p>You have been enrolled successfully on the results system.
  Your username is <b style='text-decoration:underline;'> ${user.username}</b>, and  your default password is <b style='text-decoration:underline;'>${reservedPassword}</b>.</p>
  <p> You can log onto the <a href=${settingsUrl}> setting page </a> of the system to change your password.</p>
  <p>Thank You !!!</p>
  </div>`;

        sendMail(htmlText, user.email);

        //     const smsMessage = `Dear ${user.username},
        // You have been enrolled successfully on the results system. Your username is ${user.username}  and  your default password is ${reservedPassword}.You can log onto the setting page of the system to change your password.Thank you!!! `;
        //     await sendSMS(smsMessage, user.telephoneNo);
      }
    }

    res.sendStatus(201);
  })
);
//@PUT add new user
router.get(
  "/admin/add",
  AsyncHandler(async (req, res) => {
    const newUser = {
      username: "Akwasi",
      password: "Akwasi21guy",
      role: "administrator",
      active: true,
    };

    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;
    const user = await User.create(newUser);
    if (!user) {
      return res.status(404).json("Error Saving user info!");
    }

    res.json("hello");
  })
);

//@PUT Reset Password
router.put(
  "/reset",
  AsyncHandler(async (req, res) => {
    const { id, oldPassword, newPassword } = req.body;
    const user = await User.findById(id);

    if (_.isEmpty(user)) {
      return res.status(404).json("User does not exist");
    }
    const isTrue = await bcrypt.compare(oldPassword, user.password);
    if (!isTrue) {
      return res.status(404).json("Password is incorrect!!!");
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await User.findByIdAndUpdate(id, {
      password: hashedPassword,
    });

    if (_.isEmpty(updatedUser)) {
      return res.status(404).json("Error updating user info.Try Again Later.");
    }

    res.json("User information updated !!!");
  })
);

//@PUT Reset Password
router.patch(
  "/admin/reset-password",
  AsyncHandler(async (req, res) => {
    const { id, password } = req.body;
    const user = await User.findById(id);

    if (_.isEmpty(user)) {
      return res.status(404).json("User does not exist");
    }

    const hashedPassword = await bcrypt.hash(password?.trim(), 10);

    const updatedUser = await User.findByIdAndUpdate(id, {
      password: hashedPassword,
    });

    if (_.isEmpty(updatedUser)) {
      return res.status(404).json("Error updating user info.Try Again Later.");
    }

    res.json("User password updated !!!");
  })
);

router.patch(
  "/",
  AsyncHandler(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });

    if (_.isEmpty(updatedUser)) {
      return res.status(404).json("Error updating user info");
    }

    res.status(200).json(true);
  })
);
router.put(
  "/account",
  AsyncHandler(async (req, res) => {
    const { id, active } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { active },
      {
        new: true,
      }
    );

    if (_.isEmpty(updatedUser)) {
      return res.status(404).json("Error updating user info");
    }

    res.json(
      updatedUser.active === true
        ? "User account enabled"
        : "User account disabled"
    );
  })
);

module.exports = router;
