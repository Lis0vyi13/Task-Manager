import{r as p,w as f,x as B,j as s,y,o as S,z as T,A as v,I as A,C as N,h as F}from"./index-BX26S4WO.js";import{Q as M}from"./index-CVn_QiJ2.js";import{S as _}from"./index-DCTuSknW.js";import{t as q}from"./transformToInputDateType-lL7WdnI8.js";import{S as E}from"./index-B18fTKX9.js";const P=[{value:"todo",label:"TODO"},{value:"in progress",label:"IN PROGRESS"},{value:"completed",label:"COMPLETED"}],D=({changedValue:o,onClose:e,task:a})=>{const r=p.useMemo(()=>({stage:a!=null&&a.stage?{value:a.stage,label:a.stage.toUpperCase()}:""}),[a==null?void 0:a.stage]),{handleSubmit:d,reset:c,control:l}=f({mode:"onChange",defaultValues:r}),{onSubmitHandler:m,onCloseHandler:u}=B({onClose:e,reset:c}),n=p.useCallback(()=>{},[]);return s.jsx(y,{changedValue:o,noCross:!0,onSubmit:n,onClose:u,children:s.jsx("section",{className:"modalWrapper",children:s.jsxs("form",{onSubmit:d(m),children:[s.jsx(S,{className:"modalTitle",children:"Change task stage"}),s.jsx(_,{name:"stage",control:l,label:"Stage",rules:{required:"Stage is required"},placeholder:"Stage...",options:P}),s.jsx(T,{onSubmit:n,submitButtonText:"Submit",onClose:u})]})})})},I=({summary:o,task:e})=>{const a=p.useMemo(()=>{var i;return{name:(e==null?void 0:e.title)||"",assignee:((i=e==null?void 0:e.team)==null?void 0:i.map(g=>({value:g._id,label:g.name})))||"",stage:e!=null&&e.stage?{value:e.stage,label:e.stage.toUpperCase()}:"",priority:e!=null&&e.priority?{value:e.priority,label:e.priority.toUpperCase()}:"",date:e!=null&&e.date?q(e.date):"",assets:(e==null?void 0:e.assets)||[],description:(e==null?void 0:e.description)||"",links:e!=null&&e.links?e.links.join(","):""}},[e]),{handleSubmit:r,register:d,reset:c,control:l,setValue:m}=f({mode:"onChange",defaultValues:a}),[u,n]=p.useState(0),b=p.useMemo(()=>o.users.map(i=>({value:i._id,label:i.name})),[o.users]),x=p.useCallback(i=>{console.log(i.target.files),n(i.target.files.length)},[]),h=p.useCallback(()=>{},[]);return{users:b,handleSubmit:r,fileCount:u,register:d,control:l,handleFileChange:x,setValue:m,onSubmit:h,reset:c}},L="_label_dca6u_1",H="_textArea_dca6u_6",V="_textAreaError_dca6u_21",O="_errorText_dca6u_25",j={label:L,textArea:H,textAreaError:V,errorText:O},C=({name:o,control:e,label:a,rules:r,placeholder:d})=>{const{field:c,fieldState:{error:l}}=v({name:o,control:e,rules:r});return s.jsxs("div",{className:"inputBlock",children:[s.jsx("label",{className:j.label,children:a}),s.jsx("textarea",{...c,className:`${j.textArea} ${l?j.textAreaError:""}`,placeholder:d}),l&&s.jsx("p",{className:j.errorText,children:l.message})]})},R="_modal_ef7hb_1",U="_stagePriorityBlock_ef7hb_7",$="_dateAssetsBlock_ef7hb_8",w="_priorityBlock_ef7hb_22",G="_dateBlock_ef7hb_31",W="_stageBlock_ef7hb_32",z="_addAssetsBlock_ef7hb_34",Q="_inputFile_ef7hb_46",J="_addAssetsLabel_ef7hb_50",t={modal:R,stagePriorityBlock:U,dateAssetsBlock:$,priorityBlock:w,dateBlock:G,stageBlock:W,addAssetsBlock:z,inputFile:Q,addAssetsLabel:J},K=[{value:"todo",label:"TODO"},{value:"in progress",label:"IN PROGRESS"},{value:"completed",label:"COMPLETED"}],X=[{value:"low",label:"LOW"},{value:"normal",label:"NORMAL"},{value:"medium",label:"MEDIUM"},{value:"high",label:"HIGH"}],Y=({onClose:o,className:e,task:a,changedValue:r})=>{const{users:d,handleSubmit:c,control:l,register:m,handleFileChange:u,fileCount:n,reset:b,onSubmit:x}=I({summary:F,task:a}),{onCloseHandler:h,onSubmitHandler:i}=B({onClose:o,reset:b});return s.jsx(y,{changedValue:r,className:e,noCross:!0,onSubmit:x,onClose:h,children:s.jsxs("section",{className:`modalWrapper ${t.modal}`,children:[s.jsx(S,{className:"modalTitle",children:a?"Update task":"Add task"}),s.jsxs("form",{onSubmit:c(i),className:t.form,children:[s.jsx(A,{name:"name",control:l,label:"Task title",rules:{required:"Task title is required"},placeholder:"Title name"}),s.jsx(_,{name:"assignee",control:l,label:"Assign task to:",rules:{required:"Assign task to user is required"},options:d,isMulti:!0,placeholder:"Assign to..."}),s.jsxs("div",{className:t.stagePriorityBlock,children:[s.jsx("div",{className:t.stageBlock,children:s.jsx(_,{name:"stage",control:l,label:"Task stage",rules:{required:"Stage is required"},options:K,placeholder:"Stage..."})}),s.jsx("div",{className:t.priorityBlock,children:s.jsx(_,{name:"priority",control:l,label:"Priority level",rules:{required:"Priority is required"},options:X,placeholder:"Priority..."})})]}),s.jsxs("div",{className:t.dateAssetsBlock,children:[s.jsx("div",{className:t.dateBlock,children:s.jsx(A,{name:"date",control:l,label:"Task date",type:"date",rules:{required:"Date is required"}})}),s.jsxs("div",{className:t.addAssetsBlock,children:[s.jsx("input",{type:"file",className:t.inputFile,id:"assets",...m("assets"),multiple:!0,onChange:g=>u(g)}),s.jsxs("label",{htmlFor:"assets",className:t.addAssetsLabel,children:[s.jsx(N,{className:t.addAssetsIcon}),s.jsxs("p",{className:t.addAssetsText,children:["Add assets",n>0&&s.jsxs("span",{children:[" (",n," files selected)"]})]})]})]})]}),s.jsx(C,{name:"description",control:l,label:"Task Description",placeholder:"Describe the task..."}),s.jsx(C,{name:"links",control:l,label:"Add links (separated by commas ',')",placeholder:"Add some links..."}),s.jsx(T,{onSubmit:x,onClose:h})]})]})})},ae=({task:o,isEditModalOpen:e,closeEditModal:a,isAddSubtaskModalOpen:r,closeAddSubtaskModal:d,onAddSubtaskHandler:c,isQuestionModalOpen:l,closeQuestionModal:m,onDeleteTaskHandler:u,isStageModalOpen:n,closeStageModal:b})=>s.jsxs(s.Fragment,{children:[e&&s.jsx(Y,{onClose:a,changedValue:e,task:o}),r&&s.jsx(E,{changedValue:r,onClose:d,onSubmit:c}),l&&s.jsx(M,{changedValue:l,onClose:m,task:o,onSubmit:u,type:"delete",text:"Are you sure you want to delete the selected task?",submitButtonText:"Delete"}),n&&s.jsx(D,{changedValue:n,onClose:b,onSubmit:b,task:o})]});export{ae as T,Y as a};
