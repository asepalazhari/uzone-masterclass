(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{6164:function(e,t,a){Promise.resolve().then(a.bind(a,12972))},92503:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var n=a(2265),r=a(20653),l=a(16480),o=a.n(l),i=a(44329),s=a(35704),c=a(57499),d=a(97676),u=a(91460),p=a(55614),m=a(13565),f=a(51350),h=a(70595),v=a(91657),g=a(63834),x=a(64872);let b=e=>{let{componentCls:t,iconCls:a,antCls:n,zIndexPopup:r,colorText:l,colorWarning:o,marginXXS:i,marginXS:s,fontSize:c,fontWeightStrong:d,colorTextHeading:u}=e;return{[t]:{zIndex:r,[`&${n}-popover`]:{fontSize:c},[`${t}-message`]:{marginBottom:s,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${t}-message-icon ${a}`]:{color:o,fontSize:c,lineHeight:1,marginInlineEnd:s},[`${t}-title`]:{fontWeight:d,color:u,"&:only-child":{fontWeight:"normal"}},[`${t}-description`]:{marginTop:i,color:l}},[`${t}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:s}}}}};var y=(0,x.I$)("Popconfirm",e=>b(e),e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}},{resetStyle:!1}),j=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};let E=e=>{let{prefixCls:t,okButtonProps:a,cancelButtonProps:l,title:i,description:s,cancelText:d,okText:g,okType:x="primary",icon:b=n.createElement(r.Z,null),showCancel:y=!0,close:j,onConfirm:E,onCancel:O,onPopupClick:w}=e,{getPrefixCls:C}=n.useContext(c.E_),[N]=(0,h.Z)("Popconfirm",v.Z.Popconfirm),S=(0,p.Z)(i),Z=(0,p.Z)(s);return n.createElement("div",{className:"".concat(t,"-inner-content"),onClick:w},n.createElement("div",{className:"".concat(t,"-message")},b&&n.createElement("span",{className:"".concat(t,"-message-icon")},b),n.createElement("div",{className:"".concat(t,"-message-text")},S&&n.createElement("div",{className:o()("".concat(t,"-title"))},S),Z&&n.createElement("div",{className:"".concat(t,"-description")},Z))),n.createElement("div",{className:"".concat(t,"-buttons")},y&&n.createElement(m.ZP,Object.assign({onClick:O,size:"small"},l),d||(null==N?void 0:N.cancelText)),n.createElement(u.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,f.nx)(x)),a),actionFn:E,close:j,prefixCls:C("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},g||(null==N?void 0:N.okText))))};var O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};let w=n.forwardRef((e,t)=>{var a,l;let{prefixCls:u,placement:p="top",trigger:m="click",okType:f="primary",icon:h=n.createElement(r.Z,null),children:v,overlayClassName:g,onOpenChange:x,onVisibleChange:b}=e,j=O(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:w}=n.useContext(c.E_),[C,N]=(0,i.Z)(!1,{value:null!==(a=e.open)&&void 0!==a?a:e.visible,defaultValue:null!==(l=e.defaultOpen)&&void 0!==l?l:e.defaultVisible}),S=(e,t)=>{N(e,!0),null==b||b(e),null==x||x(e,t)},Z=w("popconfirm",u),k=o()(Z,g),[P]=y(Z);return P(n.createElement(d.Z,Object.assign({},(0,s.Z)(j,["title"]),{trigger:m,placement:p,onOpenChange:(t,a)=>{let{disabled:n=!1}=e;n||S(t,a)},open:C,ref:t,overlayClassName:k,content:n.createElement(E,Object.assign({okType:f,icon:h},e,{prefixCls:Z,close:e=>{S(!1,e)},onConfirm:t=>{var a;return null===(a=e.onConfirm)||void 0===a?void 0:a.call(void 0,t)},onCancel:t=>{var a;S(!1,t),null===(a=e.onCancel)||void 0===a||a.call(void 0,t)}})),"data-popover-inject":!0}),v))});w._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:t,placement:a,className:r,style:l}=e,i=j(e,["prefixCls","placement","className","style"]),{getPrefixCls:s}=n.useContext(c.E_),d=s("popconfirm",t),[u]=y(d);return u(n.createElement(g.ZP,{placement:a,className:o()(d,r),style:l,content:n.createElement(E,Object.assign({prefixCls:d},i))}))};var C=w},12972:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(57437),r=a(2265),l=a(65270),o=a(6180),i=a(13565),s=a(92503),c=a(80588),d=a(42154),u=a(47867),p=a(49135),m=a(89539),f=a.n(m),h=a(71126),v=a(47907),g=a(58856),x=a(73107);function b(e){let{evidence:t,alt:a}=e,[l,o]=(0,r.useState)(!1),[s,c]=(0,r.useState)(""),[d,u]=(0,r.useState)(!1),p=(0,r.useRef)(null),{data:m}=(0,h.useSession)();(0,r.useEffect)(()=>{let e=async()=>{try{var e;let a=(await x.Z.get(t,{responseType:"blob",headers:{Authorization:"Bearer ".concat(null==m?void 0:null===(e=m.user)||void 0===e?void 0:e.access_token)}})).data;if(a instanceof Blob){let e=URL.createObjectURL(a);c(e)}}catch(e){}};m&&l&&e()},[t,m,l]);let f=()=>{p.current&&p.current.pause(),o(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.ZP,{className:"px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700",size:"small",onClick:()=>o(!0),children:"Show Video"}),(0,n.jsx)(g.Z,{title:"Video Preview",open:l,onCancel:f,footer:[(0,n.jsx)(i.ZP,{danger:!0,onClick:f,className:"px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700",children:"Close"},"close")],closable:!1,className:"max-w-3xl ".concat(d?"h-[90vh]":"h-auto"," "),centered:!0,children:s?(0,n.jsx)("div",{className:"relative w-full",children:(0,n.jsx)("video",{ref:p,src:s,controls:!0,className:"w-full ".concat(d?"h-auto":"max-h-[90vh]"," object-contain"),onLoadedMetadata:()=>{if(p.current){let{videoWidth:e,videoHeight:t}=p.current;u(t>e)}}})}):(0,n.jsx)("div",{className:"flex items-center justify-center h-48",children:"Loading..."})})]})}function y(){let e=(0,v.useRouter)(),[t,a]=r.useState(0),m=[{title:"Nama Sekolah",dataIndex:"nama_sekolah"},{title:"Juara",dataIndex:"juara"},{title:"Nama Siswa",dataIndex:"nama_siswa"},{title:"Nama Instagram",dataIndex:"nama_instagram"},{title:"Video",dataIndex:"media_url",render:(e,t)=>{let{url_video:a,title:r}=t;return(0,n.jsx)(n.Fragment,{children:a?(0,n.jsx)(b,{evidence:a,alt:r}):""})}},{title:"Created Date",dataIndex:"created_at",render:(e,t)=>{let{created_at:a}=t;return(0,n.jsx)(n.Fragment,{children:f()(a).format("DD MMM YYYY, hh:mm")})}},{title:"Action",key:"action",render:(t,a)=>(0,n.jsxs)(l.Z,{size:"middle",children:[(0,n.jsx)(o.Z,{title:"edit",children:(0,n.jsx)(i.ZP,{shape:"circle",onClick:()=>e.push("/dashboard/video/edit?aa=".concat(a.id)),icon:(0,n.jsx)(u.FNg,{className:"w-5 h-5 text-sky-700"})})}),(0,n.jsx)(o.Z,{title:"delete",children:(0,n.jsx)(s.Z,{title:"Delete data",placement:"left",description:"Are you sure to delete this data?",onConfirm:()=>S(a.id),okText:"Yes",cancelText:"No",children:(0,n.jsx)(i.ZP,{shape:"circle",icon:(0,n.jsx)(u.v_0,{className:"w-5 h-5 text-red-500"})})})})]})}],[g,x]=r.useState(),[y,j]=r.useState(!1),[E,O]=c.ZP.useMessage();(0,v.useSearchParams)();let[w,C]=r.useState({pagination:{current:1,pageSize:10,total:0}}),{data:N}=(0,h.useSession)(),S=async e=>{var t;let n=await (0,p.Z)("DELETE","".concat("https://sun.uzone.id/masterclass/","api/v1/cms/karya-siswa/?id=").concat(e),{},{accept:"application/json",Authorization:"Bearer ".concat(null==N?void 0:null===(t=N.user)||void 0===t?void 0:t.access_token)});E.open({type:"success",content:n.data.message}),a(Math.random())};return r.useEffect(()=>{let e=async()=>{var e;j(!0);let t=await (0,p.Z)("GET","".concat("https://sun.uzone.id/masterclass/","api/v1/cms/karya-siswa/"),{page:w.pagination.current,limit:w.pagination.pageSize},{accept:"application/json",Authorization:"Bearer ".concat(null==N?void 0:null===(e=N.user)||void 0===e?void 0:e.access_token)});j(!1),x(t.data.data.daftar_karya_siswa),C({...w,pagination:{...w.pagination,total:t.data.data.total}})};N&&e()},[w.pagination.current,w.pagination.pageSize,t,N]),(0,n.jsxs)(n.Fragment,{children:[O,(0,n.jsx)(d.Z,{size:"small",columns:m,dataSource:g,loading:y,pagination:w.pagination,onChange:e=>{var t;C({pagination:e}),e.pageSize!==(null===(t=w.pagination)||void 0===t?void 0:t.pageSize)&&x(null)},bordered:!0,footer:()=>"Total: ".concat(w.pagination.total||0),scroll:{x:"max-content"},className:"min-w-full"})]})}},49135:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(73107);async function r(e,t,a,r){try{return await (0,n.Z)("GET"==e?{validateStatus:()=>!1,method:e,headers:r,url:t,params:a}:{validateStatus:()=>!1,method:e,headers:r,url:t,data:a}).catch(e=>e.response)}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}}},function(e){e.O(0,[5104,9098,429,1126,2698,1537,3565,1618,6624,588,2355,3107,3080,577,4456,1342,2154,2971,8069,1744],function(){return e(e.s=6164)}),_N_E=e.O()}]);