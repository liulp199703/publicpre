webpackJsonp([29],{"5Q3R":function(e,t){},GbrI:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={components:{TinymceEditor:r("CS1U").a},data:function(){return{ruleForm:{jbr:"袁超",wrlx:"空气污染",ajdz:"廉江市安铺镇东大街东环路",jbdx:"一个化工厂",cxsj:"一个月了",phone:"12345678",nr:"我工作的旁边有一家生产毛毯的公司，整天向空气中排放大量的烟雾，烟雾里带有一股怪味，有点酸的感觉，该公司的排污管高度只有十米左右，整个浑浊的空气在四周弥漫，让人无法忍受，环境部门有人来查看过，但是环保的人一来该公司就停工，环保人员一走他们又开工",time:new Date},src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=498056109,568454263&fm=15&gp=0.jpg",src2:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1502360023,2628806569&fm=26&gp=0.jpg",rules:{},confirmDelete:null,pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}}}},methods:{resetForm:function(e){this.$refs[e].resetFields()},fanhui:function(){this.routeTo("job")},queding:function(){this.$message({type:"success",message:"已成功受理"})},okdelete:function(){var e=this;e.confirmDelete=function(t){e.confirmDelete=null,t&&this.$http.post("/api/admin/shouye/publishXw",{id:9},function(t,r){console.log(r),e.$emit("back",!1)})}}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{height:"calc(87vh)"}},[r("div",{staticStyle:{margin:"10px 0","padding-top":"10px",height:"calc(100vh - 220px)",width:"calc(100% - 22px)"}},[r("v-scroll",{staticStyle:{width:"100%",height:"100%"},attrs:{ops:e.$configs.opts.scroll.lightgray}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px",size:"mini"}},[r("el-form-item",{attrs:{label:"举报人",prop:"jbr"}},[r("el-input",{attrs:{disabled:"true",placeholder:""},model:{value:e.ruleForm.jbr,callback:function(t){e.$set(e.ruleForm,"jbr",t)},expression:"ruleForm.jbr"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"污染类型",prop:"wrlx"}},[r("el-input",{attrs:{disabled:"true"},model:{value:e.ruleForm.wrlx,callback:function(t){e.$set(e.ruleForm,"wrlx",t)},expression:"ruleForm.wrlx"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"案件地址",prop:"ajdz"}},[r("el-input",{attrs:{disabled:"true"},model:{value:e.ruleForm.ajdz,callback:function(t){e.$set(e.ruleForm,"ajdz",t)},expression:"ruleForm.ajdz"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"举报对象",prop:"jbdx"}},[r("el-input",{attrs:{disabled:"true"},model:{value:e.ruleForm.jbdx,callback:function(t){e.$set(e.ruleForm,"jbdx",t)},expression:"ruleForm.jbdx"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"时间",prop:"time"}},[r("el-input",{attrs:{disabled:"true"},model:{value:e.ruleForm.time,callback:function(t){e.$set(e.ruleForm,"time",t)},expression:"ruleForm.time"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"持续时间",prop:"cxsj"}},[r("el-input",{attrs:{disabled:"true"},model:{value:e.ruleForm.cxsj,callback:function(t){e.$set(e.ruleForm,"cxsj",t)},expression:"ruleForm.cxsj"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"电话",prop:"phone"}},[r("el-input",{attrs:{disabled:"true"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"nr"}},[r("el-input",{attrs:{disabled:"true",type:"textarea",rows:"6"},model:{value:e.ruleForm.nr,callback:function(t){e.$set(e.ruleForm,"nr",t)},expression:"ruleForm.nr"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"附件",prop:"other"}},[r("div",{staticClass:"flex-row"},[r("div",{staticStyle:{width:"20em"}},[r("el-image",{staticStyle:{width:"15em"},attrs:{src:e.src}})],1),e._v(" "),r("div",{staticStyle:{width:"20em"}},[r("el-image",{staticStyle:{width:"10rem"},attrs:{src:e.src2}})],1)])])],1)],1),e._v(" "),r("div",{staticClass:"flex-row",staticStyle:{"margin-top":"1em","margin-left":"1em"}},[r("el-button",{staticStyle:{"margin-left":"20em"},attrs:{type:"primary"},on:{click:e.queding}},[e._v("受理")]),e._v(" "),r("el-button",{staticStyle:{"margin-left":"30em"},attrs:{type:"primary"},on:{click:e.fanhui}},[e._v("返回")])],1)],1)])},staticRenderFns:[]};var s=r("C7Lr")(l,i,!1,function(e){r("5Q3R")},"data-v-da38743e",null);t.default=s.exports}});