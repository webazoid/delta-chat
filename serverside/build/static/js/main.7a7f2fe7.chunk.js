(this.webpackJsonpclientside=this.webpackJsonpclientside||[]).push([[0],{196:function(e,t,c){},363:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(173),r=c.n(s),i=c(43),o=(c(196),c(191)),j=c(118),u=c.n(j),h=c(122),l=c(177),d=c(190),b=c(4);var O=function(e){var t=e.socket,c=e.username,a=e.room,s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],O=Object(n.useState)([]),m=Object(i.a)(O,2),x=m[0],p=m[1],f=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===o){e.next=6;break}return n={room:a,author:c,message:o,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},e.next=4,t.emit("send_message",n);case 4:p((function(e){return[].concat(Object(h.a)(e),[n])})),j("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t.on("receive_message",(function(e){p((function(t){return[].concat(Object(h.a)(t),[e])}))}))}),[t]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"chat-window",children:[Object(b.jsx)("div",{className:"chat-header",children:Object(b.jsx)("p",{children:" Live Chat"})}),Object(b.jsx)("div",{className:"chat-body",children:Object(b.jsx)(d.a,{className:"message-container",children:x.map((function(e){return Object(b.jsx)("div",{className:"message",id:c===e.author?"other":"you",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"message-content",children:Object(b.jsx)("p",{children:e.message})}),Object(b.jsxs)("div",{className:"message-meta",children:[Object(b.jsxs)("p",{id:"time",children:[e.time," "]}),Object(b.jsx)("p",{id:"author",children:e.author})]})]})})}))})}),Object(b.jsxs)("div",{className:"chat-footer",children:[Object(b.jsx)("input",{type:"text",placeholder:"heyaa!!",value:o,onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&f()}}),Object(b.jsx)("button",{onClick:f,children:" \u25ba "})]})]})})},m=o.a.connect("http://localhost:3001");var x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],u=Object(n.useState)(!1),h=Object(i.a)(u,2),l=h[0],d=h[1],x=function(){""!==c&&""!==o&&(m.emit("join_room",o),d(!0))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:" Welcome to Delta Chat "}),l?Object(b.jsx)(O,{socket:m,username:c,room:o}):Object(b.jsxs)("div",{className:"joinChatContainer",children:[Object(b.jsx)("h3",{children:" Join Chat Now!"}),Object(b.jsx)("input",{type:"text",placeholder:"Your Name",onChange:function(e){a(e.target.value)}}),Object(b.jsx)("input",{type:"text",placeholder:"Room ID",onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&x()}}),Object(b.jsx)("button",{onClick:x,children:"Join a Room "})]})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[363,1,2]]]);
//# sourceMappingURL=main.7a7f2fe7.chunk.js.map