import{j as s,f as r,L as m,r as h,t as x,R as p,F as T}from"./index-BTjrKWUg.js";import{T as b}from"./index-D6y65vRu.js";import{T as j}from"./index-uTn-8dv4.js";import{u as v,T as _,L as u}from"./index-1ORakIA4.js";import{m as d}from"./index-B-c8I1OG.js";const f="_boardView_1quol_1",k={boardView:f},w=({tasks:o,stage:n})=>{const{isLoading:i,filteredTasks:t}=v({tasks:o,stage:n});return s.jsx(d.section,{initial:"hidden",animate:"visible",variants:r,className:k.boardView,children:i?s.jsx(m,{}):t.length>0?t.map(a=>s.jsx(_,{task:a},a._id)):"Tasks not found"})},V="_header_19ov1_1",L="_button_19ov1_8",N="_tasksTitles_19ov1_19",e={header:V,button:L,tasksTitles:N},l=[{id:1,title:"Board view",icon:s.jsx(p,{}),Component:w},{id:2,title:"List view",icon:s.jsx(T,{}),Component:u}],C=({title:o,stage:n})=>{const[i,t]=h.useState(1);return s.jsxs("section",{className:e.tasksWrapper,children:[s.jsx(d.header,{className:e.header,initial:"hidden",animate:"visible",variants:r,children:s.jsx(b,{children:o})}),s.jsxs(d.main,{className:e.main,initial:"hidden",animate:"visible",variants:r,children:[s.jsx(j,{activeTab:i,setActiveTab:t,data:l}),s.jsx("div",{className:e.tasks,children:l.filter(a=>a.id===i).map(({Component:a,id:c})=>s.jsx(a,{stage:n,tasks:x},c))})]})]})};export{C as T};