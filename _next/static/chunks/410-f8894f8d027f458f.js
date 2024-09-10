(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{46468:function(e,t,n){"use strict";var i=n(49079),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.isEdgeRuntime=t.isBrowser=t.isWebWorker=t.isNetlify=t.isVercel=t.isVercelIntegration=t.Version=void 0;let o=r(n(95510)),a=r(n(54222)),s=r(n(70231));t.Version=n(70062).version,t.isVercelIntegration=i.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT||i.env.AXIOM_INGEST_ENDPOINT,t.isVercel=i.env.NEXT_PUBLIC_VERCEL||i.env.VERCEL,t.isNetlify="true"==i.env.NETLIFY,t.isWebWorker="undefined"!=typeof self&&void 0!==globalThis.WorkerGlobalScope&&self instanceof WorkerGlobalScope,t.isBrowser="undefined"!=typeof window||t.isWebWorker,t.isEdgeRuntime=!!globalThis.EdgeRuntime;let u=new o.default;t.config=u,t.isVercelIntegration?t.config=u=new a.default:t.isNetlify&&(t.config=u=new s.default)},95510:function(e,t,n){"use strict";var i=n(49079);Object.defineProperty(t,"__esModule",{value:!0});let r=n(72066),o=n(46468);class a{constructor(){this.proxyPath="/_axiom",this.shouldSendEdgeReport=!1,this.token=i.env.NEXT_PUBLIC_AXIOM_TOKEN||i.env.AXIOM_TOKEN,this.dataset=i.env.NEXT_PUBLIC_AXIOM_DATASET||i.env.AXIOM_DATASET,this.environment="production",this.axiomUrl=i.env.NEXT_PUBLIC_AXIOM_URL||i.env.AXIOM_URL||"https://api.axiom.co",this.region=i.env.REGION||void 0,this.customEndpoint=i.env.NEXT_PUBLIC_AXIOM_CUSTOM_ENDPOINT}isEnvVarsSet(){return!!(this.axiomUrl&&this.dataset&&this.token)||!!this.customEndpoint}getIngestURL(e){return`${this.axiomUrl}/v1/datasets/${this.dataset}/ingest`}getLogsEndpoint(){return o.isBrowser&&this.customEndpoint?this.customEndpoint:o.isBrowser?`${this.proxyPath}/logs`:this.getIngestURL(r.EndpointType.logs)}getWebVitalsEndpoint(){return o.isBrowser&&this.customEndpoint?this.customEndpoint:o.isBrowser?`${this.proxyPath}/web-vitals`:this.getIngestURL(r.EndpointType.webVitals)}wrapWebVitalsObject(e){return e.map(e=>({webVital:e,_time:new Date().getTime(),platform:{environment:this.environment,source:"web-vital"},source:"web-vital"}))}injectPlatformMetadata(e,t){let n="platform";o.isVercel&&(n="vercel"),e.source=t,e[n]={environment:this.environment,region:this.region,source:t},o.isVercel&&(e[n].region=i.env.VERCEL_REGION,e[n].deploymentId=i.env.VERCEL_DEPLOYMENT_ID,e[n].deploymentUrl=i.env.NEXT_PUBLIC_VERCEL_URL,e[n].project=i.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,e.git={commit:i.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,repo:i.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG,ref:i.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF})}getHeaderOrDefault(e,t,n){return e.headers[t]?e.headers[t]:n}}t.default=a},70231:function(e,t,n){"use strict";var i=n(49079),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=r(n(95510)),a=i.env.SITE_ID,s=i.env.BUILD_ID,u=i.env.CONTEXT,c=i.env.DEPLOYMENT_URL,l=i.env.DEPLOYMENT_ID;class f extends o.default{wrapWebVitalsObject(e){return e.map(e=>({webVital:e,_time:new Date().getTime(),netlify:{environment:this.environment,source:"web-vital",siteId:a,buildId:s,context:u,deploymentUrl:c,deploymentId:l}}))}injectPlatformMetadata(e,t){e.netlify={environment:this.environment,region:"edge"===t?i.env.DENO_REGION:i.env.AWS_REGION,source:t,siteId:a,buildId:s,context:u,deploymentUrl:c,deploymentId:"edge"===t?i.env.DENO_DEPLOYMENT_ID:l}}}t.default=f},54222:function(e,t,n){"use strict";var i=n(49079),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=n(46468),a=n(72066),s=r(n(95510)),u=i.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT||i.env.AXIOM_INGEST_ENDPOINT||"";class c extends s.default{constructor(){super(...arguments),this.provider="vercel",this.shouldSendEdgeReport=!0,this.region=i.env.VERCEL_REGION||void 0,this.environment=i.env.VERCEL_ENV||"production",this.token=void 0,this.axiomUrl=u}isEnvVarsSet(){return void 0!=u&&""!=u||!!this.customEndpoint}getIngestURL(e){let t=new URL(this.axiomUrl);return t.searchParams.set("type",e.toString()),t.toString()}getWebVitalsEndpoint(){return o.isBrowser&&this.customEndpoint?this.customEndpoint:`${this.proxyPath}/web-vitals`}getLogsEndpoint(){return o.isBrowser&&this.customEndpoint?this.customEndpoint:o.isBrowser?`${this.proxyPath}/logs`:this.getIngestURL(a.EndpointType.logs)}wrapWebVitalsObject(e){return{webVitals:e,environment:this.environment}}injectPlatformMetadata(e,t){e.vercel={environment:this.environment,region:this.region,source:t}}}t.default=c},72066:function(e,t,n){"use strict";var i,r,o=n(49079);Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=t.EndpointType=t.isNoPrettyPrint=void 0,t.isNoPrettyPrint="true"==o.env.AXIOM_NO_PRETTY_PRINT,(i=r||(t.EndpointType=r={})).webVitals="web-vitals",i.logs="logs",t.throttle=(e,t)=>{let n,i;return function(){let r=this,o=arguments;null==i&&(i=Date.now()),clearTimeout(n),n=setTimeout(()=>{Date.now()-i>=t&&(e.apply(r,o),i=Date.now())},Math.max(t-(Date.now()-i),0))}}},81782:function(e,t,n){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.AxiomWebVitals=void 0;let r=(i=n(2265))&&i.__esModule?i:{default:i},o=n(58166);t.AxiomWebVitals=function(e){let{path:t}=e;return(0,o.useReportWebVitals)(t),r.default.createElement(r.default.Fragment,null)}},58166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useReportWebVitals=t.AxiomWebVitals=void 0;let i=n(47907),r=n(94219),o=n(58427);var a=n(81782);Object.defineProperty(t,"AxiomWebVitals",{enumerable:!0,get:function(){return a.AxiomWebVitals}}),t.useReportWebVitals=function(e){let t=(0,i.usePathname)();(0,r.useReportWebVitals)(n=>(0,o.reportWebVitalsWithPath)(n,e||t))}},58427:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reportWebVitalsWithPath=void 0;let i=n(46468),r=n(72066),o=i.config.getWebVitalsEndpoint(),a=(0,r.throttle)(function(){let e=JSON.stringify(i.config.wrapWebVitalsObject(s)),t={"Content-Type":"application/json","User-Agent":"next-axiom/v"+i.Version};i.config.token&&(t.Authorization=`Bearer ${i.config.token}`);let n={body:e,method:"POST",keepalive:!0,headers:t};function r(){fetch(o,n).catch(console.error)}if(i.isBrowser&&i.isVercelIntegration&&navigator.sendBeacon)try{navigator.sendBeacon.bind(navigator)(o,e)}catch(e){r()}else r();s=[]},1e3),s=[];t.reportWebVitalsWithPath=function(e,t){s.push(Object.assign({route:t},e)),i.config.isEnvVarsSet()&&a()}},66948:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useReportWebVitals",{enumerable:!0,get:function(){return o}});let i=n(2265),r=n(32833);function o(e){(0,i.useEffect)(()=>{(0,r.onCLS)(e),(0,r.onFID)(e),(0,r.onLCP)(e),(0,r.onINP)(e),(0,r.onFCP)(e),(0,r.onTTFB)(e)},[e])}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},32833:function(e){var t,n,i,r,o,a,s,u,c,l,f,d,p,v,m,h,E,g,_,T,y,b,I,P,O,L,w,C,N,V,M,R,S,A,D,U,B,W,x,j,X,k,F,G,$,H;(t={}).d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},void 0!==t&&(t.ab="//"),n={},t.r(n),t.d(n,{getCLS:function(){return I},getFCP:function(){return T},getFID:function(){return V},getINP:function(){return k},getLCP:function(){return G},getTTFB:function(){return H},onCLS:function(){return I},onFCP:function(){return T},onFID:function(){return V},onINP:function(){return k},onLCP:function(){return G},onTTFB:function(){return H}}),u=-1,c=function(e){addEventListener("pageshow",function(t){t.persisted&&(u=t.timeStamp,e(t))},!0)},l=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},f=function(){var e=l();return e&&e.activationStart||0},d=function(e,t){var n=l(),i="navigate";return u>=0?i="back-forward-cache":n&&(i=document.prerendering||f()>0?"prerender":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},p=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var i=new PerformanceObserver(function(e){t(e.getEntries())});return i.observe(Object.assign({type:e,buffered:!0},n||{})),i}}catch(e){}},v=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},m=function(e,t,n,i){var r,o;return function(a){var s;t.value>=0&&(a||i)&&((o=t.value-(r||0))||void 0===r)&&(r=t.value,t.delta=o,t.rating=(s=t.value)>n[1]?"poor":s>n[0]?"needs-improvement":"good",e(t))}},h=-1,E=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},g=function(){v(function(e){h=e.timeStamp},!0)},_=function(){return h<0&&(h=E(),g(),c(function(){setTimeout(function(){h=E(),g()},0)})),{get firstHiddenTime(){return h}}},T=function(e,t){t=t||{};var n,i=[1800,3e3],r=_(),o=d("FCP"),a=function(e){e.forEach(function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<r.firstHiddenTime&&(o.value=e.startTime-f(),o.entries.push(e),n(!0)))})},s=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],u=s?null:p("paint",a);(s||u)&&(n=m(e,o,i,t.reportAllChanges),s&&a([s]),c(function(r){n=m(e,o=d("FCP"),i,t.reportAllChanges),requestAnimationFrame(function(){requestAnimationFrame(function(){o.value=performance.now()-r.timeStamp,n(!0)})})}))},y=!1,b=-1,I=function(e,t){t=t||{};var n=[.1,.25];y||(T(function(e){b=e.value}),y=!0);var i,r=function(t){b>-1&&e(t)},o=d("CLS",0),a=0,s=[],u=function(e){e.forEach(function(e){if(!e.hadRecentInput){var t=s[0],n=s[s.length-1];a&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,s.push(e)):(a=e.value,s=[e]),a>o.value&&(o.value=a,o.entries=s,i())}})},l=p("layout-shift",u);l&&(i=m(r,o,n,t.reportAllChanges),v(function(){u(l.takeRecords()),i(!0)}),c(function(){a=0,b=-1,i=m(r,o=d("CLS",0),n,t.reportAllChanges)}))},P={passive:!0,capture:!0},O=new Date,L=function(e,t){i||(i=t,r=e,o=new Date,N(removeEventListener),w())},w=function(){if(r>=0&&r<o-O){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};a.forEach(function(t){t(e)}),a=[]}},C=function(e){if(e.cancelable){var t,n,i,r=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(t=function(){L(r,e),i()},n=function(){i()},i=function(){removeEventListener("pointerup",t,P),removeEventListener("pointercancel",n,P)},addEventListener("pointerup",t,P),addEventListener("pointercancel",n,P)):L(r,e)}},N=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,C,P)})},V=function(e,t){t=t||{};var n,o=[100,300],s=_(),u=d("FID"),l=function(e){e.startTime<s.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),n(!0))},f=function(e){e.forEach(l)},h=p("first-input",f);n=m(e,u,o,t.reportAllChanges),h&&v(function(){f(h.takeRecords()),h.disconnect()},!0),h&&c(function(){n=m(e,u=d("FID"),o,t.reportAllChanges),a=[],r=-1,i=null,N(addEventListener),a.push(l),w()})},M=0,R=1/0,S=0,A=function(e){e.forEach(function(e){e.interactionId&&(R=Math.min(R,e.interactionId),M=(S=Math.max(S,e.interactionId))?(S-R)/7+1:0)})},D=function(){return s?M:performance.interactionCount||0},U=function(){"interactionCount"in performance||s||(s=p("event",A,{type:"event",buffered:!0,durationThreshold:0}))},B=0,W=function(){return D()-B},x=[],j={},X=function(e){var t=x[x.length-1],n=j[e.interactionId];if(n||x.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var i={id:e.interactionId,latency:e.duration,entries:[e]};j[i.id]=i,x.push(i)}x.sort(function(e,t){return t.latency-e.latency}),x.splice(10).forEach(function(e){delete j[e.id]})}},k=function(e,t){t=t||{};var n=[200,500];U();var i,r=d("INP"),o=function(e){e.forEach(function(e){e.interactionId&&X(e),"first-input"!==e.entryType||x.some(function(t){return t.entries.some(function(t){return e.duration===t.duration&&e.startTime===t.startTime})})||X(e)});var t,n=(t=Math.min(x.length-1,Math.floor(W()/50)),x[t]);n&&n.latency!==r.value&&(r.value=n.latency,r.entries=n.entries,i())},a=p("event",o,{durationThreshold:t.durationThreshold||40});i=m(e,r,n,t.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),v(function(){o(a.takeRecords()),r.value<0&&W()>0&&(r.value=0,r.entries=[]),i(!0)}),c(function(){x=[],B=D(),i=m(e,r=d("INP"),n,t.reportAllChanges)}))},F={},G=function(e,t){t=t||{};var n,i=[2500,4e3],r=_(),o=d("LCP"),a=function(e){var t=e[e.length-1];if(t){var i=t.startTime-f();i<r.firstHiddenTime&&(o.value=i,o.entries=[t],n())}},s=p("largest-contentful-paint",a);if(s){n=m(e,o,i,t.reportAllChanges);var u=function(){F[o.id]||(a(s.takeRecords()),s.disconnect(),F[o.id]=!0,n(!0))};["keydown","click"].forEach(function(e){addEventListener(e,u,{once:!0,capture:!0})}),v(u,!0),c(function(r){n=m(e,o=d("LCP"),i,t.reportAllChanges),requestAnimationFrame(function(){requestAnimationFrame(function(){o.value=performance.now()-r.timeStamp,F[o.id]=!0,n(!0)})})})}},$=function e(t){document.prerendering?addEventListener("prerenderingchange",function(){return e(t)},!0):"complete"!==document.readyState?addEventListener("load",function(){return e(t)},!0):setTimeout(t,0)},H=function(e,t){t=t||{};var n=[800,1800],i=d("TTFB"),r=m(e,i,n,t.reportAllChanges);$(function(){var o=l();if(o){if(i.value=Math.max(o.responseStart-f(),0),i.value<0||i.value>performance.now())return;i.entries=[o],r(!0),c(function(){(r=m(e,i=d("TTFB",0),n,t.reportAllChanges))(!0)})}})},e.exports=n},94219:function(e,t,n){e.exports=n(66948)},70062:function(e){"use strict";e.exports={version:"1.5.1"}}}]);