webpackJsonp([30],{"5QHM":function(e,t){},"D/sV":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={components:{TinymceEditor:r("CS1U").a},data:function(){return{ruleForm:{anjian:"空气污染 惹气民愤",jg:"",time:new Date},rules:{anjian:[{required:!0,message:"",trigger:"change"}],time:[{required:!0,message:"请输入详情",trigger:"change"}],jg:[{required:!0,message:"请输入详情",trigger:"change"}],content:[{required:!0,message:"请输入详情",trigger:"change"}]},confirmDelete:null,pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}}}},methods:{resetForm:function(e){this.$refs[e].resetFields()},fanhui:function(){this.routeTo("job")},queding:function(){this.$message({type:"success",message:"已成功保存"})},okdelete:function(){var e=this;e.confirmDelete=function(t){e.confirmDelete=null,t&&this.$http.post("/api/admin/shouye/publishXw",{id:9},function(t,r){console.log(r),e.$emit("back",!1)})}}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{height:"calc(87vh)"}},[r("div",{staticStyle:{margin:"10px 0","padding-top":"10px",height:"calc(100vh - 220px)",width:"calc(100% - 22px)"}},[r("v-scroll",{staticStyle:{width:"100%",height:"100%"},attrs:{ops:e.$configs.opts.scroll.lightgray}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px",size:"mini"}},[r("el-form-item",{attrs:{label:"案件",prop:"anjian"}},[r("el-input",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.anjian,callback:function(t){e.$set(e.ruleForm,"anjian",t)},expression:"ruleForm.anjian"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"时间",prop:"time"}},[r("el-input",{model:{value:e.ruleForm.time,callback:function(t){e.$set(e.ruleForm,"time",t)},expression:"ruleForm.time"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"结果",prop:"jg"}},[r("el-select",{attrs:{type:"textarea"},model:{value:e.ruleForm.jg,callback:function(t){e.$set(e.ruleForm,"jg",t)},expression:"ruleForm.jg"}},[r("el-option",{attrs:{label:"情况属实",value:"情况属实"}}),e._v(" "),r("el-option",{attrs:{label:"情况不属实",value:"情况不属实"}}),e._v(" "),r("el-option",{attrs:{label:"其他",value:"其他"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"详情",prop:"content"}},[r("tinymce-editor",{ref:"editor",model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"添加附件",prop:"other"}},[r("input",{ref:"upload",staticClass:"outputlist_upload",attrs:{type:"file",accept:".pdf,.jpg;.gif,.png,.xls,.xlsx"}}),e._v(" "),r("span",{},[e._v("(支持.pdf;.jpg;.gif;.png;.xls;.xlsx)")])])],1)],1),e._v(" "),r("div",{staticClass:"flex-row",staticStyle:{"margin-top":"0em","margin-left":"1em"}},[r("el-button",{staticStyle:{"margin-left":"22em"},attrs:{type:"primary"},on:{click:e.queding}},[e._v("保存")]),e._v(" "),r("el-button",{staticStyle:{"margin-left":"25em"},attrs:{type:"primary"},on:{click:e.fanhui}},[e._v("返回")])],1)],1)])},staticRenderFns:[]};var a=r("C7Lr")(l,i,!1,function(e){r("5QHM")},"data-v-b9c1ff86",null);t.default=a.exports}});