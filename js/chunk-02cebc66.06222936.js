(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02cebc66"],{"06b7":function(e,t,c){"use strict";c.r(t);var r=c("7a23"),a=Object(r["withScopeId"])("data-v-5dd098f9");Object(r["pushScopeId"])("data-v-5dd098f9");var o={class:"sub-categroy"},n={class:"container"},i={class:"goods-list"};Object(r["popScopeId"])();var s=a((function(e,t,c,a,s,l){var d=Object(r["resolveComponent"])("SubBread"),u=Object(r["resolveComponent"])("SubFilter"),b=Object(r["resolveComponent"])("SubSort"),p=Object(r["resolveComponent"])("GoodsItem"),j=Object(r["resolveComponent"])("XtxInfiniteLoading");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])("div",n,[Object(r["createVNode"])(d),Object(r["createVNode"])(u,{onFilterChange:a.filterChange},null,8,["onFilterChange"]),Object(r["createVNode"])("div",i,[Object(r["createVNode"])(b,{onSortChange:a.sortChange},null,8,["onSortChange"]),Object(r["createVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(a.goodsList,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:e.id},[Object(r["createVNode"])(p,{goods:e},null,8,["goods"])])})),128))]),Object(r["createVNode"])(j,{loading:a.loading,finished:a.finished,onInfinite:a.getData},null,8,["loading","finished","onInfinite"])])])])})),l=c("5530"),d=c("6b75");function u(e){if(Array.isArray(e))return Object(d["a"])(e)}c("a4d3"),c("e01a"),c("d3b7"),c("d28b"),c("3ca3"),c("ddb0"),c("a630");function b(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var p=c("06c5");function j(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e){return u(e)||b(e)||Object(p["a"])(e)||j()}c("b0c0"),c("4c53");var f=Object(r["createTextVNode"])("首页");function v(e,t,c,a,o,n){var i=Object(r["resolveComponent"])("XtxBreadItem"),s=Object(r["resolveComponent"])("XtxBread");return Object(r["openBlock"])(),Object(r["createBlock"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{to:"/"},{default:Object(r["withCtx"])((function(){return[f]})),_:1}),a.category.top?(Object(r["openBlock"])(),Object(r["createBlock"])(i,{key:a.category.top.id,to:"/category/".concat(a.category.top.id)},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(a.category.top.name),1)]})),_:1},8,["to"])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(r["Transition"],{name:"fade-right",mode:"out-in"},{default:Object(r["withCtx"])((function(){return[a.category.sub?(Object(r["openBlock"])(),Object(r["createBlock"])(i,{key:a.category.sub.id},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(a.category.sub.name),1)]})),_:1})):Object(r["createCommentVNode"])("",!0)]})),_:1})]})),_:1})}c("159b"),c("7db0");var h=c("5502"),g=c("6c02"),m={name:"SubBread",setup:function(){var e=Object(g["c"])(),t=Object(h["b"])(),c=Object(r["computed"])((function(){var c={};return t.state.category.list.forEach((function(t){if(t.children){var r=t.children.find((function(t){return t.id===e.params.id}));r&&(c.top={id:t.id,name:t.name},c.sub={id:r.id,name:r.name})}})),c}));return{category:c}}};m.render=v;var k=m,y=Object(r["withScopeId"])("data-v-1e9897c0");Object(r["pushScopeId"])("data-v-1e9897c0");var N={key:0,class:"sub-filter"},S={class:"item"},V=Object(r["createVNode"])("div",{class:"head"},"品牌：",-1),B={class:"body"},C={class:"head"},w={class:"body"},x={key:1,class:"sub-filter"};Object(r["popScopeId"])();var I=y((function(e,t,c,a,o,n){var i=Object(r["resolveComponent"])("XtxSkeleton");return a.filterData&&!a.filterLoading?(Object(r["openBlock"])(),Object(r["createBlock"])("div",N,[Object(r["createVNode"])("div",S,[V,Object(r["createVNode"])("div",B,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(a.filterData.brands,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("a",{class:["ellipsis",{active:e.id===a.filterData.selectedBrand}],title:e.name,onClick:function(t){return a.changeBrand(e.id)},href:"javascript:;",key:e.id},Object(r["toDisplayString"])(e.name),11,["title","onClick"])})),128))])]),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(a.filterData.saleProperties,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"item",key:e.id},[Object(r["createVNode"])("div",C,Object(r["toDisplayString"])(e.name)+"：",1),Object(r["createVNode"])("div",w,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.properties,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("a",{class:["ellipsis",{active:t.id===e.selectedProp}],title:t.name,onClick:function(c){return a.changeProp(e,t.id)},href:"javascript:;",key:t.id},Object(r["toDisplayString"])(t.name),11,["title","onClick"])})),128))])])})),128))])):(Object(r["openBlock"])(),Object(r["createBlock"])("div",x,[Object(r["createVNode"])(i,{class:"item",width:"800px",height:"40px"}),Object(r["createVNode"])(i,{class:"item",width:"800px",height:"40px"}),Object(r["createVNode"])(i,{class:"item",width:"600px",height:"40px"}),Object(r["createVNode"])(i,{class:"item",width:"600px",height:"40px"}),Object(r["createVNode"])(i,{class:"item",width:"600px",height:"40px"})]))})),D=c("c405"),P={name:"SubFilter",setup:function(e,t){var c=t.emit,a=Object(g["c"])(),o=Object(r["ref"])(null),n=Object(r["ref"])(!1);Object(r["watch"])((function(){return a.params.id}),(function(e){e&&"/category/sub/".concat(e)===a.path&&(n.value=!0,Object(D["b"])(a.params.id).then((function(e){e.result.selectedBrand=null,e.result.brands.unshift({id:null,name:"全部"}),e.result.saleProperties.forEach((function(e){e.selectedProp=null,e.properties.unshift({id:null,name:"全部"})})),o.value=e.result,n.value=!1})))}),{immediate:!0});var i=function(){var e={brandId:null,attrs:[]};return e.brandId=o.value.selectedBrand,o.value.saleProperties.forEach((function(t){if(t.selectedProp){var c=t.properties.find((function(e){return e.id===t.selectedProp}));e.attrs.push({groupName:t.name,propertyName:c.name})}})),0===e.attrs.length&&(e.attrs=null),e},s=function(e){o.value.selectedBrand!==e&&(o.value.selectedBrand=e,c("filter-change",i()))},l=function(e,t){e.selectedProp!==t&&(e.selectedProp=t,c("filter-change",i()))};return{filterData:o,filterLoading:n,changeBrand:s,changeProp:l}}};c("72bb");P.render=I,P.__scopeId="data-v-1e9897c0";var F=P,_=Object(r["withScopeId"])("data-v-37c4a6d2");Object(r["pushScopeId"])("data-v-37c4a6d2");var L={class:"sub-sort"},T={class:"sort"},M=Object(r["createTextVNode"])(" 价格排序 "),X={class:"check"},E=Object(r["createTextVNode"])("仅显示有货商品"),z=Object(r["createTextVNode"])("仅显示特惠商品");Object(r["popScopeId"])();var A=_((function(e,t,c,a,o,n){var i=Object(r["resolveComponent"])("XtxCheckbox");return Object(r["openBlock"])(),Object(r["createBlock"])("div",L,[Object(r["createVNode"])("div",T,[Object(r["createVNode"])("a",{class:{active:null===a.sortParams.sortField},onClick:t[1]||(t[1]=function(e){return a.changeSort(null)}),href:"javascript:;"},"默认排序",2),Object(r["createVNode"])("a",{class:{active:"publishTime"===a.sortParams.sortField},onClick:t[2]||(t[2]=function(e){return a.changeSort("publishTime")}),href:"javascript:;"},"最新商品",2),Object(r["createVNode"])("a",{class:{active:"orderNum"===a.sortParams.sortField},onClick:t[3]||(t[3]=function(e){return a.changeSort("orderNum")}),href:"javascript:;"},"最高人气",2),Object(r["createVNode"])("a",{class:{active:"evaluateNum"===a.sortParams.sortField},onClick:t[4]||(t[4]=function(e){return a.changeSort("evaluateNum")}),href:"javascript:;"},"评论最多",2),Object(r["createVNode"])("a",{onClick:t[5]||(t[5]=function(e){return a.changeSort("price")}),href:"javascript:;"},[M,Object(r["createVNode"])("i",{class:["arrow up",{active:"price"===a.sortParams.sortField&&"asc"===a.sortParams.sortMethod}]},null,2),Object(r["createVNode"])("i",{class:["arrow down",{active:"price"===a.sortParams.sortField&&"desc"===a.sortParams.sortMethod}]},null,2)])]),Object(r["createVNode"])("div",X,[Object(r["createVNode"])(i,{onChange:a.changeCheck,modelValue:a.sortParams.inventory,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.sortParams.inventory=e})},{default:_((function(){return[E]})),_:1},8,["onChange","modelValue"]),Object(r["createVNode"])(i,{onChange:a.changeCheck,modelValue:a.sortParams.onlyDiscount,"onUpdate:modelValue":t[7]||(t[7]=function(e){return a.sortParams.onlyDiscount=e})},{default:_((function(){return[z]})),_:1},8,["onChange","modelValue"])])])})),G={name:"SubSort",setup:function(e,t){var c=t.emit,a=Object(r["reactive"])({inventory:!1,onlyDiscount:!1,sortField:null,sortMethod:null}),o=function(e){if("price"===e)a.sortField=e,null===a.sortMethod?a.sortMethod="desc":a.sortMethod="desc"===a.sortMethod?"asc":"desc";else{if(a.sortField===e)return;a.sortField=e,a.sortMethod=null}c("sort-change",a)},n=function(){c("sort-change",a)};return{sortParams:a,changeSort:o,changeCheck:n}}};c("6e28");G.render=A,G.__scopeId="data-v-37c4a6d2";var J=G,U=c("71f5"),q={name:"SubCategory",components:{SubBread:k,SubFilter:F,SubSort:J,GoodsItem:U["a"]},setup:function(){var e=Object(g["c"])(),t=Object(r["ref"])(!1),c=Object(r["ref"])(!1),a=Object(r["ref"])([]),o={page:1,pageSize:20},n=function(){t.value=!0,o.categoryId=e.params.id,Object(D["c"])(o).then((function(e){var r,n=e.result;n.items.length?((r=a.value).push.apply(r,O(n.items)),o.page++):c.value=!0;t.value=!1}))};Object(r["watch"])((function(){return e.params.id}),(function(t){t&&"/category/sub/".concat(t)===e.path&&(c.value=!1,a.value=[],o={page:1,pageSize:20})}));var i=function(e){c.value=!1,o=Object(l["a"])(Object(l["a"])({},o),e),o.page=1,a.value=[],n()},s=function(e){c.value=!1,o=Object(l["a"])(Object(l["a"])({},o),e),o.page=1,a.value=[],n()};return{loading:t,finished:c,getData:n,goodsList:a,sortChange:i,filterChange:s}}};c("de85");q.render=s,q.__scopeId="data-v-5dd098f9";t["default"]=q},"0d45":function(e,t,c){},"3c0b":function(e,t,c){"use strict";c("6157")},"4c53":function(e,t,c){"use strict";var r=c("23e7"),a=c("857a"),o=c("af03");r({target:"String",proto:!0,forced:o("sub")},{sub:function(){return a(this,"sub","","")}})},6157:function(e,t,c){},"6e28":function(e,t,c){"use strict";c("e78e")},"71f5":function(e,t,c){"use strict";c("b0c0");var r=c("7a23"),a=Object(r["withScopeId"])("data-v-3828c3be");Object(r["pushScopeId"])("data-v-3828c3be");var o={alt:""},n={class:"name ellipsis"},i={class:"desc ellipsis"},s={class:"price"},l={key:1,href:"javascript:;",class:"goods-item"},d={alt:""},u={class:"name ellipsis"},b={class:"desc ellipsis"},p={class:"price"};Object(r["popScopeId"])();var j=a((function(e,t,c,j,O,f){var v=Object(r["resolveComponent"])("RouterLink"),h=Object(r["resolveDirective"])("lazy");return c.isLink?(Object(r["openBlock"])(),Object(r["createBlock"])(v,{key:0,to:"/product/".concat(c.goods.id),class:"goods-item"},{default:a((function(){return[Object(r["withDirectives"])(Object(r["createVNode"])("img",o,null,512),[[h,c.goods.picture]]),Object(r["createVNode"])("p",n,Object(r["toDisplayString"])(c.goods.name),1),Object(r["createVNode"])("p",i,Object(r["toDisplayString"])(c.goods.desc),1),Object(r["createVNode"])("p",s,"¥"+Object(r["toDisplayString"])(c.goods.price),1)]})),_:1},8,["to"])):(Object(r["openBlock"])(),Object(r["createBlock"])("a",l,[Object(r["withDirectives"])(Object(r["createVNode"])("img",d,null,512),[[h,c.goods.picture]]),Object(r["createVNode"])("p",u,Object(r["toDisplayString"])(c.goods.name),1),Object(r["createVNode"])("p",b,Object(r["toDisplayString"])(c.goods.desc),1),Object(r["createVNode"])("p",p,"¥"+Object(r["toDisplayString"])(c.goods.price),1)]))})),O={name:"GoodsItem",props:{goods:{type:Object,default:function(){return{}}},isLink:{type:Boolean,default:!0}}};c("3c0b");O.render=j,O.__scopeId="data-v-3828c3be";t["a"]=O},"72bb":function(e,t,c){"use strict";c("0d45")},"857a":function(e,t,c){var r=c("1d80"),a=/"/g;e.exports=function(e,t,c,o){var n=String(r(e)),i="<"+t;return""!==c&&(i+=" "+c+'="'+String(o).replace(a,"&quot;")+'"'),i+">"+n+"</"+t+">"}},af03:function(e,t,c){var r=c("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},de85:function(e,t,c){"use strict";c("fa28")},e78e:function(e,t,c){},fa28:function(e,t,c){}}]);
//# sourceMappingURL=chunk-02cebc66.06222936.js.map