(this.webpackJsonpmight=this.webpackJsonpmight||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=(n(91),n(92),n(13)),l=n(27),s=n(144),d=n(161),u=n(158),b=n(107),j=n.p+"static/media/logo.8c3814b3.png",h=n(2),p=Object(s.a)((function(e){return Object(d.a)({wrapper:{display:"flex",alignItems:"center"},logo:{left:"-20px",position:"relative"},text:{color:"#FDCC00"},heading:{fontWeight:"bold"},secondaryText:{borderBottom:"1px solid #FDCC00"}})})),m=function(){var e=p();return Object(h.jsx)(u.a,{children:Object(h.jsx)("img",{src:j,className:e.logo})})},O=function(){var e=p();return Object(h.jsxs)(u.a,{flexGrow:"1",className:e.text,children:[Object(h.jsx)(b.a,{variant:"h2",className:e.heading,children:"\u041c\u0456\u0446\u044c"}),Object(h.jsx)(b.a,{variant:"subtitle2",className:e.secondaryText,children:"\u0412 \u0441\u0438\u043b\u044c\u043d\u0438\u0445 \u0440\u0443\u043a\u0430\u0445, \u0433\u0432\u0438\u043d\u0442\u0456\u0432\u043a\u0430 \u0442\u0430 \u0448\u0442\u0438\u043a."})]})};function f(){var e=Object(i.f)(),t=(Object(a.useEffect)((function(){var t=setTimeout((function(){return e.push("/stepper/rifle")}),5e3);return function(){clearTimeout(t)}}),[]),p());return Object(h.jsxs)(u.a,{className:t.wrapper,children:[Object(h.jsx)(m,{}),Object(h.jsx)(O,{})]})}var v=n(149),x=n(15),g=n(16),y=n(38),w=n(147);n(108);var S=function(e){var t=e.meta,n=t.submitError,a=t.dirtySinceLastSubmit,r=t.error,o=t.touched,c=t.modified;return!(!(n&&!a||r)||!o&&!c)},T=function(e){var t=e.input,n=t.name,a=t.value,r=t.type,o=t.onChange,c=Object(y.a)(t,["name","value","type","onChange"]),i=e.meta,l=e.color,s=e.required,d=e.fullWidth,u=void 0===d||d,b=e.helperText,j=e.showError,p=void 0===j?S:j,m=Object(y.a)(e,["input","meta","color","required","fullWidth","helperText","showError"]),O=i.error,f=i.submitError,v=p({meta:i});return Object(h.jsx)(w.a,Object(g.a)({style:{marginTop:8,marginBottom:8},fullWidth:u,helperText:v?O||f:b,error:v,color:l,onChange:o,name:n,value:a,type:r,required:s,inputProps:Object(g.a)({required:s},c)},m))},E=n(17),C="SAVE_FORM_VALUES",k=localStorage.getItem("store"),N=k?JSON.parse(k):{},_=N.hasOwnProperty("userForm")?N.userForm:{direction:"left"};var W=n(148),F=Object(s.a)({root:{borderRadius:8,padding:"10px 2rem",textTransform:"capitalize",margin:".5rem"}});function V(e){var t=F();return Object(h.jsx)(W.a,Object(g.a)(Object(g.a)({},e),{},{className:t.root,children:e.children}))}var q,A=function(e){var t=e.disabled,n=void 0!==t&&t,a=e.onDiscard,r=Object(i.f)();return Object(h.jsx)("div",{className:"step__buttons",children:Object(h.jsxs)(v.a,{item:!0,style:{marginTop:16},children:[Object(h.jsx)(W.a,{className:"step__button",onClick:function(){return a||r.goBack()},children:"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"}),Object(h.jsx)(V,{className:"step__button",variant:"contained",color:"primary",type:"submit",disabled:!n,children:"\u0412\u0432\u0435\u0441\u0442\u0438"})]})})},P=n(111),B=n(113),D=n(160),I=n(150),L=n(159),R=function(e){console.log(e);var t=e.input,n=t.name,a=t.value,r=t.onChange,o=e.meta,c=(e.color,e.required,e.fullWidth),i=void 0===c||c,l=(e.helperText,e.defaultValue),s=e.showError,d=void 0===s?S:s,u=e.label,b=e.options,j=Object(y.a)(e,["input","meta","color","required","fullWidth","helperText","defaultValue","showError","label","options"]),p=d({meta:o});return Object(h.jsxs)(P.a,{component:"fieldset",fullWidth:i,style:{marginTop:8,marginBottom:8},children:[Object(h.jsx)(B.a,{component:"legend",children:u}),p,Object(h.jsx)(D.a,Object(g.a)(Object(g.a)({name:n,defaultValue:l,value:a,onChange:r},j),{},{children:b.map((function(e){var t=e.label,n=e.value;return Object(h.jsx)(I.a,{value:n,control:Object(h.jsx)(L.a,{}),label:t},t)}))}))]})},U=function(e){var t={direction:void 0,twist:void 0};return e.direction||(t.direction="Required"),e.twist||(t.twist="Required"),t},z=function(){var e=Object(E.b)(),t=Object(i.f)(),n=Object(E.c)((function(e){return e.userForm}));return Object(h.jsx)(x.b,{onSubmit:function(n){e({type:C,payload:n}),t.push("/stepper/charge")},validate:U,initialValues:n,render:function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,noValidate:!0,autoComplete:"off",children:[Object(h.jsx)(v.a,{container:!0,alignItems:"flex-start",spacing:0,children:Object(h.jsx)(x.a,{name:"direction",variant:"outlined",color:"secondary",component:R,label:"\u041d\u0430\u0440\u0456\u0437\u0438:",placeholder:"",options:[{label:"\u041b\u0456\u0432\u043e",value:"left"},{label:"\u041f\u0440\u0430\u0432\u043e",value:"right"}]})}),Object(h.jsx)(x.a,{name:"twist",variant:"outlined",color:"secondary",label:"\u0422\u0432\u0456\u0441\u0442",placeholder:"",required:!0,component:T}),Object(h.jsx)(A,{disabled:e.valid})]})}})};n(104);function J(e){var t=e.title,n=e.description,a=e.content;return Object(h.jsxs)("div",{className:"step",children:[Object(h.jsx)(u.a,{flexGrow:"1",children:Object(h.jsx)(b.a,{variant:"h4",children:t})}),Object(h.jsx)(b.a,{color:"textSecondary",children:n}),Object(h.jsx)(u.a,{display:"flex",flexDirection:"column",paddingTop:"2rem",children:a})]})}!function(e){e[e.rifle=0]="rifle",e[e.charge=1]="charge",e[e.optics=2]="optics",e[e.weather=3]="weather",e[e.goal=4]="goal",e[e.amendments=5]="amendments"}(q||(q={}));var M=n(58),G=n(112),X=n(114),$=n(162),H=Object(s.a)((function(e){return Object(d.a)({formControl:{minWidth:120,width:"100%",marginTop:8,marginBottom:8}})})),K=function(e){var t=e.input,n=t.name,a=t.value,r=t.onChange,o=e.meta,c=(e.color,e.required),i=(e.helperText,e.label),l=e.defaultValue,s=void 0===l?{label:i,value:""}:l,d=e.showError,u=void 0===d?S:d,b=e.options,j=void 0===b?[]:b,p=Object(y.a)(e,["input","meta","color","required","helperText","label","defaultValue","showError","options"]),m=H(),O=[s].concat(Object(M.a)(j)),f=u({meta:o});return Object(h.jsxs)(P.a,{variant:"outlined",className:m.formControl,children:[Object(h.jsx)(G.a,{id:"demo-simple-select-outlined-label",children:i}),Object(h.jsx)(X.a,Object(g.a)(Object(g.a)({name:n,value:a,displayEmpty:!0,onChange:r,required:c,label:i},p),{},{children:O.map((function(e){var t=e.label,n=e.value;return Object(h.jsx)($.a,{value:n,children:t},t)}))})),f]})};function Q(){var e=Object(E.b)(),t=Object(i.f)(),n=Object(E.c)((function(e){return e.userForm}));return Object(h.jsx)(x.b,{onSubmit:function(n){e({type:C,payload:n}),t.push("/stepper/optics")},initialValues:n,render:function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,noValidate:!0,autoComplete:"off",children:[Object(h.jsx)(x.a,{name:"length",variant:"outlined",color:"secondary",label:"\u0414\u043e\u0432\u0436\u0438\u043d\u0430:",placeholder:"180",component:T}),Object(h.jsx)(x.a,{name:"speed",variant:"outlined",color:"secondary",component:T,label:"\u0428\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c:",placeholder:"800"}),Object(h.jsx)(x.a,{name:"weight",variant:"outlined",color:"secondary",component:T,label:"\u0412\u0430\u0433\u0430:",placeholder:""}),Object(h.jsx)(x.a,{name:"caliber",variant:"outlined",color:"secondary",component:K,label:"\u041a\u0430\u043b\u0456\u0431\u0440:",options:[{value:"308",label:".308"},{value:"221",label:".22lr"},{value:"223",label:".223 rem"},{value:"7.62",label:"7,62x39mm"}]}),Object(h.jsx)(x.a,{name:"ballistics",variant:"outlined",color:"secondary",component:T,label:"\u0411\u0430\u043b\u0456\u0441\u0442\u0438\u0447\u043d\u0438\u0439 \u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0435\u043d\u0442:",placeholder:"7.62x39"}),Object(h.jsx)(A,{disabled:e.valid})]})}})}function Y(){var e=Object(E.b)(),t=Object(i.f)(),n=Object(E.c)((function(e){return e.userForm}));return Object(h.jsx)(x.b,{onSubmit:function(n){e({type:C,payload:n}),t.push("/table")},initialValues:n,render:function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,noValidate:!0,autoComplete:"off",children:[Object(h.jsx)(x.a,{name:"distance",variant:"outlined",color:"secondary",label:"\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0456\u044f \u043f\u0440\u0438\u0441\u0442\u0440\u0456\u043b\u043a\u0438:",placeholder:"\u043c\u0435\u0442\u0440\u0456\u0432",component:T}),Object(h.jsx)(x.a,{name:"height_above_thunk",variant:"outlined",color:"secondary",label:"\u0412\u0438\u0441\u043e\u0442\u0430 \u043f\u0440\u0438\u0446\u0456\u043b\u0443 \u043d\u0430\u0434 \u0441\u0442\u0432\u043e\u043b\u043e\u043c:",placeholder:"\u0441\u043c",component:T}),Object(h.jsx)(x.a,{name:"vertical_step",variant:"outlined",color:"secondary",label:"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u043e\u043a:",component:K,required:!0,options:[{value:"mil",label:"mil"},{value:"moa",label:"moa"}]}),Object(h.jsx)(x.a,{name:"horizontal_step",variant:"outlined",color:"secondary",label:"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u043e\u043a:",component:K,required:!0,options:[{value:"mil",label:"mil"},{value:"moa",label:"moa"}]}),Object(h.jsx)(A,{disabled:e.valid})]})}})}function Z(e){switch(e){case 0:return{title:"\u0413\u0432\u0438\u043d\u0442\u0456\u0432\u043a\u0430",description:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u043e\u043f\u0438\u0441 \u0433\u0432\u0438\u043d\u0442\u0456\u0432\u043a\u0438 \u0434\u043b\u044f \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430.",content:Object(h.jsx)(z,{})};case 1:return{title:"\u041d\u0430\u0431\u0456\u0439",description:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u043a\u0443\u043b\u0456 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0456 \u0434\u043b\u044f \u043a\u043e\u0440\u0435\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430 \u0442\u0430 \u0432\u0440\u0430\u0445\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u0430\u043b\u0456\u0441\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0435\u043d\u0442\u0443.",content:Object(h.jsx)(Q,{})};case 2:return{title:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043e\u043f\u0442\u0438\u043a\u0438",description:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0446\u0456\u043b\u0443 \u0434\u043b\u044f \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0432 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0445 \u043e\u0434\u0438\u043d\u0438\u0446\u044f\u0445.",content:Object(h.jsx)(Y,{})};default:return{title:"",description:"",content:null}}}function ee(){var e=Object(i.g)().id,t=Number(Object.keys(q)[Object.values(q).indexOf(e)]);return Object(h.jsx)(J,{title:Z(t).title,description:Z(t).description,content:Z(t).content})}var te=n(42),ne=n(72),ae=n(73),re="NEXT_STEP",oe="PREVIOUS_STEP";var ce="SAVE_TABLE_VALUES",ie=localStorage.getItem("store"),le=ie?JSON.parse(ie):[],se=le.hasOwnProperty("table")?le.table:[];var de=Object(te.combineReducers)({userForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object.assign(e,t.payload);default:return e}},stepper:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return++e;case oe:return--e;default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return[].concat(Object(M.a)(e),[t.payload]);default:return e}}}),ue=n(151),be=n(152),je=n(153),he=n(154),pe=n(155);function me(e){return Math.floor(Math.random()*e)}var Oe=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.table}));return Object(h.jsxs)(u.a,{children:[Object(h.jsx)(u.a,{flexGrow:"1",children:Object(h.jsx)(b.a,{variant:"h4",children:"\u0422\u0430\u0431\u043b\u0438\u0446\u044f"})}),Object(h.jsx)(u.a,{padding:"2rem 0",children:Object(h.jsx)(b.a,{color:"textSecondary",children:"\u041f\u043e\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0438\u0445 \u043c\u0456\u0448\u0435\u043d\u0435\u0439(\u043c\u043e\u0430)."})}),Object(h.jsx)(u.a,{padding:"2rem 0",children:Object(h.jsxs)(ue.a,{children:[Object(h.jsx)(be.a,{children:Object(h.jsxs)(je.a,{children:[Object(h.jsx)(he.a,{children:"\u0414\u0438\u0441\u0442."}),Object(h.jsx)(he.a,{children:"\u041c\u0456\u043d."}),Object(h.jsx)(he.a,{children:"\u0421\u0435\u0440."}),Object(h.jsx)(he.a,{children:"\u041c\u0430\u043a\u0441."}),Object(h.jsx)(he.a,{children:"\u0413\u043e\u0440\u0438\u0437."})]})}),Object(h.jsx)(pe.a,{children:t.map((function(e){return Object(h.jsxs)(je.a,{children:[Object(h.jsx)(he.a,{component:"th",scope:"row",children:e.distance}),Object(h.jsx)(he.a,{children:e.min}),Object(h.jsx)(he.a,{children:e.mid}),Object(h.jsx)(he.a,{children:e.max}),Object(h.jsx)(he.a,{children:e.horizont})]},e.distance)}))})]})}),Object(h.jsx)(V,{className:"step__button",variant:"contained",color:"primary",onClick:function(){return function(){var t=function(e){return{distance:e,min:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",mid:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",max:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-",horizont:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"-"}}(me(1e3),me(8),me(10),me(20),me(50));e({type:ce,payload:t})}()},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0446\u0456\u043b\u044c"})]})},fe=Object(te.createStore)(de,Object(ae.composeWithDevTools)(Object(te.applyMiddleware)(ne.a)));var ve=function(){return fe.subscribe((function(){localStorage.setItem("store",JSON.stringify(fe.getState()))})),Object(h.jsx)(E.a,{store:fe,children:Object(h.jsx)(u.a,{display:"flex",height:"100%",boxSizing:"border-box",padding:2,p:{xs:2,sm:3,md:4},children:Object(h.jsx)(l.a,{children:Object(h.jsx)(u.a,{className:"wrapper",children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",children:Object(h.jsx)(f,{})}),Object(h.jsx)(i.a,{path:"/stepper/:id",children:Object(h.jsx)(ee,{})}),Object(h.jsx)(i.a,{path:"/table",children:Object(h.jsx)(Oe,{})})]})})})})})},xe=n(156),ge=n(157),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function we(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Se=n(74),Te=Object(Se.a)({typography:{fontFamily:"Open Sans"},palette:{background:{default:"#2A2A3A"},text:{primary:"rgba(255,255,255,1)",secondary:"rgba(255,255,255,.65)"},primary:{main:"#2F80ED",contrastText:"#fff"},secondary:{main:"#81D3F9"},type:"dark"}}),Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsxs)(xe.a,{theme:Te,children:[Object(h.jsx)(ge.a,{}),Object(h.jsx)(ve,{})]})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/might",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/might","/service-worker.js");ye?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):we(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):we(t,e)}))}}(),Ee()},91:function(e,t,n){},92:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.e453f462.chunk.js.map