(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{197:function(e,t,n){"use strict";n.r(t);n(30),n(137);var r=n(0),a=n.n(r),o=(n(202),n(200)),i=n(210),l=n(208),c=n(209),s=n(204);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var d,p=n(215),m=n.n(p),v=(n(8),n(9),n(3),n(17),n(37),n(306),n(65)),h=n.n(v);function b(e,t){return void 0===e&&(e=""),void 0===t&&(t=d),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}var g="object"==typeof window&&window.Element||function(){};h.a.oneOfType([h.a.string,h.a.func,function(e,t,n){if(!(e[t]instanceof g))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},h.a.shape({current:h.a.any})]),h.a.oneOfType([h.a.func,h.a.string,h.a.shape({$$typeof:h.a.symbol,render:h.a.func}),h.a.arrayOf(h.a.oneOfType([h.a.func,h.a.string,h.a.shape({$$typeof:h.a.symbol,render:h.a.func})]))]),"undefined"==typeof window||!window.document||window.document.createElement;var y=function(e){var t=e.className,n=e.cssModule,r=e.active,o=e.tag,i=f(e,["className","cssModule","active","tag"]),l=b(m()(t,"nav-item",!!r&&"active"),n);return a.a.createElement(o,u({},i,{className:l}))};y.defaultProps={tag:"li"};var E=y;var w=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},o.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.active,o=e.tag,i=e.innerRef,l=f(e,["className","cssModule","active","tag","innerRef"]),c=b(m()(t,"nav-link",{disabled:l.disabled,active:r}),n);return a.a.createElement(o,u({},l,{ref:i,onClick:this.onClick,className:c}))},r}(a.a.Component);w.defaultProps={tag:"a"};var j=w,N=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,o=e.tag,i=e.form,l=f(e,["className","cssModule","noGutters","tag","form"]),c=b(m()(t,r?"no-gutters":null,i?"form-row":"row"),n);return a.a.createElement(o,u({},l,{className:c}))};N.defaultProps={tag:"div"};var k=N,O=n(307),x=n.n(O),_=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},C=function(e){var t=e.className,n=e.cssModule,r=e.widths,o=e.tag,i=f(e,["className","cssModule","widths","tag"]),l=[];r.forEach(function(t,r){var a=e[t];if(delete i[t],a||""===a){var o=!r;if(x()(a)){var c,s=o?"-":"-"+t+"-",u=_(o,t,a.size);l.push(b(m()(((c={})[u]=a.size||""===a.size,c["order"+s+a.order]=a.order||0===a.order,c["offset"+s+a.offset]=a.offset||0===a.offset,c)),n))}else{var f=_(o,t,a);l.push(f)}}}),l.length||l.push("col");var c=b(m()(t,l),n);return a.a.createElement(o,u({},i,{className:c}))};C.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var M=C,P=(n(308),function(e){var t=e.className,n=e.cssModule,r=e.tabs,o=e.pills,i=e.vertical,l=e.horizontal,c=e.justified,s=e.fill,d=e.navbar,p=e.card,v=e.tag,h=f(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=b(m()(t,d?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":r,"card-header-tabs":p&&r,"nav-pills":o,"card-header-pills":p&&o,"nav-justified":c,"nav-fill":s}),n);return a.a.createElement(v,u({},h,{className:g}))});P.defaultProps={tag:"ul",vertical:!1};var S=P;n.d(t,"data",function(){return z});var T=o.b.div.withConfig({displayName:"pages__Area",componentId:"sc-10w55l2-0"})(["margin-bottom:1.2rem;"]),A=o.b.section.withConfig({displayName:"pages__Section",componentId:"sc-10w55l2-1"})(["margin-bottom:1rem;"]),D=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.renderList=function(e){for(var t=[],n=0;n<e.length;n++)t.push(a.a.createElement("li",{key:e[n]},e[n]));return t},o.sectionTitle=function(e,t){return a.a.createElement(A,null,a.a.createElement("h2",null,t),e)},o.renderEducation=function(e,t){var n=e.filter(function(e){return!0===e.active}).map(function(e){return a.a.createElement(T,{key:e.startDate},a.a.createElement("strong",null,e.studyShort,", ",e.area),a.a.createElement("br",null),e.institution,", ",e.location,a.a.createElement("br",null),e.startDate,"-",e.endDate)});return this.sectionTitle(n,t)},o.renderSection=function(e,t){var n=a.a.createElement("ul",{className:"pt-0 mt-0"},e.filter(function(e){return e.order>0}).sort(function(e,t){return e-t}).map(function(e){return a.a.createElement("li",{key:e.order},e.name)}));return this.sectionTitle(n,t)},o.renderArea=function(e,t){var n=this,r=e.filter(function(e){return!0===e.active}).map(function(e){return a.a.createElement(T,{key:e.position},a.a.createElement("strong",null,e.position,", ",e.startDate,"-",e.endDate),a.a.createElement("br",null),e.name,", ",e.location,a.a.createElement("ul",{className:"pt-0 mt-0"},n.renderList(e.highlights)))});return this.sectionTitle(r,t)},o.render=function(){var e=this.props.data.allResumeJson.nodes[0],t=e.basics.profiles.filter(function(e){return!0===e.active}).map(function(e){return a.a.createElement(E,{key:e.url},a.a.createElement(j,{href:e.url,target:"_blank",title:e.network},a.a.createElement("i",{className:"d-inline icon fab "+e.icon})))});return a.a.createElement(i.a,null,a.a.createElement(c.a,{title:"Home - Resume"}),a.a.createElement(l.a,null,a.a.createElement(k,{id:"banner",className:"mb-1 mb-md-4"},a.a.createElement(M,{lg:"8"},a.a.createElement("h1",{className:"head"},e.basics.name),a.a.createElement("p",{className:"subhead d-md-block d-none"},e.basics.label," - ",e.basics.specialty)),a.a.createElement(M,{lg:"4"},a.a.createElement("div",{className:"d-md-flex justify-content-lg-end"},a.a.createElement("p",{className:"subhead align-self-md-center text-lg-right"},e.basics.email,a.a.createElement("br",null),e.basics.location)),a.a.createElement(S,{className:"justify-content-lg-end"},t))),a.a.createElement(k,null,a.a.createElement(M,{lg:"8",className:"order-lg-12"},this.sectionTitle(a.a.createElement(s.c,null,e.basics.summary),"Introduction"),this.renderArea(e.work,"Experience"),this.renderArea(e.volunteer,"Leadership")),a.a.createElement(M,{lg:"4",className:"order-lg-1"},this.renderEducation(e.education,"Education"),this.renderSection(e.courses,"Coursework"),this.renderSection(e.skills,"Skills")))))},r}(a.a.Component),z=(t.default=D,"3770703816")},215:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},306:function(e,t,n){(function(t){n(50),n(3);var r="[object AsyncFunction]",a="[object Function]",o="[object GeneratorFunction]",i="[object Null]",l="[object Proxy]",c="[object Undefined]",s="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,f=s||u||Function("return this")(),d=Object.prototype,p=d.hasOwnProperty,m=d.toString,v=f.Symbol,h=v?v.toStringTag:void 0;function b(e){return null==e?void 0===e?c:i:h&&h in Object(e)?function(e){var t=p.call(e,h),n=e[h];try{e[h]=void 0;var r=!0}catch(o){}var a=m.call(e);r&&(t?e[h]=n:delete e[h]);return a}(e):function(e){return m.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=b(e);return t==a||t==o||t==r||t==l}}).call(this,n(135))},307:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},308:function(e,t,n){var r=n(5);r(r.P,"Array",{fill:n(309)}),n(68)("fill")},309:function(e,t,n){"use strict";var r=n(23),a=n(138),o=n(21);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,l=a(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,s=void 0===c?n:a(c,n);s>l;)t[l++]=e;return t}}}]);
//# sourceMappingURL=component---src-pages-index-js-e780a4a6da86d4cd7e5d.js.map