import{r as k,p as W,j as s,q as O,P as v,a as b,v as E,w as L,F as I,f as z,L as R}from"./index-CwE77pJK.js";import{u as D}from"./index-nFTtouS-.js";import{T as P}from"./index-D01z6kXc.js";import{M as B,P as Q,T as V}from"./transformToInputDateType-N39tKg5E.js";import{P as q,S as F}from"./index-DdRiMFOJ.js";import{u as H,a as K,m as U}from"./useTaskDetailHandler-CO04DC80.js";import{u as G}from"./useSearch-DUoHpXlI.js";import{Q as J}from"./index-CP5eE5JT.js";const X=({tasks:e,stage:d})=>{const[o,i]=k.useState(!0),a=G(),l=k.useMemo(()=>{i(!0);const u=e.filter(c=>!c.isTrashed),_=d?u.filter(c=>c.stage===d):u,p=a?_.filter(c=>c.title.toLowerCase().includes(a.toLowerCase())):_;return i(!1),p},[a,d,e]);return{isLoading:o,filteredTasks:l}},Y=({task:e})=>{const d=W(),o=k.useCallback(()=>{},[]),i=k.useCallback(()=>{},[]),{handleToggle:a,isOpened:l,isClosing:u,handleClose:_,TASK_MORE_OPTIONS:p,navigate:c,openAddSubtaskModal:N,isEditModalOpen:T,closeEditModal:h,isAddSubtaskModalOpen:g,closeAddSubtaskModal:y,isQuestionModalOpen:M,closeQuestionModal:A,isStageModalOpen:$,openStageModal:w,closeStageModal:m}=D({task:e});return{user:d,handleToggle:a,isOpened:l,isClosing:u,handleClose:_,TASK_MORE_OPTIONS:p,navigate:c,openAddSubtaskModal:N,isEditModalOpen:T,closeEditModal:h,isAddSubtaskModalOpen:g,closeAddSubtaskModal:y,isQuestionModalOpen:M,closeQuestionModal:A,isStageModalOpen:$,openStageModal:w,closeStageModal:m,onAddSubtaskHandler:o,onDeleteTaskHandler:i}},Z="_subtask_pyneq_1",ss="_dateTagContainer_pyneq_8",es="_date_pyneq_8",ts="_tag_pyneq_21",S={subtask:Z,dateTagContainer:ss,date:es,tag:ts},as=({title:e,date:d,tag:o,index:i})=>s.jsxs("article",{className:S.subtask,children:[s.jsxs("p",{className:S.title,children:[i+1+") ",e]}),s.jsxs("div",{className:S.dateTagContainer,children:[s.jsx("span",{className:S.date,children:O(new Date(d))}),s.jsx("span",{className:S.tag,children:o})]})]}),ns="_task_81wa0_1",is="_content_81wa0_7",ds="_header_81wa0_11",os="_main_81wa0_18",ls="_headerInfo_81wa0_22",cs="_taskTitle_81wa0_29",rs="_title_81wa0_40",_s="_headerTop_81wa0_45",ms="_date_81wa0_53",us="_details_81wa0_68",ps="_commentary_81wa0_77",hs="_assets_81wa0_78",xs="_subtasks_81wa0_79",js="_team_81wa0_108",bs="_userInfo_81wa0_112",ks="_footer_81wa0_125",Ns="_subtasksWrapper_81wa0_144",Ts="_btnAddSubtask_81wa0_153",gs="_disabled_81wa0_167",ys="_popup_81wa0_178",Ms="_divider_81wa0_182",n={task:ns,content:is,header:ds,main:os,headerInfo:ls,taskTitle:cs,title:rs,headerTop:_s,date:ms,details:us,commentary:ps,assets:hs,subtasks:xs,team:js,userInfo:bs,footer:ks,subtasksWrapper:Ns,btnAddSubtask:Ts,disabled:gs,popup:ys,divider:Ms},oe=({task:e})=>{const{handleToggle:d,isOpened:o,isClosing:i,handleClose:a,TASK_MORE_OPTIONS:l,navigate:u,user:_,openAddSubtaskModal:p,isEditModalOpen:c,closeEditModal:N,isAddSubtaskModalOpen:T,closeAddSubtaskModal:h,onAddSubtaskHandler:g,isQuestionModalOpen:y,closeQuestionModal:M,onDeleteTaskHandler:A,isStageModalOpen:$,closeStageModal:w}=Y({task:e});return s.jsx("div",{className:n.task,children:s.jsxs("div",{className:n.content,children:[s.jsx("header",{className:n.header,children:s.jsxs("div",{className:n.headerInfo,children:[s.jsxs("div",{className:n.headerTop,children:[s.jsx(q,{withAddition:!0,priority:e.priority}),s.jsx(B,{onClick:d}),o&&s.jsx(v,{className:`${n.popup}`,isClosing:i,handleClose:a,children:l.map((m,x)=>m.map((r,f)=>s.jsx(Q,{disabled:r.permission,className:f+1===m.length&&x+1!==l.length?"divider":"",icon:r.icon,title:r.title,handleClose:a,onClick:r.onClick},r.title)))}),s.jsx(P,{task:e,isEditModalOpen:c,closeEditModal:N,isAddSubtaskModalOpen:T,closeAddSubtaskModal:h,onAddSubtaskHandler:g,isQuestionModalOpen:y,closeQuestionModal:M,onDeleteTaskHandler:A,isStageModalOpen:$,closeStageModal:w})]}),s.jsxs("div",{onClick:()=>u(e._id),className:n.taskTitle,children:[s.jsx(F,{stage:e.stage}),s.jsx("h1",{className:n.title,children:e.title})]}),s.jsx("div",{className:n.date,children:O(new Date(e.date))})]})}),s.jsxs("main",{className:n.main,children:[s.jsxs("section",{className:n.details,children:[s.jsxs(b.Link,{to:`/task/${e._id}`,title:"Commentary",className:n.commentary,children:[s.jsx(E,{}),s.jsx("span",{children:e.activities.length})]}),s.jsxs(b.Link,{to:`/task/${e._id}`,title:"Assets",className:n.assets,children:[s.jsx(L,{}),s.jsx("span",{children:e.assets.length})]}),s.jsxs(b.Link,{to:`/task/${e._id}`,title:"Subtasks",className:n.subtasks,children:[s.jsx(I,{}),s.jsxs("span",{children:["0/",e.subTasks.length]})]})]}),s.jsx("section",{children:s.jsx(V,{infoClassName:n.userInfo,className:n.team,team:e.team})})]}),s.jsxs("footer",{className:n.footer,children:[s.jsx("section",{className:n.subtasksWrapper,children:e.subTasks.map((m,x)=>k.createElement(as,{index:x,...m,key:m._id}))}),s.jsxs("button",{disabled:_.isAdmin,onClick:_.isAdmin&&p,className:`${n.btnAddSubtask} ${_.isAdmin?"":n.disabled}`,children:[s.jsx("span",{children:"+"})," ",s.jsx("p",{children:"Add subtask"})]})]})]})})},As="_table_13971_1",$s="_thead_13971_6",ws="_tbody_13971_15",Ss="_tr_13971_20",fs="_th_13971_6",j={table:As,thead:$s,tbody:ws,tr:Ss,th:fs},Cs="_tr_1skud_1",Os="_td_1skud_26",vs="_capitalize_1skud_35",Es="_tableTitle_1skud_56",Ls="_circle_1skud_67",Is="_title_1skud_73",Ds="_priority_1skud_78",Ps="_createdAt_1skud_90",Bs="_daysAgo_1skud_95",Qs="_details_1skud_99",Vs="_commentary_1skud_108",qs="_assets_1skud_109",Fs="_subtasks_1skud_110",Hs="_subtasksWrapper_1skud_127",Ws="_team_1skud_148",zs="_actions_1skud_152",Rs="_editBtn_1skud_158",Ks="_deleteBtn_1skud_169",t={tr:Cs,td:Os,capitalize:vs,tableTitle:Es,circle:Ls,title:Is,priority:Ds,createdAt:Ps,daysAgo:Bs,details:Qs,commentary:Vs,assets:qs,subtasks:Fs,subtasksWrapper:Hs,team:Ws,actions:zs,editBtn:Rs,deleteBtn:Ks},Us=({task:e,navigateToTask:d})=>{const{isEditModalOpen:o,closeEditModal:i,isQuestionModalOpen:a,closeQuestionModal:l,openQuestionModal:u,openEditModal:_,handleToggle:p,isOpened:c,isClosing:N,closeAddSubtaskModal:T,handleClose:h,isAddSubtaskModalOpen:g,onAddSubtaskHandler:y,closeStageModal:M,isStageModalOpen:A,onDeleteTaskHandler:$,TASK_MORE_OPTIONS:w}=D({task:e}),{isDesktop:m}=H();return s.jsxs("tr",{className:t.tr,children:[s.jsxs("td",{onClick:()=>d(e._id),className:`${t.tableTitle} ${t.td}`,children:[s.jsx(F,{stage:e.stage}),s.jsx("h1",{className:t.title,children:e.title})]}),m?s.jsxs(s.Fragment,{children:[s.jsx("td",{className:`${t.priority} ${t.td}`,children:s.jsx(q,{withAddition:!0,priority:e.priority})}),s.jsx("td",{className:`${t.td} ${t.createdAt} ${t.capitalize}`,children:s.jsx("span",{className:t.daysAgo,children:O(new Date(e.date))})}),s.jsxs("td",{className:`${t.td} ${t.details}`,children:[s.jsxs(b.Link,{to:`/task/${e._id}`,title:"Commentary",className:t.commentary,children:[s.jsx(E,{}),s.jsx("span",{children:e.activities.length})]}),s.jsxs(b.Link,{to:`/task/${e._id}`,title:"Assets",className:t.assets,children:[s.jsx(L,{}),s.jsx("span",{children:e.assets.length})]}),s.jsxs(b.Link,{to:`/task/${e._id}`,title:"Subtasks",className:t.subtasks,children:[s.jsx(I,{}),s.jsxs("span",{children:["0/",e.subTasks.length]})]})]}),s.jsx("td",{className:`${t.td}`,children:s.jsx(V,{infoClassName:t.userInfo,side:"left",className:t.team,team:e.team})}),s.jsxs("td",{className:`${t.actions} ${t.td} `,children:[s.jsx("button",{onClick:()=>_(e),className:t.editBtn,children:"Edit"}),s.jsx("button",{onClick:()=>u(e),className:t.deleteBtn,children:"Delete"})]})]}):s.jsxs("td",{className:t.more,children:[s.jsx(B,{onClick:()=>{p()}}),c&&s.jsx(v,{className:`${t.popup}`,isClosing:N,handleClose:h,children:w.map(x=>x.map((r,f)=>s.jsx(Q,{disabled:r.permission,className:f+1===x.length?"divider":"",icon:r.icon,title:r.title,handleClose:h,onClick:r.onClick},r.title)))})]}),s.jsx(P,{task:e,isEditModalOpen:o,closeEditModal:i,isAddSubtaskModalOpen:g,closeAddSubtaskModal:T,onAddSubtaskHandler:y,isQuestionModalOpen:a,closeQuestionModal:l,onDeleteTaskHandler:$,isStageModalOpen:A,closeStageModal:M}),a&&s.jsx(J,{changedValue:a,onClose:l,task:e,type:"delete",text:"Are you sure you want to delete the selected task?",submitButtonText:"Delete"})]},e._id)},Gs=({filteredTasks:e,titles:d,navigateToTask:o})=>{const{isDesktop:i}=H();return s.jsxs("table",{className:j.table,children:[s.jsx("thead",{className:j.thead,children:s.jsx("tr",{className:j.tr,children:i?d.map(a=>s.jsx("th",{className:`${j.th}`,children:a},a)):s.jsx("th",{className:j.th,children:d[0]})})}),s.jsx("tbody",{className:j.tbody,children:e.map(a=>s.jsx(Us,{task:a,navigateToTask:o},a==null?void 0:a._id))})]})},Js="_listView_ji7mn_1",Xs="_notEmpty_ji7mn_12",C={listView:Js,notEmpty:Xs},Ys=["Task title","Priority","Created At","Assets","Team"],le=({tasks:e,stage:d})=>{const{isLoading:o,filteredTasks:i}=X({tasks:e,stage:d}),a=K(),l=k.useMemo(()=>({filteredTasks:i,titles:Ys,navigateToTask:a}),[i,a]);return s.jsx(U.section,{initial:"hidden",animate:"visible",variants:z,className:`${C.listView} ${i.length>0?C.notEmpty:""}`,children:o?s.jsx(R,{}):i.length>0?s.jsx(Gs,{...l}):s.jsx("span",{className:C.notFound,children:"Tasks not found"})})};export{le as L,oe as T,X as u};
