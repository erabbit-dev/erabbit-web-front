(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3637e8fa"],{"15bc":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const l=e=>(Object(a["pushScopeId"])("data-v-2c45ae0c"),e=e(),Object(a["popScopeId"])(),e),o={class:"xtx-pay-checkout-page"},d={class:"container"},r={key:0,class:"wrapper"},n=l(()=>Object(a["createElementVNode"])("h3",{class:"box-title"},"收货地址",-1)),s={class:"box-body"},i=l(()=>Object(a["createElementVNode"])("h3",{class:"box-title"},"商品信息",-1)),b={class:"box-body"},j={class:"goods"},O=l(()=>Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("th",{width:"520"},"商品信息"),Object(a["createElementVNode"])("th",{width:"170"},"单价"),Object(a["createElementVNode"])("th",{width:"170"},"数量"),Object(a["createElementVNode"])("th",{width:"170"},"小计"),Object(a["createElementVNode"])("th",{width:"170"},"实付")])],-1)),u=["src"],m={class:"right"},p=Object(a["createStaticVNode"])('<h3 class="box-title" data-v-2c45ae0c>配送时间</h3><div class="box-body" data-v-2c45ae0c><a class="my-btn active" href="javascript:;" data-v-2c45ae0c>不限送货时间：周一至周日</a><a class="my-btn" href="javascript:;" data-v-2c45ae0c>工作日送货：周一至周五</a><a class="my-btn" href="javascript:;" data-v-2c45ae0c>双休日、假日送货：周六至周日</a></div><h3 class="box-title" data-v-2c45ae0c>支付方式</h3><div class="box-body" data-v-2c45ae0c><a class="my-btn active" href="javascript:;" data-v-2c45ae0c>在线支付</a><a class="my-btn" href="javascript:;" data-v-2c45ae0c>货到付款</a><span style="color:#999;" data-v-2c45ae0c>货到付款需付5元手续费</span></div><h3 class="box-title" data-v-2c45ae0c>金额明细</h3>',5),v={class:"box-body"},V={class:"total"},N=l(()=>Object(a["createElementVNode"])("dt",null,"商品件数：",-1)),f=l(()=>Object(a["createElementVNode"])("dt",null,"商品总价：",-1)),E=l(()=>Object(a["createElementVNode"])("dt",null,[Object(a["createTextVNode"])("运"),Object(a["createElementVNode"])("i"),Object(a["createTextVNode"])("费：")],-1)),h=l(()=>Object(a["createElementVNode"])("dt",null,"应付总额：",-1)),x={class:"price"},g={class:"submit"};function y(e,t,c,l,y,C){const k=Object(a["resolveComponent"])("XtxBreadItem"),D=Object(a["resolveComponent"])("XtxBread"),w=Object(a["resolveComponent"])("CheckoutAddress"),T=Object(a["resolveComponent"])("RouterLink"),S=Object(a["resolveComponent"])("XtxButton");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(D,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(k,{to:"/"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("首页")]),_:1}),Object(a["createVNode"])(k,{to:"/cart"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("购物车")]),_:1}),Object(a["createVNode"])(k,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("填写订单")]),_:1})]),_:1}),l.order?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[n,Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(w,{onChange:l.changeAddress,list:l.order.userAddresses},null,8,["onChange","list"])]),i,Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("table",j,[O,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(l.order.goods,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:e.skuId},[Object(a["createElementVNode"])("td",null,[Object(a["createVNode"])(T,{to:"/product/"+e.id,class:"info"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:e.picture,alt:""},null,8,u),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.name),1),Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.attrsText),1)])]),_:2},1032,["to"])]),Object(a["createElementVNode"])("td",null,"¥"+Object(a["toDisplayString"])(e.price),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(e.count),1),Object(a["createElementVNode"])("td",null,"¥"+Object(a["toDisplayString"])(e.totalPrice),1),Object(a["createElementVNode"])("td",null,"¥"+Object(a["toDisplayString"])(e.totalPayPrice),1)]))),128))])])]),p,Object(a["createElementVNode"])("div",v,[Object(a["createElementVNode"])("div",V,[Object(a["createElementVNode"])("dl",null,[N,Object(a["createElementVNode"])("dd",null,Object(a["toDisplayString"])(l.order.summary.goodsCount)+"件",1)]),Object(a["createElementVNode"])("dl",null,[f,Object(a["createElementVNode"])("dd",null,"¥"+Object(a["toDisplayString"])(l.order.summary.totalPrice),1)]),Object(a["createElementVNode"])("dl",null,[E,Object(a["createElementVNode"])("dd",null,"¥"+Object(a["toDisplayString"])(l.order.summary.postFee),1)]),Object(a["createElementVNode"])("dl",null,[h,Object(a["createElementVNode"])("dd",x,"¥"+Object(a["toDisplayString"])(l.order.summary.totalPayPrice),1)])])]),Object(a["createElementVNode"])("div",g,[Object(a["createVNode"])(S,{onClick:l.submitOrderFn,type:"primary"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("提交订单")]),_:1},8,["onClick"])])])):Object(a["createCommentVNode"])("",!0)])])}c("14d9");const C=e=>(Object(a["pushScopeId"])("data-v-4bd3a786"),e=e(),Object(a["popScopeId"])(),e),k={class:"checkout-address"},D={class:"text"},w={key:0,class:"none"},T={key:1},S=C(()=>Object(a["createElementVNode"])("span",null,[Object(a["createTextVNode"])("收"),Object(a["createElementVNode"])("i"),Object(a["createTextVNode"])("货"),Object(a["createElementVNode"])("i"),Object(a["createTextVNode"])("人：")],-1)),A=C(()=>Object(a["createElementVNode"])("span",null,"联系方式：",-1)),B=C(()=>Object(a["createElementVNode"])("span",null,"收货地址：",-1)),I={class:"action"},_=["onClick"],L=C(()=>Object(a["createElementVNode"])("span",null,[Object(a["createTextVNode"])("收"),Object(a["createElementVNode"])("i"),Object(a["createTextVNode"])("货"),Object(a["createElementVNode"])("i"),Object(a["createTextVNode"])("人：")],-1)),$=C(()=>Object(a["createElementVNode"])("span",null,"联系方式：",-1)),P=C(()=>Object(a["createElementVNode"])("span",null,"收货地址：",-1));function X(e,t,c,l,o,d){const r=Object(a["resolveComponent"])("XtxButton"),n=Object(a["resolveComponent"])("XtxDialog"),s=Object(a["resolveComponent"])("AddressEdit");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",k,[Object(a["createElementVNode"])("div",D,[l.showAddress?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",w,"您需要先添加收货地址才可提交订单。")),l.showAddress?(Object(a["openBlock"])(),Object(a["createElementBlock"])("ul",T,[Object(a["createElementVNode"])("li",null,[S,Object(a["createTextVNode"])(Object(a["toDisplayString"])(l.showAddress.receiver),1)]),Object(a["createElementVNode"])("li",null,[A,Object(a["createTextVNode"])(Object(a["toDisplayString"])(l.showAddress.contact.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2")),1)]),Object(a["createElementVNode"])("li",null,[B,Object(a["createTextVNode"])(Object(a["toDisplayString"])(l.showAddress.fullLocation.replace(/ /g,""))+Object(a["toDisplayString"])(l.showAddress.address),1)])])):Object(a["createCommentVNode"])("",!0),l.showAddress?(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",{key:2,onClick:t[0]||(t[0]=e=>l.openAddressEdit(l.showAddress)),href:"javascript:;"},"修改地址")):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",I,[Object(a["createVNode"])(r,{onClick:t[1]||(t[1]=e=>l.openDialog()),class:"btn"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("切换地址")]),_:1}),Object(a["createVNode"])(r,{onClick:t[2]||(t[2]=e=>l.openAddressEdit({})),class:"btn"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("添加地址")]),_:1})])]),Object(a["createVNode"])(n,{title:"切换收货地址",visible:l.visibleDialog,"onUpdate:visible":t[4]||(t[4]=e=>l.visibleDialog=e)},{footer:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{onClick:t[3]||(t[3]=e=>l.visibleDialog=!1),type:"gray",style:{"margin-right":"20px"}},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("取消")]),_:1}),Object(a["createVNode"])(r,{onClick:l.confirmAddressFn,type:"primary"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("确认")]),_:1},8,["onClick"])]),default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.list,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{onClick:t=>l.selectedAddress=e,class:Object(a["normalizeClass"])([{active:l.selectedAddress&&l.selectedAddress.id===e.id},"text item"]),key:e.id},[Object(a["createElementVNode"])("ul",null,[Object(a["createElementVNode"])("li",null,[L,Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.receiver),1)]),Object(a["createElementVNode"])("li",null,[$,Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.contact.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2")),1)]),Object(a["createElementVNode"])("li",null,[P,Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.fullLocation.replace(/ /g,"")+e.address),1)])])],10,_))),128))]),_:1},8,["visible"]),Object(a["createVNode"])(s,{onOnSuccess:l.successHandler,ref:"addressEditCom"},null,8,["onOnSuccess"])],64)}c("3c65");const F=e=>(Object(a["pushScopeId"])("data-v-0b9d5efe"),e=e(),Object(a["popScopeId"])(),e),U={class:"address-edit"},M={class:"xtx-form"},J={class:"xtx-form-item"},q=F(()=>Object(a["createElementVNode"])("div",{class:"label"},"收货人：",-1)),z={class:"field"},R={class:"xtx-form-item"},H=F(()=>Object(a["createElementVNode"])("div",{class:"label"},"手机号：",-1)),G={class:"field"},K={class:"xtx-form-item"},Q=F(()=>Object(a["createElementVNode"])("div",{class:"label"},"地区：",-1)),W={class:"field"},Y={class:"xtx-form-item"},Z=F(()=>Object(a["createElementVNode"])("div",{class:"label"},"详细地址：",-1)),ee={class:"field"},te={class:"xtx-form-item"},ce=F(()=>Object(a["createElementVNode"])("div",{class:"label"},"邮政编码：",-1)),ae={class:"field"},le={class:"xtx-form-item"},oe=F(()=>Object(a["createElementVNode"])("div",{class:"label"},"地址标签：",-1)),de={class:"field"};function re(e,t,c,l,o,d){const r=Object(a["resolveComponent"])("XtxCity"),n=Object(a["resolveComponent"])("XtxButton"),s=Object(a["resolveComponent"])("XtxDialog");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{title:(l.formData.id?"修改":"添加")+"收货地址",visible:l.visibleDialog,"onUpdate:visible":t[7]||(t[7]=e=>l.visibleDialog=e)},{footer:Object(a["withCtx"])(()=>[Object(a["createVNode"])(n,{onClick:t[5]||(t[5]=e=>l.visibleDialog=!1),type:"gray",style:{"margin-right":"20px"}},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("取消")]),_:1}),Object(a["createVNode"])(n,{onClick:t[6]||(t[6]=e=>l.submit()),type:"primary"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("确认")]),_:1})]),default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",U,[Object(a["createElementVNode"])("div",M,[Object(a["createElementVNode"])("div",J,[q,Object(a["createElementVNode"])("div",z,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.formData.receiver=e),class:"input",placeholder:"请输入收货人"},null,512),[[a["vModelText"],l.formData.receiver]])])]),Object(a["createElementVNode"])("div",R,[H,Object(a["createElementVNode"])("div",G,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.formData.contact=e),class:"input",placeholder:"请输入手机号"},null,512),[[a["vModelText"],l.formData.contact]])])]),Object(a["createElementVNode"])("div",K,[Q,Object(a["createElementVNode"])("div",W,[Object(a["createVNode"])(r,{fullLocation:l.formData.fullLocation,onChange:l.changeCity,placeholder:"请选择所在地区"},null,8,["fullLocation","onChange"])])]),Object(a["createElementVNode"])("div",Y,[Z,Object(a["createElementVNode"])("div",ee,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.formData.address=e),class:"input",placeholder:"请输入详细地址"},null,512),[[a["vModelText"],l.formData.address]])])]),Object(a["createElementVNode"])("div",te,[ce,Object(a["createElementVNode"])("div",ae,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.formData.postalCode=e),class:"input",placeholder:"请输入邮政编码"},null,512),[[a["vModelText"],l.formData.postalCode]])])]),Object(a["createElementVNode"])("div",le,[oe,Object(a["createElementVNode"])("div",de,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>l.formData.addressTags=e),class:"input",placeholder:"请输入地址标签，逗号分隔"},null,512),[[a["vModelText"],l.formData.addressTags]])])])])])]),_:1},8,["title","visible"])}var ne=c("f8b7"),se=c("2f59"),ie={name:"AddressEdit",setup(e,{emit:t}){const c=Object(a["ref"])(!1),l=e=>{if(c.value=!0,e.id)for(const t in e)o[t]=e[t];else for(const t in o)o[t]="isDefault"===t?1:null},o=Object(a["reactive"])({receiver:null,contact:null,provinceCode:null,cityCode:null,countyCode:null,address:null,postalCode:null,addressTags:null,isDefault:1,fullLocation:null}),d=e=>{o.provinceCode=e.provinceCode,o.cityCode=e.cityCode,o.countyCode=e.countyCode,o.fullLocation=e.fullLocation},r=()=>o.receiver?o.receiver.length>20?Object(se["a"])({text:"收货人20个字符内"}):o.contact?/^1[3-9]\d{9}$/.test(o.contact)?o.fullLocation?o.address?o.address.length>50?Object(se["a"])({text:"详细地址50个字符内"}):o.postalCode&&!/^\d{6}$/.test(o.postalCode)?Object(se["a"])({text:"邮政编码格式不对"}):o.addressTags&&o.addressTags.length>20?Object(se["a"])({text:"地址标签20个字符内"}):void(o.id?Object(ne["f"])(o).then(e=>{Object(se["a"])({type:"success",text:"修改收货地址成功"}),c.value=!1,t("on-success",o)}):Object(ne["a"])(o).then(e=>{o.id=e.result.id,Object(se["a"])({type:"success",text:"添加收货地址成功"}),c.value=!1,t("on-success",o)})):Object(se["a"])({text:"请输入详细地址"}):Object(se["a"])({text:"请选择收货地区"}):Object(se["a"])({text:"手机号格式不对"}):Object(se["a"])({text:"请输入手机号"}):Object(se["a"])({text:"请输入收货人"});return{visibleDialog:c,open:l,formData:o,changeCity:d,submit:r}}},be=(c("b309"),c("6b0d")),je=c.n(be);const Oe=je()(ie,[["render",re],["__scopeId","data-v-0b9d5efe"]]);var ue=Oe,me={name:"CheckoutAddress",components:{AddressEdit:ue},props:{list:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const c=Object(a["ref"])(null),l=e.list.find(e=>0===e.isDefault);l?c.value=l:e.list.length&&(c.value=e.list[0]),t("change",c.value&&c.value.id);const o=Object(a["ref"])(!1),d=Object(a["ref"])(null),r=()=>{var e;c.value=d.value,t("change",null===(e=d.value)||void 0===e?void 0:e.id),o.value=!1},n=()=>{d.value=null,o.value=!0},s=Object(a["ref"])(null),i=e=>{s.value.open(e)},b=t=>{const c=e.list.find(e=>e.id===t.id);if(c)for(const e in c)c[e]=t[e];else{const c=JSON.stringify(t);e.list.unshift(JSON.parse(c))}};return{showAddress:c,visibleDialog:o,selectedAddress:d,confirmAddressFn:r,openDialog:n,openAddressEdit:i,addressEditCom:s,successHandler:b}}};c("827c");const pe=je()(me,[["render",X],["__scopeId","data-v-4bd3a786"]]);var ve=pe,Ve=c("6605"),Ne=c("5502"),fe={name:"XtxPayCheckoutPage",components:{CheckoutAddress:ve},setup(){const e=Object(a["ref"])(null),t=Object(Ve["c"])(),c=Object(Ne["b"])();t.query.orderId?Object(ne["j"])(t.query.orderId).then(t=>{e.value=t.result,o.goods=t.result.goods.map(({skuId:e,count:t})=>({skuId:e,count:t}))}):Object(ne["d"])().then(t=>{e.value=t.result,o.goods=t.result.goods.map(({skuId:e,count:t})=>({skuId:e,count:t}))});const l=e=>{o.addressId=e},o=Object(a["reactive"])({deliveryTimeType:1,payType:1,payChannel:1,buyerMessage:"",goods:[],addressId:null}),d=Object(Ve["d"])(),r=()=>{if(!o.addressId)return Object(se["a"])({text:"亲，请选择收货地址"});Object(ne["k"])(o).then(e=>{c.dispatch("cart/findCart"),Object(se["a"])({type:"success",text:"提交订单成功"}),d.push("/member/pay?orderId="+e.result.id)})};return{order:e,changeAddress:l,reqParams:o,submitOrderFn:r}}};c("18e5");const Ee=je()(fe,[["render",y],["__scopeId","data-v-2c45ae0c"]]);t["default"]=Ee},"18e5":function(e,t,c){"use strict";c("e7cc")},"6aea":function(e,t,c){},"827c":function(e,t,c){"use strict";c("6aea")},ab5d:function(e,t,c){},b309:function(e,t,c){"use strict";c("ab5d")},e7cc:function(e,t,c){},f8b7:function(e,t,c){"use strict";c.d(t,"d",(function(){return l})),c.d(t,"j",(function(){return o})),c.d(t,"a",(function(){return d})),c.d(t,"f",(function(){return r})),c.d(t,"k",(function(){return n})),c.d(t,"g",(function(){return s})),c.d(t,"h",(function(){return i})),c.d(t,"b",(function(){return b})),c.d(t,"e",(function(){return j})),c.d(t,"c",(function(){return O})),c.d(t,"i",(function(){return u}));var a=c("b775");const l=()=>Object(a["b"])("/member/order/pre","get"),o=e=>Object(a["b"])("/member/order/repurchase/"+e,"get"),d=e=>Object(a["b"])("/member/address","post",e),r=e=>Object(a["b"])("/member/address/"+e.id,"put",e),n=e=>Object(a["b"])("/member/order","post",e),s=e=>Object(a["b"])("/member/order/"+e,"get"),i=({page:e=1,pageSize:t=10,orderState:c=0})=>Object(a["b"])("/member/order","get",{page:e,pageSize:t,orderState:c}),b=({orderId:e,cancelReason:t})=>Object(a["b"])(`/member/order/${e}/cancel`,"put",{cancelReason:t}),j=e=>Object(a["b"])("/member/order","delete",{ids:[e]}),O=e=>Object(a["b"])(`/member/order/${e}/receipt`,"put"),u=e=>Object(a["b"])(`/member/order/${e}/logistics`,"get")}}]);
//# sourceMappingURL=chunk-3637e8fa.4813f31b.js.map