webpackJsonp_name_([11],{Azc9:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"app-container"},[t._m(0),t._v(" "),a("h2",{staticClass:"text-center index-title"},[t._v("CocosPay")]),t._v(" "),a("el-form",{ref:"form",staticClass:"mt20",attrs:{model:t.formData,rules:t.formRules}},[a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{staticClass:"no-border",attrs:{type:"password",placeholder:t.$t("placeholder.password")},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"repassword"}},[a("el-input",{staticClass:"no-border",attrs:{type:"password",placeholder:t.$t("placeholder.repassword")},model:{value:t.formData.repassword,callback:function(e){t.$set(t.formData,"repassword",e)},expression:"formData.repassword"}})],1),t._v(" "),a("el-form-item",{staticClass:"mt80"},[a("el-button",{staticClass:"full-btn",attrs:{type:"primary"},on:{click:function(e){return t.createWallet("form")}}},[t._v(t._s(t.$t("button.create")))])],1)],1),t._v(" "),a("section",{staticClass:"small-tip text-center"},[t._v(t._s(t.$t("message.rememberPassword")))])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"logo"},[a("img",{staticClass:"block-center",attrs:{src:"/images/index-logo.png",alt:""}})])}],o={render:r,staticRenderFns:s};e.a=o},M62g:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),s=function(t){return t&&t.__esModule?t:{default:t}}(r),o=a("NYxO");e.default={data:function(){var t=this;return{wallet:null,formData:{password:"",repassword:""},formRules:{password:[{validator:function(e,a,r){var s=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,12}$/;""===a?r(new Error(t.$i18n.t("verify.passwordNull"))):s.test(a)?r():r(new Error(t.$i18n.t("verify.passwordType")))},trigger:"blur"}],repassword:[{validator:function(e,a,r){""===a?r(new Error(t.$i18n.t("verify.passwordSure"))):a!==t.formData.password?r(new Error(t.$i18n.t("verify.passwordMatch"))):r()},trigger:"blur"}]}}},computed:(0,s.default)({},(0,o.mapState)(["curLng"])),created:function(){this.lang=this.$i18n.locale},methods:(0,s.default)({},(0,o.mapMutations)(["setCurLng"]),{createWallet:function(t){this.$refs[t].validate(function(t){})}})}},Zp3b:function(t,e,a){var r=a("ul1O");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("f916caa6",r,!0,{})},"re+7":function(t,e,a){"use strict";function r(t){a("Zp3b")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("M62g"),o=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);var l=a("Azc9"),i=a("VU/8"),c=r,d=i(o.a,l.a,!1,c,"data-v-5c97544a",null);e.default=d.exports},ul1O:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.logo[data-v-5c97544a]{margin-top:40px\n}\n.select-lang[data-v-5c97544a]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:50px\n}\n.index-title[data-v-5c97544a]{font-size:30px;margin:25px auto 40px\n}\n",""])}});