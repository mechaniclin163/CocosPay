webpackJsonp_name_([2],{"3Khw":function(e,t,f){"use strict";function n(e){f("t1nY")}Object.defineProperty(t,"__esModule",{value:!0});var o=f("OMiY"),a=f.n(o);for(var i in o)"default"!==i&&function(e){f.d(t,e,function(){return o[e]})}(i);var c=f("Y0Iw"),s=f("C7Lr"),r=n,d=s(a.a,c.a,!1,r,"data-v-c9d09252",null);t.default=d.exports},4:function(e,t){},5:function(e,t){},"9zfd":function(e,t,f){!function(t,f){e.exports=f()}(0,function(){function e(e,t){var n=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||a,isActive:!(!1===e.isActive)}}(t.value),o=n.handler,i=n.middleware;n.isActive&&(e[f]=n.events.map(function(t){return{event:t,handler:function(t){return function(e){var t=e.el,f=e.event,n=e.handler,o=e.middleware;f.target!==t&&!t.contains(f.target)&&o(f,t)&&n(f,t)}({event:t,el:e,handler:o,middleware:i})}}}),e[f].forEach(function(e){var t=e.event,f=e.handler;return setTimeout(function(){return document.documentElement.addEventListener(t,f,!1)},0)}))}function t(e){(e[f]||[]).forEach(function(e){return document.documentElement.removeEventListener(e.event,e.handler,!1)}),delete e[f]}var f="__v-click-outside",n="undefined"!=typeof window,o="undefined"!=typeof navigator,a=n&&("ontouchstart"in window||o&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],i={bind:e,update:function(f,n){var o=n.value,a=n.oldValue;JSON.stringify(o)!==JSON.stringify(a)&&(t(f),e(f,{value:o}))},unbind:t};return{install:function(e){e.directive("click-outside",i)},directive:i}})},BTfB:function(e,t,f){"use strict";function n(e){f("vTOj")}Object.defineProperty(t,"__esModule",{value:!0});var o=f("OFBO"),a=f.n(o);for(var i in o)"default"!==i&&function(e){f.d(t,e,function(){return o[e]})}(i);var c=f("eYtc"),s=f("C7Lr"),r=n,d=s(a.a,c.a,!1,r,"data-v-5fafd526",null);t.default=d.exports},Dhy9:function(e,t,f){"use strict";var n=function(){var e=this,t=e.$createElement,f=e._self._c||t;return f("section",[f("app-header",{on:{refresh:e.refreshAccount}}),e._v(" "),f("section",{staticClass:"app-container"},[f("navigation",{attrs:{title:e.$t("title.recharge")}}),e._v(" "),f("div",{staticClass:"text-center mt20"},[e._v(e._s(e.$t("message.rechargeOnly")))]),e._v(" "),f("qriously",{staticClass:"qr-code text-center mt20",attrs:{foreground:"#0191ee",value:e.account,size:130}}),e._v(" "),f("div",{staticClass:"small-tip code text-center"},[e._v(e._s(e.currentAccount.accounts))]),e._v(" "),f("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.cocosAccount.accounts,expression:"cocosAccount.accounts",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}],staticClass:"full-btn mt40",attrs:{type:"primary"}},[e._v(e._s(e.$t("button.copyAddress")))])],1)],1)},o=[],a={render:n,staticRenderFns:o};t.a=a},OFBO:function(e,t,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navigation",props:{title:{type:String,default:""}},methods:{goBack:function(){this.$router.go(-1)}}}},OMiY:function(e,t,f){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=f("rVsN"),a=n(o),i=f("4YfN"),c=n(i),s=f("48sp"),r=f("9zfd"),d=n(r),l=f("kEHT"),u=n(l),p=f("DDR6"),b=n(p);t.default={data:function(){return{showNetworkDropdown:!1,nodes:[],choose:""}},computed:(0,c.default)({},(0,s.mapState)(["route","currentNetwork"])),directives:{clickOutside:d.default.directive},mounted:function(){for(var e=u.default.get("node").concat(u.default.get("add_node")?u.default.get("add_node"):[]),t="",f=0;f<e.length;f++)if(Array.isArray(e[f])){t=f;break}""!=t&&e.splice(t,1),this.nodes=e,this.choose=u.default.get("choose_node")},methods:(0,c.default)({},(0,s.mapActions)("account",["logoutBCXAccount"]),(0,s.mapActions)("wallet",["getAccounts","deleteWallet"]),(0,s.mapMutations)(["setAccountType","setLogin","setIsAccount","setAccount"]),(0,s.mapActions)(["nodeLists","apiConfig","init","switchAPINode","lookupWSNodeList"]),{onClickOutside:function(){this.showNetworkDropdown=!1},changeNetwork:function(e){var t=this,f=this;console.log("network"),console.log(e),a.default.all([this.deleteWallet(),this.logoutBCXAccount()]).then(function(n){console.log("deleteWallet"),console.log(n),window.localStorage.setItem("delAccount","sure"),t.setLogin(!1),t.setIsAccount(!1),t.setAccount({account:"",password:""}),t.switchAPINode({url:e.ws}).then(function(e){if(1===e.code)return new a.default(function(t,f){t(e)});f.$kalert({message:f.$i18n.t("alert.modifyFailed")})}).then(function(t){return new a.default(function(n,o){t.data.selectedNodeUrl?(f.apiConfig(e).then(function(e){console.log("apiConfigres"),console.log(e),n(e)}),f.choose=e):f.$kalert({message:f.$i18n.t("alert.modifyFailed")})})}).then(function(t){f.lookupWSNodeList().then(function(t){t.data.selectedNodeUrl?(u.default.set("choose_node",e),f.$router.replace({name:"initAccount",query:{isReload:!1}})):f.$kalert({message:f.$i18n.t("alert.modifyFailed")})})})})},changeNetwork123:function(e){var t=this;console.log("network"),console.log(e),this.switchAPINode({url:e.ws}).then(function(e){if(1===e.code)return new a.default(function(t,f){t(e)});t.$kalert({message:t.$i18n.t("alert.modifyFailed")})}).then(function(f){return new a.default(function(n,o){f.data.selectedNodeUrl?(t.choose=e,t.lookupWSNodeList().then(function(e){e.data.selectedNodeUrl?n(e):t.$kalert({message:t.$i18n.t("alert.modifyFailed")})})):t.$kalert({message:t.$i18n.t("alert.modifyFailed")})})}).then(function(f){t.apiConfig(e).then(function(f){console.log("apiConfigres"),console.log(f),u.default.set("choose_node",e),t.removeCurrentAccount()})})},NewBCX:function(e){var t={ws_node_list:[{url:e.ws,name:e.name}],networks:[{core_asset:"COCOS",chain_id:e.chainId}],faucetUrl:e.faucetUrl,auto_reconnect:!0,worker:!1,real_sub:!0,check_cached_nodes_data:!0};return new b.default(t)},goSettings:function(){this.$router.push({name:"settings"})},refreshData:function(){this.$emit("refresh")},removeCurrentAccount:function(e){var t=this;a.default.all([this.deleteWallet(),this.logoutBCXAccount()]).then(function(e){window.localStorage.setItem("delAccount","sure"),t.setLogin(!1),t.setIsAccount(!1),t.setAccount({account:"",password:""}),t.$router.replace({name:"initAccount"})})}})}},V0mS:function(e,t){e.exports={secp128r1:{p:"fffffffdffffffffffffffffffffffff",a:"fffffffdfffffffffffffffffffffffc",b:"e87579c11079f43dd824993c2cee5ed3",n:"fffffffe0000000075a30d1b9038a115",h:"01",Gx:"161ff7528b899b2d0c28607ca52c5b86",Gy:"cf5ac8395bafeb13c02da292dded7a83"},secp160k1:{p:"fffffffffffffffffffffffffffffffeffffac73",a:"00",b:"07",n:"0100000000000000000001b8fa16dfab9aca16b6b3",h:"01",Gx:"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",Gy:"938cf935318fdced6bc28286531733c3f03c4fee"},secp160r1:{p:"ffffffffffffffffffffffffffffffff7fffffff",a:"ffffffffffffffffffffffffffffffff7ffffffc",b:"1c97befc54bd7a8b65acf89f81d4d4adc565fa45",n:"0100000000000000000001f4c8f927aed3ca752257",h:"01",Gx:"4a96b5688ef573284664698968c38bb913cbfc82",Gy:"23a628553168947d59dcc912042351377ac5fb32"},secp192k1:{p:"fffffffffffffffffffffffffffffffffffffffeffffee37",a:"00",b:"03",n:"fffffffffffffffffffffffe26f2fc170f69466a74defd8d",h:"01",Gx:"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",Gy:"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},secp192r1:{p:"fffffffffffffffffffffffffffffffeffffffffffffffff",a:"fffffffffffffffffffffffffffffffefffffffffffffffc",b:"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",n:"ffffffffffffffffffffffff99def836146bc9b1b4d22831",h:"01",Gx:"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",Gy:"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},secp256k1:{p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},secp256r1:{p:"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",a:"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",b:"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",n:"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",h:"01",Gx:"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",Gy:"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}},XLFa:function(e,t){e.exports={name:"bigi",version:"1.4.2",description:"Big integers.",keywords:["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],devDependencies:{coveralls:"^2.11.2",istanbul:"^0.3.5",jshint:"^2.5.1",mocha:"^2.1.0",mochify:"^2.1.0"},repository:{url:"https://github.com/cryptocoinjs/bigi",type:"git"},main:"./lib/index.js",scripts:{"browser-test":"./node_modules/.bin/mochify --wd -R spec",test:"./node_modules/.bin/_mocha -- test/*.js",jshint:"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true",unit:"./node_modules/.bin/mocha",coverage:"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",coveralls:"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},dependencies:{},testling:{files:"test/*.js",harness:"mocha",browsers:["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},__npminstall_done:"Tue Dec 03 2019 15:44:08 GMT+0800 (GMT+08:00)",_from:"bigi@1.4.2",_resolved:"https://registry.npm.taobao.org/bigi/download/bigi-1.4.2.tgz"}},Y0Iw:function(e,t,f){"use strict";var n=function(){var e=this,t=e.$createElement,f=e._self._c||t;return f("header",{staticClass:"header"},[f("router-link",{staticClass:"header-logo",attrs:{to:"/"}},[f("img",{attrs:{src:"/icons/logo-small.png",alt:"Treasure"}})]),e._v(" "),f("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticClass:"network",on:{click:function(t){e.showNetworkDropdown=!e.showNetworkDropdown}}},[f("a",{staticClass:"network-toggle"},[f("span",{staticClass:"network-icon"}),e._v(" "),f("span",{staticClass:"network-name"},[e._v(e._s(e.choose.name))]),e._v(" "),f("span",{staticClass:"network-arrow"},[f("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[f("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])]),e._v(" "),f("div",{directives:[{name:"show",rawName:"v-show",value:e.showNetworkDropdown,expression:"showNetworkDropdown"}],staticClass:"network-dropdown"},e._l(e.nodes,function(t,n){return f("a",{key:n,on:{click:function(f){return e.changeNetwork(t)}}},[f("span",{staticClass:"network-dropdown-icon"},[t.ws===e.choose.ws?f("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -1.5 24 24",width:"24",height:"24",preserveAspectRatio:"xMinYMin"}},[f("path",{attrs:{d:"M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"}})]):f("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",width:"24",height:"24",preserveAspectRatio:"xMinYMin"}},[f("path",{attrs:{d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"}})])]),e._v(" "),f("span",[e._v(e._s(t.name))])])}),0)]),e._v(" "),f("div",{staticClass:"setting-icon"},[f("img",{attrs:{src:"/icons/shuaxin.png",alt:""},on:{click:e.refreshData}}),e._v(" "),f("img",{attrs:{src:"/icons/shezhi2.png",alt:""},on:{click:e.goSettings}})])],1)},o=[],a={render:n,staticRenderFns:o};t.a=a},eYtc:function(e,t,f){"use strict";var n=function(){var e=this,t=e.$createElement,f=e._self._c||t;return f("nav",[f("span",{on:{click:e.goBack}},[f("v-icon",{staticClass:"back-icon",attrs:{name:"angle-left"}})],1),e._v(" "),f("span",{staticClass:"title"},[e._v(e._s(e.title))])])},o=[],a={render:n,staticRenderFns:o};t.a=a},ehle:function(e,t,f){t=e.exports=f("UTlt")(!1),t.push([e.i,'\n.qr-code[data-v-0e6e4dbe]{background-image:url("/images/qrcode-bg.png");background-repeat:no-repeat;background-position:center center;width:160px;height:160px;margin:30px auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n',""])},gy7S:function(e,t,f){"use strict";function n(e){f("hrwv")}Object.defineProperty(t,"__esModule",{value:!0});var o=f("hiSt"),a=f.n(o);for(var i in o)"default"!==i&&function(e){f.d(t,e,function(){return o[e]})}(i);var c=f("Dhy9"),s=f("C7Lr"),r=n,d=s(a.a,c.a,!1,r,"data-v-0e6e4dbe",null);t.default=d.exports},hiSt:function(e,t,f){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=f("4YfN"),a=n(o),i=f("3cXf"),c=n(i),s=f("BTfB"),r=n(s),d=f("3Khw"),l=n(d),u=f("48sp");t.default={components:{Navigation:r.default,AppHeader:l.default},data:function(){return{account:{}}},mounted:function(){this.account=(0,c.default)({address:this.cocosAccount.accounts})},computed:(0,a.default)({},(0,u.mapState)(["currentAccount","cocosAccount"])),methods:(0,a.default)({},(0,u.mapActions)("account",["loadAccount"]),{copySuccess:function(){this.$kalert({message:this.$i18n.t("alert.copySuccess")})},copyError:function(){this.$kalert({message:this.$i18n.t("alert.copyFail")})},refreshAccount:function(){this.loadAccount()}})}},hrwv:function(e,t,f){var n=f("ehle");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);f("FIqI")("2faa6584",n,!0,{})},qPsl:function(e,t,f){t=e.exports=f("UTlt")(!1),t.push([e.i,"\nnav[data-v-5fafd526]{position:relative;padding:0 50px;border-bottom:1px dashed #e6e6e6\n}\n.back-icon[data-v-5fafd526]{position:absolute;top:10px;left:0;width:15px;height:30px;text-align:center;cursor:pointer\n}\n.title[data-v-5fafd526]{display:inline-block;width:100%;line-height:50px;text-align:center;font-size:18px\n}\n",""])},sCOn:function(e,t,f){t=e.exports=f("UTlt")(!1),t.push([e.i,"\n.header[data-v-c9d09252]{width:100%;height:60px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;border-bottom:1px solid #e6e6e6;background-color:rgba(70,121,254,0.2)\n}\n.setting-icon[data-v-c9d09252]{width:62px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between\n}\n.setting-icon img[data-v-c9d09252]{cursor:pointer\n}\n.header-logo[data-v-c9d09252]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:62px\n}\n.header-logo img[data-v-c9d09252],.header-logo span[data-v-c9d09252]{display:block\n}\n.network[data-v-c9d09252]{position:relative;border:1px solid #e6e6e6;border-radius:20px\n}\n.network span[data-v-c9d09252]{display:block\n}\na.network-toggle[data-v-c9d09252]{max-width:170px;width:170px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;font-size:12px;text-transform:uppercase;padding:6px 15px;border-radius:20px;cursor:pointer\n}\n.network-icon[data-v-c9d09252]{width:12px;height:12px;background:#20ad00;border-radius:100%\n}\n.icon[data-v-c9d09252]{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;width:1em;height:1em\n}\n.network-arrow[data-v-c9d09252]{padding-top:2px\n}\n.network-name[data-v-c9d09252]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;font-weight:600;color:#666;padding:0.1rem 0.3rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\n}\n.network-dropdown[data-v-c9d09252]{background:rgba(0,0,0,0.8);position:absolute;top:40px;right:0;border-radius:8px;width:170px;z-index:99;padding:10px\n}\n.network-dropdown a[data-v-c9d09252]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:0.375rem 0.75rem;font-size:0.75rem;line-height:1.25;color:#fff\n}\n.network-dropdown a[data-v-c9d09252]:hover,.network-dropdown a[data-v-c9d09252]:focus{color:#ff5b5b\n}\n.network-dropdown a span[data-v-c9d09252]{display:block\n}\n.network-dropdown-icon[data-v-c9d09252]{padding:3px 8px 0 0;font-size:0.625rem\n}\n.dropdown-menu[data-v-c9d09252]{box-shadow:0 0 5px rgba(0,0,0,0.2);background:#fff;position:absolute;top:40px;right:10px;padding:0.5rem 0;border-radius:3px;min-width:125px\n}\n.dropdown-menu a[data-v-c9d09252]{display:block;padding:0.5rem 1rem;font-size:0.875rem;color:#666\n}\n.dropdown-menu a[data-v-c9d09252]:hover,.dropdown-menu a[data-v-c9d09252]:focus{color:#ff5b5b\n}\n.header-tabs[data-v-c9d09252]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%\n}\n.header-tabs a[data-v-c9d09252]{display:block;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:0.625rem;color:#666;font-size:0.75rem;text-transform:uppercase;text-align:center\n}\n.header-tabs a.active[data-v-c9d09252]{color:#ff5b5b;border-bottom:2px solid #ff5b5b\n}\n.header-tabs a[data-v-c9d09252]:hover,.header-tabs a[data-v-c9d09252]:focus{color:#ff5b5b\n}\n",""])},t1nY:function(e,t,f){var n=f("sCOn");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);f("FIqI")("e00e778c",n,!0,{})},vTOj:function(e,t,f){var n=f("qPsl");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);f("FIqI")("4500d2fa",n,!0,{})}});