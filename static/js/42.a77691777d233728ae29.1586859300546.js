webpackJsonp([42],{GU2h:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{id:null,name:"",mima:"",sex:"",isBoss:"0",phone:"",time:"",ssbm:"",job:"",dr:"",js:"",gnqx:"",gzjl:"暂无数据",gzfg:"暂无数据",zw:"",options2:[{value:"办公室",tabel:"办公室"},{value:"环境监察分局",tabel:"环境监察分局"},{value:"廉江市生态环境局廉江分局",tabel:"廉江市生态环境局廉江分局"},{value:"宣教与信息中心",tabel:"宣教与信息中心"},{value:"机关行政",tabel:"机关行政"},{value:"市环境监测站",tabel:"市环境监测站"},{value:"环境科学研究所",tabel:"环境科学研究所"}],options3:[{value:"事业人员",tabel:"事业人员"},{value:"股长",tabel:"股长"},{value:"站长",tabel:"站长"},{value:"主任",tabel:"主任"},{value:"局长",tabel:"局长"}],options4:[{value:"信息发布",tabel:"信息发布"},{value:"企业管理",tabel:"企业管理"}],data:{},url:""}},watch:{url:function(t){console.log(t)},js:function(t){console.log(t),"信息发布"===t?(console.log(1),this.gnqx="在线环保系统—环保在线后台管理"):"企业管理"===t&&(this.gnqx="在线环保系统—重点源管理  智慧环保APP-重点源管理")}},mounted:function(){this.getdata()},methods:{queding:function(){var t=this,e={id:Number(this.id),gzfg:this.gzfg,gzjl:this.gzjl,isBoss:this.isBoss,name:this.name,password:this.password,phone:this.phone,sex:this.sex,zw:this.zw,account:this.name,statu:1};"廉江市生态环境局廉江分局"==this.ssbm?e.organizationId=1:"机关行政"==this.ssbm?e.organizationId=2:"环境监察分局"==this.ssbm?e.organizationId=7:"宣教与信息中心"==this.ssbm?e.organizationId=8:"市环境监测站"==this.ssbm?e.organizationId=10:"环境科学研究所"==this.ssbm?e.organizationId=13:"办公室"==this.ssbm&&(e.organizationId=16),"男"==e.sex?e.sex=1:"女"==e.sex&&(e.sex=2),"是"==e.isBoss?e.isBoss=1:"否"==e.isBoss&&(e.isBoss=0),console.log(e),this.$confirm("此操作将修改该用户信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.post("/api/admin/user/updateUser",e,function(e,s){e?t.$message({type:"success",message:"已成功修改"}):t.$message({type:"info",message:"修改失败"})})}).catch(function(){t.$message({type:"info",message:"已取消修改"})})},fanhui:function(){this.routeTo("yhgl")},getdata:function(){var t=this.$route.params.data;console.log(t),this.id=t.id,this.name=t.name,this.sex=t.sex,this.isBoss=t.isBoss,this.ssbm=t.ssbm,this.time=t.time,this.phone=t.phone,this.zw=t.zw,this.gzfg=t.gzfg,this.gzjl=t.gzjl,this.password=t.password,this.url=decodeURIComponent(t.pic),0==this.isBoss?this.isBoss="否":1==this.isBoss&&(this.isBoss="是"),console.log(this.url)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-column",staticStyle:{width:"100%",height:"calc(87vh)"}},[s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("用户名称:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-input",{attrs:{size:"small"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("登入密码:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-input",{attrs:{size:"small"},model:{value:t.mima,callback:function(e){t.mima=e},expression:"mima"}})],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("性别:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-input",{attrs:{size:"small"},model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}})],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("注册电话:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-input",{attrs:{size:"small"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("办公电话:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-input",{attrs:{size:"small"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("注册时间:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-input",{attrs:{size:"small"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("是否是领导:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:t.isBoss,callback:function(e){t.isBoss=e},expression:"isBoss"}},[s("el-option",{attrs:{label:"是",value:"1"}}),t._v(" "),s("el-option",{attrs:{label:"否",value:"0"}})],1)],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("所属部门:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-select",{attrs:{placeholder:"请输入",size:"small"},model:{value:t.ssbm,callback:function(e){t.ssbm=e},expression:"ssbm"}},t._l(t.options2,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("职务:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-select",{attrs:{placeholder:"请输入",size:"small"},model:{value:t.zw,callback:function(e){t.zw=e},expression:"zw"}},t._l(t.options3,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("角色:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"20em"}},[s("el-select",{attrs:{placeholder:"请输入",size:"small"},model:{value:t.js,callback:function(e){t.js=e},expression:"js"}},t._l(t.options4,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("功能权限:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"75em"}},[s("el-input",{attrs:{disabled:"",size:"small"},model:{value:t.gnqx,callback:function(e){t.gnqx=e},expression:"gnqx"}})],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("工作经历:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"75em"}},[s("el-input",{attrs:{type:"textarea",rows:2,size:"small"},model:{value:t.gzjl,callback:function(e){t.gzjl=e},expression:"gzjl"}})],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("工作分工:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"75em"}},[s("el-input",{attrs:{type:"textarea",rows:2,size:"small"},model:{value:t.gzfg,callback:function(e){t.gzfg=e},expression:"gzfg"}})],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},[s("div",{staticClass:"text-14",staticStyle:{width:"10em","line-height":"2em"}},[t._v("照片:")]),t._v(" "),s("div",{staticClass:"text-14",staticStyle:{width:"5em"}},[t.url?s("el-image",{staticStyle:{width:"150px"},attrs:{lazy:!0,src:t.url}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("div",{staticClass:"el-image__error",staticStyle:{height:"100px","text-align":"center"}},[t._v("无数据")])])]):t._e()],1)]),t._v(" "),s("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0em","margin-left":"1em"}},[s("el-button",{staticStyle:{"margin-left":"22em"},attrs:{type:"primary"},on:{click:t.queding}},[t._v("确定")]),t._v(" "),s("el-button",{staticStyle:{"margin-left":"25em"},attrs:{type:"primary"},on:{click:t.fanhui}},[t._v("返回")])],1)])},staticRenderFns:[]};var l=s("C7Lr")(i,a,!1,function(t){s("Gjvt")},null,null);e.default=l.exports},Gjvt:function(t,e){}});