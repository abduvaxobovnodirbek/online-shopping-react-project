(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){},29:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(20),r=a.n(i),o=a(7),s=a(3),l=a(23),u=a(4),b=(a(45),a(26),function(e){return e.children}),d=a(14),j=a(15),h=a(17),m=a(16),p=a(0),O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(p.jsx)("nav",{className:"p-2 text-light",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"myNav",children:[Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)(s.b,{to:"/",style:{color:"white",textDecoration:"none"},children:Object(p.jsx)("i",{className:"fab fa-ups"})}),Object(p.jsx)("div",{className:"products",children:Object(p.jsx)(s.b,{to:"/",style:{color:"white",textDecoration:"none"},children:Object(p.jsx)("span",{children:"Products"})})})]}),Object(p.jsx)(s.b,{to:"/cart",className:"bg-outline border text-light",style:{textDecoration:"none"},children:Object(p.jsxs)("button",{className:"btn  m-0 text-light",children:[" ",Object(p.jsx)("i",{className:"fas fa-cart-plus"})," My-Cart"]})})]})})})}}]),a}(c.Component),x=a(10);a(49),a(29),a(50);var f=function(){var e=Object(c.useState)(!0),t=Object(x.a)(e,2),a=t[0],n=t[1];return Object(p.jsx)(s.b,{to:"/",children:Object(p.jsx)("div",{className:"wrapper wrap-me",style:{display:a?"block":"none"},onClick:function(){return n(!1)},children:Object(p.jsx)("div",{className:"content-box",style:{display:a?"block":"none"},children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{style:{fontWeight:"bold"},children:"Success!!!"}),Object(p.jsx)("h4",{children:"Item Added to Cart"}),Object(p.jsx)(s.b,{to:"/cart",children:Object(p.jsx)("button",{className:"btn btn-outline-warning",onClick:function(){return n(!1)},children:"Go to Cart"})})]})})})})};function g(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),a=t[0],i=t[1],r=Object(o.c)((function(e){return e.myAllProducts.products})).map((function(e){var t=e.img,a=e.id,c=e.price,r=e.title,o=e.inCart;return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsxs)("div",{className:"content thisContent",children:[Object(p.jsx)(s.b,{to:"/product/".concat(a),className:"Link",children:Object(p.jsx)("img",{src:t,alt:"productImage"})}),Object(p.jsx)(s.b,{to:"/",children:Object(p.jsx)("button",{disabled:!!o,onClick:function(){return e.inCart=!0,i(!0)},className:"myBtn btn btn-small bg-primary text-light",children:o?Object(p.jsx)("span",{children:"In Cart"}):Object(p.jsx)("i",{className:"fas fa-cart-plus"})})}),Object(p.jsx)("div",{className:"titleInfo bg-dark p-2 text-light",children:Object(p.jsxs)("span",{className:"d-block",children:[r," $",c]})})]})},a)})),l=null;return a&&(l=Object(p.jsx)(f,{})),Object(p.jsxs)("div",{style:{position:"relative",top:"40px"},className:"container myProduct",children:[r,l]})}function y(e){var t=e.name,a=e.title;return Object(p.jsxs)("div",{className:"container text-center Title p-3",children:[Object(p.jsx)("span",{children:t}),Object(p.jsx)("span",{children:a})]})}var v="SET_PRODUCTS",N="SELECTED_PRODUCT",C=function(e){return{type:v,payLoad:e}},k=[{id:1,title:"Google Pixel - Black",img:"img/product-1.png",price:10,company:"GOOGLE",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:1,total:0},{id:2,title:"Samsung S7",img:"img/product-2.png",price:16,company:"SAMSUNG",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:1,total:0},{id:3,title:"HTC 10 - Black",img:"img/product-3.png",price:8,company:"htc",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:1,total:0},{id:4,title:"HTC 10 - White",img:"img/product-4.png",price:18,company:"htc",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:1,total:0},{id:5,title:"HTC Desire 626s",img:"img/product-5.png",price:24,company:"htc",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:1,total:0},{id:6,title:"Vintage Iphone",img:"img/product-6.png",price:17,company:"apple",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:1,total:0},{id:7,title:"Iphone 7",img:"img/product-7.png",price:30,company:"apple",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:1,total:0},{id:8,title:"Smashed Iphone",img:"img/product-8.png",price:2,company:"apple",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:1,total:0},{id:9,title:"Google Pixel - Black",img:"img/product-1.png",price:10,company:"GOOGLE",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:1,total:0}];function w(){return Object(o.b)()(C(k)),Object(p.jsxs)("div",{style:{position:"relative",top:"80px"},children:[Object(p.jsx)(y,{name:"our",title:"products"}),Object(p.jsx)(g,{})]})}var T=a(22),S=a.n(T);a(69),a(70);function I(){return Object(p.jsx)("div",{className:"loader",children:"Loading..."})}a(71);function D(){return Object(p.jsx)("div",{className:"Loader"})}function E(e){var t=e.show,a=Object(c.useState)([]),n=Object(x.a)(a,2),i=n[0],r=n[1],l=Object(u.f)(),b=Object(o.c)((function(e){return e.myAllProducts.products})),d=Object(o.b)();Object(c.useEffect)((function(){S.a.get("https://online-shopping-8d633-default-rtdb.firebaseio.com/".concat(l.details,".json")).then((function(e){r([e.data]),d(C(k))})).catch((function(e){return console.log("something went wrong",e)}))}),[l.details]);var j=i.map((function(e){return e.img}));return Object(p.jsx)("div",{className:"wrapper",style:{display:t?"block":"none"},children:Object(p.jsx)("div",{className:"content-box",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{style:{fontWeight:"bold"},children:"Item Added to Cart"}),Object(p.jsx)("h4",{children:b.map((function(e){return e}))[l.details-1].title}),0===Object.keys(i).length?Object(p.jsx)(D,{}):Object(p.jsx)("img",{className:"imgg",src:j,alt:"myImage"}),Object(p.jsxs)("span",{children:["Price:$",b.map((function(e){return e}))[l.details-1].price]}),Object(p.jsx)(s.b,{to:"/",children:Object(p.jsx)("button",{className:"btn btn-outline-primary",children:"Continue Shopping"})}),Object(p.jsx)(s.b,{to:"/cart",children:Object(p.jsx)("button",{className:"btn btn-outline-warning",children:"Go to Cart"})})]})})})}a(72);function L(e){var t=Object(c.useState)(!0),a=Object(x.a)(t,2),n=a[0],i=a[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(E,{show:n,productId:e.productId.details}),Object(p.jsx)("div",{className:"darkmode",style:{display:n?"block":"none"},onClick:function(){i(!1)}})]})}function P(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),a=(t[0],t[1]),n=Object(c.useState)(!1),i=Object(x.a)(n,2),r=i[0],l=i[1],b=Object(c.useState)([]),d=Object(x.a)(b,2),j=d[0],h=d[1],m=Object(o.c)((function(e){return e.myAllProducts.products})),O=Object(u.f)(),f=m.map((function(e){return e.inCart})),g=j.map((function(e){var t,c=e.price,n=e.title,i=e.id,o=e.company,u=e.info,b=e.img,d=null;return r?(t=Object(p.jsx)(E,{}),d=Object(p.jsx)(L,{productId:O.details})):(t=null,d=null),Object(p.jsxs)("div",{className:"wrapper",children:[t,d,Object(p.jsxs)("div",{className:"details container",children:[Object(p.jsx)("img",{src:b,alt:"productImage",className:"detailImg img-fluid myImages"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"bg-dark text-light p-2",children:n}),Object(p.jsxs)("span",{children:["Made by: ",o]}),Object(p.jsxs)("h3",{style:{fontWeight:"bold"},children:["Price: ",Object(p.jsxs)("span",{className:"sp px-2",children:["$",c]})]}),Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Some Info About Product:"}),Object(p.jsx)("p",{style:{fontWeight:"400"},children:u}),Object(p.jsx)(s.b,{to:"/",children:Object(p.jsx)("button",{className:"btn btn-outline-primary",children:"Back To Product"})}),Object(p.jsx)("button",{disabled:!!f[O.details-1],onClick:function(){return m.map((function(e){return e}))[O.details-1].inCart=!0,a(!0),l(!0)},className:"btn btn-outline-warning",children:f[O.details-1]?"inCart":"add to cart"})]})]})]},i)}));return Object(c.useEffect)((function(){S.a.get("https://online-shopping-8d633-default-rtdb.firebaseio.com/".concat(O.details,".json")).then((function(e){h([e.data])})).catch((function(e){return console.log("something went wrong",e)}))}),[O.details]),Object(p.jsx)("div",{style:{position:"relative",top:"100px"},children:0===j.length?Object(p.jsx)(I,{}):g})}a(73);function W(){var e=Object(o.c)((function(e){return e.myAllProducts.products})),t=e.map((function(e){var t=null;return e.inCart&&(t=Object(p.jsxs)("div",{className:"eachCart",children:[Object(p.jsx)("span",{children:e.title}),Object(p.jsxs)("span",{children:["$",e.price*e.count]}),Object(p.jsxs)("div",{className:"quantity",children:[Object(p.jsx)(s.b,{to:"/cart",children:Object(p.jsx)("button",{onClick:function(){if(e.count<=1)return e.count;e.count-=1},children:"-"})}),Object(p.jsx)("button",{children:e.count}),Object(p.jsx)(s.b,{to:"/cart",children:Object(p.jsx)("button",{onClick:function(){e.count+=1},children:"+"})})]}),Object(p.jsx)("div",{children:Object(p.jsx)(s.b,{to:"/cart",children:Object(p.jsx)("i",{onClick:function(){e.inCart=!1},class:"fas fa-trash-alt text-danger"})})}),Object(p.jsxs)("span",{children:["Item Total:$",e.price*e.count]})]})),Object(p.jsx)("div",{style:{position:"relative",top:"100px"},children:t},e.id)})),a=e.filter((function(e){return e.inCart})).map((function(e){return e.price*e.count})).reduce((function(e,t){return e+t}),0);return Object(p.jsxs)("div",{className:"All",children:[Object(p.jsx)("h2",{className:"text-center",style:{position:"relative",top:"100px",fontWeight:"bold",display:e.find((function(e){return e.inCart}))?"block":"none"},children:"Your Cart"}),Object(p.jsx)("h2",{style:{position:"relative",top:"100px",fontWeight:"bold",display:e.find((function(e){return e.inCart}))?"none":"block"},className:"text-center",children:"Your Cart is Currently Empty"}),Object(p.jsxs)("div",{className:"showCase container",style:{fontWeight:"bold",display:e.find((function(e){return e.inCart}))?"flex":"none"},children:[Object(p.jsx)("span",{children:"NAME OF PRODUCT"}),Object(p.jsx)("span",{children:"PRICE"}),Object(p.jsx)("span",{children:"QUANTITY"}),Object(p.jsx)("span",{children:"REMOVE"}),Object(p.jsx)("span",{children:"TOTAL"})]}),Object(p.jsxs)("div",{className:"cart container text-center",children:[Object(p.jsx)("div",{className:"thiscart",children:t}),Object(p.jsxs)("div",{style:{fontWeight:"bold",display:e.find((function(e){return e.inCart}))?"block":"none",position:"relative",top:"110px"},className:"container total",children:[Object(p.jsx)(s.b,{to:"/cart",children:Object(p.jsx)("button",{onClick:function(){return e.map((function(e){return e.inCart=!1}))},className:"btn btn-outline-danger ",children:"Clear Cart"})}),Object(p.jsx)(s.b,{to:"/form",children:Object(p.jsx)("button",{className:"btn btn-outline-primary ",children:"Purchase Items"})}),Object(p.jsxs)("span",{children:["Subtitle: $",a]}),Object(p.jsxs)("span",{children:["Tax: $",a/10]}),Object(p.jsxs)("span",{children:["Total: $",a+a/10]})]})]})]})}var B=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{style:{position:"relative",top:"100px"},children:Object(p.jsx)("h2",{children:"404 Page Not Found"})})}}]),a}(c.Component),A=a(12),U=a(19),V=(a(74),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={name:"",email:"",gender:"",payment:"",cardNumber:"",cardCvc:""},e.handleWrite=function(t){var a=t.target,c=a.name,n=a.value;a.checked;t.type,e.setState(Object(U.a)({},c,n))},e.handleSubmit=function(t){t.preventDefault(),e.setState(Object(A.a)({},e.state)),console.log(e.state)},e.handleDisabled=function(){return Object.keys(e.state).map((function(t){return""!==e.state[t]&&""!==e.state[t].trim("")})).every((function(e){return!0===e}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return console.log(!1),Object(p.jsx)("div",{className:"wrapr container",children:Object(p.jsx)("div",{className:"container1",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h4",{children:"Account"}),Object(p.jsxs)("div",{className:"input-group input-group-icon",children:[Object(p.jsx)("input",{type:"text",name:"name",placeholder:"Full Name",value:this.state.name,onChange:this.handleWrite}),Object(p.jsx)("div",{className:"input-icon",children:Object(p.jsx)("i",{className:"fa fa-user"})})]}),Object(p.jsxs)("div",{className:"input-group input-group-icon",children:[Object(p.jsx)("input",{type:"email",name:"email",value:this.state.email,placeholder:"Email Adress",onChange:this.handleWrite}),Object(p.jsx)("div",{className:"input-icon",children:Object(p.jsx)("i",{className:"fa fa-envelope"})})]})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-half",children:[Object(p.jsx)("h4",{children:"Gender"}),Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("input",{id:"gender-male",type:"radio",name:"gender",onChange:this.handleWrite,value:"male"}),Object(p.jsx)("label",{for:"gender-male",children:"Male"}),Object(p.jsx)("input",{id:"gender-female",onChange:this.handleWrite,type:"radio",name:"gender",value:"female"}),Object(p.jsx)("label",{for:"gender-female",children:"Female"})]})]})}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h4",{children:"Payment Details"}),Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("input",{id:"payment-method-card",onChange:this.handleWrite,type:"radio",name:"payment",value:"card"}),Object(p.jsx)("label",{for:"payment-method-card",children:Object(p.jsxs)("span",{children:[Object(p.jsx)("i",{className:"fa fa-cc-visa"}),"Credit Card"]})}),Object(p.jsx)("input",{id:"payment-method-paypal",onChange:this.handleWrite,type:"radio",name:"payment",value:"paypal"}),Object(p.jsxs)("label",{for:"payment-method-paypal",children:[" ",Object(p.jsxs)("span",{children:[Object(p.jsx)("i",{className:"fa fa-cc-paypal"}),"Paypal"]})]})]}),Object(p.jsxs)("div",{className:"input-group input-group-icon",children:[Object(p.jsx)("input",{type:"number",name:"cardNumber",onChange:this.handleWrite,placeholder:"Card Number"}),Object(p.jsx)("div",{className:"input-icon",children:Object(p.jsx)("i",{className:"fa fa-credit-card"})})]}),Object(p.jsx)("div",{className:"col-half",children:Object(p.jsxs)("div",{className:"input-group input-group-icon",children:[Object(p.jsx)("input",{type:"number",name:"cardCvc",onChange:this.handleWrite,placeholder:"Card CVC"}),Object(p.jsx)("div",{className:"input-icon",children:Object(p.jsx)("i",{className:"fa fa-user"})})]})}),Object(p.jsx)("div",{className:"col-half",children:Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsxs)("select",{children:[Object(p.jsx)("option",{children:"01 Jan"}),Object(p.jsx)("option",{children:"02 Jan"})]}),Object(p.jsxs)("select",{children:[Object(p.jsx)("option",{children:"2015"}),Object(p.jsx)("option",{children:"2016"})]})]})})]}),Object(p.jsx)("button",{onClick:function(){alert("".concat(e.state.name," you have successfully purchased our product, soon we will contact you via ").concat(e.state.email))},disabled:!this.handleDisabled(),className:"btn myBB",children:Object(p.jsx)(s.b,{to:"/",className:"my-link",children:"Submit"})})]})})})}}]),a}(c.Component));function _(){return Object(p.jsxs)(b,{children:[Object(p.jsx)(O,{}),Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/",exact:!0,component:w}),Object(p.jsx)(u.a,{path:"/product/:details",exact:!0,component:P}),Object(p.jsx)(u.a,{path:"/cart",exact:!0,component:W}),Object(p.jsx)(u.a,{path:"/form",exact:!0,component:V}),Object(p.jsx)(u.a,{component:B})]})]})}var H={products:[]},Y=Object(l.a)({myAllProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payLoad;switch(a){case v:return Object(A.a)(Object(A.a)({},e),{},{products:c});default:return e}},selectedItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{show:!1},t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payLoad;switch(a){case N:return Object(A.a)(Object(A.a)({},e),{},{show:c});default:return e}}}),q=Object(l.b)(Y,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(p.jsx)(o.a,{store:q,children:Object(p.jsx)(s.a,{children:Object(p.jsx)(_,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.5eaa79bd.chunk.js.map