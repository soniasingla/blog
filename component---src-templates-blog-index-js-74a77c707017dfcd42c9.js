(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+pJr":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("KNqU"),a("ER96"),a("K6vE"),a("tKM+"),a("UsjJ"),a("9k+R");var n=a("q1tI"),r=a.n(n),l=a("Jz1z");function o(e){var t=e.tags,a=e.baseUrl,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["tags","baseUrl"]);return r.a.createElement("ul",Object.assign({className:"tag-ul"},n),t.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(l.a,{text:e,url:a+"/"+e}))})))}o.defaultProps={baseUrl:""};var c=o},"9k+R":function(e,t,a){},TshS:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return g}));var n=a("q1tI"),r=a.n(n),l=a("1q4l"),o=a("Zttt"),c=a("wtQ5"),i=a("mSsX"),s=(a("UtXx"),a("T7Pk"),a("Wbzz")),u=(a("iPNO"),function(e){var t=e.currentPage,a=e.totalPageNumber,n=1===t?r.a.createElement("span",{className:"disabled"},"«"):r.a.createElement(s.Link,{to:"/"+(t-1)},"«"),l=t===a?r.a.createElement("span",{className:"disabled"},"»"):r.a.createElement(s.Link,{to:"/"+(t+1)},"»");return r.a.createElement("div",{className:"pagination"},n,Array.from({length:a}).map((function(e,t){return t+1})).map((function(e){return e===t?r.a.createElement("span",{key:"pageNum-"+e,className:"active"},e):r.a.createElement(s.Link,{key:"pageNum-"+e,to:"/"+e},e)})),l)});u.defaultProps={currentPage:1,totalPageNumber:1};var m=u,d=a("eb58"),p=a("efpO");function f(e){var t=e.pageContext,a=e.data,n=e.location,s=t.from,u=t.to,f=t.currentPage,g=t.numPages,b=a.site.siteMetadata.title,E=a.allMarkdownRemark.edges,k=Object(d.b)(),y=k.lang,w=k.homeLink;return r.a.createElement(o.a,{location:n,title:b},r.a.createElement(c.a,{title:Object(p.b)("tIndTitle"),keywords:Object(p.b)("taIndKeywords")}),r.a.createElement("aside",null,r.a.createElement(l.a,null)),r.a.createElement("h4",null,Object(p.b)("tfIndCountPosts",{count:a.allMarkdownRemark.totalCount,from:s,to:u})),E.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement(i.a,{lang:y,base:w,key:t.fields.slug,slug:t.fields.slug,date:t.frontmatter.date,timeToRead:t.timeToRead,title:a,excerpt:t.frontmatter.description||t.excerpt,tags:t.frontmatter.tags})})),r.a.createElement(m,{currentPage:f,totalPageNumber:g}))}f.defaultProps={};t.default=f;var g="2625737807"},iPNO:function(e,t,a){},mSsX:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("p3AD"),c=a("L6NH"),i=a("efpO"),s=a("+pJr");function u(e){var t,a,n=e.slug,u=e.title,m=e.date,d=e.timeToRead,p=e.excerpt,f=e.tags,g=e.base;return p&&(t=r.a.createElement("p",{dangerouslySetInnerHTML:{__html:p}})),f&&(a=r.a.createElement(s.a,{style:{margin:"0.5rem 0 -0.5rem -0.5rem"},tags:f,baseUrl:g+"tags"})),r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(o.a)(1),marginBottom:Object(o.a)(1/4)}},r.a.createElement(l.Link,{style:{boxShadow:"none"},to:n,rel:"bookmark"},u)),a,r.a.createElement("small",null,Object(i.a)(m)+" • "+Object(c.formatReadingTime)(d)),t))}u.defaultProps={title:null,excerpt:null,tags:null,base:""};var m=u},wtQ5:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("qhky"),o=a("Wbzz"),c=a("eb58");function i(e){var t=e.description,a=e.meta,n=e.keywords,i=e.title,s=Object(o.useStaticQuery)("1522010811").site,u=Object(c.b)().lang,m=t||s.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:u||s.siteMetadata.lang},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(a)})}i.defaultProps={meta:[],keywords:[],description:""};var s=i}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-74a77c707017dfcd42c9.js.map