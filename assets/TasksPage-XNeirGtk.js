import{r as n,j as s,M as b,h as g,f as x,T as m,B as v,t as N,R as w,F as f}from"./index-sijsFQJU.js";import{T as E}from"./index-B9y0de38.js";import{T as y}from"./index-Df0evzqw.js";import{T as V,L as C}from"./index-CYfdauhJ.js";import{m as _}from"./motion-CtceRfJ3.js";import"./index-_XJUkMvC.js";import"./index-qSCJv9Zt.js";import"./index-0PF8mP9b.js";const M="_stage_nglkk_1",S="_hide_nglkk_10",L="_content_nglkk_31",p={stage:M,hide:S,content:L},$=n.memo(({stage:i,tasks:t,isExpand:a})=>s.jsx("article",{className:`${p.stage} ${a?"":p.hide}`,children:s.jsx("div",{className:p.content,children:t.filter(e=>e.stage===i).map(e=>n.createElement(V,{...e,key:e._id}))})})),A="_tasksTitle_1a1kr_1",B="_circle_1a1kr_20",F="_title_1a1kr_26",I="_icon_1a1kr_30",l={tasksTitle:A,circle:B,title:F,icon:I},R=n.memo(({color:i,name:t,handler:a,isExpand:e})=>s.jsxs("button",{onClick:a,className:l.tasksTitle,children:[s.jsx("div",{style:{backgroundColor:i},className:l.circle}),s.jsx("p",{className:l.title,children:t}),e?s.jsx(b,{className:l.icon}):s.jsx(g,{className:l.icon})]})),H="_boardView_1hmbk_1",P={boardView:H},z=({tasks:i})=>{const t=n.useMemo(()=>["todo","in progress","completed"],[]),a=n.useMemo(()=>t.map(()=>!0),[t]),[e,h]=n.useState(a),j=[{name:"To do",stage:"todo",color:m.todo},{name:"In progress",stage:"in progress",color:m["in progress"]},{name:"Completed",stage:"completed",color:m.completed}],T=r=>{h(c=>c.map((o,u)=>u===r?!o:o))};return s.jsx("section",{className:P.boardView,children:t.map((r,c)=>s.jsxs(_.div,{initial:"hidden",whileInView:"visible",variants:x,viewport:{once:!0},children:[j.filter(o=>o.stage===r).map(o=>n.createElement(R,{isExpand:e[c],handler:()=>T(c),...o,key:o.name})),s.jsx($,{isExpand:e[c],stage:r,tasks:i})]},r))})},D="_header_1jrxi_1",K="_button_1jrxi_10",U="_tasksTitles_1jrxi_21",d={header:D,button:K,tasksTitles:U},k=[{id:1,title:"Board view",icon:s.jsx(w,{}),Component:z},{id:2,title:"List view",icon:s.jsx(f,{}),Component:C}],W=()=>{const[i,t]=n.useState(1);return s.jsxs("section",{className:d.tasksWrapper,children:[s.jsxs(_.header,{className:d.header,initial:"hidden",animate:"visible",variants:x,children:[s.jsx(E,{children:"Tasks"}),s.jsx(v,{className:d.button,children:"+ Create task"})]}),s.jsxs(_.main,{className:d.main,initial:"hidden",animate:"visible",variants:x,children:[s.jsx(y,{activeTab:i,setActiveTab:t,data:k}),s.jsx("div",{className:d.tasks,children:k.filter(a=>a.id===i).map(({Component:a,id:e})=>s.jsx(a,{tasks:N},e))})]})]})},ss=()=>s.jsx("section",{className:"tasks",children:s.jsx(W,{})});export{ss as default};
