(function(t){function e(e){for(var a,l,o=e[0],c=e[1],i=e[2],u=0,f=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,i||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},n={app:0},r=[];function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var d=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("ba4c"),n=s.n(a),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.GET_THEME.theme,attrs:{id:"app"}},[s("Home")],1)},l=[],o=s("2f62"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light h-full w-full dark:bg-gray-900 overflow-y-auto"},[s("div",{staticClass:"p-0 md:p-5  flex flex-col space-y-8 text-md mb-5 md:mb-0"},[s("NavBar"),t._m(0),s("div",{staticClass:" grid grid-cols-1 md:grid-cols-8 gap-5 lg:gap-7  text-sm md:text-md lg:text-xl  "},[s("PieGraph"),s("Employees")],1)],1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:" ml-2 md:ml-5 navigation-text"},[t._v("\n      Home /\n      "),s("span",{staticClass:" underline"},[t._v(" Reports & Insights ")])])}],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:" navbar w-full h-16 rounded-none md:rounded-md inline-flex  items-center px-2 md:px-8 text-white relative"},[s("svg",{staticClass:"h-8 w-8 border-white border-1 rounded-md p-1 mr-4 md:hidden ",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"}})]),s("h1",{staticClass:"text-3xl font-semibold"},[t._v("LOGO")]),t._m(0),s("button",{staticClass:" absolute right-5 ",on:{click:function(e){return t.LOGIN_MENU()}}},[s("img",{staticClass:"h-10 rounded-full",attrs:{src:"https://images.generated.photos/YTwWjnwcu4_bTXOyoCdp8Mr-NY64WEKtLsbUOqrFW-8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI2NzM5LmpwZw.jpg",alt:""}})]),t.GET_LOGIN_MENU?s("div",{staticClass:"w-40 h-24 bg-white dark:bg-gray-800 dark:border-none absolute right-8 top-14 border-1 rounded-sm shadow-md flex flex-col"},[s("div",{staticClass:"h-16 inline-flex  mt-1"},[s("svg",{staticClass:"h-5 w-5 ml-1 mt-1 text-gray-800 ",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"}})]),t._m(1)]),s("button",{staticClass:"text-red-600 text-semibold text-md border-t-1 inline-flex items-center pl-1 dark:border-gray-900"},[s("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",clipRule:"evenodd"}})]),s("p",{staticClass:"pl-1"},[t._v("Logout")])])]):t._e(),s("TogleButton")],1)},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden md:inline-flex space-x-8 pl-20 font-medium lg:space-x-20"},[s("h3",[t._v("MENU")]),s("h3",[t._v("MENU")]),s("h3",[t._v("MENU")]),s("h3",[t._v("MENU")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col pl-1"},[s("h1",{staticClass:"text-gray-400 dark:text-gray-500"},[t._v("My Profile")]),s("p",{staticClass:"text-gray-500 dark:text-gray-400 text-xs"},[t._v("\n          Change settings of your account\n        ")])])}],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"w-10 h-10 border-2  rounded-md right-20 absolute flex flex-row items-center justify-center  border-gray-800 dark:border-white",on:{click:function(e){return t.THEME()}}},[s("div",{staticClass:"block w-5 h-5 dark:bg-white rounded-full bg-gray-900"})])},m=[],b={name:"TogleButton",methods:{...Object(o["b"])(["THEME"]),computed:{...Object(o["c"])(["GET_THEME"])}}},p=b,j=s("2877"),h=Object(j["a"])(p,f,m,!1,null,null,null),g=h.exports,v={name:"NavBar",components:{TogleButton:g},methods:{...Object(o["b"])(["LOGIN_MENU"])},computed:{...Object(o["c"])(["GET_LOGIN_MENU"])}},_=v,E=Object(j["a"])(_,d,u,!1,null,null,null),x=E.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"outer-container pt-full md:col-span-3"},[s("div",{staticClass:"inner-container "},[t._m(0),s("div",{staticClass:"h-full graph-margin-sm md:graph-margin-md lg:graph-margin-lg lg:pt-6 xl:pt-16 "},[s("div",{staticClass:"pt-full relative"},[s("div",{staticClass:"absolute w-full h-full top-0 ",style:"background: conic-gradient("+t.GET_REPORT_RESPONSE.style+"); border-radius: 50%;"})])]),s("div",{staticClass:"inline-flex justify-around top-0 py-3 relative "},t._l(t.GET_REPORT_RESPONSE.data,(function(e){return s("div",{key:e.id,staticClass:" inline-flex"},[s("div",{staticClass:"flex flex-col text-xs"},[s("div",{staticClass:" w-4 h-4 lg:w-6 lg:h-6 rounded-full mb-1",style:"background-color: "+e.color+"; border-radius: 9999px"}),s("h1",{staticClass:"text-sm md:text-md"},[t._v(t._s(e.category))])])])})),0)])])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"text-gray-500"},[t._v("Why do you create a startup?")]),s("h3",{staticClass:"text-gray-900 dark:text-gray-200 text-opacity-40"},[t._v("\n        Trends\n      ")])])}],O={name:"PieGraph",computed:{...Object(o["c"])(["GET_REPORT_RESPONSE"])}},C=O,k=Object(j["a"])(C,y,w,!1,null,null,null),S=k.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"outer-container  md:col-span-5 "},[s("div",{staticClass:" md:inner-container space-y-4 "},[s("h1",{staticClass:" "},[t._v("Employees")]),s("div",{staticClass:" border-gray-200 dark:border-gray-900 border-1  rounded-md overflow-y-auto  "},[t._m(0),t._l(t.GET_USER_RESPONSE,(function(e){return s("div",{key:e.id,staticClass:"inline-grid grid-cols-9 w-full text-xxs lg:text-sm px-2 pt-2 border-t-1  border-gray-200 dark:border-gray-900 h-9 lg:h-12"},[s("div",{staticClass:" col-span-3 flex items-center space-x-2 truncate ... "},[s("img",{staticClass:" rounded-full h-4 w-4 lg:h-8 lg:w-8 lg:mx-2",attrs:{src:e.profile_img}}),s("div",{staticClass:"flex flex-col"},[s("p",{staticClass:"font-bold"},[t._v("\n              "+t._s(e.first_name)+" "+t._s(e.last_name)+"\n            ")]),s("p",{staticClass:"text-ellipsis"},[t._v(t._s(e.email))])])]),s("div",{staticClass:" col-span-2 pl-2 flex-items-center "},[s("p",{staticClass:"font-bold"},[t._v(t._s(e.lastConnection))]),s("p",[t._v(t._s(e.fromNow))])]),s("h1",{staticClass:" col-span-2 flex items-center pl-2"},[t._v("\n          "+t._s(e.department)+"\n        ")]),s("div",{staticClass:" col-span-2  inline-flex items-center justify-between pl-2 "},[e.status?s("h1",{staticClass:"text-green-500"},[t._v("Active")]):s("h1",{staticClass:"text-red-500"},[t._v("Inactive")]),s("svg",{staticClass:"h-4 w-4 lg:h-5 lg:w-5 float-right",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"}})])])])}))],2)])])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inline-grid grid-cols-9 text-xxs lg:text-sm w-full h-9 items-center lg:h-14"},[s("h1",{staticClass:" col-span-3 pl-2 "},[t._v("Employees")]),s("h1",{staticClass:" col-span-2 pl-2"},[t._v("Last Login")]),s("h1",{staticClass:" col-span-2 pl-2 "},[t._v("Department")]),s("h1",{staticClass:" col-span-2 "},[t._v("Status")])])}],M={name:"Employees",computed:{...Object(o["c"])(["GET_USER_RESPONSE"])}},N=M,P=Object(j["a"])(N,R,T,!1,null,null,null),z=P.exports,G={name:"Home",components:{NavBar:x,PieGraph:S,Employees:z},computed:{...Object(o["c"])(["GET_THEME"])}},U=G,L=Object(j["a"])(U,c,i,!1,null,null,null),H=L.exports,$={name:"app",components:{Home:H},methods:{...Object(o["b"])(["USER_RESPONSE","REPORT_RESPONSE"])},computed:{...Object(o["c"])(["GET_THEME"])},mounted(){this.USER_RESPONSE(),this.REPORT_RESPONSE()}},B=$,D=Object(j["a"])(B,r,l,!1,null,null,null),I=D.exports;s("359c"),s("0c6e");s("a766");var A={theme:{theme:"dark",bool:!0},userResponse:null,reportResponse:null,loginMenu:!1};const W={GET_THEME:t=>t.theme,GET_USER_RESPONSE:t=>t.userResponse,GET_REPORT_RESPONSE:t=>t.reportResponse,GET_LOGIN_MENU:t=>t.loginMenu};var q=W,Y=s("bc3a"),Z=s.n(Y);const F=t=>{let e="1700-01-01T00:00:00Z";return t.map(t=>new Date(t).getTime()>new Date(e).getTime()?e=t:""),e};var J=F;const K=()=>"#"+Math.floor(16777215*Math.random()).toString(16);var V=K;const X=t=>{const e={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString("en-US",e)};var Q=X,tt=s("c1df"),et=s.n(tt);const st={THEME:t=>{t.commit("SET_THEME")},LOGIN_MENU:t=>{t.commit("SET_LOGIN_MENU")},USER_RESPONSE:async t=>{let e;const s=await Z.a.get("/api/users").then(t=>t.data.users.map(t=>(e=J(t.sessions),{...t,lastConnection:Q(e),fromNow:et()(e).fromNow()}))).catch(t=>t);t.commit("LOAD_USER_RESPONSE",s)},REPORT_RESPONSE:async t=>{let e=0;const s=await Z.a.get("/api/reports").then(t=>t.data.reports.map(t=>(e+=t.total,{...t,color:V()})).sort((t,e)=>t.total>e.total?1:e.total>t.total?-1:0)).catch(t=>t);let a=0,n=0;const r=[];for(let o=0;o<s.length;o++)a+=n,n=Math.floor(100*s[o].total/e),r.push(`${s[o].color} 0deg ${n+a}%`);let l=r.join();t.commit("LOAD_REPORT_RESPONSE",{data:s,style:l})}};var at=st;const nt={SET_THEME:t=>{t.theme.bool?t.theme={theme:" ",bool:!1}:t.theme={theme:"dark",bool:!0}},SET_LOGIN_MENU:t=>{t.loginMenu?t.loginMenu=!1:t.loginMenu=!0},LOAD_USER_RESPONSE:(t,e)=>t.userResponse=e,LOAD_REPORT_RESPONSE:(t,e)=>t.reportResponse=e};var rt=nt;n.a.config.productionTip=!1,n.a.use(o["a"]);const lt=new o["a"].Store({state:A,getters:q,actions:at,mutations:rt});new n.a({store:lt,render:t=>t(I)}).$mount("#app")},a766:function(t,e,s){}});
//# sourceMappingURL=app.efb61e34.js.map