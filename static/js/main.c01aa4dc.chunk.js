(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{50:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(7),j=n.n(r),a=n(14),i=n(11),o=n(32),l=n.n(o),s=n(2);var u=function(){return Object(s.jsxs)("header",{children:[Object(s.jsxs)("h1",{children:[Object(s.jsx)(l.a,{}),"myNote"]}),Object(s.jsx)("p",{children:"One Place For All Your Notes."})]})};var b=function(){var e=(new Date).getFullYear();return Object(s.jsx)("footer",{children:Object(s.jsxs)("p",{children:["Copyright \u24d2 ",e,", ",Object(s.jsx)("b",{color:"3ec8da",children:"myNote"})," by ",Object(s.jsx)("b",{children:"Anish Guruvelli."})]})})},O=n(34),d=n.n(O);var h=function(e){return Object(s.jsxs)("div",{className:"note",children:[Object(s.jsx)("h1",{children:e.title}),Object(s.jsx)("p",{children:e.content}),Object(s.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(s.jsx)(d.a,{})})]})},x=n(8),f=n(31),p=n(35),v=n.n(p),m=n(67),k=n(68);var g=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],j=n[1],a=Object(c.useState)({title:"",content:""}),o=Object(i.a)(a,2),l=o[0],u=o[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(x.a)({},n,c))}))}return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{className:"create-note",children:[r&&Object(s.jsx)("input",{name:"title",onChange:b,value:l.title,placeholder:"Title"}),Object(s.jsx)("textarea",{name:"content",onClick:function(){j(!0)},onChange:b,value:l.content,placeholder:"Take a note...",rows:r?3:1}),Object(s.jsx)(k.a,{in:r,children:Object(s.jsx)(m.a,{onClick:function(t){e.onAdd(l),u({title:"",content:""}),t.preventDefault()},children:Object(s.jsx)(v.a,{})})})]})})};var C=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function j(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(s.jsxs)("div",{children:[Object(s.jsx)(u,{}),Object(s.jsx)(g,{onAdd:function(e){r((function(t){return[].concat(Object(a.a)(t),[e])}))}}),n.map((function(e,t){return Object(s.jsx)(h,{id:t,title:e.title,content:e.content,onDelete:j},t)})),Object(s.jsx)(b,{})]})};j.a.render(Object(s.jsx)(C,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.c01aa4dc.chunk.js.map