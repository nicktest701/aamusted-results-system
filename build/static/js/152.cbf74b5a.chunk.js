"use strict";(self.webpackChunkresults_system=self.webpackChunkresults_system||[]).push([[152],{35621:function(e,n,r){r.d(n,{eH:function(){return c},vu:function(){return d},zk:function(){return a}});var t=r(74165),s=r(15861),i=r(74569),l=r.n(i),o="http://localhost:8000",a=(l().create({baseURL:"".concat(o,"/assigned_course"),timeout:1e4,headers:{"Content-Type":"application/json"}}),function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({baseURL:"".concat(o,"/assigned_course/").concat(n),method:"GET"});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()),d=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({baseURL:"".concat(o,"/assigned_course/all/").concat(n),method:"GET"});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({baseURL:"".concat(o,"/assigned_course"),method:"POST",data:n});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},40077:function(e,n,r){r.d(n,{v:function(){return t}});var t=function(e){switch(e){case"A":return 12;case"B+":return 10.5;case"B":return 9;case"C+":return 7.5;case"C":return 6;case"D+":return 4.5;case"D":return 3;case"E":return 1.5;case"F":return 0;default:return""}}},5152:function(e,n,r){r.r(n),r.d(n,{default:function(){return ce}});var t=r(29439),s=r(72791),i=r(5849),l=r(61474),o=r(83449),a=r(47283),d=r(2249),c=r(64554),u=r(60220),x=r(53767),h=r(4567),j=r(90977),m=r(17133),p=r(4841),f=r(38820),v=r(80184);var Z=function(e){var n=e.studentData;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(c.Z,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},gap:5,paddingTop:5},children:[(0,v.jsxs)(c.Z,{sx:{position:"relative"},children:[(0,v.jsx)(u.Z,{src:""===(null===n||void 0===n?void 0:n.profile)||void 0===(null===n||void 0===n?void 0:n.profile)?null:"".concat("http://localhost:8000","/images/").concat(null===n||void 0===n?void 0:n.profile),alt:"profile",sx:{maxWidth:150,width:150,height:150}}),(0,v.jsxs)(x.Z,{alignItems:"center",justifyContent:"center",paddingBottom:3,children:[(0,v.jsx)(h.Z,{variant:"h6",children:null===n||void 0===n?void 0:n.fullname}),(0,v.jsx)(h.Z,{children:null===n||void 0===n?void 0:n.indexNumber})]}),(0,v.jsx)(j.Z,{sx:{position:"absolute",top:-5,right:-5,backgroundColor:"primary.main"},children:(0,v.jsx)(m.Z,{htmlFor:"profile ",children:(0,v.jsx)(f.Z,{sx:{color:"#fff"}})})}),(0,v.jsx)("input",{type:"file",id:"profile",hidden:!0})]}),(0,v.jsx)(p.Z,{sx:{padding:3,borderTop:"2px solid #5aa7a7"},children:(0,v.jsxs)("table",{width:"100%",children:[(0,v.jsx)("th",{colSpan:"2",style:{textAlign:"left",padding:"8px 0"},children:(0,v.jsx)(h.Z,{variant:"h6",color:"primary",children:"Personal Info."})}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Index Number"}),(0,v.jsx)("td",{children:null===n||void 0===n?void 0:n.indexNumber})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Full Name"}),(0,v.jsx)("td",{children:null===n||void 0===n?void 0:n.fullname})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Date of Birth"}),(0,v.jsx)("td",{children:new Date(null===n||void 0===n?void 0:n.dob).toLocaleDateString()})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Gender"}),(0,v.jsx)("td",{children:null===n||void 0===n?void 0:n.gender})]}),(0,v.jsx)("th",{colSpan:"2",style:{textAlign:"left",padding:"16px 0"},children:(0,v.jsx)(h.Z,{variant:"h6",color:"primary",children:"Additional Info"})}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Department"}),(0,v.jsx)("td",{children:null===n||void 0===n?void 0:n.department})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Programme"}),(0,v.jsx)("td",{children:null===n||void 0===n?void 0:n.programme})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Current Level"}),(0,v.jsx)("td",{children:null===n||void 0===n?void 0:n.level})]})]})})]})})},g=r(13967),b=r(94721),y=r(74223),C=(0,y.Z)((0,v.jsx)("path",{d:"M14 2H4v20h16V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"DescriptionSharp"),S=r(16871),I=r(40077),w=r(763),P=r.n(w);function k(e){var n=e.studentResult,r=(e.studentId,(0,g.Z)().palette),t=(0,S.s0)(),l=[],o=[];var a=null===n||void 0===n?void 0:n.map((function(e,n){return(0,v.jsxs)(s.Fragment,{children:[(0,v.jsx)("div",{children:(0,v.jsxs)(c.Z,{sx:{backgroundColor:r.primary.main,color:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",padding:1},children:[(0,v.jsxs)("p",{style:{fontSize:"12px"},children:[e.year," ACADEMIC YEAR"]}),(0,v.jsxs)("p",{style:{fontSize:"12px"},children:["LEVEL ",e.level]}),(0,v.jsxs)("p",{style:{fontSize:"12px"},children:[e.semester," SEMESTER"]})]})}),(0,v.jsxs)("table",{cellPadding:"10px",children:[(0,v.jsx)("thead",{style:{backgroundColor:r.secondary.main,color:"#fff",textAlign:"left"},children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Code"}),(0,v.jsx)("th",{children:"Course"}),(0,v.jsx)("th",{children:"Credit Hours"}),(0,v.jsx)("th",{children:"Score"}),(0,v.jsx)("th",{children:"Grade"}),(0,v.jsx)("th",{children:"Grade Point"})]})}),(0,v.jsx)("tbody",{style:{backgroundColor:"whitesmoke"},children:e.results.map((function(e,n){var r=(0,I.v)(e.grade);return l.push(e.creditHours),o.push(r),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:e.course.id}),(0,v.jsx)("td",{children:e.course.label}),(0,v.jsx)("td",{children:e.creditHours}),(0,v.jsx)("td",{children:e.score}),(0,v.jsx)("td",{children:e.grade}),(0,v.jsx)("td",{children:(0,I.v)(e.grade)})]},e.course.id)}))}),(0,v.jsx)("tfoot",{style:{paddingBottom:"200px"},children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{}),(0,v.jsx)("td",{}),(0,v.jsx)("td",{}),(0,v.jsx)("td",{}),(0,v.jsx)("td",{}),(0,v.jsxs)("td",{style:{backgroundColor:"#5aa7a7",color:"#fff"},children:["GPA-",(P().sum(o)/P().sum(l)).toFixed(2)]})]})})]})]},n)}));return(0,v.jsxs)(c.Z,{children:[(0,v.jsxs)(x.Z,{paddingBottom:1,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,v.jsx)(h.Z,{paddingBottom:1,children:"Academic Records"}),(0,v.jsx)(i.Z,{variant:"contained",color:"secondary",disabled:0===n.length,onClick:function(){t("/info/preview",{replace:!0})},children:"Preview"})]}),(0,v.jsx)(b.Z,{}),(0,v.jsx)(x.Z,{paddingY:5,rowGap:1,children:0===n.length?(0,v.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingY:8,gap:2},children:[(0,v.jsx)(C,{sx:{width:72,height:72}}),(0,v.jsx)(h.Z,{variant:"h4",children:"No Records Available"})]}):a})]})}var R=s.memo(k),z=r(91933),B=r(43504),D=(0,y.Z)((0,v.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackSharp"),L=(0,y.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonSharp"),E=(0,y.Z)((0,v.jsx)("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"}),"Report"),H=r(61820),T=r(90110),A=r(76385),M=r(99873),N=[{id:1,indexNumber:"501253066",year:2021,programme:"Management",level:200,semester:1,courses:[{course:{id:"CIT214",label:"Biology"},creditHours:3},{course:{id:"CIT234",label:"Biology"},creditHours:3}]},{id:2,indexNumber:"501253066",year:2021,programme:"Management",level:200,semester:2,courses:[{course:{id:"CIT456",label:"Zoo"},creditHours:3},{course:{id:"CIT111",label:"Latin"},creditHours:3}]}];var Y=function(){var e,n=(0,g.Z)().palette,r=(0,s.useContext)(M.D).customState,t=null===r||void 0===r||null===(e=r.studentCourse)||void 0===e?void 0:e.map((function(e,r){return(0,v.jsxs)(s.Fragment,{children:[(0,v.jsx)("div",{children:(0,v.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1},children:[(0,v.jsxs)("p",{children:["LEVEL ",e.level]}),(0,v.jsxs)("p",{children:[e.semester," SEMESTER"]})]})}),(0,v.jsxs)("table",{cellPadding:"10px",children:[(0,v.jsx)("thead",{style:{backgroundColor:n.secondary.main,color:"#fff",textAlign:"left"},children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Code"}),(0,v.jsx)("th",{children:"Course"}),(0,v.jsx)("th",{children:"Credit Hours"}),(0,v.jsx)("th",{children:"Action"})]})}),(0,v.jsx)("tbody",{style:{backgroundColor:"whitesmoke"},children:e.courses.map((function(e,r){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{width:"20%",children:e.course.id}),(0,v.jsxs)("td",{width:"50%",children:[" ",e.course.label]}),(0,v.jsx)("td",{width:"15%",children:e.creditHours}),(0,v.jsx)("td",{width:"15%",children:(0,v.jsx)("button",{style:{backgroundColor:n.primary.main,color:"#fff",outline:"none",border:"none",padding:"5px 10px"},children:"Remove"})})]},r)}))}),(0,v.jsx)("tfoot",{style:{paddingBottom:"200px"},children:(0,v.jsx)("tr",{children:(0,v.jsx)("td",{children:"End"})})})]})]},e._id)}));return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(c.Z,{sx:{margin:"auto",marginTop:2},children:(0,v.jsx)(x.Z,{paddingY:3,rowGap:1,children:0===N.length?(0,v.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingY:8,gap:2},children:[(0,v.jsx)(C,{sx:{width:72,height:72}}),(0,v.jsx)(h.Z,{variant:"h4",children:"No Registered Courses"})]}):t})})})},q=(0,y.Z)((0,v.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddSharp"),_=r(1413),V=r(93433),F=r(12258),G=r(5574),W=r(65661),Q=r(4899),U=r(63515),O=r(81153),J=r(46314),X=r(93006),K=r(77386),$=r(92506),ee=r(85771),ne=function(e){var n=e.course,r=e.handleRemove;return(0,v.jsx)(ee.Z,{color:"primary",avatar:(0,v.jsx)(u.Z,{children:"3"}),sx:{color:"#fff"},label:n.label,onDelete:function(){return r(n.id)}})},re=s.memo(ne),te=r(99544),se=r(81724),ie=r(85175),le=r(35621);var oe=function(e){var n,r,l=e.open,o=e.setOpen,a=(0,z.useQueryClient)(),d=(0,s.useContext)(M.D).customState,c=(0,s.useState)(["2021","2022"]),u=(0,t.Z)(c,1)[0],m=(0,s.useState)([null===d||void 0===d||null===(n=d.studentInfo)||void 0===n?void 0:n.programme]),p=(0,t.Z)(m,1)[0],f=(0,s.useState)(["100","200","300","400"]),Z=(0,t.Z)(f,1)[0],g=(0,s.useState)(["1","2"]),y=(0,t.Z)(g,1)[0],C=(0,s.useState)([]),S=(0,t.Z)(C,2),I=S[0],w=S[1],k=(0,s.useState)(null),R=(0,t.Z)(k,2),B=R[0],D=R[1],L=(0,s.useState)(null),E=(0,t.Z)(L,2),H=E[0],T=E[1],A=(0,s.useState)(null),N=(0,t.Z)(A,2),Y=N[0],q=N[1],ee=(0,s.useState)(null),ne=(0,t.Z)(ee,2),oe=ne[0],ae=ne[1],de=(0,s.useState)(null),ce=(0,t.Z)(de,2),ue=ce[0],xe=ce[1],he=(0,s.useState)(0),je=(0,t.Z)(he,2),me=je[0],pe=je[1],fe=(0,s.useState)([]),ve=(0,t.Z)(fe,2),Ze=ve[0],ge=ve[1],be=(0,s.useState)({severity:"",msg:""}),ye=(0,t.Z)(be,2),Ce=ye[0],Se=ye[1];(0,z.useQuery)(["allCoursesByProgramme",Y],(function(){return(0,le.vu)(Y)}),{enabled:!!Y,onSuccess:function(e){var n=e.map((function(e){return{id:e.course.id,label:e.course.label,professionalID:e.professionalID}}));w(n)}});var Ie={indexNumber:null===d||void 0===d||null===(r=d.studentInfo)||void 0===r?void 0:r.indexNumber,academicYear:B,programme:Y,level:oe,semester:H,courses:Ze},we=(0,se.Ry)().shape({academicYear:(0,se.Z_)().required().nullable(!0),semester:(0,se.Z_)().required().nullable(!0),programme:(0,se.Z_)().required().nullable(!0),level:(0,se.Z_)().required().nullable(!0),courses:(0,se.IX)().required().min(1,"Courses cannot be empty")}),Pe=(0,z.useMutation)(ie.rY),ke=(0,s.useCallback)((function(){Se({severity:"",msg:""}),Ze.find((function(e){return e.course.id===ue.id}))?Se({severity:"error",msg:"Course already exists"}):(Se({severity:"",msg:""}),ge([].concat((0,V.Z)(Ze),[{course:ue,creditHours:me}])))}),[Ze,ue,me]),Re=function(e){var n=Ze.filter((function(n){return n.course.id!==e}));ge(n)};return(0,v.jsxs)(G.Z,{open:l,onClose:function(){return o(!1)},fullWidth:!0,maxWidth:"md",children:[(0,v.jsxs)(W.Z,{display:"flex",justifyContent:"space-between",children:[(0,v.jsx)(h.Z,{children:"Course Registration"}),(0,v.jsx)(j.Z,{onClick:function(){return o(!1)},children:(0,v.jsx)(te.Z,{})})]}),(0,v.jsx)($.J9,{initialValues:Ie,onSubmit:function(e,n){Se({severity:"",msg:""}),P().isEmpty(e)?Se({severity:"info",msg:"Please select a course to register!!!"}):(n.setSubmitting(!0),Pe.mutateAsync(e,{onSettled:function(){a.invalidateQueries(["studentCourse"]),n.setSubmitting(!1)},onSuccess:function(e){Se({severity:"success",msg:"Course registration successfull"})}}))},enableReinitialize:!0,validationSchema:we,children:function(e){e.values;var n=e.errors,r=e.touched,t=e.handleSubmit,s=(e.handleChange,e.isSubmitting);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(Q.Z,{children:[Ce.msg&&(0,v.jsx)(U.Z,{severity:Ce.severity,onClose:function(){return Se({severity:"",msg:""})},children:Ce.msg}),(0,v.jsx)(h.Z,{children:"1.Academic Information"}),(0,v.jsx)(b.Z,{}),(0,v.jsxs)(O.ZP,{container:!0,spacing:3,paddingY:4,children:[(0,v.jsx)(O.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(J.Z,{disablePortal:!0,options:u,value:B,onChange:function(e,n){return D(n)},renderInput:function(e){return(0,v.jsx)(X.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{label:"Academic Year",variant:"filled",fullWidth:!0,size:"small",error:Boolean(r.academicYear&&n.academicYear),helperText:n.academicYear}))}})}),(0,v.jsx)(O.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(J.Z,{disablePortal:!0,options:p,value:Y,onChange:function(e,n){return q(n)},renderInput:function(e){return(0,v.jsx)(X.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{label:"Programme",variant:"filled",fullWidth:!0,size:"small",error:Boolean(r.programme&&n.programme),helperText:n.programme}))}})}),(0,v.jsx)(O.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(J.Z,{disablePortal:!0,options:Z,value:oe,onChange:function(e,n){return ae(n)},renderInput:function(e){return(0,v.jsx)(X.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{label:"Level",variant:"filled",fullWidth:!0,size:"small",error:Boolean(r.level&&n.level),helperText:n.level}))}})}),(0,v.jsx)(O.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(J.Z,{disablePortal:!0,options:y,value:H,onChange:function(e,n){return T(n)},renderInput:function(e){return(0,v.jsx)(X.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{variant:"filled",label:"Semester",fullWidth:!0,size:"small",error:Boolean(r.semester&&n.semester),helperText:n.semester}))}})}),(0,v.jsx)(O.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(J.Z,{disablePortal:!0,options:I,value:ue,isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return xe(n)},renderInput:function(e){return(0,v.jsx)(X.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{variant:"filled",label:"Course",fullWidth:!0,size:"small",error:Boolean(r.courses&&n.courses),helperText:n.courses}))}})}),(0,v.jsx)(O.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(X.Z,{required:!0,variant:"filled",label:"Credit Hours",fullWidth:!0,size:"small",type:"number",value:me,onChange:function(e){return pe(e.currentTarget.value)}})}),(0,v.jsx)(O.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(i.Z,{variant:"contained",disabled:null===ue||Boolean(null===me||0===me),onClick:ke,children:"Add Course"})})]}),(0,v.jsx)(h.Z,{children:"2.Selected Courses"}),(0,v.jsx)(b.Z,{}),(0,v.jsx)(x.Z,{direction:"row",spacing:2,paddingY:2,children:Ze.map((function(e,n){return(0,v.jsx)(re,{course:e.course,handleRemove:Re},n)}))})]}),(0,v.jsxs)(K.Z,{children:[(0,v.jsx)(F.Z,{loading:s,variant:"contained",onClick:t,children:"Register Courses"}),(0,v.jsx)(i.Z,{color:"secondary",onClick:function(){return o(!1)},children:"Cancel"})]})]})}})]})};var ae=function(){var e=(0,s.useState)(!1),n=(0,t.Z)(e,2),r=n[0],l=n[1],o=(0,s.useContext)(M.D).customState;return(0,v.jsxs)("section",{children:[(0,v.jsxs)(x.Z,{paddingBottom:1,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,v.jsx)(h.Z,{children:"Registered Courses"}),"administrator"===o.user.role&&(0,v.jsx)(i.Z,{variant:"contained",color:"secondary",startIcon:(0,v.jsx)(q,{}),onClick:function(){return l(!0)},children:"Register New Course"})]}),(0,v.jsx)(b.Z,{}),(0,v.jsx)(Y,{}),(0,v.jsx)(oe,{open:r,setOpen:l})]})};function de(){var e=(0,s.useContext)(M.D),n=e.customState,r=e.customDispatch,c=(0,s.useState)("1"),u=(0,t.Z)(c,2),x=u[0],h=u[1],j=(0,s.useState)(null===n||void 0===n?void 0:n.currentStudentIndexNumber),m=(0,t.Z)(j,2),p=m[0],f=m[1];(0,s.useEffect)((function(){var e=localStorage.getItem("indexNumber");null!==e&&f(e)}),[]);var g=(0,z.useQuery)(["studentInfo",p],(function(){return(0,T.u6)(p)}),{enabled:!!p,onSuccess:function(e){r({type:"studentInfo",payload:e})}}),b=(0,z.useQuery)(["studentRecord",p],(function(){return(0,A.Sg)(p)}),{enabled:!!p,onSuccess:function(e){r({type:"studentRecord",payload:e})}});return(0,z.useQuery)(["studentCourse",p],(function(){return(0,ie.BR)(p)}),{enabled:!!p,onSuccess:function(e){r({type:"studentCourse",payload:e})}}),(0,v.jsx)("section",{className:"-container",children:(0,v.jsxs)(H.Z,{children:["student"!==n.user.role&&(0,v.jsx)(B.rU,{to:"/info/student",children:(0,v.jsx)(i.Z,{variant:"contained",color:"secondary",startIcon:(0,v.jsx)(D,{}),children:"Go Back"})}),(0,v.jsxs)(o.ZP,{value:x,children:[(0,v.jsxs)(a.Z,{onChange:function(e,n){return h(n)},"aria-label":"Student Information",centered:!0,children:[(0,v.jsx)(l.Z,{value:"1",label:"Personal Information",icon:(0,v.jsx)(L,{}),iconPosition:"start"}),(0,v.jsx)(l.Z,{value:"2",label:"Registration",icon:(0,v.jsx)(E,{}),iconPosition:"start"}),(0,v.jsx)(l.Z,{value:"3",label:"Results",icon:(0,v.jsx)(E,{}),iconPosition:"start"})]}),(0,v.jsx)(d.Z,{value:"1",children:(0,v.jsx)(Z,{studentData:g.data})}),(0,v.jsx)(d.Z,{value:"2",children:(0,v.jsx)(ae,{})}),(0,v.jsx)(d.Z,{value:"3",children:(0,v.jsx)(R,{studentResult:b.data?b.data:[]})})]})]})})}var ce=s.memo(de)},38820:function(e,n,r){var t=r(74223),s=r(80184);n.Z=(0,t.Z)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")}}]);
//# sourceMappingURL=152.cbf74b5a.chunk.js.map