(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69f54bf4"],{"0f3c":function(e,t,c){"use strict";c("9582")},"126a":function(e,t,c){"use strict";c("a4f9")},"171f":function(e,t,c){},"1b57":function(e,t,c){"use strict";var o=c("7a23"),a=Object(o["withScopeId"])("data-v-9032cb82");Object(o["pushScopeId"])("data-v-9032cb82");var n={class:"goods-relevant"},r={class:"header"},s=Object(o["createVNode"])("i",{class:"icon"},null,-1),d={class:"title"};Object(o["popScopeId"])();var i=a((function(e,t,c,a,i,l){var u=Object(o["resolveComponent"])("XtxCarousel");return Object(o["openBlock"])(),Object(o["createBlock"])("div",n,[Object(o["createVNode"])("div",r,[s,Object(o["createVNode"])("span",d,Object(o["toDisplayString"])(c.goodsId?"同类商品推荐":"猜你喜欢"),1)]),Object(o["createVNode"])(u,{sliders:a.sliders},null,8,["sliders"])])})),l=(c("fb6a"),c("c4c8")),u={name:"GoodsRelevant",props:{goodsId:{type:String,default:""}},setup:function(e){var t=Object(o["ref"])([]);return Object(l["e"])({id:e.goodsId}).then((function(e){for(var c=4,o=Math.ceil(e.result.length/c),a=0;a<o;a++)t.value.push(e.result.slice(c*a,c*(a+1)))})),{sliders:t}}};c("554e");u.render=i,u.__scopeId="data-v-9032cb82";t["a"]=u},"1d45":function(e,t,c){"use strict";c("817b")},"270d":function(e,t,c){"use strict";c("40b7")},"2b66":function(e,t,c){"use strict";c("459d")},"2c0a":function(e,t,c){},"3c0b":function(e,t,c){"use strict";c("6157")},4e3:function(e,t,c){"use strict";c("6ea3")},"40b7":function(e,t,c){},"40d4":function(e,t,c){"use strict";c("a602")},"459d":function(e,t,c){},"498a":function(e,t,c){"use strict";var o=c("23e7"),a=c("58a8").trim,n=c("c8d2");o({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},"554e":function(e,t,c){"use strict";c("171f")},"55c1":function(e,t,c){},"593f":function(e,t,c){"use strict";c("2c0a")},6157:function(e,t,c){},"6ea3":function(e,t,c){},"71f5":function(e,t,c){"use strict";c("b0c0");var o=c("7a23"),a=Object(o["withScopeId"])("data-v-3828c3be");Object(o["pushScopeId"])("data-v-3828c3be");var n={alt:""},r={class:"name ellipsis"},s={class:"desc ellipsis"},d={class:"price"},i={key:1,href:"javascript:;",class:"goods-item"},l={alt:""},u={class:"name ellipsis"},b={class:"desc ellipsis"},p={class:"price"};Object(o["popScopeId"])();var j=a((function(e,t,c,j,O,v){var f=Object(o["resolveComponent"])("RouterLink"),g=Object(o["resolveDirective"])("lazy");return c.isLink?(Object(o["openBlock"])(),Object(o["createBlock"])(f,{key:0,to:"/product/".concat(c.goods.id),class:"goods-item"},{default:a((function(){return[Object(o["withDirectives"])(Object(o["createVNode"])("img",n,null,512),[[g,c.goods.picture]]),Object(o["createVNode"])("p",r,Object(o["toDisplayString"])(c.goods.name),1),Object(o["createVNode"])("p",s,Object(o["toDisplayString"])(c.goods.desc),1),Object(o["createVNode"])("p",d,"¥"+Object(o["toDisplayString"])(c.goods.price),1)]})),_:1},8,["to"])):(Object(o["openBlock"])(),Object(o["createBlock"])("a",i,[Object(o["withDirectives"])(Object(o["createVNode"])("img",l,null,512),[[g,c.goods.picture]]),Object(o["createVNode"])("p",u,Object(o["toDisplayString"])(c.goods.name),1),Object(o["createVNode"])("p",b,Object(o["toDisplayString"])(c.goods.desc),1),Object(o["createVNode"])("p",p,"¥"+Object(o["toDisplayString"])(c.goods.price),1)]))})),O={name:"GoodsItem",props:{goods:{type:Object,default:function(){return{}}},isLink:{type:Boolean,default:!0}}};c("3c0b");O.render=j,O.__scopeId="data-v-3828c3be";t["a"]=O},7732:function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),a=Object(o["withScopeId"])("data-v-720f8111");Object(o["pushScopeId"])("data-v-720f8111");var n={class:"xtx-goods-page"},r={key:0,class:"container"},s=Object(o["createTextVNode"])("首页"),d={class:"goods-info"},i={class:"media"},l={class:"spec"},u=Object(o["createTextVNode"])("加入购物车"),b={class:"goods-footer"},p={class:"goods-article"},j={class:"goods-aside"},O={key:1,class:"loading"};Object(o["popScopeId"])();var v=a((function(e,t,c,v,f,g){var m=Object(o["resolveComponent"])("XtxBreadItem"),k=Object(o["resolveComponent"])("XtxBread"),N=Object(o["resolveComponent"])("GoodsImage"),h=Object(o["resolveComponent"])("GoodsSales"),V=Object(o["resolveComponent"])("GoodsName"),y=Object(o["resolveComponent"])("GoodsSku"),B=Object(o["resolveComponent"])("XtxNumbox"),I=Object(o["resolveComponent"])("XtxButton"),S=Object(o["resolveComponent"])("GoodsRelevant"),C=Object(o["resolveComponent"])("GoodsTabs"),x=Object(o["resolveComponent"])("GoodsWarn"),D=Object(o["resolveComponent"])("GoodsHot");return Object(o["openBlock"])(),Object(o["createBlock"])("div",n,[!v.loading&&v.goods?(Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])(k,null,{default:a((function(){return[Object(o["createVNode"])(m,{to:"/"},{default:a((function(){return[s]})),_:1}),Object(o["createVNode"])(m,{to:"/category/".concat(v.goods.categories[1].id)},{default:a((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(v.goods.categories[1].name),1)]})),_:1},8,["to"]),Object(o["createVNode"])(m,{to:"/category/sub/".concat(v.goods.categories[0].id)},{default:a((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(v.goods.categories[0].name),1)]})),_:1},8,["to"]),Object(o["createVNode"])(m,null,{default:a((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(v.goods.name),1)]})),_:1})]})),_:1}),Object(o["createVNode"])("div",d,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])(N,{images:v.goods.mainPictures},null,8,["images"]),Object(o["createVNode"])(h)]),Object(o["createVNode"])("div",l,[Object(o["createVNode"])(V,{goods:v.goods},null,8,["goods"]),Object(o["createVNode"])(y,{goods:v.goods,onChange:v.changeSku},null,8,["goods","onChange"]),Object(o["createVNode"])(B,{label:"数量",modelValue:v.num,"onUpdate:modelValue":t[1]||(t[1]=function(e){return v.num=e}),max:v.goods.inventory},null,8,["modelValue","max"]),Object(o["createVNode"])(I,{onClick:t[2]||(t[2]=function(e){return v.insertCart()}),type:"primary",style:{"margin-top":"20px"}},{default:a((function(){return[u]})),_:1})])]),Object(o["createVNode"])(S,{goodsId:v.goods.id},null,8,["goodsId"]),Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",p,[Object(o["createVNode"])(C),Object(o["createVNode"])(x)]),Object(o["createVNode"])("div",j,[Object(o["createVNode"])(D),Object(o["createVNode"])(D,{type:2})])])])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",O))])})),f=c("1b57"),g=Object(o["withScopeId"])("data-v-4e17a18a");Object(o["pushScopeId"])("data-v-4e17a18a");var m={class:"goods-image"},k={class:"middle",ref:"target"},N={class:"small"};Object(o["popScopeId"])();var h=g((function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",m,[Object(o["withDirectives"])(Object(o["createVNode"])("div",{class:"large",style:[{backgroundImage:"url(".concat(c.images[a.currIndex],")")},a.largePosition]},null,4),[[o["vShow"],a.show]]),Object(o["createVNode"])("div",k,[Object(o["createVNode"])("img",{src:c.images[a.currIndex],alt:""},null,8,["src"]),Object(o["withDirectives"])(Object(o["createVNode"])("div",{class:"layer",style:a.layerPosition},null,4),[[o["vShow"],a.show]])],512),Object(o["createVNode"])("ul",N,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.images,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{key:e,class:{active:t===a.currIndex}},[Object(o["createVNode"])("img",{onMouseenter:function(e){return a.currIndex=t},src:e,alt:""},null,40,["onMouseenter","src"])],2)})),128))])])})),V=c("16ce"),y={name:"GoodsImage",props:{images:{type:Array,default:function(){return[]}}},setup:function(e){var t=Object(o["ref"])(0),c=Object(o["ref"])(!1),a=Object(o["reactive"])({left:0,top:0}),n=Object(o["reactive"])({backgroundPositionX:0,backgroundPositionY:0}),r=Object(o["ref"])(null),s=Object(V["c"])(r),d=s.elementX,i=s.elementY,l=s.isOutside;return Object(o["watch"])([d,i,l],(function(){c.value=!l.value;var e={x:0,y:0};d.value<100?e.x=0:d.value>300?e.x=200:e.x=d.value-100,i.value<100?e.y=0:i.value>300?e.y=200:e.y=i.value-100,a.left=e.x+"px",a.top=e.y+"px",n.backgroundPositionX=-2*e.x+"px",n.backgroundPositionY=-2*e.y+"px"})),{currIndex:t,show:c,layerPosition:a,largePosition:n,target:r}}};c("7df4");y.render=h,y.__scopeId="data-v-4e17a18a";var B=y,I=Object(o["withScopeId"])("data-v-ca3db56a");Object(o["pushScopeId"])("data-v-ca3db56a");var S={class:"goods-sales"},C=Object(o["createStaticVNode"])('<li data-v-ca3db56a><p data-v-ca3db56a>销量人气</p><p data-v-ca3db56a>200+</p><p data-v-ca3db56a><i class="iconfont icon-task-filling" data-v-ca3db56a></i>销量人气</p></li><li data-v-ca3db56a><p data-v-ca3db56a>商品评价</p><p data-v-ca3db56a>400+</p><p data-v-ca3db56a><i class="iconfont icon-comment-filling" data-v-ca3db56a></i>查看评价</p></li><li data-v-ca3db56a><p data-v-ca3db56a>收藏人气</p><p data-v-ca3db56a>600+</p><p data-v-ca3db56a><i class="iconfont icon-favorite-filling" data-v-ca3db56a></i>收藏商品</p></li><li data-v-ca3db56a><p data-v-ca3db56a>品牌信息</p><p data-v-ca3db56a>苏宁电器</p><p data-v-ca3db56a><i class="iconfont icon-dynamic-filling" data-v-ca3db56a></i>品牌主页</p></li>',4);Object(o["popScopeId"])();var x=I((function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])("ul",S,[C])})),D={name:"GoodsSales"};c("2b66");D.render=x,D.__scopeId="data-v-ca3db56a";var w=D,G=Object(o["withScopeId"])("data-v-af785f8a");Object(o["pushScopeId"])("data-v-af785f8a");var _={class:"g-name"},P={class:"g-desc"},L={class:"g-price"},T={class:"g-service"},F=Object(o["createVNode"])("dl",null,[Object(o["createVNode"])("dt",null,"促销"),Object(o["createVNode"])("dd",null,"12月好物放送，App领券购买直降120元")],-1),X=Object(o["createVNode"])("dt",null,"配送",-1),E=Object(o["createVNode"])("b",{style:{"vertical-align":"middle","padding-right":"5px","font-weight":"normal"}},"至",-1),z=Object(o["createVNode"])("dl",null,[Object(o["createVNode"])("dt",null,"服务"),Object(o["createVNode"])("dd",null,[Object(o["createVNode"])("span",null,"无忧退货"),Object(o["createVNode"])("span",null,"快速退款"),Object(o["createVNode"])("span",null,"免费包邮"),Object(o["createVNode"])("a",{href:"javascript:;"},"了解详情")])],-1);Object(o["popScopeId"])();var q=G((function(e,t,c,a,n,r){var s=Object(o["resolveComponent"])("XtxCity");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("p",_,Object(o["toDisplayString"])(c.goods.name),1),Object(o["createVNode"])("p",P,Object(o["toDisplayString"])(c.goods.desc),1),Object(o["createVNode"])("p",L,[Object(o["createVNode"])("span",null,Object(o["toDisplayString"])(c.goods.price),1),Object(o["createVNode"])("span",null,Object(o["toDisplayString"])(c.goods.oldPrice),1)]),Object(o["createVNode"])("div",T,[F,Object(o["createVNode"])("dl",null,[X,Object(o["createVNode"])("dd",null,[E,Object(o["createVNode"])(s,{onChange:a.changeCity,fullLocation:a.fullLocation},null,8,["onChange","fullLocation"])])]),z])],64)})),A=(c("7db0"),{name:"GoodName",props:{goods:{type:Object,default:function(){return{}}}},setup:function(e){var t=Object(o["ref"])("110000"),c=Object(o["ref"])("119900"),a=Object(o["ref"])("110101"),n=Object(o["ref"])("北京市 市辖区 东城区");if(e.goods.userAddresses){var r=e.goods.userAddresses.find((function(e){return 1===e.isDefualt}));r&&(t.value=r.provinceCode,c.value=r.cityCode,a.value=r.countyCode,n.value=r.fullLocation)}var s=function(e){t.value=e.provinceCode,c.value=e.cityCode,a.value=e.countyCode,n.value=e.fullLocation};return{fullLocation:n,changeCity:s}}});c("593f");A.render=q,A.__scopeId="data-v-af785f8a";var M=A,R=c("f6d1"),H=Object(o["withScopeId"])("data-v-8f5c12d6");Object(o["pushScopeId"])("data-v-8f5c12d6");var Y={class:"goods-tabs"},J=Object(o["createTextVNode"])("商品评价");Object(o["popScopeId"])();var W=H((function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",Y,[Object(o["createVNode"])("nav",null,[Object(o["createVNode"])("a",{onClick:t[1]||(t[1]=function(e){return a.activeName="GoodsDetial"}),class:{active:"GoodsDetial"===a.activeName},href:"javascript:;"},"商品详情",2),Object(o["createVNode"])("a",{onClick:t[2]||(t[2]=function(e){return a.activeName="GoodsComment"}),class:{active:"GoodsComment"===a.activeName},href:"javascript:;"},[J,Object(o["createVNode"])("span",null,"("+Object(o["toDisplayString"])(a.goods.commentCount)+")",1)],2)]),(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(a.activeName)))])})),U=Object(o["withScopeId"])("data-v-2c43c764");Object(o["pushScopeId"])("data-v-2c43c764");var K={class:"goods-detail"},Q={class:"attrs"},Z={class:"dt"},$={class:"dd"};Object(o["popScopeId"])();var ee=U((function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",K,[Object(o["createVNode"])("ul",Q,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.goods.details.properties,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{key:e.value},[Object(o["createVNode"])("span",Z,Object(o["toDisplayString"])(e.name),1),Object(o["createVNode"])("span",$,Object(o["toDisplayString"])(e.value),1)])})),128))]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.goods.details.pictures,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:e,src:e,alt:""},null,8,["src"])})),128))])})),te={name:"GoodsDetial",setup:function(){var e=Object(o["inject"])("goods");return{goods:e}}};c("40d4");te.render=ee,te.__scopeId="data-v-2c43c764";var ce=te,oe=Object(o["withScopeId"])("data-v-11a3bb63");Object(o["pushScopeId"])("data-v-11a3bb63");var ae={class:"goods-comment"},ne={key:0,class:"head"},re={class:"data"},se=Object(o["createVNode"])("span",null,"人购买",-1),de=Object(o["createVNode"])("span",null,"好评率",-1),ie={class:"tags"},le=Object(o["createVNode"])("div",{class:"dt"},"大家都在说：",-1),ue={class:"dd"},be={key:1,class:"sort"},pe=Object(o["createVNode"])("span",null,"排序：",-1),je={key:2,class:"list"},Oe={class:"user"},ve={class:"body"},fe={class:"score"},ge={class:"attr"},me={class:"text"},ke={class:"time"},Ne={class:"zan"},he=Object(o["createVNode"])("i",{class:"iconfont icon-dianzan"},null,-1);Object(o["popScopeId"])();var Ve=oe((function(e,t,c,a,n,r){var s=Object(o["resolveComponent"])("GoodsCommentImage"),d=Object(o["resolveComponent"])("XtxPagination");return Object(o["openBlock"])(),Object(o["createBlock"])("div",ae,[a.commentInfo?(Object(o["openBlock"])(),Object(o["createBlock"])("div",ne,[Object(o["createVNode"])("div",re,[Object(o["createVNode"])("p",null,[Object(o["createVNode"])("span",null,Object(o["toDisplayString"])(a.commentInfo.salesCount),1),se]),Object(o["createVNode"])("p",null,[Object(o["createVNode"])("span",null,Object(o["toDisplayString"])(a.commentInfo.praisePercent),1),de])]),Object(o["createVNode"])("div",ie,[le,Object(o["createVNode"])("div",ue,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.commentInfo.tags,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:e.title,href:"javascript:;",class:{active:a.currentTagIndex===t},onClick:function(e){return a.changeTag(t)}},Object(o["toDisplayString"])(e.title)+"（"+Object(o["toDisplayString"])(e.tagCount)+"）",11,["onClick"])})),128))])])])):Object(o["createCommentVNode"])("",!0),a.commentInfo?(Object(o["openBlock"])(),Object(o["createBlock"])("div",be,[pe,Object(o["createVNode"])("a",{onClick:t[1]||(t[1]=function(e){return a.changeSort(null)}),class:{active:null===a.reqParams.sortField},href:"javascript:;"},"默认",2),Object(o["createVNode"])("a",{onClick:t[2]||(t[2]=function(e){return a.changeSort("createTime")}),class:{active:"createTime"===a.reqParams.sortField},href:"javascript:;"},"最新",2),Object(o["createVNode"])("a",{onClick:t[3]||(t[3]=function(e){return a.changeSort("praiseCount")}),class:{active:"praiseCount"===a.reqParams.sortField},href:"javascript:;"},"最热",2)])):Object(o["createCommentVNode"])("",!0),a.commentList?(Object(o["openBlock"])(),Object(o["createBlock"])("div",je,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.commentList,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"item",key:e.id},[Object(o["createVNode"])("div",Oe,[Object(o["createVNode"])("img",{src:e.member.avatar,alt:""},null,8,["src"]),Object(o["createVNode"])("span",null,Object(o["toDisplayString"])(a.formatNickname(e.member.nickname)),1)]),Object(o["createVNode"])("div",ve,[Object(o["createVNode"])("div",fe,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.score,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("i",{key:e+"s",class:"iconfont icon-wjx01"})})),128)),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(5-e.score,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("i",{key:e+"k",class:"iconfont icon-wjx02"})})),128)),Object(o["createVNode"])("span",ge,Object(o["toDisplayString"])(a.formatSpecs(e.orderInfo.specs)),1)]),Object(o["createVNode"])("div",me,Object(o["toDisplayString"])(e.content),1),e.pictures.length?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,pictures:e.pictures},null,8,["pictures"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",ke,[Object(o["createVNode"])("span",null,Object(o["toDisplayString"])(e.createTime),1),Object(o["createVNode"])("span",Ne,[he,Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.praiseCount),1)])])])])})),128))])):Object(o["createCommentVNode"])("",!0),a.total?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:3,onCurrentChange:a.changePagerFn,"page-size":a.reqParams.pageSize,"current-page":a.reqParams.page},null,8,["onCurrentChange","page-size","current-page"])):Object(o["createCommentVNode"])("",!0)])})),ye=(c("498a"),c("13d5"),c("99af"),c("c4c8")),Be=Object(o["withScopeId"])("data-v-2174e057");Object(o["pushScopeId"])("data-v-2174e057");var Ie={class:"goods-comment-image"},Se={class:"list"},Ce={key:0,class:"preview"};Object(o["popScopeId"])();var xe=Be((function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",Ie,[Object(o["createVNode"])("div",Se,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pictures,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("a",{class:{active:a.currImg===e},onClick:function(t){return a.currImg=e},href:"javascript:;",key:e},[Object(o["createVNode"])("img",{src:e,alt:""},null,8,["src"])],10,["onClick"])})),128))]),a.currImg?(Object(o["openBlock"])(),Object(o["createBlock"])("div",Ce,[Object(o["createVNode"])("img",{src:a.currImg,alt:""},null,8,["src"]),Object(o["createVNode"])("i",{onClick:t[1]||(t[1]=function(e){return a.currImg=null}),class:"iconfont icon-close-new"})])):Object(o["createCommentVNode"])("",!0)])})),De={name:"GoodsCommentImage",props:{pictures:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(o["ref"])(null);return{currImg:e}}};c("4000");De.render=xe,De.__scopeId="data-v-2174e057";var we=De,Ge={name:"GoodsComment",components:{GoodsCommentImage:we},setup:function(){var e=Object(o["ref"])(null),t=Object(o["inject"])("goods");Object(ye["b"])(t.value.id).then((function(t){t.result.tags.unshift({title:"有图",tagCount:t.result.hasPictureCount,type:"img"}),t.result.tags.unshift({title:"全部评价",tagCount:t.result.evaluateCount,type:"all"}),e.value=t.result}));var c=Object(o["ref"])(0),a=function(t){c.value=t;var o=e.value.tags[t];"all"===o.type?(r.hasPicture=null,r.tag=null):"img"===o.type?(r.hasPicture=!0,r.tag=null):(r.hasPicture=null,r.tag=o.title),r.page=1},n=function(e){r.sortField=e,r.page=1},r=Object(o["reactive"])({page:1,pageSize:10,hasPicture:null,tag:null,sortField:null}),s=Object(o["ref"])([]),d=Object(o["ref"])(0);Object(o["watch"])(r,(function(){Object(ye["c"])(t.value.id,r).then((function(e){s.value=e.result.items,d.value=e.result.counts}))}),{immediate:!0});var i=function(e){return e.reduce((function(e,t){return"".concat(e," ").concat(t.name,"：").concat(t.nameValue)}),"").trim()},l=function(e){return e.substr(0,1)+"****"+e.substr(-1)},u=function(e){r.page=e};return{commentInfo:e,currentTagIndex:c,changeTag:a,reqParams:r,commentList:s,changeSort:n,formatSpecs:i,formatNickname:l,total:d,changePagerFn:u}}};c("126a");Ge.render=Ve,Ge.__scopeId="data-v-11a3bb63";var _e=Ge,Pe={name:"GoodsTabs",components:{GoodsDetial:ce,GoodsComment:_e},setup:function(){var e=Object(o["ref"])("GoodsDetial"),t=Object(o["inject"])("goods");return{activeName:e,goods:t}}};c("0f3c");Pe.render=W,Pe.__scopeId="data-v-8f5c12d6";var Le=Pe,Te=Object(o["withScopeId"])("data-v-e4f0992c");Object(o["pushScopeId"])("data-v-e4f0992c");var Fe={class:"goods-hot"},Xe={key:0};Object(o["popScopeId"])();var Ee=Te((function(e,t,c,a,n,r){var s=Object(o["resolveComponent"])("GoodsItem");return Object(o["openBlock"])(),Object(o["createBlock"])("div",Fe,[Object(o["createVNode"])("h3",null,Object(o["toDisplayString"])(a.title),1),a.goodsList?(Object(o["openBlock"])(),Object(o["createBlock"])("div",Xe,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.goodsList,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:e.id,goods:e},null,8,["goods"])})),128))])):Object(o["createCommentVNode"])("",!0)])})),ze=(c("a9e3"),c("71f5")),qe=c("6c02"),Ae={name:"GoodsHot",components:{GoodsItem:ze["a"]},props:{type:{type:Number,default:1}},setup:function(e){var t={1:"24小时热销榜",2:"周热销榜",3:"总热销榜"},c=Object(o["computed"])((function(){return t[e.type]})),a=Object(qe["c"])(),n=Object(o["ref"])([]);return Object(ye["d"])({id:a.params.id,type:e.type}).then((function(e){n.value=e.result})),{title:c,goodsList:n}}};c("ae67");Ae.render=Ee,Ae.__scopeId="data-v-e4f0992c";var Me=Ae,Re=Object(o["withScopeId"])("data-v-2d293123");Object(o["pushScopeId"])("data-v-2d293123");var He={class:"goods-warn"},Ye=Object(o["createStaticVNode"])('<h3 data-v-2d293123>注意事项</h3><p class="tit" data-v-2d293123>• 购买运费如何收取？</p><p data-v-2d293123> 单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费) </p><br data-v-2d293123><p class="tit" data-v-2d293123>• 使用什么快递发货?</p><p data-v-2d293123>默认使用顺丰快递发货(个别商品使用其他快递）</p><p data-v-2d293123>配送范围覆盖全国大部分地区(港澳台地区除外）</p><br data-v-2d293123><p class="tit" data-v-2d293123>• 如何申请退货?</p><p data-v-2d293123> 1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p><p data-v-2d293123>2.内裤和食品等特殊商品无质量问题不支持退货；</p><p data-v-2d293123> 3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p><p data-v-2d293123> 4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。 </p>',13);Object(o["popScopeId"])();var Je=Re((function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",He,[Ye])}));c("270d");const We={};We.render=Je,We.__scopeId="data-v-2d293123";var Ue=We,Ke=c("5502"),Qe=c("2f59"),Ze={name:"XtxGoodsPage",components:{GoodsRelevant:f["a"],GoodsImage:B,GoodsSales:w,GoodsName:M,GoodsSku:R["a"],GoodsTabs:Le,GoodsHot:Me,GoodsWarn:Ue},setup:function(){var e=$e(),t=e.goods,c=e.loading,a=function(e){e.skuId&&(t.value.price=e.price,t.value.oldPrice=e.oldPrice,t.value.inventory=e.inventory),s.value=e};Object(o["provide"])("goods",t);var n=Object(o["ref"])(1),r=Object(Ke["b"])(),s=Object(o["ref"])(null),d=function(){if(s.value&&s.value.skuId){var e=s.value,c=e.skuId,o=e.specsText,a=e.inventory,d=t.value,i=d.id,l=d.name,u=d.price,b=d.mainPictures;r.dispatch("cart/insertCart",{skuId:c,attrsText:o,stock:a,id:i,name:l,price:u,nowPrice:u,picture:b[0],selected:!0,isEffective:!0,count:n.value}).then((function(){Object(Qe["a"])({type:"success",text:"加入购物车成功"})}))}else Object(Qe["a"])({text:"请选择完整规格"})};return{goods:t,loading:c,changeSku:a,num:n,insertCart:d}}},$e=function(){var e=Object(o["ref"])(null),t=Object(qe["c"])(),c=Object(o["ref"])(!1);return Object(o["watch"])((function(){return t.params.id}),(function(a){a&&"/product/".concat(a)===t.path&&(c.value=!0,Object(ye["a"])(t.params.id).then((function(t){e.value=null,Object(o["nextTick"])((function(){e.value=t.result,c.value=!1}))})))}),{immediate:!0}),{goods:e,loading:c}};c("1d45");Ze.render=v,Ze.__scopeId="data-v-720f8111";t["default"]=Ze},"7df4":function(e,t,c){"use strict";c("ae9a")},"817b":function(e,t,c){},"8b9b":function(e,t,c){},9582:function(e,t,c){},a15b:function(e,t,c){"use strict";var o=c("23e7"),a=c("44ad"),n=c("fc6a"),r=c("a640"),s=[].join,d=a!=Object,i=r("join",",");o({target:"Array",proto:!0,forced:d||!i},{join:function(e){return s.call(n(this),void 0===e?",":e)}})},a4f9:function(e,t,c){},a602:function(e,t,c){},ae67:function(e,t,c){"use strict";c("55c1")},ae9a:function(e,t,c){},c4c8:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"e",(function(){return n})),c.d(t,"d",(function(){return r})),c.d(t,"b",(function(){return s})),c.d(t,"c",(function(){return d}));var o=c("b775"),a=function(e){return Object(o["b"])("/goods","get",{id:e})},n=function(e){var t=e.id,c=e.limit,a=void 0===c?16:c;return Object(o["b"])("/goods/relevant","get",{id:t,limit:a})},r=function(e){var t=e.id,c=e.limit,a=void 0===c?3:c,n=e.type,r=void 0===n?1:n;return Object(o["b"])("/goods/hot","get",{id:t,limit:a,type:r})},s=function(e){return Object(o["b"])("https://mock.boxuegu.com/mock/1175/goods/".concat(e,"/evaluate"),"get")},d=function(e,t){return Object(o["b"])("https://mock.boxuegu.com/mock/1175/goods/".concat(e,"/evaluate/page"),"get",t)}},c8d2:function(e,t,c){var o=c("d039"),a=c("5899"),n="​᠎";e.exports=function(e){return o((function(){return!!a[e]()||n[e]()!=n||a[e].name!==e}))}},e68d:function(e,t,c){"use strict";c("8b9b")},f6d1:function(e,t,c){"use strict";c("b0c0"),c("d3b7"),c("ddb0");var o=c("7a23"),a=Object(o["withScopeId"])("data-v-0fe429cd");Object(o["pushScopeId"])("data-v-0fe429cd");var n={class:"goods-sku"};Object(o["popScopeId"])();var r=a((function(e,t,c,a,r,s){return Object(o["openBlock"])(),Object(o["createBlock"])("div",n,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.goods.specs,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("dl",{key:e.id},[Object(o["createVNode"])("dt",null,Object(o["toDisplayString"])(e.name),1),Object(o["createVNode"])("dd",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.values,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:t.name},[t.picture?(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:0,class:{selected:t.selected,disabled:t.disabled},onClick:function(c){return a.changeSku(e,t)},src:t.picture,title:t.name},null,10,["onClick","src","title"])):(Object(o["openBlock"])(),Object(o["createBlock"])("span",{key:1,class:{selected:t.selected,disabled:t.disabled},onClick:function(c){return a.changeSku(e,t)}},Object(o["toDisplayString"])(t.name),11,["onClick"]))],64)})),128))])])})),128))])}));c("159b"),c("d81d"),c("a15b"),c("7db0"),c("4de4"),c("498a"),c("13d5"),c("99af");function s(e){for(var t=[],c=Math.pow(2,e.length),o=0;o<c;o+=1){for(var a=[],n=0;n<e.length;n+=1)o&1<<n&&a.push(e[n]);t.push(a)}return t}var d="★",i=function(e){var t={};return e.forEach((function(e){if(e.inventory>0){var c=e.specs.map((function(e){return e.valueName})),o=s(c);o.forEach((function(c){var o=c.join(d);t[o]?t[o].push(e.id):t[o]=[e.id]}))}})),t},l=function(e){var t=[];return e.forEach((function(e){var c=e.values.find((function(e){return e.selected}));t.push(c?c.name:void 0)})),t},u=function(e,t){e.forEach((function(c,o){var a=l(e);c.values.forEach((function(e){if(!e.selected){a[o]=e.name;var c=a.filter((function(e){return e})).join(d);e.disabled=!t[c]}}))}))},b=function(e,t){var c=e.skus.find((function(e){return e.id===t}));e.specs.forEach((function(e,t){var o=e.values.find((function(e){return e.name===c.specs[t].valueName}));o.selected=!0}))},p={name:"GoodsSku",props:{goods:{type:Object,default:function(){return{}}},skuId:{type:String,default:""}},setup:function(e,t){var c=t.emit,o=i(e.goods.skus);e.skuId&&b(e.goods,e.skuId),u(e.goods.specs,o);var a=function(t,a){if(!a.disabled){a.selected?a.selected=!1:(t.values.forEach((function(e){e.selected=!1})),a.selected=!0),u(e.goods.specs,o);var n=l(e.goods.specs).filter((function(e){return e}));if(n.length===e.goods.specs.length){var r=o[n.join(d)],s=e.goods.skus.find((function(e){return e.id===r[0]}));c("change",{skuId:s.id,price:s.price,oldPrice:s.oldPrice,inventory:s.inventory,specsText:s.specs.reduce((function(e,t){return"".concat(e," ").concat(t.name,"：").concat(t.valueName)}),"").trim()})}else c("change",{})}};return{changeSku:a}}};c("e68d");p.render=r,p.__scopeId="data-v-0fe429cd";t["a"]=p}}]);
//# sourceMappingURL=chunk-69f54bf4.d8276521.js.map