(this.webpackJsonpmight=this.webpackJsonpmight||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),i=n.n(o),c=(n(91),n(92),n(13)),l=n(24),s=n(144),d=n(2);function u(){return Object(d.jsx)(l.b,{to:"stepper/rifle",children:Object(d.jsx)(s.a,{variant:"contained",color:"primary",children:"Hello World"})})}var b=n(149),j=n(15),h=n(16),p=n(38),m=n(147);n(107);var O=function(e){var t=e.meta,n=t.submitError,r=t.dirtySinceLastSubmit,a=t.error,o=t.touched,i=t.modified;return!(!(n&&!r||a)||!o&&!i)},f=function(e){var t=e.input,n=t.name,r=t.value,a=t.type,o=t.onChange,i=Object(p.a)(t,["name","value","type","onChange"]),c=e.meta,l=e.color,s=e.required,u=e.fullWidth,b=void 0===u||u,j=e.helperText,f=e.showError,v=void 0===f?O:f,x=Object(p.a)(e,["input","meta","color","required","fullWidth","helperText","showError"]),g=c.error,y=c.submitError,w=v({meta:c});return Object(d.jsx)(m.a,Object(h.a)({style:{marginTop:8,marginBottom:8},fullWidth:b,helperText:w?g||y:j,error:w,color:l,onChange:o,name:n,value:r,type:a,required:s,inputProps:Object(h.a)({required:s},i)},x))},v=n(17),x="SAVE_FORM_VALUES",g=localStorage.getItem("store"),y=g?JSON.parse(g):{},w=y.hasOwnProperty("userForm")?y.userForm:{direction:"left"};var S=n(148),T=Object(S.a)({root:{borderRadius:8,padding:"10px 2rem",textTransform:"capitalize",margin:".5rem"}});function E(e){var t=T();return Object(d.jsx)(s.a,Object(h.a)(Object(h.a)({},e),{},{className:t.root,children:e.children}))}var W,k=function(e){var t=e.disabled,n=void 0!==t&&t,r=e.onDiscard,a=Object(c.f)();return Object(d.jsx)("div",{className:"step__buttons",children:Object(d.jsxs)(b.a,{item:!0,style:{marginTop:16},children:[Object(d.jsx)(s.a,{className:"step__button",onClick:function(){return r||a.goBack()},children:"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"}),Object(d.jsx)(E,{className:"step__button",variant:"contained",color:"primary",type:"submit",disabled:!n,children:"\u0412\u0432\u0435\u0441\u0442\u0438"})]})})},C=n(110),_=n(112),V=n(160),N=n(150),q=n(159),F=function(e){console.log(e);var t=e.input,n=t.name,r=t.value,a=t.onChange,o=e.meta,i=(e.color,e.required,e.fullWidth),c=void 0===i||i,l=(e.helperText,e.defaultValue),s=e.showError,u=void 0===s?O:s,b=e.label,j=e.options,m=Object(p.a)(e,["input","meta","color","required","fullWidth","helperText","defaultValue","showError","label","options"]),f=u({meta:o});return Object(d.jsxs)(C.a,{component:"fieldset",fullWidth:c,style:{marginTop:8,marginBottom:8},children:[Object(d.jsx)(_.a,{component:"legend",children:b}),f,Object(d.jsx)(V.a,Object(h.a)(Object(h.a)({name:n,defaultValue:l,value:r,onChange:a},m),{},{children:j.map((function(e){var t=e.label,n=e.value;return Object(d.jsx)(N.a,{value:n,control:Object(d.jsx)(q.a,{}),label:t},t)}))}))]})},A=function(e){var t={direction:void 0,twist:void 0};return e.direction||(t.direction="Required"),e.twist||(t.twist="Required"),t},P=function(){var e=Object(v.b)(),t=Object(c.f)(),n=Object(v.c)((function(e){return e.userForm}));return Object(d.jsx)(j.b,{onSubmit:function(n){e({type:x,payload:n}),t.push("/stepper/charge")},validate:A,initialValues:n,render:function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,noValidate:!0,autoComplete:"off",children:[Object(d.jsx)(b.a,{container:!0,alignItems:"flex-start",spacing:0,children:Object(d.jsx)(j.a,{name:"direction",variant:"outlined",color:"secondary",component:F,label:"\u041d\u0430\u0440\u0456\u0437\u0438:",placeholder:"",options:[{label:"\u041b\u0456\u0432\u043e",value:"left"},{label:"\u041f\u0440\u0430\u0432\u043e",value:"right"}]})}),Object(d.jsx)(j.a,{name:"twist",variant:"outlined",color:"secondary",label:"\u0422\u0432\u0456\u0441\u0442",placeholder:"",required:!0,component:f}),Object(d.jsx)(k,{disabled:e.valid})]})}})},R=(n(104),n(158)),B=n(113);function L(e){var t=e.title,n=e.description,r=e.content;return Object(d.jsxs)("div",{className:"step",children:[Object(d.jsx)(R.a,{flexGrow:"1",children:Object(d.jsx)(B.a,{variant:"h4",children:t})}),Object(d.jsx)(B.a,{color:"textSecondary",children:n}),Object(d.jsx)(R.a,{display:"flex",flexDirection:"column",paddingTop:"2rem",children:r})]})}!function(e){e[e.rifle=0]="rifle",e[e.charge=1]="charge",e[e.optics=2]="optics",e[e.weather=3]="weather",e[e.goal=4]="goal",e[e.amendments=5]="amendments"}(W||(W={}));var I=n(58),D=n(111),U=n(114),z=n(161),J=function(e){var t=e.input,n=t.name,r=t.value,a=t.onChange,o=e.meta,i=(e.color,e.required),c=e.fullWidth,l=void 0===c||c,s=(e.helperText,e.defaultValue),u=void 0===s?{label:"None",value:""}:s,b=e.showError,j=void 0===b?O:b,m=e.label,f=e.options,v=void 0===f?[]:f,x=Object(p.a)(e,["input","meta","color","required","fullWidth","helperText","defaultValue","showError","label","options"]),g=[u].concat(Object(I.a)(v)),y=j({meta:o});return Object(d.jsxs)(C.a,{component:"fieldset",fullWidth:l,style:{marginTop:8,marginBottom:8},children:[Object(d.jsx)(D.a,{children:m}),y,Object(d.jsx)(U.a,Object(h.a)(Object(h.a)({name:n,value:r,displayEmpty:!0,onChange:a,required:i},x),{},{children:g.map((function(e){var t=e.label,n=e.value;return Object(d.jsx)(z.a,{value:n,children:t},t)}))}))]})};function M(){var e=Object(v.b)(),t=Object(c.f)(),n=Object(v.c)((function(e){return e.userForm}));return Object(d.jsx)(j.b,{onSubmit:function(n){e({type:x,payload:n}),t.push("/stepper/optics")},initialValues:n,render:function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,noValidate:!0,autoComplete:"off",children:[Object(d.jsx)(j.a,{name:"length",variant:"outlined",color:"secondary",label:"\u0414\u043e\u0432\u0436\u0438\u043d\u0430:",placeholder:"180",component:f}),Object(d.jsx)(j.a,{name:"speed",variant:"outlined",color:"secondary",component:f,label:"\u0428\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c:",placeholder:"800"}),Object(d.jsx)(j.a,{name:"weight",variant:"outlined",color:"secondary",component:f,label:"\u0412\u0430\u0433\u0430:",placeholder:""}),Object(d.jsx)(j.a,{name:"caliber",variant:"outlined",color:"secondary",component:J,label:"\u041a\u0430\u043b\u0456\u0431\u0440:",options:[{value:"308",label:".308"},{value:"221",label:".22lr"},{value:"223",label:".223 rem"},{value:"7.62",label:"7,62x39mm"}]}),Object(d.jsx)(j.a,{name:"ballistics",variant:"outlined",color:"secondary",component:f,label:"\u0411\u0430\u043b\u0456\u0441\u0442\u0438\u0447\u043d\u0438\u0439 \u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0435\u043d\u0442:",placeholder:"7.62x39"}),Object(d.jsx)(k,{disabled:e.valid})]})}})}function G(){var e=Object(v.b)(),t=Object(c.f)(),n=Object(v.c)((function(e){return e.userForm}));return Object(d.jsx)(j.b,{onSubmit:function(n){e({type:x,payload:n}),t.push("/table")},initialValues:n,render:function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,noValidate:!0,autoComplete:"off",children:[Object(d.jsx)(j.a,{name:"distance",variant:"outlined",color:"secondary",label:"\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0456\u044f \u043f\u0440\u0438\u0441\u0442\u0440\u0456\u043b\u043a\u0438:",placeholder:"\u043c\u0435\u0442\u0440\u0456\u0432",component:f}),Object(d.jsx)(j.a,{name:"height_above_thunk",variant:"outlined",color:"secondary",label:"\u0412\u0438\u0441\u043e\u0442\u0430 \u043f\u0440\u0438\u0446\u0456\u043b\u0443 \u043d\u0430\u0434 \u0441\u0442\u0432\u043e\u043b\u043e\u043c:",placeholder:"\u0441\u043c",component:f}),Object(d.jsx)(j.a,{name:"vertical_step",variant:"outlined",color:"secondary",label:"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u043e\u043a:",component:J,required:!0,options:[{value:"mil",label:"mil"},{value:"moa",label:"moa"}]}),Object(d.jsx)(j.a,{name:"horizontal_step",variant:"outlined",color:"secondary",label:"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u043e\u043a:",component:J,required:!0,options:[{value:"mil",label:"mil"},{value:"moa",label:"moa"}]}),Object(d.jsx)(k,{disabled:e.valid})]})}})}function H(e){switch(e){case 0:return{title:"\u0413\u0432\u0438\u043d\u0442\u0456\u0432\u043a\u0430",description:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u043e\u043f\u0438\u0441 \u0433\u0432\u0438\u043d\u0442\u0456\u0432\u043a\u0438 \u0434\u043b\u044f \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430.",content:Object(d.jsx)(P,{})};case 1:return{title:"\u041d\u0430\u0431\u0456\u0439",description:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u043a\u0443\u043b\u0456 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0456 \u0434\u043b\u044f \u043a\u043e\u0440\u0435\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430 \u0442\u0430 \u0432\u0440\u0430\u0445\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u0430\u043b\u0456\u0441\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0435\u043d\u0442\u0443.",content:Object(d.jsx)(M,{})};case 2:return{title:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043e\u043f\u0442\u0438\u043a\u0438",description:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0446\u0456\u043b\u0443 \u0434\u043b\u044f \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0432 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0445 \u043e\u0434\u0438\u043d\u0438\u0446\u044f\u0445.",content:Object(d.jsx)(G,{})};default:return{title:"",description:"",content:null}}}function X(){var e=Object(c.g)().id,t=Number(Object.keys(W)[Object.values(W).indexOf(e)]);return Object(d.jsx)(L,{title:H(t).title,description:H(t).description,content:H(t).content})}var $=n(41),K=n(72),Q=n(73),Y="NEXT_STEP",Z="PREVIOUS_STEP";var ee="SAVE_TABLE_VALUES",te=localStorage.getItem("store"),ne=te?JSON.parse(te):[],re=ne.hasOwnProperty("table")?ne.table:[];var ae=Object($.combineReducers)({userForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object.assign(e,t.payload);default:return e}},stepper:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return++e;case Z:return--e;default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return[].concat(Object(I.a)(e),[t.payload]);default:return e}}}),oe=n(151),ie=n(152),ce=n(153),le=n(154),se=n(155);function de(e){return Math.floor(Math.random()*e)}var ue=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.table}));return Object(d.jsxs)(R.a,{children:[Object(d.jsx)(R.a,{flexGrow:"1",children:Object(d.jsx)(B.a,{variant:"h4",children:"\u0422\u0430\u0431\u043b\u0438\u0446\u044f"})}),Object(d.jsx)(R.a,{padding:"2rem 0",children:Object(d.jsx)(B.a,{color:"textSecondary",children:"\u041f\u043e\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0438\u0445 \u043c\u0456\u0448\u0435\u043d\u0435\u0439(\u043c\u043e\u0430)."})}),Object(d.jsx)(R.a,{padding:"2rem 0",children:Object(d.jsxs)(oe.a,{children:[Object(d.jsx)(ie.a,{children:Object(d.jsxs)(ce.a,{children:[Object(d.jsx)(le.a,{children:"\u0414\u0438\u0441\u0442."}),Object(d.jsx)(le.a,{children:"\u041c\u0456\u043d."}),Object(d.jsx)(le.a,{children:"\u0421\u0435\u0440."}),Object(d.jsx)(le.a,{children:"\u041c\u0430\u043a\u0441."}),Object(d.jsx)(le.a,{children:"\u0413\u043e\u0440\u0438\u0437."})]})}),Object(d.jsx)(se.a,{children:t.map((function(e){return Object(d.jsxs)(ce.a,{children:[Object(d.jsx)(le.a,{component:"th",scope:"row",children:e.distance}),Object(d.jsx)(le.a,{children:e.min}),Object(d.jsx)(le.a,{children:e.mid}),Object(d.jsx)(le.a,{children:e.max}),Object(d.jsx)(le.a,{children:e.horizont})]},e.distance)}))})]})}),Object(d.jsx)(E,{className:"step__button",variant:"contained",color:"primary",onClick:function(){return function(){var t=function(e){return{distance:e,min:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",mid:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",max:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-",horizont:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"-"}}(de(1e3),de(8),de(10),de(20),de(50));e({type:ee,payload:t})}()},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0446\u0456\u043b\u044c"})]})},be=Object($.createStore)(ae,Object(Q.composeWithDevTools)(Object($.applyMiddleware)(K.a)));var je=function(){return be.subscribe((function(){localStorage.setItem("store",JSON.stringify(be.getState()))})),Object(d.jsx)(v.a,{store:be,children:Object(d.jsx)(R.a,{display:"flex",height:"100%",boxSizing:"border-box",padding:2,p:{xs:2,sm:3,md:4},children:Object(d.jsx)(l.a,{children:Object(d.jsx)(R.a,{className:"wrapper",children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{exact:!0,path:"/",children:Object(d.jsx)(u,{})}),Object(d.jsx)(c.a,{path:"/stepper/:id",children:Object(d.jsx)(X,{})}),Object(d.jsx)(c.a,{path:"/table",children:Object(d.jsx)(ue,{})})]})})})})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))},pe=n(156),me=n(157),Oe=n(74),fe=Object(Oe.a)({typography:{fontFamily:"Open Sans"},palette:{background:{default:"#2A2A3A"},text:{primary:"rgba(255,255,255,1)",secondary:"rgba(255,255,255,.65)"},primary:{main:"#2F80ED",contrastText:"#fff"},secondary:{main:"#81D3F9"},type:"dark"}}),ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsxs)(pe.a,{theme:fe,children:[Object(d.jsx)(me.a,{}),Object(d.jsx)(je,{})]})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/might",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/might","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):xe(t,e)}))}}(),he()},91:function(e,t,n){},92:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.ce8c40df.chunk.js.map