(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4711],{78465:function(n,e,t){"use strict";t.d(e,{M:function(){return _}});var o,r,i,a=t(2265),s=t(74404),c=function(){return(c=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},u={onActivate:s.func,onAddUndo:s.func,onBeforeAddUndo:s.func,onBeforeExecCommand:s.func,onBeforeGetContent:s.func,onBeforeRenderUI:s.func,onBeforeSetContent:s.func,onBeforePaste:s.func,onBlur:s.func,onChange:s.func,onClearUndos:s.func,onClick:s.func,onContextMenu:s.func,onCommentChange:s.func,onCompositionEnd:s.func,onCompositionStart:s.func,onCompositionUpdate:s.func,onCopy:s.func,onCut:s.func,onDblclick:s.func,onDeactivate:s.func,onDirty:s.func,onDrag:s.func,onDragDrop:s.func,onDragEnd:s.func,onDragGesture:s.func,onDragOver:s.func,onDrop:s.func,onExecCommand:s.func,onFocus:s.func,onFocusIn:s.func,onFocusOut:s.func,onGetContent:s.func,onHide:s.func,onInit:s.func,onInput:s.func,onKeyDown:s.func,onKeyPress:s.func,onKeyUp:s.func,onLoadContent:s.func,onMouseDown:s.func,onMouseEnter:s.func,onMouseLeave:s.func,onMouseMove:s.func,onMouseOut:s.func,onMouseOver:s.func,onMouseUp:s.func,onNodeChange:s.func,onObjectResizeStart:s.func,onObjectResized:s.func,onObjectSelected:s.func,onPaste:s.func,onPostProcess:s.func,onPostRender:s.func,onPreProcess:s.func,onProgressState:s.func,onRedo:s.func,onRemove:s.func,onReset:s.func,onSaveContent:s.func,onSelectionChange:s.func,onSetAttrib:s.func,onSetContent:s.func,onShow:s.func,onSubmit:s.func,onUndo:s.func,onVisualAid:s.func,onSkinLoadError:s.func,onThemeLoadError:s.func,onModelLoadError:s.func,onPluginLoadError:s.func,onIconsLoadError:s.func,onLanguageLoadError:s.func,onScriptsLoad:s.func,onScriptsLoadError:s.func},l=c({apiKey:s.string,licenseKey:s.string,id:s.string,inline:s.bool,init:s.object,initialValue:s.string,onEditorChange:s.func,value:s.string,tagName:s.string,tabIndex:s.number,cloudChannel:s.string,plugins:s.oneOfType([s.string,s.array]),toolbar:s.oneOfType([s.string,s.array]),disabled:s.bool,textareaName:s.string,tinymceScriptSrc:s.oneOfType([s.string,s.arrayOf(s.string),s.arrayOf(s.shape({src:s.string,async:s.bool,defer:s.bool}))]),rollback:s.oneOfType([s.number,s.oneOf([!1])]),scriptLoading:s.shape({async:s.bool,defer:s.bool,delay:s.number})},u),p=function(n){return"function"==typeof n},d=function(n){return n in u},f=function(n){return n.substr(2)},h=function(n,e,t,o,r,i,a){var s=Object.keys(r).filter(d),c=Object.keys(i).filter(d),u=s.filter(function(n){return void 0===i[n]}),l=c.filter(function(n){return void 0===r[n]});u.forEach(function(n){var e=f(n),o=a[e];t(e,o),delete a[e]}),l.forEach(function(t){var r=o(n,t),i=f(t);a[i]=r,e(i,r)})},v=0,y=function(n){var e=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++v+String(e)},g=function(n){return null!==n&&("textarea"===n.tagName.toLowerCase()||"input"===n.tagName.toLowerCase())},m=function(n){return void 0===n||""===n?[]:Array.isArray(n)?n:n.split(" ")},b=function(n){if(!("isConnected"in Node.prototype)){for(var e=n,t=n.parentNode;null!=t;)t=(e=t).parentNode;return e===n.ownerDocument}return n.isConnected},C=function(n,e){void 0!==n&&(null!=n.mode&&"object"==typeof n.mode&&"function"==typeof n.mode.set?n.mode.set(e):n.setMode(e))},E=function(){return(E=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},S=function(n,e,t){var o,r,i=n.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=e.id,i.src=e.src,i.async=null!==(o=e.async)&&void 0!==o&&o,i.defer=null!==(r=e.defer)&&void 0!==r&&r;var a=function(){i.removeEventListener("load",a),i.removeEventListener("error",s),t(e.src)},s=function(n){i.removeEventListener("load",a),i.removeEventListener("error",s),t(e.src,n)};i.addEventListener("load",a),i.addEventListener("error",s),n.head&&n.head.appendChild(i)},k=function(n){var e={},t=function(n,t){var o=e[n];o.done=!0,o.error=t;for(var r=0,i=o.handlers;r<i.length;r++)(0,i[r])(n,t);o.handlers=[]};return{loadScripts:function(o,r,i){var a=function(n){return void 0!==i?i(n):console.error(n)};if(0===o.length){a(Error("At least one script must be provided"));return}for(var s=0,c=!1,u=function(n,e){c||(e?(c=!0,a(e)):++s===o.length&&r())},l=0;l<o.length;l++){var p=o[l],d=e[p.src];if(d)d.done?u(p.src,d.error):d.handlers.push(u);else{var f=y("tiny-");e[p.src]={id:f,src:p.src,done:!1,error:null,handlers:[u]},S(n,E({id:f},p),t)}}},deleteScripts:function(){for(var t,o=0,r=Object.values(e);o<r.length;o++){var i=r[o],a=n.getElementById(i.id);null!=a&&"SCRIPT"===a.tagName&&(null===(t=a.parentNode)||void 0===t||t.removeChild(a))}e={}},getDocument:function(){return n}}},O=(o=[],r=function(n){var e=o.find(function(e){return e.getDocument()===n});return void 0===e&&(e=k(n),o.push(e)),e},{loadList:function(n,e,t,o,i){var a=function(){return r(n).loadScripts(e,o,i)};t>0?setTimeout(a,t):a()},reinitialize:function(){for(var n=o.pop();null!=n;n=o.pop())n.deleteScripts()}}),I=function(n){return n&&n.tinymce?n.tinymce:null},w=(i=function(n,e){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])})(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}i(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),T=function(){return(T=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},_=function(n){function e(e){var t,o,r,i=n.call(this,e)||this;return i.rollbackTimer=void 0,i.valueCursor=void 0,i.rollbackChange=function(){var n=i.editor,e=i.props.value;n&&e&&e!==i.currentContent&&n.undoManager.ignore(function(){if(n.setContent(e),i.valueCursor&&(!i.inline||n.hasFocus()))try{n.selection.moveToBookmark(i.valueCursor)}catch(n){}}),i.rollbackTimer=void 0},i.handleBeforeInput=function(n){if(void 0!==i.props.value&&i.props.value===i.currentContent&&i.editor&&(!i.inline||i.editor.hasFocus()))try{i.valueCursor=i.editor.selection.getBookmark(3)}catch(n){}},i.handleBeforeInputSpecial=function(n){("Enter"===n.key||"Backspace"===n.key||"Delete"===n.key)&&i.handleBeforeInput(n)},i.handleEditorChange=function(n){var e=i.editor;if(e&&e.initialized){var t=e.getContent();void 0===i.props.value||i.props.value===t||!1===i.props.rollback||i.rollbackTimer||(i.rollbackTimer=window.setTimeout(i.rollbackChange,"number"==typeof i.props.rollback?i.props.rollback:200)),t!==i.currentContent&&(i.currentContent=t,p(i.props.onEditorChange)&&i.props.onEditorChange(t,e))}},i.handleEditorChangeSpecial=function(n){("Backspace"===n.key||"Delete"===n.key)&&i.handleEditorChange(n)},i.initialise=function(n){void 0===n&&(n=0);var e,t,o,r,a,s=i.elementRef.current;if(s){if(!b(s)){if(0===n)setTimeout(function(){return i.initialise(1)},1);else if(n<100)setTimeout(function(){return i.initialise(n+1)},100);else throw Error("tinymce can only be initialised when in a document");return}var c=I(i.view);if(!c)throw Error("tinymce should have been loaded into global scope");var u=T(T(T(T({},i.props.init),{selector:void 0,target:s,readonly:i.props.disabled,inline:i.inline,plugins:(e=null===(o=i.props.init)||void 0===o?void 0:o.plugins,t=i.props.plugins,m(e).concat(m(t))),toolbar:null!==(r=i.props.toolbar)&&void 0!==r?r:null===(a=i.props.init)||void 0===a?void 0:a.toolbar}),i.props.licenseKey?{license_key:i.props.licenseKey}:{}),{setup:function(n){i.editor=n,i.bindHandlers({}),i.inline&&!g(s)&&n.once("PostRender",function(e){n.setContent(i.getInitialValue(),{no_events:!0})}),i.props.init&&p(i.props.init.setup)&&i.props.init.setup(n)},init_instance_callback:function(n){var e,t,o=i.getInitialValue();i.currentContent=null!==(e=i.currentContent)&&void 0!==e?e:n.getContent(),i.currentContent!==o&&(i.currentContent=o,n.setContent(o),n.undoManager.clear(),n.undoManager.add(),n.setDirty(!1));var r=null!==(t=i.props.disabled)&&void 0!==t&&t;C(i.editor,r?"readonly":"design"),i.props.init&&p(i.props.init.init_instance_callback)&&i.props.init.init_instance_callback(n)}});i.inline||(s.style.visibility=""),g(s)&&(s.value=i.getInitialValue()),c.init(u)}},i.id=i.props.id||y("tiny-react"),i.elementRef=a.createRef(),i.inline=null!==(r=null!==(t=i.props.inline)&&void 0!==t?t:null===(o=i.props.init)||void 0===o?void 0:o.inline)&&void 0!==r&&r,i.boundHandlers={},i}return w(e,n),Object.defineProperty(e.prototype,"view",{get:function(){var n,e;return null!==(e=null===(n=this.elementRef.current)||void 0===n?void 0:n.ownerDocument.defaultView)&&void 0!==e?e:window},enumerable:!1,configurable:!0}),e.prototype.componentDidUpdate=function(n){var e,t,o=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=null!==(e=this.currentContent)&&void 0!==e?e:this.editor.getContent(),"string"==typeof this.props.initialValue&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"==typeof this.props.value&&this.props.value!==this.currentContent){var r=this.editor;r.undoManager.transact(function(){if(!o.inline||r.hasFocus())try{n=r.selection.getBookmark(3)}catch(n){}var n,e=o.valueCursor;if(r.setContent(o.props.value),!o.inline||r.hasFocus())for(var t=0,i=[n,e];t<i.length;t++){var a=i[t];if(a)try{r.selection.moveToBookmark(a),o.valueCursor=a;break}catch(n){}}})}if(this.props.disabled!==n.disabled){var i=null!==(t=this.props.disabled)&&void 0!==t&&t;C(this.editor,i?"readonly":"design")}}},e.prototype.componentDidMount=function(){var n,e,t,o,r,i=this;null!==I(this.view)?this.initialise():Array.isArray(this.props.tinymceScriptSrc)&&0===this.props.tinymceScriptSrc.length?null===(e=(n=this.props).onScriptsLoadError)||void 0===e||e.call(n,Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array.")):(null===(t=this.elementRef.current)||void 0===t?void 0:t.ownerDocument)&&O.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),null!==(r=null===(o=this.props.scriptLoading)||void 0===o?void 0:o.delay)&&void 0!==r?r:0,function(){var n,e;null===(e=(n=i.props).onScriptsLoad)||void 0===e||e.call(n),i.initialise()},function(n){var e,t;null===(t=(e=i.props).onScriptsLoadError)||void 0===t||t.call(e,n)})},e.prototype.componentWillUnmount=function(){var n=this,e=this.editor;e&&(e.off(this.changeEvents(),this.handleEditorChange),e.off(this.beforeInputEvent(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(t){e.off(t,n.boundHandlers[t])}),this.boundHandlers={},e.remove(),this.editor=void 0)},e.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},e.prototype.changeEvents=function(){var n,e,t;return(null===(t=null===(e=null===(n=I(this.view))||void 0===n?void 0:n.Env)||void 0===e?void 0:e.browser)||void 0===t?void 0:t.isIE())?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},e.prototype.beforeInputEvent=function(){return window.InputEvent&&"function"==typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},e.prototype.renderInline=function(){var n=this.props.tagName;return a.createElement(void 0===n?"div":n,{ref:this.elementRef,id:this.id,tabIndex:this.props.tabIndex})},e.prototype.renderIframe=function(){return a.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id,tabIndex:this.props.tabIndex})},e.prototype.getScriptSources=function(){var n,e,t=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.async,o=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.defer;if(void 0!==this.props.tinymceScriptSrc)return"string"==typeof this.props.tinymceScriptSrc?[{src:this.props.tinymceScriptSrc,async:t,defer:o}]:this.props.tinymceScriptSrc.map(function(n){return"string"==typeof n?{src:n,async:t,defer:o}:n});var r=this.props.cloudChannel,i=this.props.apiKey?this.props.apiKey:"no-api-key";return[{src:"https://cdn.tiny.cloud/1/".concat(i,"/tinymce/").concat(r,"/tinymce.min.js"),async:t,defer:o}]},e.prototype.getInitialValue=function(){return"string"==typeof this.props.initialValue?this.props.initialValue:"string"==typeof this.props.value?this.props.value:""},e.prototype.bindHandlers=function(n){var e=this;if(void 0!==this.editor){t=this.editor,o=this.props,r=this.boundHandlers,h(function(n){return e.props[n]},t.on.bind(t),t.off.bind(t),function(n,e){return function(o){var r;return null===(r=n(e))||void 0===r?void 0:r(o,t)}},n,o,r);var t,o,r,i=function(n){return void 0!==n.onEditorChange||void 0!==n.value},a=i(n),s=i(this.props);!a&&s?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):a&&!s&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},e.propTypes=l,e.defaultProps={cloudChannel:"7"},e}(a.Component)},21467:function(n,e,t){"use strict";t.d(e,{i:function(){return s}});var o=t(2265),r=t(44329),i=t(54165),a=t(57499);function s(n){return e=>o.createElement(i.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},o.createElement(n,Object.assign({},e)))}e.Z=(n,e,t,i)=>s(s=>{let{prefixCls:c,style:u}=s,l=o.useRef(null),[p,d]=o.useState(0),[f,h]=o.useState(0),[v,y]=(0,r.Z)(!1,{value:s.open}),{getPrefixCls:g}=o.useContext(a.E_),m=g(e||"select",c);o.useEffect(()=>{if(y(!0),"undefined"!=typeof ResizeObserver){let n=new ResizeObserver(n=>{let e=n[0].target;d(e.offsetHeight+8),h(e.offsetWidth)}),e=setInterval(()=>{var o;let r=t?".".concat(t(m)):".".concat(m,"-dropdown"),i=null===(o=l.current)||void 0===o?void 0:o.querySelector(r);i&&(clearInterval(e),n.observe(i))},10);return()=>{clearInterval(e),n.disconnect()}}},[]);let b=Object.assign(Object.assign({},s),{style:Object.assign(Object.assign({},u),{margin:0}),open:v,visible:v,getPopupContainer:()=>l.current});return i&&(b=i(b)),o.createElement("div",{ref:l,style:{paddingBottom:p,position:"relative",minWidth:f}},o.createElement(n,Object.assign({},b)))})},18314:function(n,e,t){"use strict";var o=t(41811);function r(){}function i(){}i.resetWarningCache=r,n.exports=function(){function n(n,e,t,r,i,a){if(a!==o){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},74404:function(n,e,t){n.exports=t(18314)()},41811:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);