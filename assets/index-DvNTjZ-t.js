import{v as C,r as x,j as e,w as N,x as f,h as q}from"./index-CN_qwv2e.js";import{a as A,I as p,S as T,t as M}from"./transformToInputDateType-JRn5hCp_.js";import{M as B,T as S}from"./index-p1i6Uk12.js";import{M as y,Q as F}from"./index-BFAyfv4t.js";const E="_dateTagBlock_5ucbp_1",D={dateTagBlock:E},P=({changedValue:t,onClose:s})=>{const{handleSubmit:a,reset:r,control:o}=C({mode:"onChange"}),{onSubmitHandler:i,onCloseHandler:l}=A({onClose:s,reset:r}),d=x.useCallback(()=>{},[]);return e.jsx(B,{changedValue:t,noCross:!0,onSubmit:d,onClose:l,children:e.jsx("section",{className:"modalWrapper",children:e.jsxs("form",{onSubmit:a(i),children:[e.jsx(S,{className:"modalTitle",children:"Add subtask"}),e.jsx(p,{name:"title",control:o,label:"Title",rules:{required:"Title is required"},placeholder:"Subtask title"}),e.jsxs("div",{className:D.dateTagBlock,children:[e.jsx(p,{name:"date",control:o,label:"Task date",type:"date",rules:{required:"Date is required"}}),e.jsx(p,{name:"tag",placeholder:"Tag",control:o,label:"Tag"})]}),e.jsx(y,{onSubmit:d,submitButtonText:"Add Task",onClose:l})]})})})},I=[{value:"todo",label:"TODO"},{value:"in progress",label:"IN PROGRESS"},{value:"completed",label:"COMPLETED"}],H=({changedValue:t,onClose:s,task:a})=>{const r=x.useMemo(()=>({stage:a!=null&&a.stage?{value:a.stage,label:a.stage.toUpperCase()}:""}),[a==null?void 0:a.stage]),{handleSubmit:o,reset:i,control:l}=C({mode:"onChange",defaultValues:r}),{onSubmitHandler:d,onCloseHandler:m}=A({onClose:s,reset:i}),c=x.useCallback(()=>{},[]);return e.jsx(B,{changedValue:t,noCross:!0,onSubmit:c,onClose:m,children:e.jsx("section",{className:"modalWrapper",children:e.jsxs("form",{onSubmit:o(d),children:[e.jsx(S,{className:"modalTitle",children:"Change task stage"}),e.jsx(T,{name:"stage",control:l,label:"Stage",rules:{required:"Stage is required"},placeholder:"Stage...",options:I}),e.jsx(y,{onSubmit:c,submitButtonText:"Submit",onClose:m})]})})})},L=({summary:t,task:s})=>{const a=x.useMemo(()=>{var u;return{name:(s==null?void 0:s.title)||"",assignee:((u=s==null?void 0:s.team)==null?void 0:u.map(h=>({value:h._id,label:h.name})))||"",stage:s!=null&&s.stage?{value:s.stage,label:s.stage.toUpperCase()}:"",priority:s!=null&&s.priority?{value:s.priority,label:s.priority.toUpperCase()}:"",date:s!=null&&s.date?M(s.date):"",assets:(s==null?void 0:s.assets)||[],description:(s==null?void 0:s.description)||"",links:s!=null&&s.links?s.links.join(","):""}},[s]),{handleSubmit:r,register:o,reset:i,control:l,setValue:d}=C({mode:"onChange",defaultValues:a}),[m,c]=x.useState(0),j=x.useMemo(()=>t.users.map(u=>({value:u._id,label:u.name})),[t.users]),b=x.useCallback(u=>{console.log(u.target.files),c(u.target.files.length)},[]),g=x.useCallback(()=>{},[]);return{users:j,handleSubmit:r,fileCount:m,register:o,control:l,handleFileChange:b,setValue:d,onSubmit:g,reset:i}},V="_label_dca6u_1",O="_textArea_dca6u_6",R="_textAreaError_dca6u_21",$="_errorText_dca6u_25",_={label:V,textArea:O,textAreaError:R,errorText:$},v=({name:t,control:s,label:a,rules:r,placeholder:o})=>{const{field:i,fieldState:{error:l}}=N({name:t,control:s,rules:r});return e.jsxs("div",{className:"inputBlock",children:[e.jsx("label",{className:_.label,children:a}),e.jsx("textarea",{...i,className:`${_.textArea} ${l?_.textAreaError:""}`,placeholder:o}),l&&e.jsx("p",{className:_.errorText,children:l.message})]})},U="_modal_1jj34_1",W="_stagePriorityBlock_1jj34_13",w="_dateAssetsBlock_1jj34_14",G="_dateBlock_1jj34_28",Q="_stageBlock_1jj34_29",z="_priorityBlock_1jj34_30",J="_addAssetsBlock_1jj34_31",K="_inputFile_1jj34_43",X="_addAssetsLabel_1jj34_47",n={modal:U,stagePriorityBlock:W,dateAssetsBlock:w,dateBlock:G,stageBlock:Q,priorityBlock:z,addAssetsBlock:J,inputFile:K,addAssetsLabel:X},Y=[{value:"todo",label:"TODO"},{value:"in progress",label:"IN PROGRESS"},{value:"completed",label:"COMPLETED"}],Z=[{value:"low",label:"LOW"},{value:"normal",label:"NORMAL"},{value:"medium",label:"MEDIUM"},{value:"high",label:"HIGH"}],k=({onClose:t,className:s,task:a,changedValue:r})=>{const{users:o,handleSubmit:i,control:l,register:d,handleFileChange:m,fileCount:c,reset:j,onSubmit:b}=L({summary:q,task:a}),{onCloseHandler:g,onSubmitHandler:u}=A({onClose:t,reset:j});return e.jsx(B,{changedValue:r,className:s,noCross:!0,onSubmit:b,onClose:g,children:e.jsxs("section",{className:`modalWrapper ${n.modal}`,children:[e.jsx(S,{className:"modalTitle",children:a?"Update task":"Add task"}),e.jsxs("form",{onSubmit:i(u),className:n.form,children:[e.jsx(p,{name:"name",control:l,label:"Task title",rules:{required:"Task title is required"},placeholder:"Title name"}),e.jsx(T,{name:"assignee",control:l,label:"Assign task to:",rules:{required:"Assign task to user is required"},options:o,isMulti:!0,placeholder:"Assign to..."}),e.jsxs("div",{className:n.stagePriorityBlock,children:[e.jsx("div",{className:n.stageBlock,children:e.jsx(T,{name:"stage",control:l,label:"Task stage",rules:{required:"Stage is required"},options:Y,placeholder:"Stage..."})}),e.jsx("div",{className:n.priorityBlock,children:e.jsx(T,{name:"priority",control:l,label:"Priority level",rules:{required:"Priority is required"},options:Z,placeholder:"Priority..."})})]}),e.jsxs("div",{className:n.dateAssetsBlock,children:[e.jsx("div",{className:n.dateBlock,children:e.jsx(p,{name:"date",control:l,label:"Task date",type:"date",rules:{required:"Date is required"}})}),e.jsxs("div",{className:n.addAssetsBlock,children:[e.jsx("input",{type:"file",className:n.inputFile,id:"assets",...d("assets"),multiple:!0,onChange:h=>m(h)}),e.jsxs("label",{htmlFor:"assets",className:n.addAssetsLabel,children:[e.jsx(f,{className:n.addAssetsIcon}),e.jsxs("p",{className:n.addAssetsText,children:["Add assets",c>0&&e.jsxs("span",{children:[" (",c," files selected)"]})]})]})]})]}),e.jsx(v,{name:"description",control:l,label:"Task Description",placeholder:"Describe the task..."}),e.jsx(v,{name:"links",control:l,label:"Add links (separated by commas ',')",placeholder:"Add some links..."}),e.jsx(y,{onSubmit:b,onClose:g})]})]})})},te=({task:t,isEditModalOpen:s,closeEditModal:a,isAddSubtaskModalOpen:r,closeAddSubtaskModal:o,onAddSubtaskHandler:i,isQuestionModalOpen:l,closeQuestionModal:d,onDeleteTaskHandler:m,isStageModalOpen:c,closeStageModal:j})=>e.jsxs(e.Fragment,{children:[s&&e.jsx(k,{onClose:a,changedValue:s,task:t}),r&&e.jsx(P,{changedValue:r,onClose:o,onSubmit:i,taskId:t._id}),l&&e.jsx(F,{changedValue:l,onClose:d,task:t,onSubmit:m,type:"delete",text:"Are you sure you want to delete the selected task?",submitButtonText:"Delete"}),c&&e.jsx(H,{changedValue:c,onClose:j,onSubmit:j,task:t})]});export{te as T,k as a};