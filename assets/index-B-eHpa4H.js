import{r,j as s,f as d,t as h,R as p,F as T}from"./index-sijsFQJU.js";import{T as b}from"./index-B9y0de38.js";import{T as v}from"./index-Df0evzqw.js";import{T as x,L as _}from"./index-CYfdauhJ.js";import{m as l}from"./motion-CtceRfJ3.js";const j="_boardView_1quol_1",f={boardView:j},u=({tasks:i,stage:t})=>{const e=r.useMemo(()=>t?i.filter(a=>a.stage===t):i,[t,i]);return s.jsx(l.section,{initial:"hidden",animate:"visible",variants:d,className:f.boardView,children:e.length>0?e.map(a=>r.createElement(x,{...a,key:a._id})):"Tasks not found"})},k="_header_19ov1_1",w="_button_19ov1_8",V="_tasksTitles_19ov1_19",o={header:k,button:w,tasksTitles:V},c=[{id:1,title:"Board view",icon:s.jsx(p,{}),Component:u},{id:2,title:"List view",icon:s.jsx(T,{}),Component:_}],R=({title:i,stage:t})=>{const[e,a]=r.useState(1);return s.jsxs("section",{className:o.tasksWrapper,children:[s.jsx(l.header,{className:o.header,initial:"hidden",animate:"visible",variants:d,children:s.jsx(b,{children:i})}),s.jsxs(l.main,{className:o.main,initial:"hidden",animate:"visible",variants:d,children:[s.jsx(v,{activeTab:e,setActiveTab:a,data:c}),s.jsx("div",{className:o.tasks,children:c.filter(n=>n.id===e).map(({Component:n,id:m})=>s.jsx(n,{stage:t,tasks:h},m))})]})]})};export{R as T};
