(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c.n(a),n=c(4),l=c(2),r=c(3),i=c.n(r),o=c(1);c(12),c(13);function d(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var j=c(0),u=function(e){var t=e.todos,c=e.handleSelectTodo,a=e.filter,s=e.textFilter,n=e.modalTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:function(e,t,c){var a=e;switch(c&&(a=e.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),t){case"completed":a=a.filter((function(e){return!0===e.completed}));break;case"active":a=a.filter((function(e){return!1===e.completed}))}return a}(t,a,s).map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(j.jsx)("span",{className:"icon",children:n===e?Object(j.jsx)("i",{className:"far fa-eye-slash"}):Object(j.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},h=function(e){var t=e.handleSelectFilter,c=e.handleTextFilter,a=e.textFilter;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},b=(c(15),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.todo,c=e.handleSelectTodo,a=Object(o.useState)(null),s=Object(l.a)(a,2),r=s[0],u=s[1],h=function(){var e=Object(n.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.userId,c=d("/users/".concat(a)),e.t0=u,e.next=4,c;case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){h()}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),r?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(j.jsx)("strong",{className:t.completed?"has-text-success":"has-text-danger",children:t.completed?"Done":"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(r.email),children:r.name})]})]})]}):Object(j.jsx)(b,{})]})},x=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(!0),r=Object(l.a)(s,2),x=r[0],O=r[1],f=Object(o.useState)(null),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(o.useState)("all"),g=Object(l.a)(y,2),k=g[0],S=g[1],w=Object(o.useState)(""),T=Object(l.a)(w,2),C=T[0],F=T[1],_=function(e){N(e)},E=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d("/todos"),e.t0=a,e.next=4,t;case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){E().then((function(){return O(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{handleSelectFilter:function(e){S(e)},handleTextFilter:function(e){F(e)},textFilter:C})}),Object(j.jsxs)("div",{className:"block",children:[x&&Object(j.jsx)(b,{}),!x&&Object(j.jsx)(u,{todos:c,handleSelectTodo:_,filter:k,textFilter:C,modalTodo:v})]})]})})}),v&&Object(j.jsx)(m,{todo:v,handleSelectTodo:_})]})};s.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e6d16359.chunk.js.map