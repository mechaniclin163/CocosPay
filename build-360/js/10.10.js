webpackJsonp_name_([10],{"27Si":function(t,e,n){e=t.exports=n("UTlt")(!1),e.push([t.i,"\n.welcome-title[data-v-8ea555a0]{text-align:center;font-size:30px\n}\n",""])},"9CwQ":function(t,e,n){var c=n("27Si");"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);n("FIqI")("e9f514c0",c,!0,{})},BvUV:function(t,e,n){"use strict";function c(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("4YfN"),s=c(o),a=n("n95b"),u=(c(a),n("48sp"));e.default={data:function(){return{unlock:"",currentAccountType:""}},mounted:function(){var t=this;this.init().then(function(e){t.getAccounts().then(function(e){t.currentAccountType=e.current_account.mode,t.setAccountType(e.current_account.mode)})})},computed:(0,s.default)({},(0,u.mapState)("wallet",["accounts","pwdhash","password"]),(0,u.mapState)(["accountType","cocosAccount"])),methods:(0,s.default)({},(0,u.mapActions)(["init"]),(0,u.mapMutations)("wallet",["setPassword","upgradeAccounts","getAccounts"]),(0,u.mapMutations)(["upgradeCurrentAccount","setAccount","setLoginNoAlert"]),(0,u.mapActions)("account",["unlockAccount","loginBCXAccount"]),(0,u.mapActions)("wallet",["getAccounts"]),(0,u.mapMutations)(["upgradeCurrentAccount","setAccount","setLogin","setIsAccount","setAccountType"]),{unlockWallet:function(){var t=this;if(!this.unlock)return void this.$kalert({message:this.$i18n.t("verify.passwordNull")});this.setAccount({account:this.cocosAccount.accounts,password:this.unlock}),"wallet"===this.accountType?this.unlockAccount().then(function(e){1===e.code?(t.setLoginNoAlert(!0),t.setAccount({account:t.cocosAccount.accounts,password:""}),t.setIsAccount(!0),t.setLogin(!0),t.$router.push({name:"home"})):e.message.indexOf("wrong password")>-1?t.$kalert({message:t.$i18n.t("error[105]")}):t.AccountLock()}):this.AccountLock()},AccountLock:function(){var t=this,e=this;this.loginBCXAccount().then(function(n){t.setAccount({account:t.cocosAccount.accounts,password:""}),1===n.code?(t.setIsAccount(!0),t.setLogin(!0),t.$router.push({name:"home"})):n.message.indexOf("wrong password")>-1||n.message.indexOf("password error")>-1?t.$kalert({message:t.$i18n.t("error[105]")}):t.$kalert({message:e.$i18n.t("chainInterfaceError[500]")})})}})}},"j+qF":function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-container",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.unlockWallet()}}},[t._m(0),t._v(" "),n("h2",{staticClass:"welcome-title mt20"},[t._v(t._s(t.$t("title.welcome")))]),t._v(" "),n("el-form",{staticClass:"mt40"},[n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{staticClass:"no-border",attrs:{type:"password",placeholder:"wallet"==t.currentAccountType?t.$t("placeholder.temporary"):t.$t("placeholder.password")},model:{value:t.unlock,callback:function(e){t.unlock=e},expression:"unlock"}}),t._v(" "),n("input",{staticStyle:{display:"none"},attrs:{type:"text",value:""}})],1),t._v(" "),n("el-form-item",{staticClass:"mt20"},[n("el-button",{staticClass:"full-btn",attrs:{type:"primary"},on:{click:function(e){return t.unlockWallet()}}},[t._v(t._s(t.$t("button.unlock")))])],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"logo mt40"},[n("img",{staticClass:"block-center",attrs:{src:"/icons/logo-big.png",alt:""}})])}],s={render:c,staticRenderFns:o};e.a=s},xZ1V:function(t,e,n){"use strict";function c(t){n("9CwQ")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("BvUV"),s=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var u=n("j+qF"),r=n("C7Lr"),i=c,l=r(s.a,u.a,!1,i,"data-v-8ea555a0",null);e.default=l.exports}});