import{j as s,V as L,W as E,X as O,Y as z,Z as F,_ as w,r as n,h as q,L as T,m as W,w as R,$ as V,B as U,o as b,a0 as Y,D as H,E as S,M as K,k as G,a1 as Q,P as X,y as Z,a2 as J,a as I,a3 as ss,t as es,a4 as ts}from"./index-BX26S4WO.js";import{T as as}from"./index-CdoQ4bxa.js";import{P as cs,S as ns}from"./index-uQ3NiPyg.js";import{T as os,M as ls,P as is}from"./transformToInputDateType-lL7WdnI8.js";import{Q as rs}from"./index-CVn_QiJ2.js";import{S as ds}from"./index-B18fTKX9.js";const ms="_icon_zorh8_1",_s="_iconStarted_zorh8_13",us="_iconCompleted_zorh8_17",hs="_iconInProgress_zorh8_21",xs="_iconBug_zorh8_25",ks="_iconCommented_zorh8_30",x={icon:ms,iconStarted:_s,iconCompleted:us,iconInProgress:hs,iconBug:xs,iconCommented:ks},ps={commented:s.jsx("div",{className:`${x.icon} ${x.iconCommented}`,children:s.jsx(L,{})}),started:s.jsx("div",{className:`${x.icon} ${x.iconStarted}`,children:s.jsx(E,{})}),assigned:s.jsx("div",{className:`${x.icon} ${x.iconAssigned}`,children:s.jsx(O,{})}),bug:s.jsx("div",{className:`${x.icon} ${x.iconBug}`,children:s.jsx(z,{size:24})}),completed:s.jsx("div",{className:`${x.icon} ${x.iconCompleted}`,children:s.jsx(F,{size:24})}),"in progress":s.jsx("div",{className:`${x.icon} ${x.iconInProgress}`,children:s.jsx(w,{size:16})})},gs="_activity_9dkdd_1",js="_iconBlock_9dkdd_6",bs="_icon_9dkdd_6",Ns="_lineBlock_9dkdd_19",vs="_line_9dkdd_19",fs="_info_9dkdd_29",Bs="_username_9dkdd_33",ys="_typeDateBlock_9dkdd_39",Ts="_type_9dkdd_39",Ms="_date_9dkdd_51",Cs="_activityText_9dkdd_57",g={activity:gs,iconBlock:js,icon:bs,lineBlock:Ns,line:vs,info:fs,username:Bs,typeDateBlock:ys,type:Ts,date:Ms,activityText:Cs},Ss=n.memo(({activity:e})=>{const t=n.useMemo(()=>{var a;return(a=q.users.find(c=>c._id===e.by))==null?void 0:a.name},[e.by]);return s.jsxs("div",{className:g.activity,children:[s.jsxs("div",{className:g.iconBlock,children:[s.jsx("div",{className:g.icon,children:ps[e.type]}),s.jsx("div",{className:g.lineBlock,children:s.jsx("div",{className:g.line})})]}),s.jsxs("div",{className:g.info,children:[s.jsx("h3",{className:g.username,children:t||s.jsx(T,{})}),s.jsxs("div",{className:g.typeDateBlock,children:[s.jsx("span",{className:g.type,children:e.type}),s.jsx("span",{className:g.date,children:W(e.date).fromNow()})]}),s.jsx("h1",{className:g.activityText,children:e.activity})]})]})}),Is="_addActivityForm_5m6dm_1",$s="_label_5m6dm_5",As="_selectBlock_5m6dm_10",Ps="_select_5m6dm_10",Ds="_textareaBlock_5m6dm_39",Ls="_textarea_5m6dm_39",Es="_submitButton_5m6dm_91",Os="_errorText_5m6dm_98",j={addActivityForm:Is,label:$s,selectBlock:As,select:Ps,textareaBlock:Ds,textarea:Ls,submitButton:Es,errorText:Os},zs=()=>{const{register:e,handleSubmit:t,reset:a,formState:{errors:c}}=R(),l=o=>{console.log(o),a()};return s.jsxs("form",{onSubmit:t(l),className:j.addActivityForm,children:[s.jsxs("div",{className:j.selectBlock,children:[s.jsx("p",{className:j.label,children:"Type:"}),s.jsx("select",{id:"type",...e("type",{required:!0}),className:j.select,children:V.map(o=>s.jsx("option",{value:o,children:o},o))}),c.type&&s.jsx("p",{className:j.errorText,children:"Please select a type."})]}),(c==null?void 0:c.type)&&s.jsx("p",{className:j.errorText,children:"Please select a type."}),s.jsxs("div",{className:j.textareaBlock,children:[s.jsx("textarea",{placeholder:"Type...",className:j.textarea,...e("activity",{required:!0}),name:"activity"}),c.activity&&s.jsx("p",{className:j.errorText,children:"Please enter an activity."})]}),s.jsx(U,{className:j.submitButton,type:"submit",children:"Submit"})]})},Fs="_activitiesWrapper_9deir_1",ws="_title_9deir_14",qs="_activities_9deir_1",Ws="_left_9deir_25",Rs="_right_9deir_29",v={activitiesWrapper:Fs,title:ws,activities:qs,left:Ws,right:Rs},Vs=({task:e})=>{var t;return s.jsxs("section",{className:v.activitiesWrapper,children:[s.jsxs("article",{className:v.left,children:[s.jsx(b,{className:v.title,children:"Activities"}),s.jsx("div",{className:v.activities,children:((t=e==null?void 0:e.activities)==null?void 0:t.length)>0?e.activities.map(a=>s.jsx(Ss,{activity:a},a._id)):"No activities added"})]}),s.jsxs("article",{className:v.right,children:[s.jsx(b,{className:v.title,children:"Add activity"}),s.jsx(zs,{})]})]})};function Us(e){let t,a,c=0;return e<50?(t=255,a=Math.round(255*(e/50))):(t=Math.round(255*(1-(e-50)/50)),a=255),{background:`rgb(${t}, ${a}, ${c})`,isLight:(t+a+c)/3>128}}const Ys=({task:e})=>{const{subTasks:t}=n.useMemo(()=>e,[e]),a=n.useMemo(()=>t.filter(o=>o.done).length,[t]),c=n.useMemo(()=>a>0?Math.round(a/t.length*100):0,[a,t.length]);return{progressColor:n.useMemo(()=>Us(c),[c]),subtasksProgress:c,subTasks:t}},Hs="_status_kt5py_1",Ks="_uppercase_kt5py_7",Gs={status:Hs,uppercase:Ks},Qs=({priority:e})=>{const t=n.useMemo(()=>Y[e],[e]),a=n.useMemo(()=>e==="normal"?"1px solid #000":"unset",[e]);return s.jsx("div",{style:{backgroundColor:t,border:a},className:Gs.status,children:s.jsx(cs,{style:{textTransform:"uppercase",fontWeight:"bold"},priority:e,withAddition:!0})})},Xs="_avatar_mgm8r_1",Zs="_info_mgm8r_12",Js="_userInfo_mgm8r_18",se="_name_mgm8r_25",ee="_role_mgm8r_29",te="_member_mgm8r_33",N={avatar:Xs,info:Zs,userInfo:Js,name:se,role:ee,member:te},ae=({user:e})=>s.jsxs("div",{className:N.member,children:[s.jsx(os,{...e,className:N.avatar,avatarClassName:N.avatar,infoClassName:N.info,team:[e]}),s.jsxs("div",{className:N.userInfo,children:[s.jsx("p",{className:N.name,children:e.name}),s.jsx("span",{className:N.role,children:e.role})]})]}),ce=()=>{const e=n.useCallback(()=>{},[]),{isOpened:t,isClosing:a,handleToggle:c,handleClose:l}=H(),[o,h,m]=S({setItem:()=>{}}),[k,p,_]=S({setItem:()=>{}}),d=n.useMemo(()=>[[{icon:{Icon:K,color:"#000"},title:"Edit",permission:!1,onClick:h}],[{icon:{Icon:G,color:"red"},title:"Delete",permission:!1,onClick:p}]],[p,h]);return{doneHandler:e,isOpened:t,isClosing:a,handleToggle:c,handleClose:l,OPTIONS:d,isDeleteModalOpen:k,closeDeleteModal:_,isEditModalOpen:o,closeEditModal:m}},ne="_subtask_pcmf1_1",oe="_subtaskIcon_pcmf1_6",le="_header_pcmf1_21",ie="_date_pcmf1_28",re="_tags_pcmf1_34",de="_tag_pcmf1_34",me="_doneTag_pcmf1_50",_e="_subtaskInfo_pcmf1_55",ue="_main_pcmf1_60",he="_done_pcmf1_50",xe="_undone_pcmf1_73",ke="_button_pcmf1_77",i={subtask:ne,subtaskIcon:oe,header:le,date:ie,tags:re,tag:de,doneTag:me,subtaskInfo:_e,main:ue,done:he,undone:xe,button:ke},pe=({title:e,date:t,tag:a,done:c})=>{const{doneHandler:l,isOpened:o,isClosing:h,handleToggle:m,handleClose:k,OPTIONS:p,isDeleteModalOpen:_,closeDeleteModal:d,isEditModalOpen:B,closeEditModal:A}=ce(),P=n.useMemo(()=>({title:e,date:t,tag:a}),[t,a,e]);return s.jsxs("div",{className:i.subtask,children:[s.jsx("div",{className:i.subtaskIcon,children:s.jsx(Q,{color:"rgb(124,58,237)",size:26})}),s.jsxs("div",{className:i.subtaskInfo,children:[s.jsxs("header",{className:i.header,children:[s.jsx("span",{className:i.date,children:new Date(t).toDateString()}),s.jsxs("div",{className:i.tags,children:[s.jsx("span",{className:i.tag,children:a}),c&&s.jsx("span",{className:`${i.doneTag} ${i.tag}`,children:"Done"})]})]}),s.jsxs("main",{className:i.main,children:[s.jsx("p",{className:i.subtaskTitle,children:e}),s.jsx("div",{className:i.more,children:s.jsx(ls,{onClick:m})}),o&&s.jsx(X,{className:`${i.popup}`,isClosing:h,handleClose:k,children:p.map(C=>C.map((y,D)=>s.jsx(is,{disabled:y.permission,className:D+1===C.length?"divider":"",icon:y.icon,title:y.title,handleClose:k,onClick:y.onClick},y.title)))})]}),s.jsx("footer",{className:i.footer,children:s.jsx("button",{onClick:l,className:`${c?i.undone:i.done} ${i.button}`,children:c?"Mark as Undone":"Mark as Done"})}),B&&s.jsx(ds,{changedValue:B,onClose:A,subtask:P}),_&&s.jsx(rs,{changedValue:_,onClose:d,type:"delete",text:"Are you sure to delete current subtask?"})]})]})},ge="_taskInfo_1n651_1",je="_priorityStageBlock_1n651_6",be="_stageBlock_1n651_13",Ne="_stage_1n651_13",ve="_createdAtBlock_1n651_24",fe="_createdAt_1n651_24",Be="_assetsSubTasksBlock_1n651_34",ye="_teamBlock_1n651_46",Te="_subtasksBlock_1n651_47",Me="_titleSecondary_1n651_51",Ce="_memberBlock_1n651_57",Se="_substasksTitle_1n651_62",Ie="_subtasksProgress_1n651_68",$e="_subtasks_1n651_47",r={taskInfo:ge,priorityStageBlock:je,stageBlock:be,stage:Ne,createdAtBlock:ve,createdAt:fe,assetsSubTasksBlock:Be,teamBlock:ye,subtasksBlock:Te,titleSecondary:Me,memberBlock:Ce,substasksTitle:Se,subtasksProgress:Ie,subtasks:$e},Ae=n.memo(({task:e})=>{const{progressColor:t,subtasksProgress:a,subTasks:c}=Ys({task:e});return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:r.taskInfo,children:[s.jsxs("div",{className:r.priorityStageBlock,children:[s.jsx(Qs,{priority:e.priority}),s.jsxs("div",{className:r.stageBlock,children:[s.jsx(ns,{stage:e.stage}),s.jsx("span",{className:r.stage,children:e.stage})]})]}),s.jsx("div",{className:r.createdAtBlock,children:s.jsxs("span",{className:r.createdAt,children:["Created at: ",new Date(e.createdAt).toDateString()]})})]}),s.jsxs("div",{className:r.assetsSubTasksBlock,children:[s.jsxs("span",{children:["Assets: ",e.assets.length]}),s.jsx("span",{children:"|"}),s.jsxs("span",{children:["Sub-Tasks: ",e.subTasks.length]})]}),s.jsxs("div",{className:r.teamBlock,children:[s.jsx(b,{className:r.titleSecondary,children:"TASK TEAM"}),s.jsx("div",{className:r.team,children:e.team.map(l=>s.jsx("div",{className:r.memberBlock,children:s.jsx(ae,{user:l})},l._id))})]}),s.jsxs("div",{className:r.subtasksBlock,children:[s.jsxs("div",{className:r.substasksTitle,children:[s.jsx(b,{className:r.titleSecondary,children:"Sub-tasks"}),s.jsx("div",{style:{background:t.background},className:r.subtasksProgress,children:s.jsxs("span",{style:{color:t.isLight?"#000":"#fff"},className:r.subtasksProgressValue,children:[a.toFixed(2),"%"]})})]}),s.jsx("div",{className:r.subtasks,children:c.map(l=>s.jsx(pe,{...l},l._id))})]})]})}),Pe="_overlay_1c19u_1",De="_modal_1c19u_14",Le="_image_1c19u_18",$={overlay:Pe,modal:De,image:Le},Ee=({src:e,alt:t,changedValue:a,onClose:c})=>{const[l,o]=n.useState(!0),h=()=>{o(!1)};return n.useEffect(()=>{o(!0)},[e]),s.jsx(Z,{changedValue:a,onClose:c,children:s.jsxs("div",{className:$.modal,onClick:m=>m.stopPropagation(),children:[s.jsx("img",{className:$.image,src:e,alt:t,onLoad:h,style:{display:l?"none":"block"}}),l&&s.jsx(T,{})]})})},Oe=({task:e})=>{const[t,a]=n.useState(null),[c,l]=n.useState(!0);n.useEffect(()=>{var m;if(e.assets&&e.assets.length>0){const k=(m=e==null?void 0:e.assets)==null?void 0:m.map(p=>new Promise(_=>{const d=new Image;d.src=p,d.onload=_,d.onerror=_}));Promise.all(k).then(()=>{l(!1)})}else l(!1)},[e.assets]);const o=n.useCallback(m=>{a(m)},[]),h=n.useCallback(()=>{a(null)},[]);return{selectedImage:t,loading:c,handleImageClick:o,handleCloseModal:h}},ze="_title_dssre_1",Fe="_assetsBlock_dssre_6",we="_assets_dssre_6",qe="_assetsCenter_dssre_17",We="_noAssetsText_dssre_26",Re="_asset_dssre_6",Ve="_supportLinksBlock_dssre_41",Ue="_linksBlock_dssre_42",Ye="_loader_dssre_46",He="_list_dssre_50",Ke="_link_dssre_42",u={title:ze,assetsBlock:Fe,assets:we,assetsCenter:qe,noAssetsText:We,asset:Re,supportLinksBlock:Ve,linksBlock:Ue,loader:Ye,list:He,link:Ke},Ge=({task:e})=>{var m,k,p,_;const{selectedImage:t,loading:a,handleImageClick:c,handleCloseModal:l}=Oe({task:e}),o=((m=e==null?void 0:e.assets)==null?void 0:m.length)>0,h=((k=e==null?void 0:e.links)==null?void 0:k.length)>0;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:u.description,children:[s.jsx(b,{className:u.title,children:"TASK DESCRIPTION"}),s.jsx("p",{children:e.description||"No description added"})]}),s.jsxs("div",{className:u.assetsBlock,children:[s.jsx(b,{className:u.title,children:"Assets"}),s.jsx("div",{className:`${u.assets} ${o?u.assetsCenter:""}`,children:a?s.jsx("div",{className:u.loader,children:s.jsx(T,{})}):o?(p=e==null?void 0:e.assets)==null?void 0:p.map((d,B)=>s.jsx("img",{onClick:()=>c(d),className:u.asset,src:d,alt:`asset ${B}`},`asset-${B}`)):s.jsx("span",{className:u.noAssetsText,children:"No assets available"})})]}),s.jsxs("div",{className:u.linksBlock,children:[s.jsx(b,{className:u.title,children:"Support links"}),s.jsx("div",{className:u.links,children:h?s.jsx("ul",{className:u.list,children:(_=e==null?void 0:e.links)==null?void 0:_.map(d=>s.jsx("li",{className:u.listItem,children:s.jsx("a",{className:u.link,href:d,children:d})},d))}):s.jsx("p",{children:"No links available"})})]}),t&&s.jsx(Ee,{changedValue:t,src:t,alt:"Selected asset",onClose:l})]})},Qe="_taskDetail_15ryv_1",Xe="_block_15ryv_12",M={taskDetail:Qe,block:Xe},Ze=({task:e})=>s.jsxs("section",{className:M.taskDetail,children:[s.jsx("article",{className:M.block,children:s.jsx(Ae,{task:e})}),s.jsx("article",{className:M.block,children:s.jsx(Ge,{task:e})})]});function Je(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 5h8"},child:[]},{tag:"path",attr:{d:"M13 9h5"},child:[]},{tag:"path",attr:{d:"M13 15h8"},child:[]},{tag:"path",attr:{d:"M13 19h5"},child:[]},{tag:"path",attr:{d:"M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"},child:[]},{tag:"path",attr:{d:"M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"},child:[]}]})(e)}const st="_titleBlock_1sayq_1",et="_title_1sayq_1",tt="_backIcon_1sayq_12",at="_tabs_1sayq_28",ct="_content_1sayq_32",f={titleBlock:st,title:et,backIcon:tt,tabs:at,content:ct},mt=()=>{const{id:e}=I.useParams(),[t,a]=n.useState(1),c=n.useMemo(()=>[{id:1,title:"Task details",icon:s.jsx(Je,{}),Component:Ze},{id:2,title:"Activities/Timeline",icon:s.jsx(ss,{}),Component:Vs}],[]),l={data:c,activeTab:t,setActiveTab:a},o=n.useMemo(()=>es.find(_=>_._id===e),[e]),h=n.useMemo(()=>{var _;return(_=c.find(d=>d.id===t))==null?void 0:_.Component},[t,c]),m=I.useNavigate(),[k,p]=n.useState(!0);return n.useEffect(()=>{h&&setTimeout(()=>p(!1),500)},[h]),s.jsxs("section",{className:f.taskDetail,children:[s.jsxs("div",{onClick:()=>m(-1),className:f.titleBlock,children:[s.jsx(ts,{className:f.backIcon}),s.jsx(b,{className:f.title,children:o==null?void 0:o.title})]}),s.jsx("div",{className:f.tabs,children:s.jsx(as,{...l})}),s.jsx("div",{className:f.content,children:k?s.jsx(T,{}):s.jsx(h,{task:o})})]})};export{mt as default};
