(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{6164:function(e,t,a){Promise.resolve().then(a.bind(a,12972))},92503:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var n=a(2265),r=a(20653),l=a(16480),o=a.n(l),i=a(44329),s=a(35704),c=a(57499),u=a(97676),d=a(91460),p=a(55614),m=a(13565),f=a(51350),v=a(70595),g=a(91657),h=a(63834),x=a(64872);let b=e=>{let{componentCls:t,iconCls:a,antCls:n,zIndexPopup:r,colorText:l,colorWarning:o,marginXXS:i,marginXS:s,fontSize:c,fontWeightStrong:u,colorTextHeading:d}=e;return{[t]:{zIndex:r,[`&${n}-popover`]:{fontSize:c},[`${t}-message`]:{marginBottom:s,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${t}-message-icon ${a}`]:{color:o,fontSize:c,lineHeight:1,marginInlineEnd:s},[`${t}-title`]:{fontWeight:u,color:d,"&:only-child":{fontWeight:"normal"}},[`${t}-description`]:{marginTop:i,color:l}},[`${t}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:s}}}}};var y=(0,x.I$)("Popconfirm",e=>b(e),e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}},{resetStyle:!1}),j=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};let E=e=>{let{prefixCls:t,okButtonProps:a,cancelButtonProps:l,title:i,description:s,cancelText:u,okText:h,okType:x="primary",icon:b=n.createElement(r.Z,null),showCancel:y=!0,close:j,onConfirm:E,onCancel:O,onPopupClick:w}=e,{getPrefixCls:C}=n.useContext(c.E_),[S]=(0,v.Z)("Popconfirm",g.Z.Popconfirm),N=(0,p.Z)(i),Z=(0,p.Z)(s);return n.createElement("div",{className:"".concat(t,"-inner-content"),onClick:w},n.createElement("div",{className:"".concat(t,"-message")},b&&n.createElement("span",{className:"".concat(t,"-message-icon")},b),n.createElement("div",{className:"".concat(t,"-message-text")},N&&n.createElement("div",{className:o()("".concat(t,"-title"))},N),Z&&n.createElement("div",{className:"".concat(t,"-description")},Z))),n.createElement("div",{className:"".concat(t,"-buttons")},y&&n.createElement(m.ZP,Object.assign({onClick:O,size:"small"},l),u||(null==S?void 0:S.cancelText)),n.createElement(d.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,f.nx)(x)),a),actionFn:E,close:j,prefixCls:C("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},h||(null==S?void 0:S.okText))))};var O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};let w=n.forwardRef((e,t)=>{var a,l;let{prefixCls:d,placement:p="top",trigger:m="click",okType:f="primary",icon:v=n.createElement(r.Z,null),children:g,overlayClassName:h,onOpenChange:x,onVisibleChange:b}=e,j=O(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:w}=n.useContext(c.E_),[C,S]=(0,i.Z)(!1,{value:null!==(a=e.open)&&void 0!==a?a:e.visible,defaultValue:null!==(l=e.defaultOpen)&&void 0!==l?l:e.defaultVisible}),N=(e,t)=>{S(e,!0),null==b||b(e),null==x||x(e,t)},Z=w("popconfirm",d),k=o()(Z,h),[P]=y(Z);return P(n.createElement(u.Z,Object.assign({},(0,s.Z)(j,["title"]),{trigger:m,placement:p,onOpenChange:(t,a)=>{let{disabled:n=!1}=e;n||N(t,a)},open:C,ref:t,overlayClassName:k,content:n.createElement(E,Object.assign({okType:f,icon:v},e,{prefixCls:Z,close:e=>{N(!1,e)},onConfirm:t=>{var a;return null===(a=e.onConfirm)||void 0===a?void 0:a.call(void 0,t)},onCancel:t=>{var a;N(!1,t),null===(a=e.onCancel)||void 0===a||a.call(void 0,t)}})),"data-popover-inject":!0}),g))});w._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:t,placement:a,className:r,style:l}=e,i=j(e,["prefixCls","placement","className","style"]),{getPrefixCls:s}=n.useContext(c.E_),u=s("popconfirm",t),[d]=y(u);return d(n.createElement(h.ZP,{placement:a,className:o()(u,r),style:l,content:n.createElement(E,Object.assign({prefixCls:u},i))}))};var C=w},12972:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(57437),r=a(2265),l=a(65270),o=a(6180),i=a(92503),s=a(13565),c=a(80588),u=a(42154),d=a(47867),p=a(49135),m=a(89539),f=a.n(m),v=a(71126),g=a(47907),h=a(58856),x=a(73107);function b(e){let{evidence:t,alt:a}=e,[l,o]=(0,r.useState)(!1),[i,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(!1),p=(0,r.useRef)(null),{data:m}=(0,v.useSession)();(0,r.useEffect)(()=>{let e=async()=>{try{var e;let a=(await x.Z.get(t,{responseType:"blob",headers:{Authorization:"Bearer ".concat(null==m?void 0:null===(e=m.user)||void 0===e?void 0:e.access_token)}})).data;if(a instanceof Blob){let e=URL.createObjectURL(a);c(e)}}catch(e){}};m&&l&&e()},[t,m,l]);let f=()=>{p.current&&p.current.pause(),o(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.ZP,{className:"px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700",size:"small",onClick:()=>o(!0),children:"Show Video"}),(0,n.jsx)(h.Z,{title:"Video Preview",open:l,onCancel:f,footer:[(0,n.jsx)(s.ZP,{danger:!0,onClick:f,className:"px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700",children:"Close"},"close")],closable:!1,className:"max-w-3xl ".concat(u?"h-[90vh]":"h-auto"," "),centered:!0,children:i?(0,n.jsx)("div",{className:"relative w-full",children:(0,n.jsx)("video",{ref:p,src:i,controls:!0,className:"w-full ".concat(u?"max-h-[80vh]":"h-auto"," object-contain"),onLoadedMetadata:()=>{if(p.current){let{videoWidth:e,videoHeight:t}=p.current;d(t>e)}}})}):(0,n.jsx)("div",{className:"flex items-center justify-center h-48",children:"Loading..."})})]})}function y(){(0,g.useRouter)();let[e,t]=r.useState(0),a=[{title:"Nama Sekolah",dataIndex:"nama_sekolah"},{title:"Juara",dataIndex:"juara"},{title:"Nama Siswa",dataIndex:"nama_siswa"},{title:"Nama Instagram",dataIndex:"nama_instagram"},{title:"Video",dataIndex:"media_url",render:(e,t)=>{let{url_video:a,title:r}=t;return(0,n.jsx)(n.Fragment,{children:a?(0,n.jsx)(b,{evidence:a,alt:r}):""})}},{title:"Created Date",dataIndex:"created_at",render:(e,t)=>{let{created_at:a}=t;return(0,n.jsx)(n.Fragment,{children:f()(a).format("DD MMM YYYY, hh:mm")})}},{title:"Action",key:"action",render:(e,t)=>(0,n.jsx)(l.Z,{size:"middle",children:(0,n.jsx)(o.Z,{title:"delete",children:(0,n.jsx)(i.Z,{title:"Delete data",placement:"left",description:"Are you sure to delete this data?",onConfirm:()=>S(t.id),okText:"Yes",cancelText:"No",children:(0,n.jsx)(s.ZP,{shape:"circle",icon:(0,n.jsx)(d.v_0,{className:"w-5 h-5 text-red-500"})})})})})}],[m,h]=r.useState(),[x,y]=r.useState(!1),[j,E]=c.ZP.useMessage();(0,g.useSearchParams)();let[O,w]=r.useState({pagination:{current:1,pageSize:10,total:0}}),{data:C}=(0,v.useSession)(),S=async e=>{var a;let n=await (0,p.Z)("DELETE","".concat("https://sun.uzone.id/masterclass/","api/v1/cms/karya-siswa/?id=").concat(e),{},{accept:"application/json",Authorization:"Bearer ".concat(null==C?void 0:null===(a=C.user)||void 0===a?void 0:a.access_token)});j.open({type:"success",content:n.data.message}),t(Math.random())};return r.useEffect(()=>{let e=async()=>{var e;y(!0);let t=await (0,p.Z)("GET","".concat("https://sun.uzone.id/masterclass/","api/v1/cms/karya-siswa/"),{page:O.pagination.current,limit:O.pagination.pageSize},{accept:"application/json",Authorization:"Bearer ".concat(null==C?void 0:null===(e=C.user)||void 0===e?void 0:e.access_token)});y(!1),h(t.data.data.daftar_karya_siswa),w({...O,pagination:{...O.pagination,total:t.data.data.total}})};C&&e()},[O.pagination.current,O.pagination.pageSize,e,C]),(0,n.jsxs)(n.Fragment,{children:[E,(0,n.jsx)(u.Z,{size:"small",columns:a,dataSource:m,loading:x,pagination:O.pagination,onChange:e=>{var t;w({pagination:e}),e.pageSize!==(null===(t=O.pagination)||void 0===t?void 0:t.pageSize)&&h(null)},bordered:!0,footer:()=>"Total: ".concat(O.pagination.total||0),scroll:{x:"max-content"},className:"min-w-full"})]})}},49135:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(73107);async function r(e,t,a,r){try{return await (0,n.Z)("GET"==e?{validateStatus:()=>!1,method:e,headers:r,url:t,params:a}:{validateStatus:()=>!1,method:e,headers:r,url:t,data:a}).catch(e=>e.response)}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}}},function(e){e.O(0,[5104,9098,429,1126,2698,1537,3565,1618,6624,588,2355,3107,3080,577,4456,1342,2154,2971,8069,1744],function(){return e(e.s=6164)}),_N_E=e.O()}]);