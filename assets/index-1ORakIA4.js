import{r as b,u as W,j as s,o as $,P as O,p as v,q as w,F as E,f as z,L as R}from"./index-BTjrKWUg.js";import{u as I,M as D,P}from"./transformToInputDateType-Q6j9lJDJ.js";import{T as B}from"./index-B3DIs6ry.js";import{T as L}from"./index-CixvWhUE.js";import{P as Q,S as V}from"./index-BS10nKTq.js";import{u as F,Q as q,a as K,m as U}from"./index-B-c8I1OG.js";import{u as G}from"./useSearch-feGYTenm.js";const J=({tasks:e,stage:d})=>{const[l,i]=b.useState(!0),a=G(),c=b.useMemo(()=>{i(!0);const p=e.filter(o=>!o.isTrashed),r=d?p.filter(o=>o.stage===d):p,u=a?r.filter(o=>o.title.toLowerCase().includes(a.toLowerCase())):r;return i(!1),u},[a,d,e]);return{isLoading:l,filteredTasks:c}},X=({task:e})=>{const d=W(),l=b.useCallback(()=>{},[]),i=b.useCallback(()=>{},[]),{handleToggle:a,isOpened:c,isClosing:p,handleClose:r,TASK_MORE_OPTIONS:u,navigate:o,openAddSubtaskModal:N,isEditModalOpen:T,closeEditModal:x,isAddSubtaskModalOpen:g,closeAddSubtaskModal:k,isQuestionModalOpen:y,closeQuestionModal:M,isStageModalOpen:f,openStageModal:A,closeStageModal:m}=I({task:e});return{user:d,handleToggle:a,isOpened:c,isClosing:p,handleClose:r,TASK_MORE_OPTIONS:u,navigate:o,openAddSubtaskModal:N,isEditModalOpen:T,closeEditModal:x,isAddSubtaskModalOpen:g,closeAddSubtaskModal:k,isQuestionModalOpen:y,closeQuestionModal:M,isStageModalOpen:f,openStageModal:A,closeStageModal:m,onAddSubtaskHandler:l,onDeleteTaskHandler:i}},Y="_subtask_1owpa_1",Z="_dateTagContainer_1owpa_8",ss="_date_1owpa_8",es="_tag_1owpa_21",S={subtask:Y,dateTagContainer:Z,date:ss,tag:es},ts=({title:e,date:d,tag:l,index:i})=>s.jsxs("article",{className:S.subtask,children:[s.jsxs("p",{className:S.title,children:[i+1+") ",e]}),s.jsxs("div",{className:S.dateTagContainer,children:[s.jsx("span",{className:S.date,children:$(new Date(d))}),s.jsx("span",{className:S.tag,children:l})]})]}),as="_task_1m8dx_1",ns="_content_1m8dx_7",is="_header_1m8dx_11",ds="_main_1m8dx_18",ls="_headerInfo_1m8dx_22",os="_taskTitle_1m8dx_29",cs="_title_1m8dx_40",rs="_headerTop_1m8dx_45",_s="_date_1m8dx_53",ms="_details_1m8dx_68",ps="_commentary_1m8dx_77",us="_assets_1m8dx_78",hs="_subtasks_1m8dx_79",xs="_team_1m8dx_108",js="_userInfo_1m8dx_112",bs="_footer_1m8dx_125",Ns="_subtasksWrapper_1m8dx_138",Ts="_btnAddSubtask_1m8dx_147",gs="_disabled_1m8dx_161",ks="_popup_1m8dx_172",ys="_divider_1m8dx_176",n={task:as,content:ns,header:is,main:ds,headerInfo:ls,taskTitle:os,title:cs,headerTop:rs,date:_s,details:ms,commentary:ps,assets:us,subtasks:hs,team:xs,userInfo:js,footer:bs,subtasksWrapper:Ns,btnAddSubtask:Ts,disabled:gs,popup:ks,divider:ys},ie=({task:e})=>{const{handleToggle:d,isOpened:l,isClosing:i,handleClose:a,TASK_MORE_OPTIONS:c,navigate:p,user:r,openAddSubtaskModal:u,isEditModalOpen:o,closeEditModal:N,isAddSubtaskModalOpen:T,closeAddSubtaskModal:x,onAddSubtaskHandler:g,isQuestionModalOpen:k,closeQuestionModal:y,onDeleteTaskHandler:M,isStageModalOpen:f,closeStageModal:A}=X({task:e});return s.jsx("div",{className:n.task,children:s.jsxs("div",{className:n.content,children:[s.jsx("header",{className:n.header,children:s.jsxs("div",{className:n.headerInfo,children:[s.jsxs("div",{className:n.headerTop,children:[s.jsx(Q,{withAddition:!0,priority:e.priority}),s.jsx(D,{onClick:d}),l&&s.jsx(O,{className:`${n.popup}`,isClosing:i,handleClose:a,children:c.map(m=>m.map((_,h)=>s.jsx(P,{disabled:_.permission,className:h+1===m.length?n.divider:"",icon:_.icon,title:_.title,handleClose:a,onClick:_.onClick},_.title)))}),s.jsx(B,{task:e,isEditModalOpen:o,closeEditModal:N,isAddSubtaskModalOpen:T,closeAddSubtaskModal:x,onAddSubtaskHandler:g,isQuestionModalOpen:k,closeQuestionModal:y,onDeleteTaskHandler:M,isStageModalOpen:f,closeStageModal:A})]}),s.jsxs("div",{onClick:()=>p(e._id),className:n.taskTitle,children:[s.jsx(V,{stage:e.stage}),s.jsx("h1",{className:n.title,children:e.title})]}),s.jsx("div",{className:n.date,children:$(new Date(e.date))})]})}),s.jsxs("main",{className:n.main,children:[s.jsxs("section",{className:n.details,children:[s.jsxs("article",{title:"Commentary",className:n.commentary,children:[s.jsx(v,{}),s.jsx("span",{children:e.activities.length})]}),s.jsxs("article",{title:"Assets",className:n.assets,children:[s.jsx(w,{}),s.jsx("span",{children:e.assets.length})]}),s.jsxs("article",{title:"Subtasks",className:n.subtasks,children:[s.jsx(E,{}),s.jsxs("span",{children:["0/",e.subTasks.length]})]})]}),s.jsx("section",{children:s.jsx(L,{infoClassName:n.userInfo,className:n.team,team:e.team})})]}),s.jsxs("footer",{className:n.footer,children:[s.jsx("section",{className:n.subtasksWrapper,children:e.subTasks.map((m,_)=>b.createElement(ts,{index:_,...m,key:m._id}))}),s.jsxs("button",{disabled:r.isAdmin,onClick:r.isAdmin&&u,className:`${n.btnAddSubtask} ${r.isAdmin?"":n.disabled}`,children:[s.jsx("span",{children:"+"})," ",s.jsx("p",{children:"Add subtask"})]})]})]})})},Ms="_table_1jfay_1",fs="_thead_1jfay_7",As="_tbody_1jfay_16",Ss="_tr_1jfay_21",Cs="_th_1jfay_7",j={table:Ms,thead:fs,tbody:As,tr:Ss,th:Cs},$s="_tr_102ss_1",Os="_td_102ss_25",vs="_capitalize_102ss_34",ws="_tableTitle_102ss_55",Es="_circle_102ss_66",Is="_title_102ss_72",Ds="_priority_102ss_77",Ps="_createdAt_102ss_89",Bs="_daysAgo_102ss_94",Ls="_details_102ss_98",Qs="_commentary_102ss_107",Vs="_assets_102ss_108",Fs="_subtasks_102ss_109",Hs="_subtasksWrapper_102ss_126",Ws="_team_102ss_147",zs="_actions_102ss_151",Rs="_editBtn_102ss_157",qs="_deleteBtn_102ss_168",t={tr:$s,td:Os,capitalize:vs,tableTitle:ws,circle:Es,title:Is,priority:Ds,createdAt:Ps,daysAgo:Bs,details:Ls,commentary:Qs,assets:Vs,subtasks:Fs,subtasksWrapper:Hs,team:Ws,actions:zs,editBtn:Rs,deleteBtn:qs},Ks=({task:e,navigateToTask:d})=>{const{isEditModalOpen:l,closeEditModal:i,isQuestionModalOpen:a,closeQuestionModal:c,openQuestionModal:p,openEditModal:r,handleToggle:u,isOpened:o,isClosing:N,closeAddSubtaskModal:T,handleClose:x,isAddSubtaskModalOpen:g,onAddSubtaskHandler:k,closeStageModal:y,isStageModalOpen:M,onDeleteTaskHandler:f,TASK_MORE_OPTIONS:A}=I({task:e}),{isDesktop:m}=F();return s.jsxs("tr",{className:t.tr,children:[s.jsxs("td",{onClick:()=>d(e._id),className:`${t.tableTitle} ${t.td}`,children:[s.jsx(V,{stage:e.stage}),s.jsx("h1",{className:t.title,children:e.title})]}),m?s.jsxs(s.Fragment,{children:[s.jsx("td",{className:`${t.priority} ${t.td}`,children:s.jsx(Q,{withAddition:!0,priority:e.priority})}),s.jsx("td",{className:`${t.td} ${t.createdAt} ${t.capitalize}`,children:s.jsx("span",{className:t.daysAgo,children:$(new Date(e.date))})}),s.jsxs("td",{className:`${t.td} ${t.details}`,children:[s.jsxs("article",{title:"Commentary",className:t.commentary,children:[s.jsx(v,{}),s.jsx("span",{children:e.activities.length})]}),s.jsxs("article",{title:"Assets",className:t.assets,children:[s.jsx(w,{}),s.jsx("span",{children:e.assets.length})]}),s.jsxs("article",{title:"Subtasks",className:t.subtasks,children:[s.jsx(E,{}),s.jsxs("span",{children:["0/",e.subTasks.length]})]})]}),s.jsx("td",{className:`${t.td}`,children:s.jsx(L,{infoClassName:t.userInfo,side:"left",className:t.team,team:e.team})}),s.jsxs("td",{className:`${t.actions} ${t.td} `,children:[s.jsx("button",{onClick:()=>r(e),className:t.editBtn,children:"Edit"}),s.jsx("button",{onClick:()=>p(e),className:t.deleteBtn,children:"Delete"})]})]}):s.jsxs("td",{className:t.more,children:[s.jsx(D,{onClick:()=>{u()}}),o&&s.jsx(O,{className:`${t.popup}`,isClosing:N,handleClose:x,children:A.map(_=>_.map((h,H)=>s.jsx(P,{disabled:h.permission,className:H+1===_.length?t.divider:"",icon:h.icon,title:h.title,handleClose:x,onClick:h.onClick},h.title)))})]}),s.jsx(B,{task:e,isEditModalOpen:l,closeEditModal:i,isAddSubtaskModalOpen:g,closeAddSubtaskModal:T,onAddSubtaskHandler:k,isQuestionModalOpen:a,closeQuestionModal:c,onDeleteTaskHandler:f,isStageModalOpen:M,closeStageModal:y}),a&&s.jsx(q,{changedValue:a,onClose:c,task:e,type:"delete",text:"Are you sure you want to delete the selected task?",submitButtonText:"Delete"})]},e._id)},Us=({filteredTasks:e,titles:d,navigateToTask:l})=>{const{isDesktop:i}=F();return s.jsxs("table",{className:j.table,children:[s.jsx("thead",{className:j.thead,children:s.jsx("tr",{className:j.tr,children:i?d.map(a=>s.jsx("th",{className:`${j.th}`,children:a},a)):s.jsx("th",{className:j.th,children:d[0]})})}),s.jsx("tbody",{className:j.tbody,children:e.map(a=>s.jsx(Ks,{task:a,navigateToTask:l},a==null?void 0:a._id))})]})},Gs="_listView_ec274_1",Js="_notEmpty_ec274_12",C={listView:Gs,notEmpty:Js},Xs=["Task title","Priority","Created At","Assets","Team"],de=({tasks:e,stage:d})=>{const{isLoading:l,filteredTasks:i}=J({tasks:e,stage:d}),a=K(),c=b.useMemo(()=>({filteredTasks:i,titles:Xs,navigateToTask:a}),[i,a]);return s.jsx(U.section,{initial:"hidden",animate:"visible",variants:z,className:`${C.listView} ${i.length>0?C.notEmpty:""}`,children:l?s.jsx(R,{}):i.length>0?s.jsx(Us,{...c}):s.jsx("span",{className:C.notFound,children:"Tasks not found"})})};export{de as L,ie as T,J as u};
