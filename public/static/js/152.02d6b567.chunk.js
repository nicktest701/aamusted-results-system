"use strict";(self.webpackChunkresults_system=self.webpackChunkresults_system||[]).push([[152],{35621:function(e,n,r){r.d(n,{eH:function(){return c},vu:function(){return d},zk:function(){return a}});var t,s=r(74165),i=r(15861),l=r(74569),o=r.n(l);t="https://aamusted-results.herokuapp.com";o().create({baseURL:"".concat(t,"/assigned_course"),timeout:1e4,headers:{"Content-Type":"application/json"}});var a=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o()({baseURL:"".concat(t,"/assigned_course/").concat(n),method:"GET"});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o()({baseURL:"".concat(t,"/assigned_course/all/").concat(n),method:"GET"});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o()({baseURL:"".concat(t,"/assigned_course"),method:"POST",data:n});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},40077:function(e,n,r){r.d(n,{v:function(){return t}});var t=function(e){switch(e){case"A":return 12;case"B+":return 10.5;case"B":return 9;case"C+":return 7.5;case"C":return 6;case"D+":return 4.5;case"D":return 3;case"E":return 1.5;case"F":return 0;default:return""}}},5152:function(e,n,r){r.r(n),r.d(n,{default:function(){return ue}});var t,s=r(29439),i=r(72791),l=r(5849),o=r(61474),a=r(83449),d=r(47283),c=r(2249),u=r(64554),x=r(60220),h=r(53767),m=r(4567),j=r(90977),p=r(17133),f=r(4841),v=r(38820),Z=r(80184);t="https://aamusted-results.herokuapp.com";var g=function(e){var n=e.studentData;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(u.Z,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},gap:5,paddingTop:5},children:[(0,Z.jsxs)(u.Z,{sx:{position:"relative"},children:[(0,Z.jsx)(x.Z,{src:""===(null===n||void 0===n?void 0:n.profile)||void 0===(null===n||void 0===n?void 0:n.profile)?null:"".concat(t,"/images/").concat(null===n||void 0===n?void 0:n.profile),alt:"profile",sx:{maxWidth:150,width:150,height:150}}),(0,Z.jsxs)(h.Z,{alignItems:"center",justifyContent:"center",paddingBottom:3,children:[(0,Z.jsx)(m.Z,{variant:"h6",children:null===n||void 0===n?void 0:n.fullname}),(0,Z.jsx)(m.Z,{children:null===n||void 0===n?void 0:n.indexNumber})]}),(0,Z.jsx)(j.Z,{sx:{position:"absolute",top:-5,right:-5,backgroundColor:"primary.main"},children:(0,Z.jsx)(p.Z,{htmlFor:"profile ",children:(0,Z.jsx)(v.Z,{sx:{color:"#fff"}})})}),(0,Z.jsx)("input",{type:"file",id:"profile",hidden:!0})]}),(0,Z.jsx)(f.Z,{sx:{padding:3,borderTop:"2px solid #5aa7a7"},children:(0,Z.jsxs)("table",{width:"100%",children:[(0,Z.jsx)("th",{colSpan:"2",style:{textAlign:"left",padding:"8px 0"},children:(0,Z.jsx)(m.Z,{variant:"h6",color:"primary",children:"Personal Info."})}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Index Number"}),(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.indexNumber})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Full Name"}),(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.fullname})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Date of Birth"}),(0,Z.jsx)("td",{children:new Date(null===n||void 0===n?void 0:n.dob).toLocaleDateString()})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Gender"}),(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.gender})]}),(0,Z.jsx)("th",{colSpan:"2",style:{textAlign:"left",padding:"16px 0"},children:(0,Z.jsx)(m.Z,{variant:"h6",color:"primary",children:"Additional Info"})}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Department"}),(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.department})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Programme"}),(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.programme})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Current Level"}),(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.level})]})]})})]})})},b=r(13967),y=r(94721),C=r(74223),S=(0,C.Z)((0,Z.jsx)("path",{d:"M14 2H4v20h16V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"DescriptionSharp"),I=r(16871),w=r(40077),P=r(763),k=r.n(P);function R(e){var n=e.studentResult,r=(e.studentId,(0,b.Z)().palette),t=(0,I.s0)(),s=[],o=[];var a=null===n||void 0===n?void 0:n.map((function(e,n){return(0,Z.jsxs)(i.Fragment,{children:[(0,Z.jsx)("div",{children:(0,Z.jsxs)(u.Z,{sx:{backgroundColor:r.primary.main,color:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",padding:1},children:[(0,Z.jsxs)("p",{style:{fontSize:"12px"},children:[e.year," ACADEMIC YEAR"]}),(0,Z.jsxs)("p",{style:{fontSize:"12px"},children:["LEVEL ",e.level]}),(0,Z.jsxs)("p",{style:{fontSize:"12px"},children:[e.semester," SEMESTER"]})]})}),(0,Z.jsxs)("table",{cellPadding:"10px",children:[(0,Z.jsx)("thead",{style:{backgroundColor:r.secondary.main,color:"#fff",textAlign:"left"},children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{children:"Code"}),(0,Z.jsx)("th",{children:"Course"}),(0,Z.jsx)("th",{children:"Credit Hours"}),(0,Z.jsx)("th",{children:"Score"}),(0,Z.jsx)("th",{children:"Grade"}),(0,Z.jsx)("th",{children:"Grade Point"})]})}),(0,Z.jsx)("tbody",{style:{backgroundColor:"whitesmoke"},children:e.results.map((function(e,n){var r=(0,w.v)(e.grade);return s.push(e.creditHours),o.push(r),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:e.course.id}),(0,Z.jsx)("td",{children:e.course.label}),(0,Z.jsx)("td",{children:e.creditHours}),(0,Z.jsx)("td",{children:e.score}),(0,Z.jsx)("td",{children:e.grade}),(0,Z.jsx)("td",{children:(0,w.v)(e.grade)})]},e.course.id)}))}),(0,Z.jsx)("tfoot",{style:{paddingBottom:"200px"},children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{}),(0,Z.jsx)("td",{}),(0,Z.jsx)("td",{}),(0,Z.jsx)("td",{}),(0,Z.jsx)("td",{}),(0,Z.jsxs)("td",{style:{backgroundColor:"#5aa7a7",color:"#fff"},children:["GPA-",(k().sum(o)/k().sum(s)).toFixed(2)]})]})})]})]},n)}));return(0,Z.jsxs)(u.Z,{children:[(0,Z.jsxs)(h.Z,{paddingBottom:1,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,Z.jsx)(m.Z,{paddingBottom:1,children:"Academic Records"}),(0,Z.jsx)(l.Z,{variant:"contained",color:"secondary",disabled:0===n.length,onClick:function(){t("/info/preview",{replace:!0})},children:"Preview"})]}),(0,Z.jsx)(y.Z,{}),(0,Z.jsx)(h.Z,{paddingY:5,rowGap:1,children:0===n.length?(0,Z.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingY:8,gap:2},children:[(0,Z.jsx)(S,{sx:{width:72,height:72}}),(0,Z.jsx)(m.Z,{variant:"h4",children:"No Records Available"})]}):a})]})}var z=i.memo(R),B=r(91933),D=r(43504),H=(0,C.Z)((0,Z.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackSharp"),L=(0,C.Z)((0,Z.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonSharp"),E=(0,C.Z)((0,Z.jsx)("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"}),"Report"),T=r(61820),A=r(90110),M=r(76385),N=r(99873),Y=[{id:1,indexNumber:"501253066",year:2021,programme:"Management",level:200,semester:1,courses:[{course:{id:"CIT214",label:"Biology"},creditHours:3},{course:{id:"CIT234",label:"Biology"},creditHours:3}]},{id:2,indexNumber:"501253066",year:2021,programme:"Management",level:200,semester:2,courses:[{course:{id:"CIT456",label:"Zoo"},creditHours:3},{course:{id:"CIT111",label:"Latin"},creditHours:3}]}];var q=function(){var e,n=(0,b.Z)().palette,r=(0,i.useContext)(N.D).customState,t=null===r||void 0===r||null===(e=r.studentCourse)||void 0===e?void 0:e.map((function(e,r){return(0,Z.jsxs)(i.Fragment,{children:[(0,Z.jsx)("div",{children:(0,Z.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1},children:[(0,Z.jsxs)("p",{children:["LEVEL ",e.level]}),(0,Z.jsxs)("p",{children:[e.semester," SEMESTER"]})]})}),(0,Z.jsxs)("table",{cellPadding:"10px",children:[(0,Z.jsx)("thead",{style:{backgroundColor:n.secondary.main,color:"#fff",textAlign:"left"},children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{children:"Code"}),(0,Z.jsx)("th",{children:"Course"}),(0,Z.jsx)("th",{children:"Credit Hours"}),(0,Z.jsx)("th",{children:"Action"})]})}),(0,Z.jsx)("tbody",{style:{backgroundColor:"whitesmoke"},children:e.courses.map((function(e,r){return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"20%",children:e.course.id}),(0,Z.jsxs)("td",{width:"50%",children:[" ",e.course.label]}),(0,Z.jsx)("td",{width:"15%",children:e.creditHours}),(0,Z.jsx)("td",{width:"15%",children:(0,Z.jsx)("button",{style:{backgroundColor:n.primary.main,color:"#fff",outline:"none",border:"none",padding:"5px 10px"},children:"Remove"})})]},r)}))}),(0,Z.jsx)("tfoot",{style:{paddingBottom:"200px"},children:(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{children:"End"})})})]})]},e._id)}));return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(u.Z,{sx:{margin:"auto",marginTop:2},children:(0,Z.jsx)(h.Z,{paddingY:3,rowGap:1,children:0===Y.length?(0,Z.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingY:8,gap:2},children:[(0,Z.jsx)(S,{sx:{width:72,height:72}}),(0,Z.jsx)(m.Z,{variant:"h4",children:"No Registered Courses"})]}):t})})})},_=(0,C.Z)((0,Z.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddSharp"),V=r(1413),F=r(93433),G=r(12258),W=r(5574),Q=r(65661),U=r(4899),O=r(63515),J=r(81153),X=r(46314),K=r(93006),$=r(77386),ee=r(92506),ne=r(85771),re=function(e){var n=e.course,r=e.handleRemove,t=e.hrs;return(0,Z.jsx)(ne.Z,{color:"primary",avatar:(0,Z.jsx)(x.Z,{children:t}),sx:{color:"#fff"},label:n.label,onDelete:function(){return r(n.id)}})},te=i.memo(re),se=r(99544),ie=r(81724),le=r(85175),oe=r(35621);var ae=function(e){var n,r,t=e.open,o=e.setOpen,a=(0,B.useQueryClient)(),d=(0,i.useContext)(N.D).customState,c=(0,i.useState)(["2021","2022"]),u=(0,s.Z)(c,1)[0],x=(0,i.useState)([null===d||void 0===d||null===(n=d.studentInfo)||void 0===n?void 0:n.programme]),p=(0,s.Z)(x,1)[0],f=(0,i.useState)(["100","200","300","400"]),v=(0,s.Z)(f,1)[0],g=(0,i.useState)(["1","2"]),b=(0,s.Z)(g,1)[0],C=(0,i.useState)([]),S=(0,s.Z)(C,2),I=S[0],w=S[1],P=(0,i.useState)(null),R=(0,s.Z)(P,2),z=R[0],D=R[1],H=(0,i.useState)(null),L=(0,s.Z)(H,2),E=L[0],T=L[1],A=(0,i.useState)(null),M=(0,s.Z)(A,2),Y=M[0],q=M[1],_=(0,i.useState)(null),ne=(0,s.Z)(_,2),re=ne[0],ae=ne[1],de=(0,i.useState)(null),ce=(0,s.Z)(de,2),ue=ce[0],xe=ce[1],he=(0,i.useState)(0),me=(0,s.Z)(he,2),je=me[0],pe=me[1],fe=(0,i.useState)([]),ve=(0,s.Z)(fe,2),Ze=ve[0],ge=ve[1],be=(0,i.useState)({severity:"",msg:""}),ye=(0,s.Z)(be,2),Ce=ye[0],Se=ye[1];(0,B.useQuery)(["allCoursesByProgramme",Y],(function(){return(0,oe.vu)(Y)}),{enabled:!!Y,onSuccess:function(e){var n=e.map((function(e){return{id:e.course.id,label:e.course.label,professionalID:e.professionalID}}));w(n)}});var Ie={indexNumber:null===d||void 0===d||null===(r=d.studentInfo)||void 0===r?void 0:r.indexNumber,academicYear:z,programme:Y,level:re,semester:E,courses:Ze},we=(0,ie.Ry)().shape({academicYear:(0,ie.Z_)().required().nullable(!0),semester:(0,ie.Z_)().required().nullable(!0),programme:(0,ie.Z_)().required().nullable(!0),level:(0,ie.Z_)().required().nullable(!0),courses:(0,ie.IX)().required().min(1,"Courses cannot be empty")}),Pe=(0,B.useMutation)(le.rY),ke=(0,i.useCallback)((function(){Se({severity:"",msg:""}),Ze.find((function(e){return e.course.id===ue.id}))?Se({severity:"error",msg:"Course already exists"}):(Se({severity:"",msg:""}),ge([].concat((0,F.Z)(Ze),[{course:ue,creditHours:je}])))}),[Ze,ue,je]),Re=function(e){var n=Ze.filter((function(n){return n.course.id!==e}));ge(n)};return(0,Z.jsxs)(W.Z,{open:t,onClose:function(){return o(!1)},fullWidth:!0,maxWidth:"md",children:[(0,Z.jsxs)(Q.Z,{display:"flex",justifyContent:"space-between",children:[(0,Z.jsx)(m.Z,{children:"Course Registration"}),(0,Z.jsx)(j.Z,{onClick:function(){return o(!1)},children:(0,Z.jsx)(se.Z,{})})]}),(0,Z.jsx)(ee.J9,{initialValues:Ie,onSubmit:function(e,n){Se({severity:"",msg:""}),k().isEmpty(e)?Se({severity:"info",msg:"Please select a course to register!!!"}):(n.setSubmitting(!0),Pe.mutateAsync(e,{onSettled:function(){a.invalidateQueries(["studentCourse"]),n.setSubmitting(!1)},onSuccess:function(e){Se({severity:"success",msg:"Course registration successfull"})}}))},enableReinitialize:!0,validationSchema:we,children:function(e){e.values;var n=e.errors,r=e.touched,t=e.handleSubmit,s=(e.handleChange,e.isSubmitting);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(U.Z,{children:[Ce.msg&&(0,Z.jsx)(O.Z,{severity:Ce.severity,onClose:function(){return Se({severity:"",msg:""})},children:Ce.msg}),(0,Z.jsx)(m.Z,{children:"1.Academic Information"}),(0,Z.jsx)(y.Z,{}),(0,Z.jsxs)(J.ZP,{container:!0,spacing:3,paddingY:4,children:[(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(X.Z,{disablePortal:!0,options:u,value:z,onChange:function(e,n){return D(n)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,V.Z)((0,V.Z)({required:!0},e),{},{label:"Academic Year",variant:"filled",fullWidth:!0,size:"small",error:Boolean(r.academicYear&&n.academicYear),helperText:n.academicYear}))}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(X.Z,{disablePortal:!0,options:p,value:Y,onChange:function(e,n){return q(n)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,V.Z)((0,V.Z)({required:!0},e),{},{label:"Programme",variant:"filled",fullWidth:!0,size:"small",error:Boolean(r.programme&&n.programme),helperText:n.programme}))}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(X.Z,{disablePortal:!0,options:v,value:re,onChange:function(e,n){return ae(n)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,V.Z)((0,V.Z)({required:!0},e),{},{label:"Level",variant:"filled",fullWidth:!0,size:"small",error:Boolean(r.level&&n.level),helperText:n.level}))}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(X.Z,{disablePortal:!0,options:b,value:E,onChange:function(e,n){return T(n)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,V.Z)((0,V.Z)({required:!0},e),{},{variant:"filled",label:"Semester",fullWidth:!0,size:"small",error:Boolean(r.semester&&n.semester),helperText:n.semester}))}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(X.Z,{disablePortal:!0,options:I,value:ue,isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return xe(n)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,V.Z)((0,V.Z)({required:!0},e),{},{variant:"filled",label:"Course",fullWidth:!0,size:"small",error:Boolean(r.courses&&n.courses),helperText:n.courses}))}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(K.Z,{required:!0,variant:"filled",label:"Credit Hours",fullWidth:!0,size:"small",type:"number",value:je,onChange:function(e){return pe(e.currentTarget.value)}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(l.Z,{variant:"contained",disabled:null===ue||Boolean(null===je||0===je),onClick:ke,children:"Add Course"})})]}),(0,Z.jsx)(m.Z,{children:"2.Selected Courses"}),(0,Z.jsx)(y.Z,{}),(0,Z.jsx)(h.Z,{direction:"row",spacing:2,paddingY:2,children:Ze.map((function(e,n){return(0,Z.jsx)(te,{course:e.course,hrs:e.creditHours,handleRemove:Re},n)}))})]}),(0,Z.jsxs)($.Z,{children:[(0,Z.jsx)(G.Z,{loading:s,variant:"contained",onClick:t,children:"Register Courses"}),(0,Z.jsx)(l.Z,{color:"secondary",onClick:function(){return o(!1)},children:"Cancel"})]})]})}})]})};var de=function(){var e=(0,i.useState)(!1),n=(0,s.Z)(e,2),r=n[0],t=n[1],o=(0,i.useContext)(N.D).customState;return(0,Z.jsxs)("section",{children:[(0,Z.jsxs)(h.Z,{paddingBottom:1,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,Z.jsx)(m.Z,{children:"Registered Courses"}),"administrator"===o.user.role&&(0,Z.jsx)(l.Z,{variant:"contained",color:"secondary",startIcon:(0,Z.jsx)(_,{}),onClick:function(){return t(!0)},children:"Register New Course"})]}),(0,Z.jsx)(y.Z,{}),(0,Z.jsx)(q,{}),(0,Z.jsx)(ae,{open:r,setOpen:t})]})};function ce(){var e=(0,i.useContext)(N.D),n=e.customState,r=e.customDispatch,t=(0,i.useState)("1"),u=(0,s.Z)(t,2),x=u[0],h=u[1],m=(0,i.useState)(null===n||void 0===n?void 0:n.currentStudentIndexNumber),j=(0,s.Z)(m,2),p=j[0],f=j[1];(0,i.useEffect)((function(){var e=localStorage.getItem("indexNumber");null!==e&&f(e)}),[]);var v=(0,B.useQuery)(["studentInfo",p],(function(){return(0,A.u6)(p)}),{enabled:!!p,onSuccess:function(e){r({type:"studentInfo",payload:e})}}),b=(0,B.useQuery)(["studentRecord",p],(function(){return(0,M.Sg)(p)}),{enabled:!!p,onSuccess:function(e){r({type:"studentRecord",payload:e})}});return(0,B.useQuery)(["studentCourse",p],(function(){return(0,le.BR)(p)}),{enabled:!!p,onSuccess:function(e){r({type:"studentCourse",payload:e})}}),(0,Z.jsx)("section",{className:"-container",children:(0,Z.jsxs)(T.Z,{children:["student"!==n.user.role&&(0,Z.jsx)(D.rU,{to:"/info/student",children:(0,Z.jsx)(l.Z,{variant:"contained",color:"secondary",startIcon:(0,Z.jsx)(H,{}),children:"Go Back"})}),(0,Z.jsxs)(a.ZP,{value:x,children:[(0,Z.jsxs)(d.Z,{onChange:function(e,n){return h(n)},"aria-label":"Student Information",centered:!0,children:[(0,Z.jsx)(o.Z,{value:"1",label:"Personal Information",icon:(0,Z.jsx)(L,{}),iconPosition:"start"}),(0,Z.jsx)(o.Z,{value:"2",label:"Registration",icon:(0,Z.jsx)(E,{}),iconPosition:"start"}),(0,Z.jsx)(o.Z,{value:"3",label:"Results",icon:(0,Z.jsx)(E,{}),iconPosition:"start"})]}),(0,Z.jsx)(c.Z,{value:"1",children:(0,Z.jsx)(g,{studentData:v.data})}),(0,Z.jsx)(c.Z,{value:"2",children:(0,Z.jsx)(de,{})}),(0,Z.jsx)(c.Z,{value:"3",children:(0,Z.jsx)(z,{studentResult:b.data?b.data:[]})})]})]})})}var ue=i.memo(ce)},38820:function(e,n,r){var t=r(74223),s=r(80184);n.Z=(0,t.Z)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")}}]);
//# sourceMappingURL=152.02d6b567.chunk.js.map