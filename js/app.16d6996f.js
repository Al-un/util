(function(t){function a(a){for(var c,o,l=a[0],i=a[1],u=a[2],d=0,f=[];d<l.length;d++)o=l[d],n[o]&&f.push(n[o][0]),n[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);s&&s(a);while(f.length)f.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],c=!0,l=1;l<e.length;l++){var i=e[l];0!==n[i]&&(c=!1)}c&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var c={},n={app:0},r=[];function o(a){if(c[a])return c[a].exports;var e=c[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=c,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var c in t)o.d(e,c,function(a){return t[a]}.bind(null,c));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/utils/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var s=i;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var c=e("64a9"),n=e.n(c);n.a},1285:function(t,a,e){},"2fc4":function(t,a,e){},3076:function(t,a,e){},3910:function(t,a,e){"use strict";var c=e("3076"),n=e.n(c);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var c=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout")},r=[],o=e("2f62"),l=e("cebc"),i=(e("c5f6"),e("6b54"),e("6762"),e("2fdb"),function(t){var a=u(t),e=s(a);return e}),u=function(t){while(t.includes("*")||t.includes("/")){var a=t.indexOf("*"),e=t.indexOf("/"),c=void 0,n=void 0,r=void 0;a>0?(c=t[a-1],n=t[a+1],r=c*n,t.splice(a-1,3,r)):e>0&&(c=t[e-1],n=t[e+1],r=c/n,t.splice(e-1,3,r)),console.log(t)}return t},s=function(t){while(t.length>1){var a=t.shift(),e=t.shift(),c=t.shift(),n=void 0;switch(e){case"+":n=a+c;break;case"-":n=a-c;break}t.unshift(n)}return t},d={history:[],calc:[],number:void 0,operator:void 0},f={addKey:function(t,a){var e=t.commit;"0123456789".includes(a)?e("addNumber",a):"+-*/".includes(a)?e("addOperator",a):".,".includes(a)?e("addSeparator",a):"Enter"===a?e("calculate"):"c"===a?e("clear"):console.log("Ignored pressed key: ".concat(a))}},m={addNumber:function(t,a){t.number?t.number+=a:(t.operator&&(t.calc.length&&t.calc.push(t.operator),t.operator=void 0),t.number=a.toString())},addOperator:function(t,a){t.number&&(t.calc.push(new Number(t.number)),t.number=void 0),t.operator=a},addSeparator:function(t){t.number&&(t.number+=".")},calculate:function(t){if(0!==t.calc.length){t.number&&(t.calc.push(new Number(t.number)),t.number=void 0);var a=t.calc.slice(0),e=i(t.calc);t.history.push({datetime:new Date,calc:a,result:e[0]}),t.number=e[0].toString(),t.calc=[]}},deleteLastNumber:function(t){t.number&&(t.number=t.number.substring(0,t.number.length-1))},clear:function(t){t.calc=[],t.number=void 0,t.operator=void 0}},b={formattedHistory:function(t){return t.history.map(function(t){return Object(l["a"])({},t,{calc:t.calc.join(" ")})})},formattedCalculation:function(t){return t.calc.length?t.calc.join(" "):"> "}},p={namespaced:!0,state:d,actions:f,mutations:m,getters:b};c["a"].use(o["a"]);var v=new o["a"].Store({modules:{calculator:p}}),h=v,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"main-container"}},[e("nav",{staticClass:"navbar navbar-expand-lg bg-primary navbar-dark"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"root"}}},[t._v("Home")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"calc"}}},[t._v("Calculator")])],1)])])],1)]),e("main",{staticClass:"container"},[e("router-view")],1)])},y=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{"data-toggle":"collapse","data-target":"#navbarNav"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],g={name:"layout"},x=g,C=(e("3910"),e("2877")),k=Object(C["a"])(x,_,y,!1,null,null,null);k.options.__file="Layout.vue";var O=k.exports,w={name:"app",store:h,components:{Layout:O}},N=w,j=(e("034f"),Object(C["a"])(N,n,r,!1,null,null,null));j.options.__file="App.vue";var $=j.exports,S=e("8c4f"),E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"row"},[e("calc-display")],1),e("div",{staticClass:"row"},[e("calc-button",{attrs:{text:"CE"},on:{"calc-click":function(a){t.clear()}}}),e("calc-button",{attrs:{text:"C"},on:{"calc-click":function(a){t.clear()}}}),e("calc-button",{attrs:{text:"<-"},on:{"calc-click":function(a){t.deleteLastNumber()}}}),e("calc-button",{attrs:{text:"/"},on:{"calc-click":function(a){t.addOperator("/")}}})],1),e("div",{staticClass:"row"},[e("calc-button",{attrs:{text:"7"},on:{"calc-click":function(a){t.addNumber(7)}}}),e("calc-button",{attrs:{text:"8"},on:{"calc-click":function(a){t.addNumber(8)}}}),e("calc-button",{attrs:{text:"9"},on:{"calc-click":function(a){t.addNumber(9)}}}),e("calc-button",{attrs:{text:"x"},on:{"calc-click":function(a){t.addOperator("*")}}})],1),e("div",{staticClass:"row"},[e("calc-button",{attrs:{text:"4"},on:{"calc-click":function(a){t.addNumber(4)}}}),e("calc-button",{attrs:{text:"5"},on:{"calc-click":function(a){t.addNumber(5)}}}),e("calc-button",{attrs:{text:"6"},on:{"calc-click":function(a){t.addNumber(6)}}}),e("calc-button",{attrs:{text:"-"},on:{"calc-click":function(a){t.addOperator("-")}}})],1),e("div",{staticClass:"row"},[e("calc-button",{attrs:{text:"1"},on:{"calc-click":function(a){t.addNumber(1)}}}),e("calc-button",{attrs:{text:"2"},on:{"calc-click":function(a){t.addNumber(2)}}}),e("calc-button",{attrs:{text:"3"},on:{"calc-click":function(a){t.addNumber(3)}}}),e("calc-button",{attrs:{text:"+"},on:{"calc-click":function(a){t.addOperator("+")}}})],1),e("div",{staticClass:"row"},[e("calc-button",{attrs:{text:""}}),e("calc-button",{attrs:{text:"0"},on:{"calc-click":function(a){t.addNumber(0)}}}),e("calc-button",{attrs:{text:"."},on:{"calc-click":function(a){t.addSeparator()}}}),e("calc-button",{attrs:{text:"="},on:{"calc-click":function(a){t.calculate()}}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("calc-history")],1)])])},H=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h2",[t._v("Calculator")])])])}],L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"calc-button col text-center border border-primary p-3",on:{click:function(a){t.onClick()}}},[t._v(t._s(t.text))])},P=[],B={name:"CalcButton",props:{text:{type:String,required:!0},width:{type:Number,default:1},height:{type:Number,default:1}},methods:{onClick:function(){this.$emit("calc-click")}}},D=B,M=(e("903c"),Object(C["a"])(D,L,P,!1,null,"304f7533",null));M.options.__file="CalcButton.vue";var T=M.exports,J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h2",[t._v("History")]),t._l(t.history,function(a){return e("div",{key:a.datetime.getTime()},[e("strong",[t._v(t._s(a.datetime.toLocaleString("en-GB")))]),t._v("\n        \n      "),e("span",[t._v(t._s(a.calc)+" = "+t._s(a.result))])])})],2)},K=[],q={name:"calc-history",computed:Object(l["a"])({},Object(o["b"])({history:"calculator/formattedHistory"}))},A=q,G=(e("5dca"),Object(C["a"])(A,J,K,!1,null,null,null));G.options.__file="CalcHistory.vue";var I=G.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-100"},[e("div",{},[t._v(t._s(t.currCalc)+" "+t._s(t.currOperator))]),e("div",{staticClass:"display-4 text-right"},[t._v(t._s(t.currNumber))])])},F=[],Q={name:"calc-display",computed:Object(l["a"])({},Object(o["c"])({currNumber:function(t){return t.calculator.number||0},currOperator:function(t){return t.calculator.operator}}),Object(o["b"])({currCalc:"calculator/formattedCalculation"}))},R=Q,U=(e("ee5e"),Object(C["a"])(R,z,F,!1,null,null,null));U.options.__file="CalcDisplay.vue";var V=U.exports,W={name:"calculator",components:{CalcButton:T,CalcHistory:I,CalcDisplay:V},created:function(){var t=this;this.keyHandler=function(a){return t.$store.dispatch("calculator/addKey",a.key)},window.addEventListener("keyup",this.keyHandler)},beforeDestroy:function(){window.removeEventListener("keyup",this.keyHandler)},methods:{addNumber:function(t){this.$store.commit("calculator/addNumber",t)},addOperator:function(t){this.$store.commit("calculator/addOperator",t)},addSeparator:function(){this.$store.commit("calculator/addSeparator")},deleteLastNumber:function(){this.$store.commit("calculator/deleteLastNumber")},calculate:function(){this.$store.commit("calculator/calculate")},clear:function(){this.$store.commit("calculator/clear")}}},X=W,Y=(e("cac3"),Object(C["a"])(X,E,H,!1,null,"50dfac93",null));Y.options.__file="Calculator.vue";var Z=Y.exports,tt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("p",[t._v("Home page to be done later ...")])])}],et={name:"Home",props:{msg:String}},ct=et,nt=(e("d119"),Object(C["a"])(ct,tt,at,!1,null,"671401e6",null));nt.options.__file="Home.vue";var rt=nt.exports;c["a"].use(S["a"]);var ot=new S["a"]({mode:"history",routes:[{path:"/",name:"root",component:rt},{path:"/calc",name:"calc",component:Z}]}),lt=e("9f7b");e("f9e3"),e("2dd8"),e("2fc4");c["a"].config.productionTip=!1,c["a"].use(lt["a"]),new c["a"]({router:ot,render:function(t){return t($)}}).$mount("#app")},"5dca":function(t,a,e){"use strict";var c=e("a550"),n=e.n(c);n.a},6033:function(t,a,e){},"64a9":function(t,a,e){},"85da":function(t,a,e){},"903c":function(t,a,e){"use strict";var c=e("ec72"),n=e.n(c);n.a},a550:function(t,a,e){},cac3:function(t,a,e){"use strict";var c=e("6033"),n=e.n(c);n.a},d119:function(t,a,e){"use strict";var c=e("85da"),n=e.n(c);n.a},ec72:function(t,a,e){},ee5e:function(t,a,e){"use strict";var c=e("1285"),n=e.n(c);n.a}});
//# sourceMappingURL=app.16d6996f.js.map