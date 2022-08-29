"use strict";(self.webpackChunkresults_system=self.webpackChunkresults_system||[]).push([[558],{26558:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(1413),s=t(93433),l=t(74165),i=t(15861),a=t(29439),u=t(72791),c=t(12258),o=t(64554),d=t(4567),h=t(53767),f=t(93006),x=t(97808),Z=t(94721),m=t(60220),p=t(81153),j=t(46314),v=t(5849),b=t(63515),g=t(54270),S=t(74223),y=t(80184),C=(0,S.Z)((0,y.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"SearchSharp"),w=t(763),R=t.n(w),k=t(16871),I=t(91933),P=t(92506),E=t(76385),W=t(61820);var z=function(e){var n=e.result,t=e.handleRemoveResult;return(0,y.jsxs)("tr",{style:{textAlign:"center"},children:[(0,y.jsx)("td",{children:n.course.id}),(0,y.jsx)("td",{children:n.course.label}),(0,y.jsx)("td",{children:n.score}),(0,y.jsx)("td",{children:n.grade}),(0,y.jsx)("td",{children:(0,y.jsx)(v.Z,{onClick:function(){return t(n.course.id)},children:"Remove"})})]})};var Y=function(e){var n=e.results,t=e.setResults,r=function(e){var r=n.filter((function(n){return n.course.id!==e}));t(r)};return(0,y.jsx)(h.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsxs)("table",{width:"100%",children:[(0,y.jsx)("thead",{style:{color:"#fff",backgroundColor:"#5aa7a7"},children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{children:"Code"}),(0,y.jsx)("th",{children:"Course"}),(0,y.jsx)("th",{children:"Score"}),(0,y.jsx)("th",{children:"Grade"}),(0,y.jsx)("th",{children:"Action"})]})}),(0,y.jsx)("tbody",{children:n.map((function(e,n){return(0,y.jsx)(z,{result:e,handleRemoveResult:r},n)}))})]})})},A=t(90110),N=t(85175),T=t(81724),q=["100","200","300","400"],_=["1","2"],L=["2021","2022","2023"];var B=function(){var e=(0,k.TH)().state,n=(0,u.useTransition)(),t=(0,a.Z)(n,2),S=(t[0],t[1]),w=(0,u.useState)(""),z=(0,a.Z)(w,2),B=z[0],M=z[1],D=(0,u.useState)(""),F=(0,a.Z)(D,2),H=F[0],O=F[1],Q=(0,u.useState)(""),V=(0,a.Z)(Q,2),G=V[0],J=V[1],K=(0,u.useState)(null),U=(0,a.Z)(K,2),X=U[0],$=U[1],ee=(0,u.useState)(""),ne=(0,a.Z)(ee,2),te=ne[0],re=ne[1],se=(0,u.useState)(""),le=(0,a.Z)(se,2),ie=le[0],ae=le[1],ue=(0,u.useState)(null),ce=(0,a.Z)(ue,2),oe=ce[0],de=ce[1],he=(0,u.useState)(null),fe=(0,a.Z)(he,2),xe=fe[0],Ze=fe[1],me=(0,u.useState)(null),pe=(0,a.Z)(me,2),je=pe[0],ve=pe[1],be=(0,u.useState)(0),ge=(0,a.Z)(be,2),Se=ge[0],ye=ge[1],Ce=(0,u.useState)(""),we=(0,a.Z)(Ce,2),Re=we[0],ke=we[1],Ie=(0,u.useState)([]),Pe=(0,a.Z)(Ie,2),Ee=Pe[0],We=Pe[1],ze=(0,u.useState)([]),Ye=(0,a.Z)(ze,2),Ae=Ye[0],Ne=Ye[1],Te=(0,u.useState)("none"),qe=(0,a.Z)(Te,2),_e=qe[0],Le=qe[1];(0,u.useEffect)((function(){var e=function(e){var n=window.scrollY;Le(n>=220?"block":"none")};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),(0,u.useEffect)((function(){R().isEmpty(e)||(J(e.student.fullname),$(e.student.profile),re(e.student.indexNumber))}),[e]),(0,I.useQuery)(["registeredCourses",te,oe,xe],(0,i.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.BR)(te));case 1:case"end":return e.stop()}}),e)}))),{enabled:!!te,onSuccess:function(e){var n=[],t=e;oe&&(t=t.filter((function(e){return e.level===oe}))),xe&&(t=t.filter((function(e){return e.semester===Number(xe)})));var r=t.map((function(e){return(0,s.Z)(e.courses)}));R().flatMap(r).map((function(e){return n.push({id:e.course.id,label:e.course.label})})),Ne(n)}});var Be=(0,I.useQuery)(["student"],A.uH,{onError:function(e){alert("Error occured while fetching data")}}),Me=(0,u.useCallback)((function(){M("");var e={course:je,score:Number(Se),grade:Re};Ee.find((function(n){return n.course.id===e.course.id}))?M("Course already exists.Please remove before!"):We([].concat((0,s.Z)(Ee),[e]))}),[je,Re,Se,Ee]);(0,u.useEffect)((function(){var e=Number(Se),n="";e>79&&e<=100&&(n="A"),e>74&&e<80&&(n="B+"),e>69&&e<75&&(n="B"),e>64&&e<70&&(n="C+"),e>59&&e<65&&(n="C"),e>54&&e<60&&(n="D+"),e>49&&e<55&&(n="D"),e>44&&e<50&&(n="E"),e<45&&(n="F"),ke(n)}),[Se]);var De={indexNumber:te,year:ie,level:oe,semester:xe,results:Ee},Fe=((0,T.Ry)().shape({year:(0,T.Z_)().trim().required().nullable(!0),level:(0,T.Z_)().trim().required().nullable(!0),semester:(0,T.Z_)().trim().required().nullable(!0),course:(0,T.Z_)().trim().required().nullable(!0),score:(0,T.Z_)().trim().required().nullable(!0)}),(0,I.useMutation)(E.f6)),He=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(n,t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSubmitting(!0),Fe.mutateAsync(n,{onSettled:function(){t.setSubmitting(!1)},onSuccess:function(e){alert("Data Saved")}});case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Oe=function(e){O(e.currentTarget.value);var n=e.currentTarget.value;if(""===n||0===n.length)return J(""),re(""),void $(null);S((function(){var e=Be.data.filter((function(e){return e.indexNumber.lastIndexOf(n)>-1}));if(0===e.length)return J(""),re(""),void $(null);J(e[0].fullname),re(e[0].indexNumber),$(e[0].profile)}))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g.q,{children:(0,y.jsx)("title",{children:"Results System | Results Entry"})}),(0,y.jsx)("section",{className:"data-entry-container",children:(0,y.jsx)(P.J9,{initialValues:De,onSubmit:He,enableReinitialize:!0,children:function(e){var n=e.handleSubmit,t=e.isSubmitting,s=e.errors,l=(e.values,e.touched);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.Z,{sx:{display:_e,width:"100%",height:80,backgroundColor:"#fff",transition:"display 500ms ease-in-out",boxShadow:"0 1px 3px rgba(0,0,0,0.15)",position:"sticky",top:160,zIndex:19999,padding:1},children:(0,y.jsx)(c.Z,{disabled:0===Ee.length,variant:"contained",loading:t,onClick:n,children:"Save Results"})}),(0,y.jsxs)(W.Z,{children:[(0,y.jsx)(d.Z,{variant:"h4",children:"Result Entry"}),(0,y.jsxs)(h.Z,{spacing:3,paddingY:3,children:[(0,y.jsx)(f.Z,{fullWidth:!0,placeholder:"Search for Student",inputMode:"search",type:"search",value:H,onChange:Oe,InputProps:{endAdornment:(0,y.jsx)(x.Z,{position:"end",children:(0,y.jsx)(C,{})})}}),(0,y.jsxs)(o.Z,{children:[(0,y.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingY:1,gap:1},children:[(0,y.jsx)(d.Z,{children:"Personal Information"}),(0,y.jsx)(c.Z,{disabled:0===Ee.length,variant:"contained",onClick:n,children:"Save Results"})]}),(0,y.jsx)(Z.Z,{}),(0,y.jsxs)(h.Z,{paddingY:1,direction:"row",spacing:3,children:[(0,y.jsx)(m.Z,{src:null===X||""===X||void 0===X?null:"".concat("http://localhost:8000","/images/").concat(X),sx:{width:60,height:60}}),(0,y.jsxs)(h.Z,{children:[(0,y.jsx)(d.Z,{variant:"h6",color:"slateblue",children:G}),(0,y.jsx)(d.Z,{variant:"body",children:te})]})]})]}),(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(d.Z,{paddingY:1,children:"Academic Information"}),(0,y.jsx)(Z.Z,{}),(0,y.jsxs)(p.ZP,{container:!0,sx:{display:"flex",justifyContent:{xs:"center",md:"space-between"},alignItems:"center",paddingY:2,gap:1},children:[(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(j.Z,{disablePortal:!0,options:L,freeSolo:!0,value:ie,onChange:function(e,n){return ae(n)},sx:{minWidth:150,width:300},renderInput:function(e){return(0,y.jsx)(f.Z,(0,r.Z)((0,r.Z)({label:"Academic Year",variant:"filled"},e),{},{id:"year",size:"small",placeholder:"Academic Year",fullWidth:!0,error:Boolean(l.year&&s.year),helperText:l.year&&s.year&&s.year}))}})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(j.Z,{disablePortal:!0,options:q,value:oe,onChange:function(e,n){return de(n)},sx:{minWidth:150,width:300},renderInput:function(e){return(0,y.jsx)(f.Z,(0,r.Z)((0,r.Z)({label:"Level",variant:"filled"},e),{},{id:"level",size:"small",fullWidth:!0,placeholder:"Level"}))}})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(j.Z,{disablePortal:!0,options:_,value:xe,onChange:function(e,n){return Ze(n)},sx:{minWidth:150,width:300},renderInput:function(e){return(0,y.jsx)(f.Z,(0,r.Z)((0,r.Z)({label:"Semester",variant:"filled"},e),{},{id:"semester",size:"small",placeholder:"Semester",fullWidth:!0}))}})})]})]}),(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(d.Z,{paddingY:1,children:"Results Information"}),(0,y.jsx)(Z.Z,{}),(0,y.jsxs)(p.ZP,{container:!0,sx:{display:"flex",justifyContent:{xs:"center",md:"flex-start"},alignItems:"center",paddingY:2,gap:1},children:[(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(j.Z,{disablePortal:!0,options:Ae,value:je,isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return ve(n)},sx:{minWidth:150,width:300},renderInput:function(e){return(0,y.jsx)(f.Z,(0,r.Z)((0,r.Z)({variant:"filled",label:"Course"},e),{},{id:"course",size:"small",fullWidth:!0,placeholder:"Course",helperText:0===Ae.length?"No courses available":"".concat(Ae.length," course(s) available")}))}})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(f.Z,{label:"Score",variant:"filled",id:"score",size:"small",type:"number",fullWidth:!0,placeholder:"Score",value:Se,sx:{minWidth:150,width:300},onChange:function(e){return ye(e.currentTarget.value)},helperText:"Scores should be from 0-100"})})]}),(0,y.jsx)(v.Z,{variant:"contained",disabled:""===je||null===je,size:"large",sx:{minWidth:200,color:"#fff"},onClick:Me,children:"Add Results"})]})]}),B&&(0,y.jsx)(b.Z,{severity:"error",onClose:function(){return M("")},children:B}),(0,y.jsx)(Y,{results:Ee,setResults:We})]})]})}})})]})}}}]);
//# sourceMappingURL=558.0d34b01f.chunk.js.map