(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1OvB":function(t,e,i){"use strict";i.r(e);var n=i("VTBJ"),o=i("L2JU"),a={data:function(){return{blog:{id:"",title:"",content:"",description:""},loading:!1}},computed:Object(n.a)(Object(n.a)({},Object(o.b)(["token"])),{},{mdH5:function(){return this.$markdown(this.$page.blog.content)}}),mounted:function(){this.loading=!0,this.blog.id=this.$route.params.id,console.log(this.$page.blog),this.$page.blog.id&&(this.loading=!1)},methods:{edit:function(){this.token?this.$router.push("/user/blog/edit/"+this.blog.id):this.$message({message:"请绑定有效的Token",type:"warning"})},more:function(){this.$router.push("/user/blog/main")}}},s=i("KHd+"),l=null,r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"min-height":"600px"}},[i("el-card",{staticStyle:{"min-height":"400px"},attrs:{shadow:"never"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("el-row",[i("el-col",{attrs:{span:12}},[i("span",[t._v(t._s(t.$page.blog.title))])]),i("el-col",{attrs:{span:12}},[i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{staticStyle:{padding:"3px 0"},attrs:{type:"text",icon:"el-icon-share"},on:{click:function(e){return t.$share()}}},[t._v("分享")]),t.token?i("el-button",{staticStyle:{padding:"3px 0"},attrs:{type:"text",icon:"el-icon-edit"},on:{click:t.edit}},[t._v("编辑")]):t._e()],1)])],1)],1),i("div",{staticStyle:{"font-size":"0.9rem","line-height":"1.5",color:"#606c71"}},[t._v("\n            发布 "+t._s(t._f("timeFileter")(t.$page.blog.created_at))+"\n            "),i("br"),t._v(" 更新 "+t._s(t._f("timeFileter")(t.$page.blog.updated_at))+"\n        ")]),i("div",{staticStyle:{"font-size":"1.1rem","line-height":"1.5",color:"#303133","border-bottom":"1px solid #E4E7ED",padding:"5px 0px 5px 0px"}},[i("pre",{staticStyle:{"font-family":"'微软雅黑'"}},[t._v(t._s(t.$page.blog.description))])]),i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown-body",staticStyle:{"padding-top":"20px"},domProps:{innerHTML:t._s(t.mdH5)}})])],1)}),[],!1,null,null,null);"function"==typeof l&&l(r);e.default=r.exports}}]);