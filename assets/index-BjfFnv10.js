import{r as a,x as E,y as q,J as L,j as s,z as H,o as O,A as V,C as G,D as W,I as P,E as z,h as J}from"./index-BInmwmz9.js";import{Q as $}from"./index-D4UObeK7.js";import{S as D}from"./index-C-Trk4sY.js";import{t as Q}from"./transformToInputDateType-r4T0VnYl.js";import{I as K,S as X}from"./index-BpYrcux6.js";const Y="_modal_1fz7w_1",Z={modal:Y},k=[{value:"todo",label:"TODO"},{value:"in progress",label:"IN PROGRESS"},{value:"completed",label:"COMPLETED"}],ee=({changedValue:i,onClose:e,task:l})=>{const d=a.useMemo(()=>({stage:l!=null&&l.stage?{value:l.stage,label:l.stage.toUpperCase()}:""}),[l==null?void 0:l.stage]),{handleSubmit:u,reset:m,control:r}=E({mode:"onChange",defaultValues:d}),{onSubmitHandler:c,onCloseHandler:o}=q({onClose:e,reset:m}),g=a.useCallback(x=>{c(x),L.success("Changed successfull")},[c]);return s.jsx(H,{changedValue:i,noCross:!0,onSubmit:u(g),onClose:o,children:s.jsx("section",{className:`modalWrapper ${Z.modal}`,children:s.jsxs("form",{onSubmit:u(g),children:[s.jsx(O,{className:"modalTitle",children:"Change task stage"}),s.jsx(D,{name:"stage",control:r,label:"Stage",rules:{required:"Stage is required"},placeholder:"Stage...",options:k}),s.jsx(V,{submitButtonText:"Submit",onClose:o})]})})})},se=({summary:i,task:e})=>{const l=a.useMemo(()=>{var n;return{name:(e==null?void 0:e.title)||"",assignee:((n=e==null?void 0:e.team)==null?void 0:n.map(b=>({value:b._id,label:b.name})))||"",stage:e!=null&&e.stage?{value:e.stage,label:e.stage.toUpperCase()}:"",priority:e!=null&&e.priority?{value:e.priority,label:e.priority.toUpperCase()}:"",date:e!=null&&e.date?Q(e.date):"",assets:(e==null?void 0:e.assets)||[],description:(e==null?void 0:e.description)||"",links:e!=null&&e.links?e.links.join(","):""}},[e]),{handleSubmit:d,register:u,reset:m,control:r,setValue:c}=E({mode:"onChange",defaultValues:l}),[o,g]=a.useState((e==null?void 0:e.assets.length)||0),[x,A]=a.useState((e==null?void 0:e.assets)||[]),[_,B]=a.useState(""),M=a.useCallback(()=>B(null),[]),y=a.useCallback(n=>{B(n)},[]),I=a.useMemo(()=>i.users.map(n=>({value:n._id,label:n.name})),[i.users]),[F,T,j]=G(),[v,f]=a.useState(),p=a.useCallback(n=>{T(),f(n)},[T]),C=a.useCallback(n=>{A(b=>{const S=b.filter(h=>h!==n);return g(S.length),c("assets",S),S})},[c]),R=a.useCallback(()=>{C(v),j()},[j,C,v]),U=a.useCallback(n=>{const b=Array.from(n.target.files),S=b.map(h=>URL.createObjectURL(h));g(h=>h+b.length),A(h=>[...h,...S]),c("assets",[...x,...b])},[c,x]);return{users:I,handleSubmit:d,fileCount:o,register:u,control:r,handleFileChange:U,setValue:c,reset:m,filePreviews:x,selectedImg:_,handleCloseImg:M,handleImageClick:y,removeImageHandler:C,isDeleteModalOpen:F,openDeleteModal:p,onDeleteAsset:R,closeDeleteModal:j}},le="_label_1gbgn_1",te="_textArea_1gbgn_6",ae="_textAreaError_1gbgn_21",oe="_errorText_1gbgn_25",N={label:le,textArea:te,textAreaError:ae,errorText:oe},w=({name:i,control:e,label:l,rules:d,placeholder:u})=>{const{field:m,fieldState:{error:r}}=W({name:i,control:e,rules:d});return s.jsxs("div",{className:"inputBlock",children:[s.jsx("label",{className:N.label,children:l}),s.jsx("textarea",{...m,className:`${N.textArea} ${r?N.textAreaError:""}`,placeholder:u}),r&&s.jsx("p",{className:N.errorText,children:r.message})]})},re="_modal_1ulxa_1",ne="_stagePriorityBlock_1ulxa_8",ie="_dateAssetsBlock_1ulxa_9",ce="_priorityBlock_1ulxa_23",de="_dateBlock_1ulxa_32",ue="_stageBlock_1ulxa_33",me="_addAssetsBlock_1ulxa_35",ge="_inputFile_1ulxa_47",xe="_addAssetsLabel_1ulxa_51",pe="_preview_1ulxa_73",be="_image_1ulxa_87",he="_closeButton_1ulxa_109",t={modal:re,stagePriorityBlock:ne,dateAssetsBlock:ie,priorityBlock:ce,dateBlock:de,stageBlock:ue,addAssetsBlock:me,inputFile:ge,addAssetsLabel:xe,preview:pe,image:be,closeButton:he},_e=[{value:"todo",label:"TODO"},{value:"in progress",label:"IN PROGRESS"},{value:"completed",label:"COMPLETED"}],je=[{value:"low",label:"LOW"},{value:"normal",label:"NORMAL"},{value:"medium",label:"MEDIUM"},{value:"high",label:"HIGH"}],Ce=({onClose:i,className:e,task:l,changedValue:d})=>{const{users:u,handleSubmit:m,fileCount:r,register:c,control:o,handleFileChange:g,reset:x,filePreviews:A,selectedImg:_,handleCloseImg:B,handleImageClick:M,isDeleteModalOpen:y,openDeleteModal:I,onDeleteAsset:F,closeDeleteModal:T}=se({summary:J,task:l}),{onCloseHandler:j,onSubmitHandler:v}=q({onClose:i,reset:x}),f=a.useCallback(p=>{v(p),L.success(l?"Changed successfull":"Added successfull")},[v,l]);return s.jsxs(H,{changedValue:d,className:e,noCross:!0,onClose:j,onSubmit:m(f),children:[s.jsxs("section",{className:`modalWrapper ${t.modal}`,children:[s.jsx(O,{className:"modalTitle",children:l?"Update task":"Add task"}),s.jsxs("form",{onSubmit:m(f),className:t.form,children:[s.jsx(P,{name:"name",control:o,label:"Task title",rules:{required:"Task title is required"},placeholder:"Title name"}),s.jsx(D,{name:"assignee",control:o,label:"Assign task to:",rules:{required:"Assign task to user is required"},options:u,isMulti:!0,placeholder:"Assign to..."}),s.jsxs("div",{className:t.stagePriorityBlock,children:[s.jsx("div",{className:t.stageBlock,children:s.jsx(D,{name:"stage",control:o,label:"Task stage",rules:{required:"Stage is required"},options:_e,placeholder:"Stage..."})}),s.jsx("div",{className:t.priorityBlock,children:s.jsx(D,{name:"priority",control:o,label:"Priority level",rules:{required:"Priority is required"},options:je,placeholder:"Priority..."})})]}),s.jsxs("div",{className:t.dateAssetsBlock,children:[s.jsx("div",{className:t.dateBlock,children:s.jsx(P,{name:"date",control:o,label:"Task date",type:"date",rules:{required:"Date is required"}})}),s.jsxs("div",{className:t.addAssetsBlock,children:[s.jsx("input",{type:"file",className:t.inputFile,id:"assets",...c("assets"),multiple:!0,onChange:p=>g(p)}),s.jsxs("label",{htmlFor:"assets",className:t.addAssetsLabel,children:[s.jsx(z,{className:t.addAssetsIcon}),s.jsxs("p",{className:t.addAssetsText,children:["Add assets",r>0&&s.jsxs("span",{children:[" (",r," files selected)"]})]})]})]})]}),A.length>0&&s.jsx("div",{className:t.preview,children:A.map((p,C)=>s.jsxs("div",{className:t.image,children:[s.jsx("img",{onClick:()=>M(p),src:p,alt:`Asset ${C+1}`}),s.jsx("button",{className:t.closeButton,onClick:()=>I(p),children:"×"})]},C))}),s.jsx(w,{name:"description",control:o,label:"Task Description",placeholder:"Describe the task..."}),s.jsx(w,{name:"links",control:o,label:"Add links (separated by commas ',')",placeholder:"Add some links..."}),s.jsx(V,{onClose:j})]})]}),_&&s.jsx(K,{changedValue:_,onClose:B,src:_,alt:_}),y&&s.jsx($,{onSubmit:F,changedValue:y,onClose:T,text:"Are you sure you want to delete current asset?",type:"delete",submitButtonText:"Delete"})]})},Te=({task:i,isEditModalOpen:e,closeEditModal:l,isAddSubtaskModalOpen:d,closeAddSubtaskModal:u,onAddSubtaskHandler:m,isQuestionModalOpen:r,closeQuestionModal:c,onDeleteTaskHandler:o,isStageModalOpen:g,closeStageModal:x})=>s.jsxs(s.Fragment,{children:[e&&s.jsx(Ce,{onClose:l,changedValue:e,task:i}),d&&s.jsx(X,{changedValue:d,onClose:u,onSubmit:m}),r&&s.jsx($,{changedValue:r,onClose:c,task:i,onSubmit:o,type:"delete",text:"Are you sure you want to delete the selected task?",submitButtonText:"Delete"}),g&&s.jsx(ee,{changedValue:g,onClose:x,onSubmit:x,task:i})]});export{Te as T,Ce as a};