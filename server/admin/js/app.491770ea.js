(function(e){function t(t){for(var n,i,l=t[0],o=t[1],c=t[2],m=0,p=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/admin/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"22de":function(e,t,a){"use strict";var n=a("8319"),r=a.n(n);r.a},2395:function(e,t,a){},"38c8":function(e,t,a){},"4fde":function(e,t,a){"use strict";var n=a("7ce0"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],i=(a("7c55"),a("2877")),l={},o=Object(i["a"])(l,r,s,!1,null,null,null),c=o.exports,u=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticStyle:{height:"100vh"}},[a("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[a("el-menu",{attrs:{router:"","default-openeds":["3"],"unique-opened":"","default-active":e.$route.path}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-message"}),e._v("内容管理 ")]),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("物品")]),a("el-menu-item",{attrs:{index:"/items/create"}},[e._v("新建物品")]),a("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("英雄")]),a("el-menu-item",{attrs:{index:"/heroes/create"}},[e._v("新建英雄")]),a("el-menu-item",{attrs:{index:"/heroes/list"}},[e._v("英雄列表")])],2),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("文章")]),a("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("新建文章")]),a("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2)],2),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-message"}),e._v("运营管理 ")]),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("广告位")]),a("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),a("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2)],2),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-message"}),e._v("系统设置 ")]),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("分类")]),a("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),a("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("管理员")]),a("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("新建管理员")]),a("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("查看")]),a("el-dropdown-item",[e._v("新增")]),a("el-dropdown-item",[e._v("删除")])],1)],1),a("span",[e._v(e._s(e.user.username))])],1),a("el-main",[a("router-view",{key:e.$route.path})],1)],1)],1)},p=[],d=(a("cb29"),a("d3b7"),a("96cf"),{data:function(){var e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e),user:{}}},methods:{getUser:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return e={token:localStorage.token},a.next=3,regeneratorRuntime.awrap(this.$http.post("/user",e));case 3:t=a.sent,this.user=t.data;case 5:case"end":return a.stop()}}),null,this)}},created:function(){this.getUser()}}),h=d,f=(a("22de"),Object(i["a"])(h,m,p,!1,null,null,null)),v=f.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("el-card",{staticClass:"login-card",attrs:{header:"请先登录"}},[a("el-form",{attrs:{"label-width":"60px"},nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),a("el-form-item",[a("el-button",{staticClass:"login-button",attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1)],1)],1)],1)},b=[],w={data:function(){return{model:{}}},methods:{login:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.post("/login",this.model));case 2:e=t.sent,localStorage.token=e.data.token,this.$router.push("/"),this.$message({type:"success",message:"登陆成功"});case 6:case"end":return t.stop()}}),null,this)}}},x=w,y=(a("4fde"),Object(i["a"])(x,g,b,!1,null,null,null)),_=y.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[a("el-form-item",{attrs:{label:"上级分类"}},[a("el-select",{model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parents,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},k=[],R={props:{id:{}},data:function(){return{model:{},parents:[]}},methods:{save:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=5;break}return e.next=3,regeneratorRuntime.awrap(this.$http.put("rest/categories/".concat(this.id),this.model));case 3:e.next=7;break;case 5:return e.next=7,regeneratorRuntime.awrap(this.$http.post("rest/categories",this.model));case 7:this.$router.push("/categories/list"),this.$message({type:"success",message:"保存成功"});case 9:case"end":return e.stop()}}),null,this)},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/categories/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},fetchParents:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/categories"));case 2:e=t.sent,this.parents=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.fetchParents(),this.id&&this.fetch()}},S=R,O=Object(i["a"])(S,$,k,!1,null,null,null),C=O.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("分类列表")]),a("el-table",{attrs:{data:e.items}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),a("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),a("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")])]}}])})],1)],1)},j=[],z=(a("b0c0"),{data:function(){return{items:[]}},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/categories"));case 2:e=t.sent,window.console.log(e),this.items=e.data;case 5:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;this.$confirm('是否确定要删除分类 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(t.$http.delete("rest/categories/".concat(e._id)));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return a.stop()}}))}))}},created:function(){this.fetch()}}),T=z,E=Object(i["a"])(T,D,j,!1,null,null,null),P=E.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.id?"编辑":"创建")+"物品")]),a("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[a("el-form-item",{attrs:{label:"物品名称"}},[a("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("el-form-item",[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAutorization(),"show-file-list":!1,"on-success":e.upLoad}},[e.model.icon?a("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},A=[],L={props:{id:{}},data:function(){return{model:{}}},methods:{upLoad:function(e){this.$set(this.model,"icon",e.url)},save:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=5;break}return e.next=3,regeneratorRuntime.awrap(this.$http.put("/rest/items/".concat(this.id),this.model));case 3:e.next=7;break;case 5:return e.next=7,regeneratorRuntime.awrap(this.$http.post("/rest/items",this.model));case 7:this.$router.push("/items/list"),this.$message({type:"success",message:"保存成功了"});case 9:case"end":return e.stop()}}),null,this)},fecth:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/items/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fecth()}},I=L,U=Object(i["a"])(I,B,A,!1,null,null,null),M=U.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("物品列表")]),a("el-table",{attrs:{data:e.listData}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),a("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),a("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.icon,alt:""}})]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")])]}}])})],1)],1)},V=[],q={data:function(){return{listData:[]}},methods:{getlist:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/items"));case 2:e=t.sent,this.listData=e.data,window.console.log(e);case 5:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;this.$confirm('是否删除"'.concat(e.name,'"分类'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(t.$http.delete("/rest/items/".concat(e._id)));case 2:t.$message({type:"success",message:"删除成功!"}),t.getlist();case 4:case"end":return a.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}},created:function(){this.getlist()}},J=q,N=Object(i["a"])(J,H,V,!1,null,null,null),F=N.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.id?"编辑":"创建")+"英雄")]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[a("el-tabs",{attrs:{value:"basic",type:"border-card"}},[a("el-tab-pane",{attrs:{label:"基础信息",name:"basic"}},[a("el-form-item",{attrs:{label:"英雄名称"}},[a("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("el-form-item",{attrs:{label:"英雄称号"}},[a("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),a("el-form-item",{attrs:{label:"头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAutorization(),"show-file-list":!1,"on-success":e.upLoad}},[e.model.avatar?a("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"背景图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAutorization(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.banner?a("img",{staticClass:"avatar",attrs:{src:e.model.banner}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return a("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})})),1)],1),a("el-form-item",{attrs:{label:"难度"}},[a("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),a("el-form-item",{attrs:{label:"技能"}},[a("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),a("el-form-item",{attrs:{label:"攻击"}},[a("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),a("el-form-item",{attrs:{label:"生存"}},[a("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),a("el-form-item",{attrs:{label:"顺风出装"}},[a("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return a("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})})),1)],1),a("el-form-item",{attrs:{label:"逆风出装"}},[a("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return a("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})})),1)],1),a("el-form-item",{attrs:{label:"使用技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),a("el-form-item",{attrs:{label:"对抗技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),a("el-form-item",{attrs:{label:"团战思路"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),a("el-tab-pane",{attrs:{label:"技能配置",name:"skills"}},[a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.skills.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v("添加技能 ")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,n){return a("el-col",{key:n,staticStyle:{"margin-left":"0px"},attrs:{md:12}},[a("el-form-item",{attrs:{label:"技能名称"}},[a("el-input",{model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"冷却值"}},[a("el-input",{model:{value:t.delay,callback:function(a){e.$set(t,"delay",a)},expression:"item.delay"}})],1),a("el-form-item",{attrs:{label:"消耗"}},[a("el-input",{model:{value:t.cost,callback:function(a){e.$set(t,"cost",a)},expression:"item.cost"}})],1),a("el-form-item",{attrs:{label:"技能图标"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAutorization(),"show-file-list":!1,"on-success":function(a){return e.$set(t,"icon",a.url)}}},[t.icon?a("img",{staticClass:"avatar",attrs:{src:t.icon}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"技能描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1),a("el-form-item",{attrs:{label:"小提示"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(a){e.$set(t,"tips",a)},expression:"item.tips"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),a("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.partners.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v("添加伙伴 ")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.partners,(function(t,n){return a("el-col",{key:n,staticStyle:{"margin-left":"0px"},attrs:{md:12}},[a("el-form-item",{attrs:{label:"伙伴名称"}},[a("el-select",{attrs:{filterable:"",placeholder:""},model:{value:t.hero,callback:function(a){e.$set(t,"hero",a)},expression:"item.hero"}},e._l(e.heroes,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"伙伴描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),a("el-form-item",{staticStyle:{"margin-top":"1rem"}},[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},K=[],Q={props:{id:{}},data:function(){return{categories:[],items:[],heroes:[],model:{scores:{},skills:[],partners:[]}}},methods:{upLoad:function(e){this.$set(this.model,"avatar",e.url)},save:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=5;break}return e.next=3,regeneratorRuntime.awrap(this.$http.put("/rest/heroes/".concat(this.id),this.model));case 3:e.next=7;break;case 5:return e.next=7,regeneratorRuntime.awrap(this.$http.post("/rest/heroes",this.model));case 7:this.$message({type:"success",message:"保存成功了"});case 8:case"end":return e.stop()}}),null,this)},fecth:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/heroes/".concat(this.id)));case 2:e=t.sent,this.model=Object.assign({},this.model,e.data),window.console.log(e);case 5:case"end":return t.stop()}}),null,this)},fecthCategories:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/categories"));case 2:e=t.sent,this.categories=e.data;case 4:case"end":return t.stop()}}),null,this)},fecthItems:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/items"));case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),null,this)},fecthHeroes:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/heroes"));case 2:e=t.sent,this.heroes=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.fecthItems(),this.fecthHeroes(),this.fecthCategories(),this.id&&this.fecth()}},W=Q,X=Object(i["a"])(W,G,K,!1,null,null,null),Y=X.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("英雄列表")]),a("el-table",{attrs:{data:e.listData}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),a("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),a("el-table-column",{attrs:{prop:"title",label:"英雄称号"}}),a("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar,alt:""}})]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.$router.push("/heroes/edit/"+t.row._id)}}},[e._v("编辑")])]}}])})],1)],1)},ee=[],te={data:function(){return{listData:[]}},methods:{getlist:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/heroes"));case 2:e=t.sent,this.listData=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;this.$confirm('是否删除"'.concat(e.name,'"英雄'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(t.$http.delete("/rest/heroes/".concat(e._id)));case 2:t.$message({type:"success",message:"删除成功!"}),t.getlist();case 4:case"end":return a.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}},created:function(){this.getlist()}},ae=te,ne=Object(i["a"])(ae,Z,ee,!1,null,null,null),re=ne.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.id?"编辑":"创建")+"分类")]),a("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[a("el-form-item",{attrs:{label:"所属分类"}},[a("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"文章标题"}},[a("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),a("el-form-item",[a("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},ie=[],le=a("5873"),oe={components:{VueEditor:le["a"]},props:{id:{}},data:function(){return{model:{},categories:[]}},methods:{save:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=5;break}return e.next=3,regeneratorRuntime.awrap(this.$http.put("/rest/articles/".concat(this.id),this.model));case 3:e.next=7;break;case 5:return e.next=7,regeneratorRuntime.awrap(this.$http.post("/rest/articles",this.model));case 7:this.$router.push("/articles/list"),this.$message({type:"success",message:"保存成功了"});case 9:case"end":return e.stop()}}),null,this)},fecth:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/articles/".concat(this.id)));case 2:e=t.sent,this.model=e.data,window.console.log(this.model);case 5:case"end":return t.stop()}}),null,this)},getCategories:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/categories"));case 2:e=t.sent,this.categories=e.data;case 4:case"end":return t.stop()}}),null,this)},handleImageAdded:function(e,t,a,n){var r,s,i;return regeneratorRuntime.async((function(l){while(1)switch(l.prev=l.next){case 0:return r=new FormData,r.append("file",e),l.next=4,regeneratorRuntime.awrap(this.$http.post("/upload",r));case 4:s=l.sent,i=s.data.url,t.insertEmbed(a,"image",i),n();case 8:case"end":return l.stop()}}),null,this)}},created:function(){this.getCategories(),this.id&&this.fecth()}},ce=oe,ue=Object(i["a"])(ce,se,ie,!1,null,null,null),me=ue.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("分类列表")]),a("el-table",{attrs:{data:e.listData}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),a("el-table-column",{attrs:{prop:"title",label:"文章标题"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")])]}}])})],1)],1)},de=[],he={data:function(){return{listData:[]}},methods:{getlist:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/articles"));case 2:e=t.sent,this.listData=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;this.$confirm('是否删除"'.concat(e.title,'"分类'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(t.$http.delete("/rest/articles/".concat(e._id)));case 2:t.$message({type:"success",message:"删除成功!"}),t.getlist();case 4:case"end":return a.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}},created:function(){this.getlist()}},fe=he,ve=Object(i["a"])(fe,pe,de,!1,null,null,null),ge=ve.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.id?"编辑":"创建")+"分类")]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("el-form-item",{attrs:{label:"广告"}},[a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.items.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v("添加广告 ")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,(function(t,n){return a("el-col",{key:n,staticStyle:{"margin-left":"0px"},attrs:{md:24}},[a("el-form-item",{attrs:{label:"跳转链接（URL）","label-width":"150px"}},[a("el-input",{model:{value:t.url,callback:function(a){e.$set(t,"url",a)},expression:"item.url"}})],1),a("el-form-item",{staticStyle:{"margin-top":"5px"},attrs:{label:"图片","label-width":"150px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAutorization(),"show-file-list":!1,"on-success":function(a){return e.$set(t,"image",a.url)}}},[t.image?a("img",{staticClass:"avatar",attrs:{src:t.image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.items.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},we=[],xe={props:{id:{}},data:function(){return{model:{items:[]}}},methods:{save:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=5;break}return e.next=3,regeneratorRuntime.awrap(this.$http.put("/rest/adds/".concat(this.id),this.model));case 3:e.next=7;break;case 5:return e.next=7,regeneratorRuntime.awrap(this.$http.post("/rest/adds",this.model));case 7:this.$router.push("/ads/list"),this.$message({type:"success",message:"保存成功了"});case 9:case"end":return e.stop()}}),null,this)},fecth:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/adds/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fecth()}},ye=xe,_e=Object(i["a"])(ye,be,we,!1,null,null,null),$e=_e.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("分类列表")]),a("el-table",{attrs:{data:e.listData}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),a("el-table-column",{attrs:{prop:"name",label:"广告名称"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")])]}}])})],1)],1)},Re=[],Se={data:function(){return{listData:[]}},methods:{getlist:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/adds"));case 2:e=t.sent,this.listData=e.data,window.console.log(e);case 5:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;this.$confirm('是否删除"'.concat(e.name,'"分类'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(t.$http.delete("/rest/adds/".concat(e._id)));case 2:t.$message({type:"success",message:"删除成功!"}),t.getlist();case 4:case"end":return a.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}},created:function(){this.getlist()}},Oe=Se,Ce=Object(i["a"])(Oe,ke,Re,!1,null,null,null),De=Ce.exports,je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.id?"编辑":"创建")+"用户名")]),a("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("创建")])],1)],1)],1)},ze=[],Te={props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=5;break}return e.next=3,regeneratorRuntime.awrap(this.$http.put("rest/admin_user/".concat(this.id),this.model));case 3:e.next=7;break;case 5:return e.next=7,regeneratorRuntime.awrap(this.$http.post("rest/admin_user",this.model));case 7:this.$router.push("/admin_users/list"),this.$message({type:"success",message:"保存成功"});case 9:case"end":return e.stop()}}),null,this)},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/admin_user/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fetch()}},Ee=Te,Pe=Object(i["a"])(Ee,je,ze,!1,null,null,null),Be=Pe.exports,Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("管理员列表")]),a("el-table",{attrs:{data:e.listData}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),a("el-table-column",{attrs:{prop:"username",label:"用户名"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")])]}}])})],1)],1)},Le=[],Ie={data:function(){return{listData:[]}},methods:{getlist:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/admin_user"));case 2:e=t.sent,this.listData=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;this.$confirm('是否删除"'.concat(e.username,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(t.$http.delete("/rest/admin_user/".concat(e._id)));case 2:t.$message({type:"success",message:"删除成功!"}),t.getlist();case 4:case"end":return a.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}},created:function(){this.getlist()}},Ue=Ie,Me=Object(i["a"])(Ue,Ae,Le,!1,null,null,null),He=Me.exports;n["default"].use(u["a"]);var Ve=new u["a"]({routes:[{path:"/login",name:"login",component:_,meta:{isPublic:!0}},{path:"/",name:"main",component:v,children:[{path:"/categories/create",component:C},{path:"/categories/edit/:id",component:C,props:!0},{path:"/categories/list",component:P},{path:"/items/create",component:M},{path:"/items/edit/:id",component:M,props:!0},{path:"/items/list",component:F},{path:"/heroes/create",component:Y},{path:"/heroes/edit/:id",component:Y,props:!0},{path:"/heroes/list",component:re},{path:"/articles/create",component:me},{path:"/articles/edit/:id",component:me,props:!0},{path:"/articles/list",component:ge},{path:"/ads/create",component:$e},{path:"/ads/edit/:id",component:$e,props:!0},{path:"/ads/list",component:De},{path:"/admin_users/create",component:Be},{path:"/admin_users/edit/:id",component:Be,props:!0},{path:"/admin_users/list",component:He}]}]});Ve.beforeEach((function(e,t,a){window.console.log(e.meta.isPublic,localStorage.token),e.meta.isPublic||localStorage.token||a("/login"),a()}));var qe=Ve,Je=a("5c96"),Ne=a.n(Je),Fe=(a("0fae"),a("bc3a")),Ge=a.n(Fe),Ke=Ge.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});Ke.interceptors.request.use((function(e){return void 0!=localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e}),(function(e){return Promise.reject(e)})),Ke.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&n["default"].prototype.$message({type:"error",message:e.response.data.message}),401==e.response.status&&qe.push("/login"),Promise.reject(e)}));var Qe=Ke;a("38c8");n["default"].config.productionTip=!1,n["default"].use(Ne.a),n["default"].prototype.$http=Qe,n["default"].mixin({methods:{getAutorization:function(){return{Authorization:"Bearer ".concat(localStorage.token||"")}}}}),new n["default"]({render:function(e){return e(c)},router:qe}).$mount("#app")},"7c55":function(e,t,a){"use strict";var n=a("2395"),r=a.n(n);r.a},"7ce0":function(e,t,a){},8319:function(e,t,a){}});
//# sourceMappingURL=app.491770ea.js.map