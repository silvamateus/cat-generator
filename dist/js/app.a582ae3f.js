webpackJsonp([0],{0:function(t,a,n){t.exports=n("NHnr")},G3BA:function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("/5sW"),i={name:"ButtonCaller",data:function(){return{buttonText:"Adiciona Gatos"}},props:{loading:Boolean},methods:{callCat:function(t){this.$emit("buttonCat",t)}},watch:{loading:function(t){this.buttonText=t?"Loading...":"Adicione Gatos"}}},s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("button",{staticClass:"cat-btn",attrs:{disabled:t.loading},on:{click:t.callCat}},[n("i",{staticClass:"fas fa-spinner fa-spin"}),n("span",[t._v(t._s(t.buttonText))])])},o=[],r=n("XyMi");function c(t){n("RK0H")}var u=!1,l=c,f="data-v-46026a84",d=null,p=Object(r["a"])(i,s,o,u,l,f,d),m=p.exports,h={name:"CatFeed",props:{whiskasFeed:Array}},g=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"cats"}},t._l(t.whiskasFeed,function(t,a){return n("div",{key:a,staticClass:"cat-box"},[n("img",{attrs:{src:t,alt:t}}),n("i",{staticClass:"fas fa-heart"})])}))},v=[];function b(t){n("OiXu")}var _=!1,C=b,x="data-v-fae8a8ea",L=null,O=Object(r["a"])(h,g,v,_,C,x,L),$=O.exports,k={name:"app",data:function(){return{images:[],isLoading:!1}},components:{ButtonCaller:m,CatFeed:$},methods:{catImg:function(){var t=this;this.isLoading=!0,fetch("https://cataas.com/c").then(function(t){return t.blob()}).then(function(a){t.images.push(URL.createObjectURL(a))}).finally(setTimeout(function(){return t.isLoading=!1},1e3))}}},w=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[t._m(0),n("main",{staticClass:"feed"},[n("button-caller",{attrs:{loading:t.isLoading},on:{buttonCat:t.catImg}}),n("cat-feed",{attrs:{whiskasFeed:t.images}})],1),t._m(1)])},y=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{attrs:{id:"cat-header"}},[e("img",{attrs:{src:n("uiZZ"),alt:""}})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("footer",[n("i",{staticClass:"far fa-copyright"}),n("p",[t._v("2018 Cat Generator")])])}];function j(t){n("G3BA")}var A=!1,B=j,E=null,F=null,G=Object(r["a"])(k,w,y,A,B,E,F),T=G.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(T)}}).$mount("#app")},OiXu:function(t,a){},RK0H:function(t,a){},uiZZ:function(t,a,n){t.exports=n.p+"img/logo-1.83630309.svg"}},[0]);
//# sourceMappingURL=app.a582ae3f.js.map