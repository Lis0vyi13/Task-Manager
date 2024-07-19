import{x as y,y as g,r,J as $,j as e,z as B,o as N,I as A,A as D,M as w,k as z,q as T,P as S,h as k,f as b,B as F}from"./index-CwE77pJK.js";import{u as I}from"./useSearch-DUoHpXlI.js";import{u as C,m as f}from"./useTaskDetailHandler-CO04DC80.js";import{u as V}from"./index-nFTtouS-.js";import{T as O,M as P,P as U}from"./transformToInputDateType-N39tKg5E.js";import{Q}from"./index-CP5eE5JT.js";import{E as H}from"./index-O5zbieNP.js";const Z="_modal_1fz7w_1",q={modal:Z},J=({changedValue:s,className:l,onClose:o})=>{const{handleSubmit:a,reset:m,control:i}=y({mode:"onChange"}),{onSubmitHandler:n,onCloseHandler:c}=g({onClose:o,reset:m}),p=r.useCallback(x=>{n(x),$.success("Added successfull")},[n]);return e.jsx(B,{changedValue:s,className:l,noCross:!0,onSubmit:a(p),onClose:c,children:e.jsx("section",{className:`modalWrapper ${q.modal}`,children:e.jsxs("form",{onSubmit:a(p),children:[e.jsx(N,{className:"modalTitle",children:"Add new user"}),e.jsx(A,{name:"email",control:i,label:"Email",autoComplete:"email",rules:{required:"Email is required",pattern:{value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,message:"Invalid email address"}},placeholder:"example@gmail.com",type:"email"}),e.jsx(D,{onClose:c})]})})})},L="_table_1796n_1",R="_thead_1796n_6",W="_tbody_1796n_15",G="_tr_1796n_21",K="_th_1796n_6",X="_td_1796n_36",Y="_capitalize_1796n_54",d={table:L,thead:R,tbody:W,tr:G,th:K,td:X,capitalize:Y},ee="_table_rkk9f_1",se="_tr_rkk9f_7",te="_td_rkk9f_32",ae="_capitalize_rkk9f_41",ne="_title_rkk9f_61",le="_avatar_rkk9f_66",oe="_team_rkk9f_76",ie="_info_rkk9f_82",ce="_status_rkk9f_88",de="_actions_rkk9f_96",re="_editBtn_rkk9f_102",me="_deleteBtn_rkk9f_113",t={table:ee,tr:se,td:te,capitalize:ae,title:ne,avatar:le,team:oe,info:ie,status:ce,actions:de,editBtn:re,deleteBtn:me},_e=({user:s})=>{const{isEditModalOpen:l,closeEditModal:o,isQuestionModalOpen:a,closeQuestionModal:m,openQuestionModal:i,openEditModal:n,handleToggle:c,isOpened:p,isClosing:x,handleClose:u}=V({task:s}),{isDesktop:M}=C(),E=r.useMemo(()=>[[{icon:{Icon:w,color:"#000"},title:"Edit",permission:!1,onClick:n}],[{icon:{Icon:z,color:"red"},title:"Delete",permission:!1,onClick:i}]],[n,i]);return e.jsxs("tr",{className:t.tr,children:[e.jsx("td",{className:t.td,children:e.jsxs("div",{className:t.team,children:[e.jsx(O,{...s,className:t.avatar,avatarClassName:t.avatar,infoClassName:t.info,side:"right",team:[s]}),e.jsx("p",{className:t.name,children:s.name})]})}),M?e.jsxs(e.Fragment,{children:[e.jsx("td",{className:t.td,children:e.jsx("p",{children:s.role})}),e.jsx("td",{className:t.td,children:e.jsx("p",{children:s.email})}),e.jsx("td",{className:t.td,children:e.jsx("div",{style:{backgroundColor:s.isActive?"#BFDBFE":"#FEF3C7",color:s.isActive?"#1D4ED8":"#000"},className:t.status,children:e.jsx("p",{children:s!=null&&s.isActive?"Active":"Disabled"})})}),e.jsx("td",{className:t.td,children:e.jsx("p",{children:T(new Date(s.createdAt))})}),e.jsxs("td",{className:`${t.actions} ${t.td} `,children:[e.jsx("button",{onClick:()=>n(s),className:t.editBtn,children:"Edit"}),e.jsx("button",{onClick:()=>i(s),className:t.deleteBtn,children:"Delete"})]})]}):e.jsxs("td",{children:[e.jsx(P,{onClick:c}),p&&e.jsx(S,{className:`${t.popup}`,isClosing:x,handleClose:u,children:E.map(j=>j.map((_,v)=>e.jsx(U,{disabled:_.permission,className:v+1===j.length?"divider":"",icon:_.icon,title:_.title,handleClose:u,onClick:_.onClick},_.title)))})]}),l&&e.jsx(H,{changedValue:l,onClose:o,user:s}),a&&e.jsx(Q,{changedValue:a,onClose:m,user:s,type:"delete",text:"Are you sure you want to delete current user?",submitButtonText:"Delete"})]},s._id)},he=({users:s,titles:l})=>{const{isDesktop:o}=C();return e.jsxs("table",{className:d.table,children:[e.jsx("thead",{className:d.thead,children:e.jsx("tr",{className:d.tr,children:o?l.map(a=>e.jsx("th",{className:`${d.th}`,children:a},a)):e.jsx("th",{className:`${d.th}`,children:"Full name"})})}),e.jsx("tbody",{className:d.tbody,children:s.map(a=>e.jsx(_e,{user:a},a._id))})]})},pe="_listView_1xia6_1",xe="_notEmpty_1xia6_11",ue="_header_1xia6_16",je="_button_1xia6_25",h={listView:pe,notEmpty:xe,header:ue,button:je},ke=["Full Name","Role","Email","Status","Created at"],be=()=>{const s=I(),[l,o]=r.useState(!1),a=r.useMemo(()=>s?k.users.filter(n=>{var c;return(c=n==null?void 0:n.name)==null?void 0:c.toLowerCase().includes(s==null?void 0:s.toLowerCase())}):k.users,[s]),m=r.useMemo(()=>({users:a,titles:ke}),[a]),i=r.useCallback(()=>{o(!0)},[]);return e.jsxs("section",{className:h.members,children:[e.jsxs(f.header,{className:h.header,initial:"hidden",animate:"visible",variants:b,children:[e.jsx(N,{children:"Team members"}),e.jsx(F,{onClick:i,className:h.button,children:"+ Add new user"}),l&&e.jsx(J,{changedValue:l,onClose:()=>o(!1)})]}),e.jsx(f.section,{initial:"hidden",animate:"visible",variants:b,className:`${h.listView} ${a.length>0?h.notEmpty:""}`,children:a.length>0?e.jsx(he,{...m}):"No users found"})]})},ge=()=>e.jsx("section",{className:"team",children:e.jsx(be,{})});export{ge as default};
