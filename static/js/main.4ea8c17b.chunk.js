(this["webpackJsonpweb-chat"]=this["webpackJsonpweb-chat"]||[]).push([[0],{22:function(e,t,n){e.exports=n(44)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=n(9),s=n.n(i),m=n(8),u=n(5),l=n(20),d=(n(42),n(43),function(e){var t=e.children;return c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"title-site"},"Web-Chat"),t)}),f=function(){var e=Object(u.c)((function(e){return e.DATA.comments}));return c.a.createElement("ul",{className:"comments__list"},e.sort((function(e,t){return e.date-t.date})).map((function(e,t){return c.a.createElement("li",{className:"comments__item",key:e.description+t},e.description)})))},b="GET_COMMENTAS",p="CHANGE_COMMENT_PLACE",E="ERASE_COMMENT_FORM",h=function(e){return{type:b,payload:e}},v=function(e){return{type:p,payload:e}},O=function(){return{type:E,payload:""}},y=n(21),_=function(e){return e.map((function(e){return{id:(t=e).id,date:new Date(t.date),description:t.description,nameUser:t.name};var t}))},j={comments:[],comment:""},w=function(){return function(e,t,n){s.a.firestore().collection("comments").onSnapshot((function(t){var n=t.docs,a=_(n.map((function(e){return Object(y.a)({},e.data())})));e(h(a))}))}},A=function(e){return function(t,n,a){var c=new Date;s.a.firestore().collection("comments").add({description:e,id:1,name:"Alex",date:c.toISOString()}),t(O())}},N=function(e){var t=Object(u.c)((function(e){return e.DATA.comment})),n=Object(u.b)();return c.a.createElement("form",{className:"comments__form",action:"#",method:"post",disabled:"disabled",onSubmit:function(e){e.preventDefault(),n(A(t))}},c.a.createElement("textarea",{className:"comments__textarea",id:"review",name:"review",value:t,onChange:function(e){n(v(e.target.value))},required:!0}),c.a.createElement("button",{className:"comments__submit",type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))},g=function(){return c.a.createElement("main",{className:"main"},c.a.createElement(f,null),c.a.createElement(N,null))},S=function(){return function(){var e=Object(u.b)();Object(a.useEffect)((function(){e(w())}),[])}(),c.a.createElement("div",{className:"App"},c.a.createElement(d,null,c.a.createElement(g,null)))},C=n(13),D=Object(m.c)(Object(C.a)({},"DATA",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object.assign({},e,{comments:t.payload});case p:case E:return Object.assign({},e,{comment:t.payload})}return e})));!function(){s.a.initializeApp({apiKey:"AIzaSyB-Qj5y11gismV4eZbaubJL9B1CDTFI9-s",authDomain:"web-chat-1b38f.firebaseapp.com",databaseURL:"https://web-chat-1b38f.firebaseio.com",projectId:"web-chat-1b38f",storageBucket:"web-chat-1b38f.appspot.com",messagingSenderId:"340398160492",appId:"1:340398160492:web:62abd80b5f0a424c787649"});var e=Object(m.d)(D,Object(m.a)(l.a));o.a.render(c.a.createElement(u.a,{store:e},c.a.createElement(S,null)),document.querySelector("#root"))}()}},[[22,1,2]]]);
//# sourceMappingURL=main.4ea8c17b.chunk.js.map