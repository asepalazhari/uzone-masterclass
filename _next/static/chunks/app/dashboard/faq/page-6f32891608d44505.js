(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[213],{87196:function(a,t,e){Promise.resolve().then(e.bind(e,68521))},68521:function(a,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p}});var n=e(57437),i=e(2265),r=e(80588),s=e(42154),o=e(49135),u=e(89539),l=e.n(u),c=e(71126),d=e(47907);function p(){(0,d.useRouter)();let[a,t]=i.useState(0),[e,u]=i.useState(),[p,g]=i.useState(!1),[m,f]=r.ZP.useMessage(),[h,v]=i.useState({pagination:{current:1,pageSize:10,total:0}}),{data:S}=(0,c.useSession)();return i.useEffect(()=>{let a=async()=>{var a;g(!0);let t=await (0,o.Z)("GET","".concat("https://sun.uzone.id/masterclass/","api/v1/questions/"),{page:h.pagination.current,limit:h.pagination.pageSize},{accept:"application/json",Authorization:"Bearer ".concat(null==S?void 0:null===(a=S.user)||void 0===a?void 0:a.access_token)});g(!1),200==t.status&&u(t.data.data.questions),v({...h,pagination:{...h.pagination,total:t.data.data.total}})};S&&a()},[h.pagination.current,h.pagination.pageSize,a,S]),(0,n.jsxs)(n.Fragment,{children:[f,(0,n.jsx)(s.Z,{size:"small",columns:[{title:"Nama",dataIndex:"nama"},{title:"Email",dataIndex:"email"},{title:"Pertanyaan",dataIndex:"question"},{title:"Created Date",dataIndex:"created_at",render:(a,t)=>{let{created_at:e}=t;return(0,n.jsx)(n.Fragment,{children:l()(e).format("DD MMM YYYY, hh:mm")})}}],dataSource:e,loading:p,pagination:h.pagination,onChange:a=>{var t;v({pagination:a}),a.pageSize!==(null===(t=h.pagination)||void 0===t?void 0:t.pageSize)&&u(null)},bordered:!0,footer:()=>"Total: ".concat(h.pagination.total||0),scroll:{x:"max-content"},className:"min-w-full"})]})}},49135:function(a,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(73107);async function i(a,t,e,i){try{return await (0,n.Z)("GET"==a?{validateStatus:()=>!1,method:a,headers:i,url:t,params:e}:{validateStatus:()=>!1,method:a,headers:i,url:t,data:e}).catch(a=>a.response)}catch(a){return{data:a,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}}},function(a){a.O(0,[9098,429,1126,2698,1537,3565,1618,6624,588,2355,3107,3080,1342,2154,2971,8069,1744],function(){return a(a.s=87196)}),_N_E=a.O()}]);