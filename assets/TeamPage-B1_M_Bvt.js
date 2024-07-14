import{v as B,r,j as t,M as y,k as E,o as g,P as k,h as x,f as j,B as D}from"./index-BTjrKWUg.js";import{u as A}from"./useSearch-feGYTenm.js";import{M as T,T as w}from"./index-D6y65vRu.js";import{a as z,I as F,u as I,M as S,P as V}from"./transformToInputDateType-Q6j9lJDJ.js";import{M as O,u as N,Q as P,m as b}from"./index-B-c8I1OG.js";import{T as U}from"./index-CixvWhUE.js";import{E as Q}from"./index-B788h3a4.js";const H=({changedValue:e,className:l,onClose:o})=>{const{handleSubmit:a,reset:m,control:i}=B({mode:"onChange"}),{onSubmitHandler:n,onCloseHandler:c}=z({onClose:o,reset:m}),h=r.useCallback(()=>{},[]);return t.jsx(T,{changedValue:e,className:l,noCross:!0,onSubmit:h,onClose:c,children:t.jsx("section",{className:"modalWrapper",children:t.jsxs("form",{onSubmit:a(n),children:[t.jsx(w,{className:"modalTitle",children:"Add new user"}),t.jsx(F,{name:"email",control:i,label:"Email",autoComplete:"email",rules:{required:"Email is required",pattern:{value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,message:"Invalid email address"}},placeholder:"example@gmail.com",type:"email"}),t.jsx(O,{onSubmit:h,onClose:c})]})})})},Z="_table_1plfw_1",L="_thead_1plfw_7",R="_tbody_1plfw_16",q="_tr_1plfw_21",W="_th_1plfw_7",G="_td_1plfw_60",J="_capitalize_1plfw_78",K="_title_1plfw_98",X="_avatar_1plfw_103",Y="_team_1plfw_113",tt="_info_1plfw_119",et="_status_1plfw_125",st="_actions_1plfw_133",at="_editBtn_1plfw_139",lt="_deleteBtn_1plfw_150",d={table:Z,thead:L,tbody:R,tr:q,th:W,td:G,capitalize:J,title:K,avatar:X,team:Y,info:tt,status:et,actions:st,editBtn:at,deleteBtn:lt},nt="_table_1plfw_1",ot="_thead_1plfw_7",it="_tbody_1plfw_16",ct="_tr_1plfw_21",dt="_th_1plfw_7",rt="_td_1plfw_60",mt="_capitalize_1plfw_78",_t="_title_1plfw_98",pt="_avatar_1plfw_103",ht="_team_1plfw_113",ft="_info_1plfw_119",ut="_status_1plfw_125",xt="_actions_1plfw_133",jt="_editBtn_1plfw_139",bt="_deleteBtn_1plfw_150",s={table:nt,thead:ot,tbody:it,tr:ct,th:dt,td:rt,capitalize:mt,title:_t,avatar:pt,team:ht,info:ft,status:ut,actions:xt,editBtn:jt,deleteBtn:bt},wt=({user:e})=>{const{isEditModalOpen:l,closeEditModal:o,isQuestionModalOpen:a,closeQuestionModal:m,openQuestionModal:i,openEditModal:n,handleToggle:c,isOpened:h,isClosing:C,handleClose:f}=I({task:e}),{isDesktop:$}=N(),M=r.useMemo(()=>[[{icon:{Icon:y,color:"#000"},title:"Edit",permission:!1,onClick:n}],[{icon:{Icon:E,color:"red"},title:"Delete",permission:!1,onClick:i}]],[n,i]);return t.jsxs("tr",{className:s.tr,children:[t.jsx("td",{className:s.td,children:t.jsxs("div",{className:s.team,children:[t.jsx(U,{...e,className:s.avatar,avatarClassName:s.avatar,infoClassName:s.info,side:"right",team:[e]}),t.jsx("p",{className:s.name,children:e.name})]})}),$?t.jsxs(t.Fragment,{children:[t.jsx("td",{className:s.td,children:t.jsx("p",{children:e.role})}),t.jsx("td",{className:s.td,children:t.jsx("p",{children:e.email})}),t.jsx("td",{className:s.td,children:t.jsx("div",{style:{backgroundColor:e.isActive?"#BFDBFE":"#FEF3C7",color:e.isActive?"#1D4ED8":"#000"},className:s.status,children:t.jsx("p",{children:e!=null&&e.isActive?"Active":"Disabled"})})}),t.jsx("td",{className:s.td,children:t.jsx("p",{children:g(new Date(e.createdAt))})}),t.jsxs("td",{className:`${s.actions} ${s.td} `,children:[t.jsx("button",{onClick:()=>n(e),className:s.editBtn,children:"Edit"}),t.jsx("button",{onClick:()=>i(e),className:s.deleteBtn,children:"Delete"})]})]}):t.jsxs("td",{children:[t.jsx(S,{onClick:c}),h&&t.jsx(k,{className:`${s.popup}`,isClosing:C,handleClose:f,children:M.map(u=>u.map((_,v)=>t.jsx(V,{disabled:_.permission,className:v+1===u.length?s.divider:"",icon:_.icon,title:_.title,handleClose:f,onClick:_.onClick},_.title)))})]}),l&&t.jsx(Q,{changedValue:l,onClose:o,user:e}),a&&t.jsx(P,{changedValue:a,onClose:m,user:e,type:"delete",text:"Are you sure you want to delete current user?",submitButtonText:"Delete"})]},e._id)},Nt=({users:e,titles:l})=>{const{isDesktop:o}=N();return t.jsxs("table",{className:d.table,children:[t.jsx("thead",{className:d.thead,children:t.jsx("tr",{className:d.tr,children:o?l.map(a=>t.jsx("th",{className:`${d.th}`,children:a},a)):t.jsx("th",{className:`${d.th}`,children:"Full name"})})}),t.jsx("tbody",{className:d.tbody,children:e.map(a=>t.jsx(wt,{user:a},a._id))})]})},Ct="_listView_ffb0d_1",$t="_notEmpty_ffb0d_11",Mt="_header_ffb0d_16",vt="_button_ffb0d_25",p={listView:Ct,notEmpty:$t,header:Mt,button:vt},Bt=["Full Name","Role","Email","Status","Created at"],yt=()=>{const e=A(),[l,o]=r.useState(!1),a=r.useMemo(()=>e?x.users.filter(n=>{var c;return(c=n==null?void 0:n.name)==null?void 0:c.toLowerCase().includes(e==null?void 0:e.toLowerCase())}):x.users,[e]),m=r.useMemo(()=>({users:a,titles:Bt}),[a]),i=r.useCallback(()=>{o(!0)},[]);return t.jsxs("section",{className:p.members,children:[t.jsxs(b.header,{className:p.header,initial:"hidden",animate:"visible",variants:j,children:[t.jsx(w,{children:"Team members"}),t.jsx(D,{onClick:i,className:p.button,children:"+ Add new user"}),l&&t.jsx(H,{changedValue:l,onClose:()=>o(!1)})]}),t.jsx(b.section,{initial:"hidden",animate:"visible",variants:j,className:`${p.listView} ${a.length>0?p.notEmpty:""}`,children:a.length>0?t.jsx(Nt,{...m}):"No users found"})]})},Ft=()=>t.jsx("section",{className:"team",children:t.jsx(yt,{})});export{Ft as default};
