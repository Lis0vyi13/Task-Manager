import{j as s,O as C,Q as $,S as I,U as A,V as M,W as P,r as n,h as D,L as f,m as L,v as z,X as F,B as E,Y as w,Z as q,_ as W,a as y,$ as O,t as R,a0 as U}from"./index-CN_qwv2e.js";import{T as g,M as Y}from"./index-p1i6Uk12.js";import{T as K}from"./index-aanZQK41.js";import{P as G,S as H}from"./index-djUuSoqo.js";import{T as V}from"./index-BUtTjhU9.js";const Q="_icon_zorh8_1",X="_iconStarted_zorh8_13",Z="_iconCompleted_zorh8_17",J="_iconInProgress_zorh8_21",ss="_iconBug_zorh8_25",es="_iconCommented_zorh8_30",m={icon:Q,iconStarted:X,iconCompleted:Z,iconInProgress:J,iconBug:ss,iconCommented:es},ts={commented:s.jsx("div",{className:`${m.icon} ${m.iconCommented}`,children:s.jsx(C,{})}),started:s.jsx("div",{className:`${m.icon} ${m.iconStarted}`,children:s.jsx($,{})}),assigned:s.jsx("div",{className:`${m.icon} ${m.iconAssigned}`,children:s.jsx(I,{})}),bug:s.jsx("div",{className:`${m.icon} ${m.iconBug}`,children:s.jsx(A,{size:24})}),completed:s.jsx("div",{className:`${m.icon} ${m.iconCompleted}`,children:s.jsx(M,{size:24})}),"in progress":s.jsx("div",{className:`${m.icon} ${m.iconInProgress}`,children:s.jsx(P,{size:16})})},as="_activity_9dkdd_1",cs="_iconBlock_9dkdd_6",ns="_icon_9dkdd_6",os="_lineBlock_9dkdd_19",ls="_line_9dkdd_19",is="_info_9dkdd_29",rs="_username_9dkdd_33",ds="_typeDateBlock_9dkdd_39",ms="_type_9dkdd_39",_s="_date_9dkdd_51",us="_activityText_9dkdd_57",_={activity:as,iconBlock:cs,icon:ns,lineBlock:os,line:ls,info:is,username:rs,typeDateBlock:ds,type:ms,date:_s,activityText:us},hs=n.memo(({activity:e})=>{const t=n.useMemo(()=>{var a;return(a=D.users.find(c=>c._id===e.by))==null?void 0:a.name},[e.by]);return s.jsxs("div",{className:_.activity,children:[s.jsxs("div",{className:_.iconBlock,children:[s.jsx("div",{className:_.icon,children:ts[e.type]}),s.jsx("div",{className:_.lineBlock,children:s.jsx("div",{className:_.line})})]}),s.jsxs("div",{className:_.info,children:[s.jsx("h3",{className:_.username,children:t||s.jsx(f,{})}),s.jsxs("div",{className:_.typeDateBlock,children:[s.jsx("span",{className:_.type,children:e.type}),s.jsx("span",{className:_.date,children:L(e.date).fromNow()})]}),s.jsx("h1",{className:_.activityText,children:e.activity})]})]})}),xs="_addActivityForm_5m6dm_1",ks="_label_5m6dm_5",js="_selectBlock_5m6dm_10",gs="_select_5m6dm_10",bs="_textareaBlock_5m6dm_39",ps="_textarea_5m6dm_39",Ns="_submitButton_5m6dm_91",vs="_errorText_5m6dm_98",k={addActivityForm:xs,label:ks,selectBlock:js,select:gs,textareaBlock:bs,textarea:ps,submitButton:Ns,errorText:vs},Bs=()=>{const{register:e,handleSubmit:t,reset:a,formState:{errors:c}}=z(),o=l=>{console.log(l),a()};return s.jsxs("form",{onSubmit:t(o),className:k.addActivityForm,children:[s.jsxs("div",{className:k.selectBlock,children:[s.jsx("p",{className:k.label,children:"Type:"}),s.jsx("select",{id:"type",...e("type",{required:!0}),className:k.select,children:F.map(l=>s.jsx("option",{value:l,children:l},l))}),c.type&&s.jsx("p",{className:k.errorText,children:"Please select a type."})]}),(c==null?void 0:c.type)&&s.jsx("p",{className:k.errorText,children:"Please select a type."}),s.jsxs("div",{className:k.textareaBlock,children:[s.jsx("textarea",{placeholder:"Type...",className:k.textarea,...e("activity",{required:!0}),name:"activity"}),c.activity&&s.jsx("p",{className:k.errorText,children:"Please enter an activity."})]}),s.jsx(E,{className:k.submitButton,type:"submit",children:"Submit"})]})},fs="_activitiesWrapper_9deir_1",Ts="_title_9deir_14",ys="_activities_9deir_1",Ss="_left_9deir_25",Cs="_right_9deir_29",N={activitiesWrapper:fs,title:Ts,activities:ys,left:Ss,right:Cs},$s=({task:e})=>{var t;return s.jsxs("section",{className:N.activitiesWrapper,children:[s.jsxs("article",{className:N.left,children:[s.jsx(g,{className:N.title,children:"Activities"}),s.jsx("div",{className:N.activities,children:((t=e==null?void 0:e.activities)==null?void 0:t.length)>0?e.activities.map(a=>s.jsx(hs,{activity:a},a._id)):"No activities added"})]}),s.jsxs("article",{className:N.right,children:[s.jsx(g,{className:N.title,children:"Add activity"}),s.jsx(Bs,{})]})]})};function Is(e){let t,a,c=0;return e<50?(t=255,a=Math.round(255*(e/50))):(t=Math.round(255*(1-(e-50)/50)),a=255),{background:`rgb(${t}, ${a}, ${c})`,isLight:(t+a+c)/3>128}}const As=({task:e})=>{const{subTasks:t}=n.useMemo(()=>e,[e]),a=n.useMemo(()=>t.filter(l=>l.done).length,[t]),c=n.useMemo(()=>a>0?Math.round(a/t.length*100):0,[a,t.length]);return{progressColor:n.useMemo(()=>Is(c),[c]),subtasksProgress:c,subTasks:t}},Ms="_status_kt5py_1",Ps="_uppercase_kt5py_7",Ds={status:Ms,uppercase:Ps},Ls=({priority:e})=>{const t=n.useMemo(()=>w[e],[e]),a=n.useMemo(()=>e==="normal"?"1px solid #000":"unset",[e]);return s.jsx("div",{style:{backgroundColor:t,border:a},className:Ds.status,children:s.jsx(G,{style:{textTransform:"uppercase",fontWeight:"bold"},priority:e,withAddition:!0})})},zs="_avatar_mgm8r_1",Fs="_info_mgm8r_12",Es="_userInfo_mgm8r_18",ws="_name_mgm8r_25",qs="_role_mgm8r_29",Ws="_member_mgm8r_33",b={avatar:zs,info:Fs,userInfo:Es,name:ws,role:qs,member:Ws},Os=({user:e})=>s.jsxs("div",{className:b.member,children:[s.jsx(V,{...e,className:b.avatar,avatarClassName:b.avatar,infoClassName:b.info,team:[e]}),s.jsxs("div",{className:b.userInfo,children:[s.jsx("p",{className:b.name,children:e.name}),s.jsx("span",{className:b.role,children:e.role})]})]}),Rs="_subtask_177fb_1",Us="_subtaskIcon_177fb_6",Ys="_header_177fb_21",Ks="_date_177fb_28",Gs="_tags_177fb_34",Hs="_tag_177fb_34",Vs="_doneTag_177fb_50",Qs="_subtaskTitle_177fb_55",Xs="_done_177fb_50",Zs="_undone_177fb_63",Js="_button_177fb_67",r={subtask:Rs,subtaskIcon:Us,header:Ys,date:Ks,tags:Gs,tag:Hs,doneTag:Vs,subtaskTitle:Qs,done:Xs,undone:Zs,button:Js},se=({title:e,date:t,tag:a,done:c})=>{const o=n.useCallback(()=>{},[]);return s.jsxs("div",{className:r.subtask,children:[s.jsx("div",{className:r.subtaskIcon,children:s.jsx(q,{style:{color:"rgb(124,58,237)"},size:26})}),s.jsxs("div",{className:r.subtaskInfo,children:[s.jsxs("header",{className:r.header,children:[s.jsx("span",{className:r.date,children:new Date(t).toDateString()}),s.jsxs("div",{className:r.tags,children:[s.jsx("span",{className:r.tag,children:a}),c&&s.jsx("span",{className:`${r.doneTag} ${r.tag}`,children:"Done"})]})]}),s.jsx("main",{className:r.main,children:s.jsx("p",{className:r.subtaskTitle,children:e})}),s.jsx("footer",{className:r.footer,children:s.jsx("button",{onClick:o,className:`${c?r.undone:r.done} ${r.button}`,children:c?"Mark as Undone":"Mark as Done"})})]})]})},ee="_taskInfo_1n651_1",te="_priorityStageBlock_1n651_6",ae="_stageBlock_1n651_13",ce="_stage_1n651_13",ne="_createdAtBlock_1n651_24",oe="_createdAt_1n651_24",le="_assetsSubTasksBlock_1n651_34",ie="_teamBlock_1n651_46",re="_subtasksBlock_1n651_47",de="_titleSecondary_1n651_51",me="_memberBlock_1n651_57",_e="_substasksTitle_1n651_62",ue="_subtasksProgress_1n651_68",he="_subtasks_1n651_47",i={taskInfo:ee,priorityStageBlock:te,stageBlock:ae,stage:ce,createdAtBlock:ne,createdAt:oe,assetsSubTasksBlock:le,teamBlock:ie,subtasksBlock:re,titleSecondary:de,memberBlock:me,substasksTitle:_e,subtasksProgress:ue,subtasks:he},xe=n.memo(({task:e})=>{const{progressColor:t,subtasksProgress:a,subTasks:c}=As({task:e});return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:i.taskInfo,children:[s.jsxs("div",{className:i.priorityStageBlock,children:[s.jsx(Ls,{priority:e.priority}),s.jsxs("div",{className:i.stageBlock,children:[s.jsx(H,{stage:e.stage}),s.jsx("span",{className:i.stage,children:e.stage})]})]}),s.jsx("div",{className:i.createdAtBlock,children:s.jsxs("span",{className:i.createdAt,children:["Created at: ",new Date(e.createdAt).toDateString()]})})]}),s.jsxs("div",{className:i.assetsSubTasksBlock,children:[s.jsxs("span",{children:["Assets: ",e.assets.length]}),s.jsx("span",{children:"|"}),s.jsxs("span",{children:["Sub-Tasks: ",e.subTasks.length]})]}),s.jsxs("div",{className:i.teamBlock,children:[s.jsx(g,{className:i.titleSecondary,children:"TASK TEAM"}),s.jsx("div",{className:i.team,children:e.team.map(o=>s.jsx("div",{className:i.memberBlock,children:s.jsx(Os,{user:o})},o._id))})]}),s.jsxs("div",{className:i.subtasksBlock,children:[s.jsxs("div",{className:i.substasksTitle,children:[s.jsx(g,{className:i.titleSecondary,children:"Sub-tasks"}),s.jsx("div",{style:{background:t.background},className:i.subtasksProgress,children:s.jsxs("span",{style:{color:t.isLight?"#000":"#fff"},className:i.subtasksProgressValue,children:[a.toFixed(2),"%"]})})]}),s.jsx("div",{className:i.subtasks,children:c.map(o=>s.jsx(se,{...o},o._id))})]})]})}),ke="_overlay_1c19u_1",je="_modal_1c19u_14",ge="_image_1c19u_18",S={overlay:ke,modal:je,image:ge},be=({src:e,alt:t,onClose:a})=>{const[c,o]=n.useState(!0),l=()=>{o(!1)};return n.useEffect(()=>{o(!0)},[e]),s.jsx(Y,{onClose:a,children:s.jsxs("div",{className:S.modal,onClick:u=>u.stopPropagation(),children:[s.jsx("img",{className:S.image,src:e,alt:t,onLoad:l,style:{display:c?"none":"block"}}),c&&s.jsx(f,{})]})})},pe=({task:e})=>{const[t,a]=n.useState(null),[c,o]=n.useState(!0);n.useEffect(()=>{var j;if(e.assets&&e.assets.length>0){const p=(j=e==null?void 0:e.assets)==null?void 0:j.map(h=>new Promise(x=>{const B=new Image;B.src=h,B.onload=x,B.onerror=x}));Promise.all(p).then(()=>{o(!1)})}else o(!1)},[e.assets]);const l=n.useCallback(j=>{a(j)},[]),u=n.useCallback(()=>{a(null)},[]);return{selectedImage:t,loading:c,handleImageClick:l,handleCloseModal:u}},Ne="_title_dssre_1",ve="_assetsBlock_dssre_6",Be="_assets_dssre_6",fe="_assetsCenter_dssre_17",Te="_noAssetsText_dssre_26",ye="_asset_dssre_6",Se="_supportLinksBlock_dssre_41",Ce="_linksBlock_dssre_42",$e="_loader_dssre_46",Ie="_list_dssre_50",Ae="_link_dssre_42",d={title:Ne,assetsBlock:ve,assets:Be,assetsCenter:fe,noAssetsText:Te,asset:ye,supportLinksBlock:Se,linksBlock:Ce,loader:$e,list:Ie,link:Ae},Me=({task:e})=>{var u,j,p;const{selectedImage:t,loading:a,handleImageClick:c,handleCloseModal:o}=pe({task:e}),l=((u=e==null?void 0:e.assets)==null?void 0:u.length)>0;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:d.description,children:[s.jsx(g,{className:d.title,children:"TASK DESCRIPTION"}),s.jsx("p",{children:e.description||"No description added"})]}),s.jsxs("div",{className:d.assetsBlock,children:[s.jsx(g,{className:d.title,children:"Assets"}),s.jsx("div",{className:`${d.assets} ${l?d.assetsCenter:""}`,children:a?s.jsx("div",{className:d.loader,children:s.jsx(f,{})}):l?(j=e==null?void 0:e.assets)==null?void 0:j.map((h,x)=>s.jsx("img",{onClick:()=>c(h),className:d.asset,src:h,alt:`asset ${x}`},`asset-${x}`)):s.jsx("span",{className:d.noAssetsText,children:"No assets available"})})]}),s.jsxs("div",{className:d.linksBlock,children:[s.jsx(g,{className:d.title,children:"Support links"}),s.jsx("div",{className:d.links,children:l?s.jsx("ul",{className:d.list,children:(p=e==null?void 0:e.links)==null?void 0:p.map(h=>s.jsx("li",{className:d.listItem,children:s.jsx("a",{className:d.link,href:h,children:h})},h))}):s.jsx("p",{children:"No links available"})})]}),t&&s.jsx(be,{src:t,alt:"Selected asset",onClose:o})]})},Pe="_taskDetail_1i6o4_1",De="_block_1i6o4_13",T={taskDetail:Pe,block:De},Le=({task:e})=>s.jsxs("section",{className:T.taskDetail,children:[s.jsx("article",{className:T.block,children:s.jsx(xe,{task:e})}),s.jsx("article",{className:T.block,children:s.jsx(Me,{task:e})})]});function ze(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 5h8"},child:[]},{tag:"path",attr:{d:"M13 9h5"},child:[]},{tag:"path",attr:{d:"M13 15h8"},child:[]},{tag:"path",attr:{d:"M13 19h5"},child:[]},{tag:"path",attr:{d:"M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"},child:[]},{tag:"path",attr:{d:"M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"},child:[]}]})(e)}const Fe="_titleBlock_1sayq_1",Ee="_title_1sayq_1",we="_backIcon_1sayq_12",qe="_tabs_1sayq_28",We="_content_1sayq_32",v={titleBlock:Fe,title:Ee,backIcon:we,tabs:qe,content:We},Ge=()=>{const{id:e}=y.useParams(),[t,a]=n.useState(1),c=n.useMemo(()=>[{id:1,title:"Task details",icon:s.jsx(ze,{}),Component:Le},{id:2,title:"Activities/Timeline",icon:s.jsx(O,{}),Component:$s}],[]),o={data:c,activeTab:t,setActiveTab:a},l=n.useMemo(()=>R.find(x=>x._id===e),[e]),u=n.useMemo(()=>{var x;return(x=c.find(B=>B.id===t))==null?void 0:x.Component},[t,c]),j=y.useNavigate(),[p,h]=n.useState(!0);return n.useEffect(()=>{u&&setTimeout(()=>h(!1),500)},[u]),s.jsxs("section",{className:v.taskDetail,children:[s.jsxs("div",{onClick:()=>j(-1),className:v.titleBlock,children:[s.jsx(U,{className:v.backIcon}),s.jsx(g,{className:v.title,children:l==null?void 0:l.title})]}),s.jsx("div",{className:v.tabs,children:s.jsx(K,{...o})}),s.jsx("div",{className:v.content,children:p?s.jsx(f,{}):s.jsx(u,{task:l})})]})};export{Ge as default};