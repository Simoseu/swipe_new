/*! For license information please see main.8b6fffde.chunk.js.LICENSE.txt */
(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{101:function(e,t,a){},105:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(15),l=a.n(i);var s=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,115)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},o=a(19),u=a.n(o),d=a(28),b=a(7),j=a(17),h=a.n(j),v=(a(101),a(14)),p=a(31),x=a(37),O=a(23),m=a(9);var g=a(21);a(36);var f=a(12),y=(a(51),a(22));a(43),a(59);a(105);var N=a(77),w=a(62),C=a(76),I=a(41),k=a(75),D=a.p+"static/media/grip.8bc37f34.svg";function S(e){var t=Object(c.useState)(e.value.label||e.value.value),a=Object(b.a)(t,2),r=a[0],i=a[1],l=null===e.value.label?null===e.value.datatype?e.value.type:e.value.datatype:"literal";return e.value.editing?Object(n.jsx)("li",{children:Object(n.jsx)(v.a,{fluid:!0,className:"value-container",children:Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(y.a,{children:[Object(n.jsx)(m.a.Control,{type:"text",name:"propertyValue",className:"value",value:r,onChange:function(e){var t=e.target.value;i(t)}}),Object(n.jsxs)(m.a.Text,{muted:!0,children:['This value is type: "',l,'"']})]}),Object(n.jsx)(y.a,{children:Object(n.jsxs)(m.a,{inline:!0,children:[Object(n.jsx)(m.a.Label,{className:"my-1 mr-sm-2 float-sx",children:"Choose the type of comparison:"}),Object(n.jsx)(m.a.Control,{as:"select",className:"my-1 mr-sm-2 float-dx",id:"inlineFormCustomSelectPref",custom:!0,size:"sm",value:e.value.comparison,onChange:function(t){e.value.comparison=t.target.value,e.changeValue(e.value.ID,e.value,void 0)},children:"literal"===l?[Object(n.jsx)("option",{value:"exact-string",children:"Exact String"},"exact-string"),Object(n.jsx)("option",{value:"substring",children:"Substring"},"substring")]:"uri"===l?[Object(n.jsx)("option",{value:"uri",children:"URI"},"uri")]:[Object(n.jsx)("option",{value:"type-based",children:"Type based comparison (default equal)"},"type-based"),Object(n.jsx)("option",{value:"regex",children:"Regex"},"regex")]})]})}),Object(n.jsx)(y.a,{className:"btn-span",md:"auto",children:Object(n.jsxs)("span",{children:["[",Object(n.jsx)("button",{id:"applica",className:"editButton",onClick:function(){0===r.length?alert("non pu\xf2 essere vuoto"):(e.value.edited=!0,e.value.editing=!1,null!==e.value.label?e.value.label=r:e.value.value=r,e.changeValue(e.value.ID,e.value,!0))},children:"Applica"}),"|",Object(n.jsx)("button",{id:"annulla",className:"editButton",onClick:function(){e.value.editing=!1,e.changeValue(e.value.ID,e.value,void 0)},children:"Annulla"}),"]"]})})]})})}):Object(n.jsxs)("li",{className:e.value.edited?"modified":"non-modified",children:[e.value.label?e.value.label:e.value.value,Object(n.jsxs)("span",{className:"editButtonSpan",children:["[",Object(n.jsx)("button",{className:"editButton",id:"modifica",onClick:function(){e.value.editing=!0,e.changeValue(e.value.ID,e.value,void 0),console.log(e.value)},children:"Edit"}),"]"]}),e.value.edited&&Object(n.jsxs)("span",{className:"editButtonSpan",children:["[",Object(n.jsx)("button",{id:"annulla",className:"editButton",onClick:function(){e.value.edited=!1,e.changeValue(e.value.ID,e.value,!1)},children:"Remove"}),"]"]})]})}function R(e){function t(){if(e.attribute.show=!e.attribute.show,e.attribute.show&&!e.attribute.isConstraint)e.attribute.isConstraint=!0;else if(!e.attribute.show&&e.attribute.isConstraint){var t=e.attribute.value.filter((function(e){return e.edited}));e.attribute.isConstraint=t.length>0}e.changeAttribute(e.attribute.ID,e.attribute)}function a(t,a,n){var c=e.attribute;if(void 0!==n)if(n)c.isConstraint=n;else if(c.show)c.isConstraint=!0;else{var r=c.value.filter((function(e){return e.edited}));c.isConstraint=r.length>0}var i=c.value.findIndex((function(e){return e.ID===t}));c.value[i]=a,e.changeAttribute(e.attribute.ID,c)}return Object(n.jsx)(I.b,{draggableId:e.attribute.ID,index:e.index,children:function(c,r){return Object(n.jsxs)("tr",Object(f.a)(Object(f.a)({},c.draggableProps),{},{ref:c.innerRef,style:Object(f.a)({backgroundColor:r.isDragging&&"#abcdef"},c.draggableProps.style),className:"attribute-row",children:[Object(n.jsx)("td",Object(f.a)(Object(f.a)({className:"drag-cell"},c.dragHandleProps),{},{children:Object(n.jsx)("img",{src:D,alt:"drag"})})),Object(n.jsx)("td",{className:"property-cell",children:e.attribute.property.label||e.attribute.property.uri}),Object(n.jsx)("td",{className:"value-cell",children:Object(n.jsx)("ul",{children:e.attribute.value.map((function(e){return Object(n.jsx)(S,{value:e,changeValue:a},e.ID)}))})}),Object(n.jsx)("td",{className:"show-cell",children:Object(n.jsx)(m.a.Check,{type:"checkbox",name:e.attribute.ID,checked:e.attribute.show,onChange:t})})]}))}})}function q(e){function t(t,a){var n=Object(C.a)(e.resource),c=n.findIndex((function(e){return e.ID===t}));n[c]=a,e.setResource(n)}return Object(n.jsx)(I.a,{onDragEnd:function(t){var a=t.destination,n=t.source;if(a&&(a.droppableId!==n.droppableId||a.index!==n.index)){var c=e.resource.splice(n.index,1)[0];e.resource.splice(a.index,0,c),console.log(c,a.index),h.a.post("/save_order",{selected:e.resource[a.index].property.uri,prev:e.resource[a.index-1].property.uri,next:e.resource[a.index+1].property.uri}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},children:Object(n.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,id:"resource-table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"drag-cell",children:"#"}),Object(n.jsx)("th",{className:"property-cell",children:"Propriet\xe0"}),Object(n.jsx)("th",{className:"value-cell",children:"Valori"}),Object(n.jsx)("th",{className:"show-cell",children:"Show"})]})}),Object(n.jsx)(I.c,{droppableId:"droppable",children:function(a){return Object(n.jsxs)("tbody",Object(f.a)(Object(f.a)({ref:a.innerRef},a.droppableProps),{},{children:[e.resource.map((function(e,a){return Object(n.jsx)(R,{index:a,attribute:e,changeAttribute:t},e.ID)})),a.placeholder]}))}})]})})}function E(e){var t,a=e.resource,c=e.endpointUrl,r=e.language;return Object(n.jsxs)(v.a,{className:"resource-preview",onClick:function(){window.location.href="/resource?endpoint=".concat(c,"&language=").concat(r,"&uri=").concat(a.uri)},children:[Object(n.jsx)("p",{className:"result-title",children:a.label}),Object(n.jsxs)("p",{className:"result-url",children:["URI: ",a.uri]}),Object(n.jsx)("p",{className:"result-comment",children:a.comment||"No comment avaiable for this resource"}),null===(t=a.attributes)||void 0===t?void 0:t.map((function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("hr",{}),Object(n.jsxs)("span",{style:{fontWeight:"500"},children:[e.attribute," :"]}),Object(n.jsx)("ul",{children:e.values.map((function(e){return Object(n.jsx)("li",{children:e})}))})]})}))]})}var A=a.p+"static/media/tail-spin.309ae91b.svg";function B(e){var t=e.requestedResource,a=e.label,r=e.comment,i=e.language,l=e.endpoint,s=Object(c.useState)(t),o=Object(b.a)(s,2),j=o[0],p=o[1],m=Object(c.useState)(),y=Object(b.a)(m,2),C=y[0],I=y[1],k=Object(c.useState)(void 0),D=Object(b.a)(k,2),S=D[0],R=D[1],B=Object(c.useState)("resource"),L=Object(b.a)(B,2),P=L[0],T=L[1],V=Object(c.useState)(!1),F=Object(b.a)(V,2),U=F[0],z=F[1];function H(){return(H=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),t=null===j||void 0===j?void 0:j.map((function(e){return Object(f.a)({},e)})),(a=t.filter((function(e){return Object.assign({},e).isConstraint}))).map((function(e){return e.value=e.value.filter((function(e){return e.edited}))})),console.log(a),C&&(console.log("CANCELLATO"),C.cancel("axios request cancelled"),I(null)),n=h.a.CancelToken.source(),I(n),e.next=10,h.a.post("/query",{endpointUrl:l,language:i,constraints:a},{cancelToken:n.token}).then((function(e){console.log(e.data),R(e.data),I(null),z(!1),T("results")})).catch((function(e){"axios request cancelled"===e.message?console.log("Nuova richiesta ricevuta, questa viene cancellata."):(console.log("Errore nell'esecuzione della query.",e),z(!1))}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsxs)(v.a,{fluid:!0,id:"main-container",children:[U&&Object(n.jsx)("div",{id:"loading",children:Object(n.jsx)("img",{src:A,alt:"Loading..."})}),Object(n.jsxs)(x.a,{variant:"dark",id:"navbar",children:[Object(n.jsx)(x.a.Brand,{href:"/homepage",children:"Swipe"}),Object(n.jsxs)(O.a,{className:"mr-auto",children:[Object(n.jsx)(O.a.Link,{href:"/homepage",children:"Home"}),Object(n.jsx)(O.a.Link,{href:"#about",children:"About"})]})]}),j!==[]&&void 0!==j?Object(n.jsxs)(N.a,{className:"width-90-centered mt-1",activeKey:P,onSelect:function(e){return T(e)},children:[Object(n.jsxs)(w.a,{eventKey:"resource",title:"Resource",className:"tab",children:[Object(n.jsxs)("div",{className:"width-90-centered mt-2",children:[Object(n.jsx)("h3",{children:a}),Object(n.jsx)("p",{children:r||"No comment avaiable for this resource"})]}),Object(n.jsx)(q,{resource:j,setResource:p}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(v.a,{fluid:!0,id:"footer",children:[Object(n.jsx)("p",{children:"Dopo aver modificato gli attributi per effettuare una query clicca il tasto QUERY presente sulla destra"}),Object(n.jsx)(g.a,{variant:"success",size:"lg",onClick:function(){return H.apply(this,arguments)},children:"Esegui Query"})]})]}),Object(n.jsx)(w.a,{eventKey:"results",title:"Query Results",className:"tab",disabled:void 0===S,children:null===S||void 0===S?void 0:S.map((function(e){return Object(n.jsx)(E,{resource:e,endpointUrl:l,language:i},e.ID)}))})]}):Object(n.jsxs)(v.a,{id:"notfound-container",children:[Object(n.jsx)("h3",{className:"notfound-msg",children:"La risorsa richiesta non \xe8 stata trovata"}),Object(n.jsx)(g.a,{children:"GO TO HOMEPAGE"})]})]})}l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(B,{requestedResource:window.resource.requestedResource,label:window.resource.label,comment:window.resource.comment,language:window.resource.language,endpoint:window.resource.endpoint})}),document.getElementById("root")),s()}},[[109,1,2]]]);
//# sourceMappingURL=main.8b6fffde.chunk.js.map