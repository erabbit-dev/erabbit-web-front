(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d527c7b"],{"12d1":function(e,t,c){"use strict";c("18d0")},"171f":function(e,t,c){},"18d0":function(e,t,c){},1956:function(e,t,c){},"1b57":function(e,t,c){"use strict";var o=c("7a23");const n=e=>(Object(o["pushScopeId"])("data-v-9032cb82"),e=e(),Object(o["popScopeId"])(),e),l={class:"goods-relevant"},a={class:"header"},r=n(()=>Object(o["createElementVNode"])("i",{class:"icon"},null,-1)),s={class:"title"};function d(e,t,c,n,d,i){const u=Object(o["resolveComponent"])("XtxCarousel");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[Object(o["createElementVNode"])("div",a,[r,Object(o["createElementVNode"])("span",s,Object(o["toDisplayString"])(c.goodsId?"同类商品推荐":"猜你喜欢"),1)]),Object(o["createVNode"])(u,{sliders:n.sliders},null,8,["sliders"])])}c("14d9");var i=c("c4c8"),u={name:"GoodsRelevant",props:{goodsId:{type:String,default:""}},setup(e){const t=Object(o["ref"])([]);return Object(i["e"])({id:e.goodsId}).then(e=>{const c=4,o=Math.ceil(e.result.length/c);for(let n=0;n<o;n++)t.value.push(e.result.slice(c*n,c*(n+1)))}),{sliders:t}}},b=(c("554e"),c("6b0d")),O=c.n(b);const j=O()(u,[["render",d],["__scopeId","data-v-9032cb82"]]);t["a"]=j},"1b7b":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const n=e=>(Object(o["pushScopeId"])("data-v-72eb7b2e"),e=e(),Object(o["popScopeId"])(),e),l={class:"xtx-cart-page"},a={class:"container"},r={class:"cart"},s={width:"120"},d=n(()=>Object(o["createElementVNode"])("th",{width:"400"},"商品信息",-1)),i=n(()=>Object(o["createElementVNode"])("th",{width:"220"},"单价",-1)),u=n(()=>Object(o["createElementVNode"])("th",{width:"180"},"数量",-1)),b=n(()=>Object(o["createElementVNode"])("th",{width:"180"},"小计",-1)),O=n(()=>Object(o["createElementVNode"])("th",{width:"140"},"操作",-1)),j={key:0},m={colspan:"6"},A={class:"goods"},k=["src"],p={class:"name ellipsis"},g={class:"tc"},E={key:0},B={class:"red"},C={class:"tc"},V={class:"tc"},h={class:"f16 red"},v={class:"tc"},f=n(()=>Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("a",{href:"javascript:;"},"移入收藏夹")],-1)),N=["onClick"],I=n(()=>Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("a",{href:"javascript:;"},"找相似")],-1)),w={key:0},x=n(()=>Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",{colspan:"6"},[Object(o["createElementVNode"])("h3",{class:"tit"},"失效商品")])],-1)),D={class:"goods"},Q=["src"],S={class:"name ellipsis"},y={class:"attr"},J={class:"tc"},P={class:"tc"},Y={class:"tc"},M={class:"tc"},H=["onClick"],X=n(()=>Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("a",{href:"javascript:;"},"找相似")],-1)),G={class:"action"},U={class:"batch"},T=n(()=>Object(o["createElementVNode"])("a",{href:"javascript:;"},"移入收藏夹",-1)),L={class:"total"},R={class:"red"};function Z(e,t,c,n,Z,K){const F=Object(o["resolveComponent"])("XtxBreadItem"),q=Object(o["resolveComponent"])("XtxBread"),W=Object(o["resolveComponent"])("XtxCheckbox"),z=Object(o["resolveComponent"])("CartNone"),_=Object(o["resolveComponent"])("RouterLink"),$=Object(o["resolveComponent"])("CartSku"),ee=Object(o["resolveComponent"])("XtxNumbox"),te=Object(o["resolveComponent"])("XtxButton"),ce=Object(o["resolveComponent"])("GoodRelevant");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(q,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(F,{to:"/"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("首页")]),_:1}),Object(o["createVNode"])(F,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("购物车")]),_:1})]),_:1}),Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("table",null,[Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",s,[Object(o["createVNode"])(W,{onChange:n.checkAll,modelValue:e.$store.getters["cart/isCheckAll"]},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("全选")]),_:1},8,["onChange","modelValue"])]),d,i,u,b,O])]),Object(o["createElementVNode"])("tbody",null,[0===e.$store.getters["cart/validList"].length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",j,[Object(o["createElementVNode"])("td",m,[Object(o["createVNode"])(z)])])):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.$store.getters["cart/validList"],e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:e.skuId},[Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(W,{onChange:t=>n.checkOne(e.skuId,t),modelValue:e.selected},null,8,["onChange","modelValue"])]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("div",A,[Object(o["createVNode"])(_,{to:"/product/"+e.id},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:e.picture,alt:""},null,8,k)]),_:2},1032,["to"]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("p",p,Object(o["toDisplayString"])(e.name),1),Object(o["createVNode"])($,{onChange:t=>n.updateCartSku(e.skuId,t),skuId:e.skuId,attrsText:e.attrsText},null,8,["onChange","skuId","attrsText"])])])]),Object(o["createElementVNode"])("td",g,[Object(o["createElementVNode"])("p",null,"¥"+Object(o["toDisplayString"])(e.nowPrice),1),e.price-e.nowPrice>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",E,[Object(o["createTextVNode"])(" 比加入时降价 "),Object(o["createElementVNode"])("span",B,"¥"+Object(o["toDisplayString"])(e.price-e.nowPrice),1)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("td",C,[Object(o["createVNode"])(ee,{onChange:t=>n.updateCount(e.skuId,t),max:e.stock,modelValue:e.count},null,8,["onChange","max","modelValue"])]),Object(o["createElementVNode"])("td",V,[Object(o["createElementVNode"])("p",h,"¥"+Object(o["toDisplayString"])(Math.round(100*e.nowPrice)*e.count/100),1)]),Object(o["createElementVNode"])("td",v,[f,Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("a",{onClick:t=>n.deleteCart(e.skuId),class:"green",href:"javascript:;"},"删除",8,N)]),I])]))),128))]),e.$store.getters["cart/invalidList"].length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("tbody",w,[x,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.$store.getters["cart/invalidList"],e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:e.skuId},[Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(W,{style:{color:"#eee"}})]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("div",D,[Object(o["createVNode"])(_,{to:"/product/"+e.id},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:e.picture,alt:""},null,8,Q)]),_:2},1032,["to"]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("p",S,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("p",y,Object(o["toDisplayString"])(e.attrsText),1)])])]),Object(o["createElementVNode"])("td",J,[Object(o["createElementVNode"])("p",null,"¥"+Object(o["toDisplayString"])(e.nowPrice),1)]),Object(o["createElementVNode"])("td",P,Object(o["toDisplayString"])(e.count),1),Object(o["createElementVNode"])("td",Y,[Object(o["createElementVNode"])("p",null,"¥"+Object(o["toDisplayString"])(Math.round(100*e.nowPrice)*e.count/100)+"}",1)]),Object(o["createElementVNode"])("td",M,[Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("a",{onClick:t=>n.deleteCart(e.skuId),class:"green",href:"javascript:;"},"删除",8,H)]),X])]))),128))])):Object(o["createCommentVNode"])("",!0)])]),Object(o["createElementVNode"])("div",G,[Object(o["createElementVNode"])("div",U,[Object(o["createVNode"])(W,{onChange:n.checkAll,modelValue:e.$store.getters["cart/isCheckAll"]},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("全选")]),_:1},8,["onChange","modelValue"]),Object(o["createElementVNode"])("a",{onClick:t[0]||(t[0]=e=>n.batchDeleteCart()),href:"javascript:;"},"删除商品"),T,Object(o["createElementVNode"])("a",{onClick:t[1]||(t[1]=e=>n.batchDeleteCart(!0)),href:"javascript:;"},"清空失效商品")]),Object(o["createElementVNode"])("div",L,[Object(o["createTextVNode"])(" 共 "+Object(o["toDisplayString"])(e.$store.getters["cart/validTotal"])+" 件商品，已选择 "+Object(o["toDisplayString"])(e.$store.getters["cart/selectedTotal"])+" 件，商品合计： ",1),Object(o["createElementVNode"])("span",R,"¥"+Object(o["toDisplayString"])(e.$store.getters["cart/selectedAmount"]),1),Object(o["createVNode"])(te,{onClick:t[2]||(t[2]=e=>n.checkout()),type:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("下单结算")]),_:1})])]),Object(o["createVNode"])(ce)])])}c("14d9");var K=c("1b57"),F=c("8474"),q=c.n(F);const W=e=>(Object(o["pushScopeId"])("data-v-2a071270"),e=e(),Object(o["popScopeId"])(),e),z={class:"cart-none"},_=W(()=>Object(o["createElementVNode"])("img",{src:q.a,alt:""},null,-1)),$=W(()=>Object(o["createElementVNode"])("p",null,"购物车内暂时没有商品",-1)),ee={class:"btn"};function te(e,t,c,n,l,a){const r=Object(o["resolveComponent"])("XtxButton");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",z,[_,$,Object(o["createElementVNode"])("div",ee,[Object(o["createVNode"])(r,{type:"primary",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("继续逛逛")]),_:1})])])}var ce={name:"CartNone"},oe=(c("4538"),c("6b0d")),ne=c.n(oe);const le=ne()(ce,[["render",te],["__scopeId","data-v-2a071270"]]);var ae=le;const re=e=>(Object(o["pushScopeId"])("data-v-f7d5aa52"),e=e(),Object(o["popScopeId"])(),e),se={class:"cart-sku",ref:"target"},de={class:"ellipsis"},ie=re(()=>Object(o["createElementVNode"])("i",{class:"iconfont icon-angle-down"},null,-1)),ue={key:0,class:"layer"},be={key:0,class:"loading"};function Oe(e,t,c,n,l,a){const r=Object(o["resolveComponent"])("GoodsSku"),s=Object(o["resolveComponent"])("XtxButton");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",se,[Object(o["createElementVNode"])("div",{class:"attrs",onClick:t[0]||(t[0]=e=>n.toggle())},[Object(o["createElementVNode"])("span",de,Object(o["toDisplayString"])(c.attrsText),1),ie]),n.visible?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ue,[n.loading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",be)):(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:1,onChange:n.changeSku,skuId:c.skuId,goods:n.goods},null,8,["onChange","skuId","goods"])),n.loading?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:2,onClick:n.submit,type:"primary",size:"mini",style:{"margin-left":"60px"}},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("确认")]),_:1},8,["onClick"]))])):Object(o["createCommentVNode"])("",!0)],512)}var je=c("16ce"),me=c("2166"),Ae=c("f6d1"),ke={name:"CartSku",components:{GoodsSku:Ae["a"]},props:{attrsText:{type:String,default:""},skuId:{type:String,default:""}},setup(e,{emit:t}){const c=Object(o["ref"])(!1),n=Object(o["ref"])(null),l=Object(o["ref"])(!1),a=()=>{c.value=!0,l.value=!0,Object(me["d"])(e.skuId).then(e=>{n.value=e.result,l.value=!1})},r=()=>{c.value=!1},s=()=>{c.value?r():a()},d=Object(o["ref"])(null);Object(je["a"])(d,()=>{r()});const i=Object(o["ref"])(null),u=e=>{i.value=e},b=()=>{i.value&&i.value.skuId&&i.value.skuId!==e.skuId&&(t("change",i.value),r())};return{visible:c,toggle:s,target:d,goods:n,loading:l,changeSku:u,submit:b}}};c("12d1");const pe=ne()(ke,[["render",Oe],["__scopeId","data-v-f7d5aa52"]]);var ge=pe,Ee=c("5502"),Be=c("2f59"),Ce=c("5d51"),Ve=c("6605"),he={name:"XtxCartPage",components:{GoodRelevant:K["a"],CartNone:ae,CartSku:ge},setup(){const e=Object(Ee["b"])(),t=(t,c)=>{e.dispatch("cart/updateCart",{skuId:t,selected:c})},c=t=>{e.dispatch("cart/checkAllCart",t)},o=t=>{Object(Ce["a"])({text:"亲，您是否确认删除商品"}).then(()=>{e.dispatch("cart/deleteCart",t).then(()=>{Object(Be["a"])({type:"success",text:"删除成功"})})}).catch(e=>{})},n=t=>{Object(Ce["a"])({text:`亲，您是否确认删除${t?"失效":"选中"}的商品`}).then(()=>{e.dispatch("cart/batchDeleteCart",t)}).catch(e=>{})},l=(t,c)=>{e.dispatch("cart/updateCart",{skuId:t,count:c})},a=(t,c)=>{e.dispatch("cart/updateCartSku",{oldSkuId:t,newSku:c})},r=Object(Ve["d"])(),s=()=>0===e.getters["cart/selectedList"].length?Object(Be["a"])({text:"至少选中一件商品"}):e.state.user.profile.token?r.push("/member/checkout"):void Object(Ce["a"])({text:"下单结算需要登录，确认现在去登录吗？"}).then(()=>{r.push("/member/checkout")}).catch(e=>{});return{checkOne:t,checkAll:c,deleteCart:o,batchDeleteCart:n,updateCount:l,updateCartSku:a,checkout:s}}};c("97fe");const ve=ne()(he,[["render",Z],["__scopeId","data-v-72eb7b2e"]]);t["default"]=ve},4538:function(e,t,c){"use strict";c("1956")},"554e":function(e,t,c){"use strict";c("171f")},8474:function(e,t){e.exports="data:image/png;base64,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"},"8b9b":function(e,t,c){},"97fe":function(e,t,c){"use strict";c("b33b")},b33b:function(e,t,c){},c4c8:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"e",(function(){return l})),c.d(t,"d",(function(){return a})),c.d(t,"b",(function(){return r})),c.d(t,"c",(function(){return s}));var o=c("b775");const n=e=>Object(o["b"])("/goods","get",{id:e}),l=({id:e,limit:t=16})=>Object(o["b"])("/goods/relevant","get",{id:e,limit:t}),a=({id:e,limit:t=3,type:c=1})=>Object(o["b"])("/goods/hot","get",{id:e,limit:t,type:c}),r=e=>Object(o["b"])(`https://mock.boxuegu.com/mock/1175/goods/${e}/evaluate`,"get"),s=(e,t)=>Object(o["b"])(`https://mock.boxuegu.com/mock/1175/goods/${e}/evaluate/page`,"get",t)},e68d:function(e,t,c){"use strict";c("8b9b")},f6d1:function(e,t,c){"use strict";var o=c("7a23");const n={class:"goods-sku"},l=["onClick","src","title"],a=["onClick"];function r(e,t,c,r,s,d){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.goods.specs,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("dl",{key:e.id},[Object(o["createElementVNode"])("dt",null,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("dd",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.values,t=>(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:t.name},[t.picture?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:0,class:Object(o["normalizeClass"])({selected:t.selected,disabled:t.disabled}),onClick:c=>r.changeSku(e,t),src:t.picture,title:t.name},null,10,l)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:1,class:Object(o["normalizeClass"])({selected:t.selected,disabled:t.disabled}),onClick:c=>r.changeSku(e,t)},Object(o["toDisplayString"])(t.name),11,a))],64))),128))])]))),128))])}c("14d9"),c("13d5");function s(e){const t=[],c=2**e.length;for(let o=0;o<c;o+=1){const c=[];for(let t=0;t<e.length;t+=1)o&1<<t&&c.push(e[t]);t.push(c)}return t}const d="★",i=e=>{const t={};return e.forEach(e=>{if(e.inventory>0){const c=e.specs.map(e=>e.valueName),o=s(c);o.forEach(c=>{const o=c.join(d);t[o]?t[o].push(e.id):t[o]=[e.id]})}}),t},u=e=>{const t=[];return e.forEach(e=>{const c=e.values.find(e=>e.selected);t.push(c?c.name:void 0)}),t},b=(e,t)=>{e.forEach((c,o)=>{const n=u(e);c.values.forEach(e=>{if(e.selected)return;n[o]=e.name;const c=n.filter(e=>e).join(d);e.disabled=!t[c]})})},O=(e,t)=>{const c=e.skus.find(e=>e.id===t);e.specs.forEach((e,t)=>{const o=e.values.find(e=>e.name===c.specs[t].valueName);o.selected=!0})};var j={name:"GoodsSku",props:{goods:{type:Object,default:()=>({})},skuId:{type:String,default:""}},setup(e,{emit:t}){const c=i(e.goods.skus);e.skuId&&O(e.goods,e.skuId),b(e.goods.specs,c);const o=(o,n)=>{if(n.disabled)return;n.selected?n.selected=!1:(o.values.forEach(e=>{e.selected=!1}),n.selected=!0),b(e.goods.specs,c);const l=u(e.goods.specs).filter(e=>e);if(l.length===e.goods.specs.length){const o=c[l.join(d)],n=e.goods.skus.find(e=>e.id===o[0]);t("change",{skuId:n.id,price:n.price,oldPrice:n.oldPrice,inventory:n.inventory,specsText:n.specs.reduce((e,t)=>`${e} ${t.name}：${t.valueName}`,"").trim()})}else t("change",{})};return{changeSku:o}}},m=(c("e68d"),c("6b0d")),A=c.n(m);const k=A()(j,[["render",r],["__scopeId","data-v-0fe429cd"]]);t["a"]=k}}]);
//# sourceMappingURL=chunk-6d527c7b.0ab50293.js.map