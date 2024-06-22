"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[462],{1571:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var i=t(885),r=t(2791),s=t(6151),a=t(4942),l=t(1413),o=t(7391),d=t(5289),c=t(7123),u=t(9157),h=t(1691),x=t(5661),Z=t(3400),m=t(7630),f=t(8870),j=t(2250),p=t(9823),v=t(1554),g=t(6624),S=t(986),b=t(8917),C=t(6030),E=t(6292),k=t(5471),w=t(890),y=t(184),_=Math.random().toString(36).substr(2,9),O=(0,m.ZP)(S.Z)((function(e){var n,t=e.theme;return n={height:10,borderRadius:5},(0,a.Z)(n,"&.".concat(b.Z.colorPrimary),{backgroundColor:t.palette.grey["light"===t.palette.mode?200:800]}),(0,a.Z)(n,"& .".concat(b.Z.bar),{borderRadius:5,backgroundColor:"light"===t.palette.mode?"#1a90ff":"#308fe8"}),n}));function P(e){return(0,y.jsxs)(f.Z,{sx:{position:"relative"},children:[(0,y.jsx)(v.Z,(0,l.Z)((0,l.Z)({variant:"determinate",sx:{color:function(e){return e.palette.grey["light"===e.palette.mode?200:800]}},size:40,thickness:4},e),{},{value:100})),(0,y.jsx)(v.Z,(0,l.Z)({variant:"indeterminate",disableShrink:!0,sx:(0,a.Z)({color:function(e){return"light"===e.palette.mode?"#1a90ff":"#308fe8"},animationDuration:"550ms",position:"absolute",left:0},"& .".concat(g.Z.circle),{strokeLinecap:"round"}),size:40,thickness:4},e))]})}var T=[{field:"email",headerName:"Email",width:200},{field:"status",headerName:"Status",renderCell:function(e){var n=e.row.status;return(0,y.jsx)(w.Z,{sx:{color:"Failed"===n?"red":"green"},children:n})}}];function A(e){var n=e.data,t=e.loading;return(0,y.jsx)("div",{style:{height:400,width:"100%"},children:(0,y.jsx)(j._$r,{loading:t,rows:n,columns:T,pageSize:5,rowsPerPageOptions:[5],getRowId:function(e){return null===e||void 0===e?void 0:e.email}})})}function R(e){var n=e.open,t=e.setOpen,a=e.inputValue,o=(0,C.I0)(),m=(0,C.v9)((function(e){return e.ui.emailSendLoader})),j=(0,C.v9)((function(e){return e.admin})).sentEmailData,g=(0,r.useState)({value:0,length:100}),S=(0,i.Z)(g,2),b=S[0],T=S[1],R=(0,r.useState)(!1),I=(0,i.Z)(R,2),D=I[0],W=I[1],L=(0,r.useState)(!1),F=(0,i.Z)(L,2),z=F[0],H=F[1],N=function(){return t(!1)},U=(0,r.useMemo)((function(){return Math.round(b.value/b.length*100)}),[b]);return(0,r.useEffect)((function(){var e=(0,E.ZP)({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://pragyarosystem.onrender.com/api/"}.URL);e.on("connect",(function(){W(!0)})),e.emit("connectInit",_),e.on("sendEmail",(function(e){T(e)}))}),[]),(0,y.jsx)("div",{children:(0,y.jsxs)(d.Z,{open:n,onClose:N,children:[(0,y.jsx)(x.Z,{children:(0,y.jsxs)(f.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",minWidth:"300px",children:[(0,y.jsx)(w.Z,{children:"Send Email To All Emails"}),(0,y.jsx)(Z.Z,{onClick:N,children:(0,y.jsx)(p.Z,{})})]})}),(0,y.jsx)(u.Z,{children:z?(0,y.jsx)(y.Fragment,{children:D?(0,y.jsxs)(f.Z,{sx:{flexGrow:1},children:[(0,y.jsxs)(f.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",children:[(0,y.jsxs)(w.Z,{children:[b.value,"/",b.length]}),(0,y.jsxs)(w.Z,{children:[U,"%"]})]}),(0,y.jsx)(O,{variant:"determinate",value:U}),(0,y.jsx)(A,{data:j,loading:m})]}):(0,y.jsx)(f.Z,{sx:{flexGrow:1},children:(0,y.jsx)(P,{})})}):(0,y.jsx)(h.Z,{children:"Email will be sent to all the email address present in database."})}),!z&&(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(s.Z,{onClick:N,children:"Cancel"}),(0,y.jsx)(s.Z,{type:"submit",onClick:function(){o((0,k.XW)((0,l.Z)((0,l.Z)({},a),{},{socketSessionId:_}))),H(!0)},endIcon:m&&(0,y.jsx)(v.Z,{size:"small"}),children:"Agree"})]})]})})}function I(e){var n=e.open,t=e.setOpen,Z=(0,r.useState)({subject:"",text:""}),m=(0,i.Z)(Z,2),f=m[0],j=m[1],p=(0,r.useState)(!1),v=(0,i.Z)(p,2),g=v[0],S=v[1],b=function(){return t(!1)},C=function(e){var n=e.target;j((0,l.Z)((0,l.Z)({},f),{},(0,a.Z)({},n.name,n.value)))},E=function(e){e.preventDefault(),S(!0)};return(0,y.jsxs)("div",{children:[g&&(0,y.jsx)(R,{open:g,setOpen:S,inputValue:f}),(0,y.jsxs)(d.Z,{open:n,onClose:b,children:[(0,y.jsx)(x.Z,{children:"Send Email To All Emails"}),(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{children:"Email will be sent to all the email address present in database."}),(0,y.jsxs)("form",{onSubmit:E,children:[(0,y.jsx)(o.Z,{autoFocus:!0,margin:"dense",id:"subject",label:"Subject",name:"subject",type:"text",fullWidth:!0,variant:"standard",onChange:C}),(0,y.jsx)(o.Z,{multiline:!0,margin:"dense",id:"text",name:"text",label:"Text",type:"text",fullWidth:!0,variant:"standard",onChange:C})]})]}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(s.Z,{onClick:b,children:"Cancel"}),(0,y.jsx)(s.Z,{type:"submit",onClick:E,children:"Send"})]})]})]})}var D=function(){var e=r.useState(!1),n=(0,i.Z)(e,2),t=n[0],a=n[1];return(0,y.jsxs)(f.Z,{textAlign:"center",minHeight:"calc(100vh - 450px)",children:[(0,y.jsx)(s.Z,{variant:"outlined",onClick:function(){return a(!0)},children:"Send Email to all users"}),t&&(0,y.jsx)(I,{open:t,setOpen:a})]})}}}]);
//# sourceMappingURL=462.f25c80f5.chunk.js.map