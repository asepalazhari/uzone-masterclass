(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7028],{54367:function(e,a,l){Promise.resolve().then(l.bind(l,19721)),Promise.resolve().then(l.bind(l,96936)),Promise.resolve().then(l.bind(l,11583)),Promise.resolve().then(l.bind(l,67222)),Promise.resolve().then(l.bind(l,62196))},62196:function(e,a,l){"use strict";l.r(a);var s=l(57437),i=l(2265),t=l(1881),r=l(80588),n=l(66577),u=l(61415),d=l(71342),o=l(13565),m=l(49135),c=l(23253),h=l(71126);a.default=()=>{let[e]=t.Z.useForm(),[a,l]=r.ZP.useMessage(),[I,b]=i.useState(!1),[j,p]=i.useState(!0),[N,v]=i.useState(""),[J,x]=i.useState(""),[M,W]=i.useState([]),{Dragger:Z}=n.default,{TextArea:f}=u.default,{data:g}=(0,h.useSession)(),A=[{sekolah:"SMK MULIA BUANA",juara:[{value:"juara_1",label:"Ocelleoo"},{value:"juara_2",label:"rai_220707"},{value:"juara_3",label:"alsasaky12"}]},{sekolah:"SMAN 1 CITEUREUP",juara:[{value:"juara_1",label:"wnda_psrbu"},{value:"juara_2",label:"babyla.enthusiast"},{value:"juara_3",label:"n.m.p_13"}]},{sekolah:"SMK 1 PKP JAKARTA",juara:[{value:"juara_1",label:"hnsdna"},{value:"juara_2",label:"fr3m.project"},{value:"juara_3",label:"faaiqfds"}]},{sekolah:"SMK TELKOM JAKARTA",juara:[{value:"juara_1",label:"cindyauria_"},{value:"juara_2",label:"mlyztaz"},{value:"juara_3",label:"bbja_07"}]}],F=async l=>{b(!0),l.url_video="".concat("https://sun.uzone.id/masterclass/","api/v1/cms/media/show?filename=").concat(N);let s=await (0,m.Z)("POST","".concat("https://sun.uzone.id/masterclass/","api/v1/cms/karya-siswa/"),l,{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QzQGdtYWlsLmNvbSIsImVtYWlsIjoidGVzdDNAZ21haWwuY29tIiwidXNlcmRhdGEiOnsiaWQiOiJTVEQtNjY1ZmRiNWQtZjFhNS00M2MyLWFkYWItNWU3MmRhIiwibmlzIjoiMjMyNDIzNDIzNCIsIm1pZGRsZV9uYW1lIjpudWxsLCJlbWFpbCI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjQtMDctMDNUMTA6NTA6MjkiLCJkZWxldGVkX2F0IjpudWxsLCJjbGFzc2VzX2lkIjpudWxsLCJuYW1hX2xlbmdrYXAiOiJBbGF6aGFyaSIsImlkX3VzZXIiOiJVU1ItNzU5NDJlNmUtYzNiNS00ODY5LWI3MWEtMGY2M2JiIiwiZmlyc3RfbmFtZSI6bnVsbCwibGFzdF9uYW1lIjpudWxsLCJhc2FsX3Nla29sYWgiOiJTTUEgSmFrYXJ0YSIsInVwZGF0ZWRfYXQiOm51bGwsImFkZHJlc3NfaWQiOm51bGx9LCJleHAiOjE3MjQ4MTg5MDh9.vbnRoOf6HwcXDiuAQtdF76NCNJ_F2bVWeOJodsJGwhQ")});if(b(!1),(null==s?void 0:s.status)==201)a.open({type:"success",content:s.data.message,duration:5}),e.resetFields();else{var i;a.open({type:"error",content:null==s?void 0:null===(i=s.data)||void 0===i?void 0:i.message,duration:8})}};return(0,s.jsxs)("div",{className:"w-full bg-[#FDF8EE]",children:[l,(0,s.jsxs)("div",{className:"lg:col-span-7 max-w-full lg:max-w-[67rem] mx-auto",children:[(0,s.jsx)("div",{className:"p-5 text-base font-bold text-center",children:(0,s.jsx)("p",{children:"Upload Video"})}),(0,s.jsxs)(t.Z,{name:"register",form:e,className:"max-w-xs !mx-auto !pb-5",onFinish:F,children:[(0,s.jsx)(t.Z.Item,{name:"nama_sekolah",rules:[{required:!0,message:"Please input your school name!"}],children:(0,s.jsx)(d.Z,{size:"large",placeholder:"Pilih Sekolah",onChange:e=>{p(!1),W(A.filter(a=>a.sekolah===e))},options:[{value:"SMK TELKOM JAKARTA",label:"SMK TELKOM JAKARTA"},{value:"SMK MULIA BUANA",label:"SMK MULIA BUANA"},{value:"SMAN 1 CITEUREUP",label:"SMAN 1 CITEUREUP"},{value:"SMK 1 PKP JAKARTA",label:"SMK 1 PKP JAKARTA"}]})}),(0,s.jsx)(t.Z.Item,{name:"juara",rules:[{required:!0,message:"Please select win"}],children:(0,s.jsx)(d.Z,{size:"large",placeholder:"Pilih Juara",onChange:a=>{var l,s;x("".concat(a," - ").concat(null===(l=M[0])||void 0===l?void 0:l.juara.filter(e=>e.value==a)[0].label)),e.setFieldValue("nama_instagram",null===(s=M[0])||void 0===s?void 0:s.juara.filter(e=>e.value==a)[0].label)},disabled:j,options:[{value:"juara_1",label:"Juara 1"},{value:"juara_2",label:"Juara 2"},{value:"juara_3",label:"Juara 3"}]})}),(0,s.jsx)(t.Z.Item,{name:"nama_instagram",rules:[{required:!0,message:"Please input a nama instagram!"}],children:(0,s.jsx)(u.default,{size:"large",readOnly:!0,placeholder:"Username Instagram"})}),(0,s.jsx)(t.Z.Item,{name:"nama_siswa",rules:[{required:!0,message:"Please input a nama!"}],children:(0,s.jsx)(u.default,{size:"large",disabled:j,placeholder:"Nama"})}),(0,s.jsx)(t.Z.Item,{name:"nomor_telepon",rules:[{required:!0,message:"Please input your phone number!"}],children:(0,s.jsx)(u.default,{type:"number",size:"large",disabled:j,placeholder:"Nomor Telepon"})}),(0,s.jsx)(t.Z.Item,{name:"email",rules:[{required:!1,type:"email",message:"Please input your email"}],children:(0,s.jsx)(u.default,{type:"email",disabled:j,size:"large",placeholder:"Email"})}),(0,s.jsx)(t.Z.Item,{name:"upload",rules:[{required:!1,message:"Please input your email"}],children:(0,s.jsxs)(Z,{name:"file",action:"".concat("https://sun.uzone.id/masterclass/","api/v1/cms/media/"),headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QzQGdtYWlsLmNvbSIsImVtYWlsIjoidGVzdDNAZ21haWwuY29tIiwidXNlcmRhdGEiOnsiaWQiOiJTVEQtNjY1ZmRiNWQtZjFhNS00M2MyLWFkYWItNWU3MmRhIiwibmlzIjoiMjMyNDIzNDIzNCIsIm1pZGRsZV9uYW1lIjpudWxsLCJlbWFpbCI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjQtMDctMDNUMTA6NTA6MjkiLCJkZWxldGVkX2F0IjpudWxsLCJjbGFzc2VzX2lkIjpudWxsLCJuYW1hX2xlbmdrYXAiOiJBbGF6aGFyaSIsImlkX3VzZXIiOiJVU1ItNzU5NDJlNmUtYzNiNS00ODY5LWI3MWEtMGY2M2JiIiwiZmlyc3RfbmFtZSI6bnVsbCwibGFzdF9uYW1lIjpudWxsLCJhc2FsX3Nla29sYWgiOiJTTUEgSmFrYXJ0YSIsInVwZGF0ZWRfYXQiOm51bGwsImFkZHJlc3NfaWQiOm51bGx9LCJleHAiOjE3MjQ4MTg5MDh9.vbnRoOf6HwcXDiuAQtdF76NCNJ_F2bVWeOJodsJGwhQ")},data:{title:J},maxCount:1,disabled:j,accept:"*",onChange(e){"done"===e.file.status&&(v(e.file.response.data.media_filename),a.open({type:"success",content:"Data berhasil di upload"}))},children:[(0,s.jsx)("p",{className:"ant-upload-drag-icon",children:(0,s.jsx)(c.tw,{className:"mx-auto h-7 w-7"})}),(0,s.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,s.jsx)("p",{className:"ant-upload-hint",children:"Support for a single file"})]})}),(0,s.jsx)(t.Z.Item,{name:"caption_video",rules:[{required:!1,message:"Please input your email"}],children:(0,s.jsx)(f,{rows:3,placeholder:"Caption Video",size:"large",disabled:j})}),(0,s.jsx)(t.Z.Item,{children:(0,s.jsx)(o.ZP,{danger:!0,block:!0,size:"large",disabled:j,loading:I,type:"primary",htmlType:"submit",className:"w-full bg-[#F04438] hover:bg-red-800",children:"Send"})})]})]})]})}},49135:function(e,a,l){"use strict";l.d(a,{Z:function(){return i}});var s=l(73107);async function i(e,a,l,i){try{return await (0,s.Z)("GET"==e?{validateStatus:()=>!1,method:e,headers:i,url:a,params:l}:{validateStatus:()=>!1,method:e,headers:i,url:a,data:l}).catch(e=>e.response)}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}}},function(e){e.O(0,[2306,2420,3082,9982,9098,429,1126,2698,1537,3565,1618,6624,588,2355,3107,3080,8792,1749,577,1881,4456,1725,9154,1342,6577,4925,2971,8069,1744],function(){return e(e.s=54367)}),_N_E=e.O()}]);