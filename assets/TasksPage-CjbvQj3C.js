import{r as i,j as s,L as u,M as j,i as T,f as k,T as m,R as b,F as g,B as v,t as w}from"./index-CHvp5khB.js";import{T as N}from"./index-DquKI1xP.js";import{T as E}from"./index-BoRXCNhs.js";import{u as f,T as C,L as V}from"./index-CPSxNnF7.js";import{m as x}from"./motion-TwR0FuKr.js";import"./useTaskDetailHandler-CtPVOBJ8.js";import"./index-DtoNyqEg.js";import"./index-DL31JSmc.js";import"./useSearch-hDwAk_wX.js";const y="_stage_nglkk_1",L="_hide_nglkk_10",M="_content_nglkk_31",p={stage:y,hide:L,content:M},A=i.memo(({stage:e,tasks:r,isExpand:t})=>{const{isLoading:a,filteredTasks:n}=f({stage:e,tasks:r});return s.jsx("article",{className:`${p.stage} ${t?"":p.hide}`,children:s.jsx("div",{className:p.content,children:a?s.jsx(u,{}):n.map(o=>i.createElement(C,{...o,key:o._id}))})})}),S="_tasksTitle_1a1kr_1",B="_circle_1a1kr_20",$="_title_1a1kr_26",F="_icon_1a1kr_30",l={tasksTitle:S,circle:B,title:$,icon:F},H=i.memo(({color:e,name:r,handler:t,isExpand:a})=>s.jsxs("button",{onClick:t,className:l.tasksTitle,children:[s.jsx("div",{style:{backgroundColor:e},className:l.circle}),s.jsx("p",{className:l.title,children:r}),a?s.jsx(j,{className:l.icon}):s.jsx(T,{className:l.icon})]})),I="_boardView_1hmbk_1",R={boardView:I},P=()=>{const e=i.useMemo(()=>["todo","in progress","completed"],[]),r=i.useMemo(()=>e.map(()=>!0),[e]),[t,a]=i.useState(r),n=i.useCallback(o=>{a(c=>c.map((_,h)=>h===o?!_:_))},[]);return{stages:e,isExpandArray:t,setIsExpandArray:a,onTitleClickHandler:n}},z=[{name:"To do",stage:"todo",color:m.todo},{name:"In progress",stage:"in progress",color:m["in progress"]},{name:"Completed",stage:"completed",color:m.completed}],D=({tasks:e})=>{const{stages:r,isExpandArray:t,onTitleClickHandler:a}=P();return s.jsx("section",{className:R.boardView,children:r.map((n,o)=>s.jsxs(x.div,{initial:"hidden",whileInView:"visible",variants:k,viewport:{once:!0},children:[z.filter(c=>c.stage===n).map(c=>i.createElement(H,{isExpand:t[o],handler:()=>a(o),...c,key:c.name})),s.jsx(A,{isExpand:t[o],stage:n,tasks:e})]},n))})},K="_header_1jrxi_1",U="_button_1jrxi_10",W="_tasksTitles_1jrxi_21",d={header:K,button:U,tasksTitles:W},Y=()=>{const[e,r]=i.useState(1),t=i.useMemo(()=>[{id:1,title:"Board view",icon:s.jsx(b,{}),Component:D},{id:2,title:"List view",icon:s.jsx(g,{}),Component:V}],[]),a=i.useMemo(()=>{var n;return(n=t.find(o=>o.id===e))==null?void 0:n.Component},[e,t]);return s.jsxs("section",{className:d.tasksWrapper,children:[s.jsxs(x.header,{className:d.header,initial:"hidden",animate:"visible",variants:k,children:[s.jsx(N,{children:"Tasks"}),s.jsx(v,{className:d.button,children:"+ Create task"})]}),s.jsxs(x.main,{className:d.main,initial:"hidden",animate:"visible",variants:k,children:[s.jsx(E,{activeTab:e,setActiveTab:r,data:t}),s.jsx("div",{className:d.tasks,children:a?s.jsx(a,{tasks:w}):null})]})]})},ts=()=>s.jsx("section",{className:"tasks",children:s.jsx(Y,{})});export{ts as default};
