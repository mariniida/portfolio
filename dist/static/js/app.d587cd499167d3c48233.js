webpackJsonp([1],{"69kr":function(e,t){},"F/Ni":function(e,t){},HFad:function(e,t){},IHKT:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n={name:"NavBar",data:()=>({activeColor:"var(--Gradient5)"})},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-menu",{attrs:{mode:"horizontal",router:!0,"active-text-color":"#2B2D62"}},[t("el-menu-item",{attrs:{index:"work"}},[this._v("Works")]),this._v(" "),t("el-menu-item",{attrs:{index:"Contact"}},[this._v("Contact")]),this._v(" "),t("el-menu-item",{attrs:{index:"AboutMe"}},[this._v("About me")])],1)},staticRenderFns:[]};var r={name:"App",data:()=>({}),components:{NavBar:a("VU/8")(n,s,!1,function(e){a("F/Ni")},null,null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("NavBar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")(r,l,!1,function(e){a("IHKT")},null,null).exports,c=a("/ocq"),u={name:"AboutMe",data:()=>({profile:{tagLine:"I'm Marin Iida.",bio:"An aspiring UI/UX designer based in Japan.",img:a("Y67o")},profileImg:a("Y67o"),timelineEvents:[{startDate:"2012 Feb",endDate:"2016 Nov",heading:"Somerset College"},{startDate:"2017 Feb",endDate:"2019 Dec",heading:"University of Melbourne",subHeading:"Bachelor of Design",description:"Major: Digital Technologies. Minor: Graphic Design, Computing."}],skills:[{name:"Microsoft Office Suite",level:3},{name:"Adobe Photoshop",level:2},{name:"Adobe Illustrator",level:3},{name:"Adobe InDesign",level:2},{name:"Adobe XD",level:4},{name:"Japanese",level:5},{name:"English",level:4},{name:"HTML",level:3},{name:"CSS",level:3},{name:"JavaScript",level:2}]})},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page width80"},[a("div",{staticClass:"section flexContainer tileContainer"},[a("el-image",{staticClass:"flexItem display-none",staticStyle:{width:"200px",height:"250px"},attrs:{src:e.profile.img,fit:"fit"}}),e._v(" "),a("div",{staticClass:"flexItem"},[a("h1",[e._v(e._s(e.profile.tagLine))]),e._v(" "),a("h3",[e._v(e._s(e.profile.bio))])])],1),e._v(" "),a("div",{staticClass:"section"},[a("h1",[e._v("Timeline")]),e._v(" "),e._l(e.timelineEvents,function(t,i){return a("li",{staticClass:"flexContainer"},[a("div",{staticClass:"flexItem left"},[a("h5",{staticClass:"lineButtom"},[e._v(e._s(t.startDate))]),e._v(" "),a("h5",[e._v(e._s(t.endDate))])]),e._v(" "),a("div",{staticClass:"flexItem right"},[a("h2",[e._v(e._s(t.heading))]),e._v(" "),a("div",{staticClass:"event"},[a("h4",[e._v(e._s(t.subHeading))]),e._v(" "),a("p",[e._v(e._s(t.description))])])])])})],2),e._v(" "),a("div",{staticClass:"section"},[a("h1",[e._v("Skills")]),e._v(" "),a("div",{staticClass:"flexContainer tileContainer"},e._l(e.skills,function(t,i){return a("div",{staticClass:"flexItem textCenter"},[a("h3",[e._v(e._s(t.name))]),e._v(" "),a("ul",{staticClass:"boxContainer"},[e._l(t.level,function(e){return a("li",{staticClass:"box"},[a("div",{staticClass:"darkSquare"})])}),e._v(" "),e._l(5-t.level,function(e){return a("li",{staticClass:"box"},[a("div",{staticClass:"lightSquare"})])})],2)])}),0)])])},staticRenderFns:[]};var d=a("VU/8")(u,m,!1,function(e){a("bE3e")},"data-v-783aa8a2",null).exports,p={name:"Contact",data:()=>({contactDetail:{type:"emailAddress",detail:"mariniida114@gmail.com",icon:"el-icon-message"},links:[{name:"Wantedly",icon:"el-icon-user",url:"https://www.wantedly.com/secret_profiles/1h8Wm5W3Bo-i1Ok2u_aFIV_b2uy1eFz9"},{name:"indeed Resume",icon:"el-icon-download",url:"https://my.indeed.com/p/69cw2g1"}],contactForm:{name:"",email:"",message:""},rules:{name:[{required:!0,message:"Please input your name",trigger:"blur"}],email:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}],message:[{required:!0,message:"Please input your message",trigger:"blur"},{min:3,max:2e3,message:"Length should be 3 to 2000",trigger:"blur"}]}}),methods:{submitForm(e){this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;alert("submit!")})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page width80"},[a("div",{staticClass:"flexContainer noAlign width80"},[a("div",{staticClass:"flexItem half"},[a("div",{staticClass:"section"},[a("h1",[e._v("Contacts")]),e._v(" "),a("h3",[e._v(e._s(e.contactDetail.detail))])]),e._v(" "),a("div",{staticClass:"section"},[a("h1",[e._v("Links")]),e._v(" "),e._l(e.links,function(t,i){return a("li",[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:t.url}},[a("el-button",[a("i",{class:t.icon}),e._v("\n            "+e._s(t.name)+"\n            ")])],1)])})],2)]),e._v(" "),a("div",{staticClass:"flexItem half"},[a("h1",[e._v("Form")]),e._v(" "),a("el-form",{ref:"contactForm",attrs:{"label-position":"top",model:e.contactForm,rules:e.rules,"status-icon":"","label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"alignLeft"},[a("el-form-item",{attrs:{label:"Name",prop:"name"}},[a("el-input",{model:{value:e.contactForm.name,callback:function(t){e.$set(e.contactForm,"name",t)},expression:"contactForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Email address",prop:"email"}},[a("el-input",{model:{value:e.contactForm.email,callback:function(t){e.$set(e.contactForm,"email",t)},expression:"contactForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Form",prop:"message"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.contactForm.message,callback:function(t){e.$set(e.contactForm,"message",t)},expression:"contactForm.message"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{round:"",type:"primary"},on:{click:function(t){return e.submitForm("contactForm")}}},[e._v("\n          Submit")])],1)],1)],1)])])},staticRenderFns:[]};var h=a("VU/8")(p,v,!1,function(e){a("u2Cw")},null,null).exports,g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section"},[t("el-carousel",{attrs:{trigger:"click","max-height":"500px","indicator-position":"outside",arrow:"always"}},this._l(this.slice.items,function(e,a){return t("el-carousel-item",{key:a},[t("el-image",{attrs:{src:e.gallery_image.url,fit:"contain"}})],1)}),1)],1)},staticRenderFns:[]};var f={props:["slices"],name:"slices-block",components:{ImageGallery:a("VU/8")({props:["slice"],name:"image-gallery"},g,!1,function(e){a("HFad")},"data-v-593f4a55",null).exports}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},e._l(e.slices,function(t,i){return a("section",{key:"slice-"+i},["image_gallery"===t.slice_type?[a("image-gallery",{attrs:{slice:t}})]:e._e()],2)}),0)},staticRenderFns:[]},b={name:"Work",components:{SlicesBlock:a("VU/8")(f,_,!1,null,null,null).exports},data:()=>({documentId:"",work:{uid:null,title:null,tool:null,landingImg:null,tag:null,description:null,slices:[]}}),methods:{getContent(e){this.$prismic.client.getByUID("work",e).then(e=>{e?(this.documentId=e.id,this.work.title=e.data.title,this.work.tool=e.data.tool,this.work.landingImg=e.data.landingimg,this.work.tag=e.data.tag,this.work.description=e.data.description,this.work.slices=e.data.body):this.$router.push({name:"not-found"})})}},created(){this.getContent(this.$route.params.uid)},beforeRouteUpdate(e,t,a){this.getContent(e.params.uid),a()}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"workLP"},[a("h1",[e._v(e._s(e.$prismic.richTextAsPlain(e.work.title)))]),e._v(" "),a("el-image",{attrs:{src:e.work.landingImg.url,fit:e.contain}})],1),e._v(" "),a("slices-block",{attrs:{slices:e.work.slices}}),e._v(" "),a("p",{staticClass:"themeColor"},[e._v(e._s(e.work.tag)+": "+e._s(e.$prismic.richTextAsPlain(e.work.tool)))]),e._v(" "),a("div",{staticClass:"section description"},[a("prismic-rich-text",{attrs:{field:e.work.description}})],1)],1)},staticRenderFns:[]};var C=a("VU/8")(b,k,!1,function(e){a("69kr")},"data-v-4795d9ea",null).exports,$={name:"Works",data(){return{workTypes:["All","Graphics","UI/UX","Branding"],documentId:"",works:[],loading:!0,linkResolver:this.$prismic.linkResolver}},methods:{getAllWorks(){this.$prismic.client.query(this.$prismic.Predicates.at("document.type","work"),{orderings:"[document.first_publication_date]"}).then(e=>{this.works=e.results,this.loading=!1})}},created(){this.getAllWorks()},beforeRouteUpdate(e,t,a){this.getContent(e.params.uid),a()}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"section flexContainer tileContainer"},e._l(e.works,function(t,i){return a("div",{staticClass:"thumbnail flexItem"},[a("router-link",{attrs:{to:e.linkResolver(t)}},[a("div",{staticClass:"thumbnail-overlay"}),e._v(" "),a("img",{staticClass:"thumbnail-image",staticStyle:{width:"300px",height:"300px"},attrs:{src:t.data.thumbnail.url}}),e._v(" "),a("div",{staticClass:"thumbnail-details fadeIn-top"},[a("h4",[e._v(e._s(e.$prismic.richTextAsPlain(t.data.title)))]),e._v(" "),a("p",[e._v(e._s(t.data.tag))])])])],1)}),0)])},staticRenderFns:[]};var x=a("VU/8")($,w,!1,function(e){a("ztTV")},null,null).exports;i.default.use(c.a);var y=new c.a({mode:"history",routes:[{path:"/",redirect:{name:"Works"}},{path:"/aboutme",name:"AboutMe",component:d},{path:"/contact",name:"Contact",component:h},{path:"/work",name:"Works",component:x},{path:"/work/:uid",name:"work",component:C}]}),F=a("zL8q"),I=a.n(F),D=a("znjY"),A=a.n(D),R=(a("tvR6"),a("Ffgn")),j=function(e){return"home"===e.type?"/":"page"===e.type?"/page/"+e.uid:"work"===e.type?"/work/"+e.uid:"/"},U=a("FhMH"),T=a.n(U);const E=T.a.RichText.Elements;i.default.use(I.a,{locale:A.a}),i.default.use(R.a,{endpoint:window.prismic.endpoint,linkResolver:j,htmlSerializer:function(e,t,a,i){if(e===E.hyperlink){let e="";const i=T.a.Link.url(t.data,j);return e="Document"===t.data.link_type?`<router-link to="${i}">${a}</router-link>`:`<a href="${i}" ${t.data.target?`target="'${t.data.target}'" rel="noopener"`:""}>${a}</a>`}if(e===E.image){let e=`<img src="${t.url}" alt="${t.alt||""}" copyright="${t.copyright||""}">`;if(t.linkTo){const a=T.a.Link.url(t.linkTo,j);e="Document"===t.linkTo.link_type?`<router-link to="${a}">${e}</router-link>`:`<a href="${a}" ${t.linkTo.target?`target="${t.linkTo.target}" rel="noopener"`:""}>${e}</a>`}return e=`<p class="${[t.label||"","block-img"].join(" ")}">${e}</p>`}switch(e){case E.heading1:return`<h1>${i.join("")}</h1>`;case E.heading2:return`<h2>${i.join("")}</h2>`;case E.heading3:return`<h3>${i.join("")}</h3>`;case E.heading4:return`<h4>${i.join("")}</h4>`;case E.heading5:return`<h5>${i.join("")}</h5>`;case E.heading6:return`<h6>${i.join("")}</h6>`;case E.paragraph:return`<p>${i.join("")}</p>`;case E.preformatted:return`<pre>${i.join("")}</pre>`;case E.strong:return`<strong>${i.join("")}</strong>`;case E.em:return`<em>${i.join("")}</em>`;case E.listItem:case E.oListItem:return`<li>${i.join("")}</li>`;case E.list:return`<ul>${i.join("")}</ul>`;case E.oList:return`<ol>${i.join("")}</ol>`;case E.embed:return`\n        <div data-oembed="${t.oembed.embed_url}"\n          data-oembed-type="${t.oembed.type}"\n          data-oembed-provider="${t.oembed.provider_name}"\n        >\n          ${t.oembed.html}\n        </div>\n      `;case E.label:return`<span ${t.data.label?` class="${t.data.label}"`:""}>${i.join("")}</span>`;case E.span:return a?a.replace(/\n/g,"<br />"):"";default:return null}},apiOptions:{accessToken:"MC5YbDVLQ3hJQUFDSUFObXlK.FwsU77-9Ae-_vRfvv71xYe-_vVplYu-_vRPvv70z77-9DmLvv70577-9Z3dE77-977-9YD17"}}),new i.default({el:"#app",router:y,components:{App:o},template:"<App/>"})},Y67o:function(e,t,a){e.exports=a.p+"static/img/IMG_2338.90c6db3.jpg"},bE3e:function(e,t){},tvR6:function(e,t){},u2Cw:function(e,t){},ztTV:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d587cd499167d3c48233.js.map