(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},i={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"45bc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Index")],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-navbar-brand",{attrs:{href:"./"}},[e._v("Karabiner-Elements complex_modifications rules")]),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{href:"https://github.com/pqrs-org/KE-complex_modifications",target:"_blank"}},[a("icon",{attrs:{name:"external-link-alt"}}),e._v(" GitHub ")],1)],1)],1)],1),a("div",{staticClass:"search"},[a("socket",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{id:"loading-spinner"}}),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{md:"6"}},[a("search-form",{ref:"searchForm",attrs:{disabled:null===e.lunrIndex,placeholder:e.lunrIndex?"Search keywords...":"Fetching data..."},on:{submit:e.search}})],1)],1)],1),a("b-container",[a("b-list-group",{staticClass:"toc"},[a("b-list-group-item",{attrs:{variant:"info"}},[e._v("Table of Contents")]),e._l(e.filteredGroups,(function(t){return a("b-list-group-item",{key:t.id},[a("a",{attrs:{href:"#"+t.id}},[e._v(e._s(t.name))]),a("b-badge",{staticClass:"float-right",attrs:{variant:"secondary"}},[e._v(e._s(t.files.length))])],1)}))],2),a("div",{staticStyle:{"margin-top":"1rem","margin-bottom":"3rem"}},[e.allFilesExpanded?a("div",[a("b-btn",{attrs:{variant:"secondary"},on:{click:function(t){return e.setAllFileCollapsed(!0)}}},[e._v("Collapse All")])],1):a("div",[a("b-btn",{attrs:{variant:"secondary"},on:{click:function(t){return e.setAllFileCollapsed(!1)}}},[e._v("Expand All")])],1)]),e._l(e.filteredGroups,(function(t){return a("div",{key:t.id,staticClass:"card-outer",attrs:{id:t.id}},[a("b-card",{staticClass:"border-info",attrs:{header:t.name,"header-bg-variant":"info","header-text-variant":"white"}},e._l(t.files,(function(t){return a("div",{key:t.id},[t?a("div",{staticClass:"rule-card-outer",attrs:{id:t.id}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("span",{staticClass:"rule-title",on:{click:function(a){return e.toggleFileCollapsed(t.id)}}},[e.fileCollapsed[t.id]?a("span",[a("icon",{attrs:{name:"caret-square-right"}})],1):a("span",[a("icon",{attrs:{name:"caret-square-down"}})],1),e._v(" "+e._s(t.title)+" "),t.maintainers?a("div",{staticClass:"rule-maintainer"},[a("span",{staticClass:"rule-maintainer-header"},[e._v(" Maintained by ")]),a("span",{staticClass:"rule-maintainer-body"},e._l(t.maintainers,(function(t){return a("span",{key:t},[e._v(" @"),a("a",{attrs:{href:"https://github.com/"+t,target:"_blank"}},[e._v(e._s(t))])])})),0)]):e._e()]),a("div",{staticClass:"float-right"},[a("b-dropdown",{attrs:{text:"Import",variant:"primary",split:"",right:""},on:{click:function(a){return e.importJson(t.importUrl)}}},[a("b-dropdown-item-button",{on:{click:function(a){return e.importJson(t.importUrl)}}},[e._v("Import to Karabiner-Elements")]),a("b-dropdown-divider"),a("b-dropdown-item-button",{on:{click:function(a){return e.showJsonModal(t.id)}}},[a("small",[a("icon",{attrs:{name:"regular/comment-alt"}}),e._v(" Show JSON ")],1)]),a("b-dropdown-item-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.pageUrl+"#"+t.id,expression:"pageUrl + '#' + file.id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.urlCopied,expression:"urlCopied",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.urlCopyFailed,expression:"urlCopyFailed",arg:"error"}]},[a("small",[a("icon",{attrs:{name:"regular/clipboard"}}),e._v(" Copy URL ")],1)]),a("b-dropdown-item-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.pageUrl+t.jsonUrl,expression:"pageUrl + file.jsonUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.urlCopied,expression:"urlCopied",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.urlCopyFailed,expression:"urlCopyFailed",arg:"error"}]},[a("small",[a("icon",{attrs:{name:"regular/clipboard"}}),e._v(" Copy JSON URL ")],1)]),a("b-dropdown-item-button",{on:{click:function(a){return e.editJson(t.id)}}},[a("small",[a("icon",{attrs:{name:"regular/edit"}}),e._v(" Edit JSON (Open external site) ")],1)])],1)],1)]),a("b-collapse",{attrs:{id:t.id+"-list-group",visible:!e.fileCollapsed[t.id]}},[a("b-list-group",{attrs:{flush:""}},[e._l(t.rules,(function(t){return a("b-list-group-item",{key:t.id},[e._v(" "+e._s(t.description)+" "),t.availableSince?a("div",{staticClass:"rule-available-since"},[e._v(" Karabiner-Elements "+e._s(t.availableSince)+" or later ")]):e._e()])})),t.extraDescriptionPath?[a("b-list-group-item",[a("iframe",{attrs:{id:t.id+"-extra-description",src:"build/"+t.extraDescriptionPath}})])]:e._e()],2)],1)],1)],1):e._e()])})),0)],1)})),"example"!=e.pageName?a("div",[a("hr"),a("a",{attrs:{href:"example.html"}},[e._v("Other examples")])]):e._e(),a("b-modal",{ref:"showJsonModalRef",attrs:{id:"show-json-modal",title:e.showJsonModalTitle,size:"lg","ok-only":"","ok-title":"Close"}},[a("p",{staticClass:"show-json-modal-body"},[e._v(e._s(e.showJsonModalBody))])])],2)],1)},s=[],l=(a("a4d3"),a("e01a"),a("4160"),a("baa5"),a("b0c0"),a("d3b7"),a("07ac"),a("ac1f"),a("25f0"),a("3ca3"),a("5319"),a("841c"),a("159b"),a("ddb0"),a("2b3d"),a("b85c")),c=a("bee2"),d=a("d4ec"),u=a("bc3a"),p=a.n(u),f=a("2f21"),h=a.n(f),m=a("d58b"),b=a("f13c"),v=a.n(b),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form",{on:{submit:e.submit}},[a("b-input-group",[a("b-form-input",{attrs:{disabled:e.disabled,placeholder:e.placeholder},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),a("b-input-group-append",[a("b-btn",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)],1)],1)},y=[],w={name:"SearchForm",props:{disabled:Boolean,placeholder:String},data:function(){return{searchQuery:""}},methods:{submit:function(e){e.preventDefault(),this.emit()},setSearchQuery:function(e){this.searchQuery=e,this.emit()},emit:function(){this.$emit("submit",this.searchQuery)}}},x=w,_=a("2877"),C=Object(_["a"])(x,g,y,!1,null,null,null),k=C.exports,O=a("0363"),j=a.n(O),E=function(e){var t=e.substring(e.lastIndexOf("/")+1);return-1!=t.lastIndexOf(".")&&(t=t.substring(0,t.lastIndexOf("."))),t},I=!1,S=function e(t,a){Object(d["a"])(this,e),this.id=t,this.description=a.description,this.availableSince=a.available_since},F=function(){function e(t){var a=this;Object(d["a"])(this,e),this.id=E(t.path),this.jsonUrl=t.path,this.importUrl=this.makeJsonUrl(t.path),this.extraDescriptionPath=t.extra_description_path,this.extraDescriptionText=t.extra_description_text,this.title=t.json.title,this.maintainers=t.json.maintainers,this.rules=[],t.json.rules.forEach((function(e,t){a.rules.push(new S(t,e))}))}return Object(c["a"])(e,[{key:"makeJsonUrl",value:function(e){var t=encodeURIComponent(window.location.href.replace(/[^/]+$/,"")+e);return"karabiner://karabiner/assets/complex_modifications/import?url="+t}}]),e}(),J=function e(t){var a=this;Object(d["a"])(this,e),this.id=t.id,this.name=t.name,this.files=[],t.files.forEach((function(e){a.files.push(new F(e))}))},U={name:"Index",components:{Socket:m["a"],SearchForm:k},data:function(){return{loading:!0,pageUrl:window.location.origin+window.location.pathname,pageName:this.fileName(window.location.pathname),groups:[],filteredGroups:[],allFilesExpanded:!1,fileCollapsed:{},showJsonModalTitle:"",showJsonModalBody:"",lunrIndex:null,iFrameResizers:{}}},created:function(){this.fetchData()},methods:{fileName:function(e){var t=e.substring(e.lastIndexOf("/")+1);return-1!=t.lastIndexOf(".")&&(t=t.substring(0,t.lastIndexOf("."))),t},urlSearchQuery:function(){return new URLSearchParams(location.search).get("q")},fetchData:function(){var e=this;p.a.get("build/dist.json",{headers:{"Cache-Control":"no-cache"}}).then((function(t){var a=e.fileName(window.location.pathname);""===a&&(a="index"),t.data[a].forEach((function(t){e.groups.push(new J(t))})),e.filteredGroups=e.groups,e.updateLoadingState(),e.makeLunrIndex(),e.makeIFrameResizer(),e.setAllFileCollapsed(!0),e.scrollToHash();var r=e.urlSearchQuery();null!==r&&e.$refs.searchForm.setSearchQuery(r)}))},updateLoadingState:function(){var e=this;setTimeout((function(){e.loading=!1}),500)},makeLunrIndex:function(){var e=this;this.lunrIndex=h()((function(t){t.ref("fileId"),t.field("title",{boost:2}),t.field("text"),e.groups.forEach((function(e){e.files.forEach((function(e){var a="";void 0!==e.maintainers&&e.maintainers.forEach((function(e){a+=e+" "})),e.rules.forEach((function(e){a+=e.description+" "})),a+=e.extraDescriptionText+" ",t.add({fileId:e.id,title:e.title,text:a.toLowerCase()})}))}))}))},updateAllFilesExpanded:function(){this.allFilesExpanded=!0;for(var e=0,t=Object.values(this.fileCollapsed);e<t.length;e++){var a=t[e];if(a)return void(this.allFilesExpanded=!1)}},setAllFileCollapsed:function(e){var t=this,a={};this.groups.forEach((function(r){r.files.forEach((function(r){a[r.id]=e,t.makeIFrameResizer(r.id)}))})),this.fileCollapsed=a,this.updateAllFilesExpanded()},toggleFileCollapsed:function(e){var t=this.fileCollapsed[e];this.$set(this.fileCollapsed,e,!t),this.makeIFrameResizer(e),this.updateAllFilesExpanded()},makeIFrameResizer:function(e){this.iFrameResizers[e]=j()({heightCalculationMethod:"lowestElement"},"#"+e+"-extra-description")},importJson:function(e){location.href=e},showJsonModal:function(e){var t,a=this,r=Object(l["a"])(this.groups);try{for(r.s();!(t=r.n()).done;){var i,n=t.value,o=Object(l["a"])(n.files);try{for(o.s();!(i=o.n()).done;){var s=i.value;if(s.id==e)return this.showJsonModalTitle=s.title,this.showJsonModalBody="Loading...",this.$refs.showJsonModalRef.show(),void p.a.get(s.jsonUrl).then((function(e){a.showJsonModalBody=JSON.stringify(e.data,null,2)}))}}catch(c){o.e(c)}finally{o.f()}}}catch(c){r.e(c)}finally{r.f()}},editJson:function(e){var t,a=Object(l["a"])(this.groups);try{for(a.s();!(t=a.n()).done;){var r,i=t.value,n=Object(l["a"])(i.files);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(o.id==e)return void p.a.get(o.jsonUrl).then((function(e){var t="https://genesy.github.io/karabiner-complex-rules-generator/#",a=window.btoa(JSON.stringify(e.data));window.open(t+a)}))}}catch(s){n.e(s)}finally{n.f()}}}catch(s){a.e(s)}finally{a.f()}},urlCopied:function(e){alert("You just copied: "+e.text)},urlCopyFailed:function(){alert("Failed to copy texts")},scrollToHash:function(){var e=this;I||setTimeout((function(){var t=window.location.hash.substring(1),a=document.getElementById(t);a&&(I=!0,e.$set(e.fileCollapsed,t,!1),e.makeIFrameResizer(t),v.a.scrollTo(a,500,{offset:-100}))}),500)},search:function(e){var t=this;if(e!==this.urlSearchQuery()&&window.history.pushState({q:e},"","?q="+encodeURIComponent(e)),null!==this.lunrIndex)if(e){var a=new J({id:"search-result",name:"Search Result",files:[]}),r=[a],i=this.lunrIndex.query((function(t){h.a.tokenizer(e.toLowerCase()).forEach((function(e){var a=e.toString();t.term(a,{boost:100}),t.term(a,{wildcard:h.a.Query.wildcard.LEADING|h.a.Query.wildcard.TRAILING,boost:10}),t.term(a,{editDistance:2})}))}));i.forEach((function(e){var r=e.ref;t.groups.forEach((function(e){e.files.forEach((function(e){e.id==r&&a.files.push(e)}))}))})),this.filteredGroups=r,window.scrollTo(0,0)}else this.filteredGroups=this.groups}}},N=U,M=(a("be94"),Object(_["a"])(N,o,s,!1,null,"c06d49dc",null)),R=M.exports,T={name:"app",components:{Index:R}},Q=T,L=Object(_["a"])(Q,i,n,!1,null,null,null),A=L.exports,P=(a("f9e3"),a("2dd8"),a("5f5b")),D=a("4eb5"),$=a.n(D),z=(a("a286"),a("5f90"),a("e113"),a("f8cd"),a("c502"),a("e0f8"),a("0874"));r["default"].config.productionTip=!1,r["default"].use(P["a"]),r["default"].use($.a),r["default"].component("icon",z["a"]),new r["default"]({render:function(e){return e(A)}}).$mount("#app")},be94:function(e,t,a){"use strict";var r=a("45bc"),i=a.n(r);i.a}});
//# sourceMappingURL=app.a2b74654.js.map