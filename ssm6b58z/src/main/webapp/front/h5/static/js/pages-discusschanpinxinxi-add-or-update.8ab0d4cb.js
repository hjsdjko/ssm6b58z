(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-discusschanpinxinxi-add-or-update"],{"2efd":function(e,t,r){"use strict";r.r(t);var n=r("b14f"),i=r("771d");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("cab4");var s,o=r("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"4d387f6b",null,!1,n["a"],s);t["default"]=u.exports},"55e4":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("c5f6"),r("f559"),r("a481"),r("3b2b"),r("28a5"),r("ac6a"),r("96cf");var i=n(r("3b8d")),a=n(r("e2b1")),s={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var r,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("discusschanpinxinxi",this.ruleForm.id);case 11:n=e.sent,this.ruleForm=n.data;case 13:if(this.cross=t.cross,!t.cross){e.next=41;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 17:if((e.t1=e.t0()).done){e.next=41;break}if(a=e.t1.value,"refid"!=a){e.next=23;break}return this.ruleForm.refid=i[a],this.ro.refid=!0,e.abrupt("continue",17);case 23:if("userid"!=a){e.next=27;break}return this.ruleForm.userid=i[a],this.ro.userid=!0,e.abrupt("continue",17);case 27:if("nickname"!=a){e.next=31;break}return this.ruleForm.nickname=i[a],this.ro.nickname=!0,e.abrupt("continue",17);case 31:if("content"!=a){e.next=35;break}return this.ruleForm.content=i[a],this.ro.content=!0,e.abrupt("continue",17);case 35:if("reply"!=a){e.next=39;break}return this.ruleForm.reply=i[a],this.ro.reply=!0,e.abrupt("continue",17);case 39:e.next=17;break;case 41:this.styleChange();case 42:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,r,n,i,a,s,o,u,c,d,l,p,f,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t="",r=[],t&&(r=t.split(",")),n=0;n<r.length;n++)i=new RegExp(r[n],"g"),this.ruleForm.content.indexOf(r[n])>-1&&(this.ruleForm.content=this.ruleForm.content.replace(i,"**"));if(this.ruleForm.refid){e.next=7;break}return this.$utils.msg("关联表id不能为空"),e.abrupt("return");case 7:if(this.ruleForm.userid){e.next=10;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 10:if(this.ruleForm.content){e.next=13;break}return this.$utils.msg("评论内容不能为空"),e.abrupt("return");case 13:if(!this.cross){e.next=29;break}if(u=uni.getStorageSync("statusColumnName"),c=uni.getStorageSync("statusColumnValue"),""==u){e.next=29;break}if(d=uni.getStorageSync("crossObj"),u.startsWith("[")){e.next=25;break}for(l in d)l==u&&(d[l]=c);return p=uni.getStorageSync("crossTable"),e.next=23,this.$api.update("".concat(p),d);case 23:e.next=29;break;case 25:a=Number(uni.getStorageSync("userid")),s=d["id"],o=uni.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 29:if(!s||!a){e.next=52;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=s,f={page:1,limit:10,crossuserid:a,crossrefid:s},e.next=35,this.$api.list("discusschanpinxinxi",f);case 35:if(b=e.sent,!(b.data.total>=o)){e.next=41;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 41:if(!this.ruleForm.id){e.next=46;break}return e.next=44,this.$api.update("discusschanpinxinxi",this.ruleForm);case 44:e.next=48;break;case 46:return e.next=48,this.$api.add("discusschanpinxinxi",this.ruleForm);case 48:uni.setStorageSync("discusschanpinxinxiCleanType",!0),this.$utils.msgBack("提交成功");case 50:e.next=61;break;case 52:if(!this.ruleForm.id){e.next=57;break}return e.next=55,this.$api.update("discusschanpinxinxi",this.ruleForm);case 55:e.next=59;break;case 57:return e.next=59,this.$api.add("discusschanpinxinxi",this.ruleForm);case 59:uni.setStorageSync("discusschanpinxinxiCleanType",!0),this.$utils.msgBack("提交成功");case 61:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s},"771d":function(e,t,r){"use strict";r.r(t);var n=r("55e4"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},a4a2:function(e,t,r){var n=r("f39a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("974106ee",n,!0,{sourceMap:!1,shadowMode:!1})},b14f:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{padding:" 0 20rpx 0 0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[r("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v("评论内容")]),r("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"评论内容"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(223, 114, 11, 1)",borderColor:"#409EFF",borderRadius:"80rpx",color:"#fff",borderWidth:"0",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))},cab4:function(e,t,r){"use strict";var n=r("a4a2"),i=r.n(n);i.a},f39a:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-4d387f6b]{padding:%?20?%}.content[data-v-4d387f6b]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-4d387f6b]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-4d387f6b]{width:%?180?%}.avator[data-v-4d387f6b]{width:%?150?%;height:%?60?%}.right-input[data-v-4d387f6b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-4d387f6b]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-4d387f6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-4d387f6b]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-4d387f6b]{border:0}.cu-form-group uni-input[data-v-4d387f6b]{padding:0 %?30?%}.uni-input[data-v-4d387f6b]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-4d387f6b]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-4d387f6b]::after{line-height:%?80?%}.select .uni-input[data-v-4d387f6b]{line-height:%?80?%}.input .right-input[data-v-4d387f6b]{line-height:%?80?%}',""]),e.exports=t}}]);