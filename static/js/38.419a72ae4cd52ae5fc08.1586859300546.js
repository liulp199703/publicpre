webpackJsonp([38],{WkeY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("a3Yh"),a=s.n(i),n={mounted:function(){this.getInfo()},data:function(){return{show:!0,user:{name:"张晓燕",sex:"男",phone:"133 1333 1333",time:"2015-01-13 12:00:00",type:"办公室",job:"事业人员",dr:"2019-12-12 12:11:11"}}},methods:{zhuxiao:function(){var t=this;this.$confirm("此操作将注销该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.routeTo("login")}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},chakan:function(){alert("ss")},getInfo:function(){var t,e=this.$createElement;this.$notify((t={message:e("i",{style:{color:"blue",cursor:"pointer",font:"宋体"},on:{click:this.onClick}},"您有四条消息未查看"),offset:100,duration:0,type:"warning"},a()(t,"duration",3e3),a()(t,"customClass","fontclass"),t))},onClick:function(){this.routeTo("info")}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-column",staticStyle:{width:"100%",height:"calc(87vh)"}},[s("div",{staticStyle:{width:"100%","margin-top":"5em"}},[s("div",{staticClass:"text-24",staticStyle:{"text-align":"center"}},[t._v(t._s(t.user.name)+"用户，欢迎您！")]),t._v(" "),s("div",{staticClass:"flex-column",staticStyle:{"margin-top":"2em","margin-left":"25em"}},[s("div",{staticClass:"flex-row"},[s("div",{staticClass:"text-16"},[t._v("用户名称:")]),t._v(" "),s("div",{staticClass:"text-16",staticStyle:{"margin-left":"0.5em"}},[t._v(t._s(t.user.name))])]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"1em"}},[s("div",{staticClass:"text-16"},[t._v("性别:")]),t._v(" "),s("div",{staticClass:"text-16",staticStyle:{"margin-left":"0.5em"}},[t._v(t._s(t.user.sex))])]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"1em"}},[s("div",{staticClass:"text-16"},[t._v("注册电话:")]),t._v(" "),s("div",{staticClass:"text-16",staticStyle:{"margin-left":"0.5em"}},[t._v(t._s(t.user.phone))])]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"1em"}},[s("div",{staticClass:"text-16"},[t._v("注册时间:")]),t._v(" "),s("div",{staticClass:"text-16",staticStyle:{"margin-left":"0.5em"}},[t._v(t._s(t.user.time))])]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"1em"}},[s("div",{staticClass:"text-16"},[t._v("所属部门:")]),t._v(" "),s("div",{staticClass:"text-16",staticStyle:{"margin-left":"0.5em"}},[t._v(t._s(t.user.type))])]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"1em"}},[s("div",{staticClass:"text-16"},[t._v("职务:")]),t._v(" "),s("div",{staticClass:"text-16",staticStyle:{"margin-left":"0.5em"}},[t._v(t._s(t.user.job))])]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"1em"}},[s("div",{staticClass:"text-16"},[t._v("上次登入:")]),t._v(" "),s("div",{staticClass:"text-16",staticStyle:{"margin-left":"0.5em"}},[t._v(t._s(t.user.dr))])])])]),t._v(" "),s("div",{staticStyle:{"align-items":"center","margin-top":"2em","margin-left":"25em"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.zhuxiao}},[t._v("注销登入")])],1)])},staticRenderFns:[]};var c=s("C7Lr")(n,l,!1,function(t){s("ZbvA")},"data-v-216f32d7",null);e.default=c.exports},ZbvA:function(t,e){}});