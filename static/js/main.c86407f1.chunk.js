(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),s=n(2),c=n(4),r=n(7),l=n(8),u=n(10),m=n(9),o=n(1),h=n.n(o),b=(n(15),n(5)),j=(n(16),n(0)),p=function(e){var t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,s=e.animationDuration,c=e.infinite,r=e.nav,l=Object(o.useState)(0),u=Object(b.a)(l,2),m=u[0],h=u[1],p=Object(o.useState)(0),g=Object(b.a)(p,2),d=g[0],_=g[1],O=function(e){for(var t=[],n=0;n<e;n+=1)t.push(n);return t}(Math.ceil(t.length/a)),f=O[O.length-1],v=i*t.length-a*i,x={width:a*i},N={transform:"translateX(".concat(m,"px)"),transition:"transform ".concat(s/1e3,"s ease")},C={width:i};return Object(j.jsxs)("div",{className:"Carousel",style:x,children:[Object(j.jsx)("ul",{className:"Carousel__list",style:N,children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:e,alt:"carousel_image",className:"Carousel__image",style:C})},e)}))}),r&&Object(j.jsx)("nav",{className:"carousel__nav",children:O.map((function(e){return Object(j.jsx)("button",{type:"button",className:"nav-button ".concat(e===d?"active":""),"aria-label":"Go to slide ".concat(e),onClick:function(){return h((t=e)===f?-v:-n*i*t),void _(t);var t}},e)}))}),Object(j.jsxs)("div",{className:"carousel__button-wrapper",children:[Object(j.jsx)("button",{"data-cy":"prev",type:"button",className:"arrow-button",onClick:function(){if(0!==m){if(m+n*i>0)return h(0),void _(0);_((function(e){return e-1})),h((function(e){return e+n*i}))}else c&&(h(-v),_(f))},disabled:0===m&&!c,children:"\u25c0"}),Object(j.jsx)("button",{"data-cy":"next",type:"button",className:"arrow-button",onClick:function(){if(m!==-v){if(m-n*i<-v)return h(-v),void _(f);_((function(e){return e+1})),h((function(e){return e-n*i}))}else c&&(h(0),_(0))},disabled:m===-v&&!c,children:"\u25b6"})]})]})},g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.handleInputChange=function(t){var n=t.target,a=n.value,i=n.name,r=n.checked;e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(s.a)({},i,"infinite"===i?r:+a))}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.itemWidth,a=e.frameSize,i=e.step,s=e.animationDuration,c=e.infinite;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{"data-cy":"title",className:"title",children:"Carousel with ".concat(t.length," images")}),Object(j.jsxs)("div",{className:"settings",children:[Object(j.jsx)("h2",{className:"setting__title",children:"Settings"}),Object(j.jsxs)("div",{className:"settings__wrapper",children:[Object(j.jsx)("label",{htmlFor:"itemWidth",className:"settings__label",children:"Item width:"}),Object(j.jsx)("input",{type:"number",className:"settings__input",name:"itemWidth",step:10,value:n,min:10,onChange:this.handleInputChange})]}),Object(j.jsxs)("div",{className:"settings__wrapper",children:[Object(j.jsx)("label",{htmlFor:"frameSize",className:"settings__label",children:"Frame size:"}),Object(j.jsx)("input",{type:"number",className:"settings__input",name:"frameSize",value:a,min:1,onChange:this.handleInputChange})]}),Object(j.jsxs)("div",{className:"settings__wrapper",children:[Object(j.jsx)("label",{htmlFor:"step",className:"settings__label",children:"Step:"}),Object(j.jsx)("input",{type:"number",className:"settings__input",name:"step",value:i,min:1,onChange:this.handleInputChange})]}),Object(j.jsxs)("div",{className:"settings__wrapper",children:[Object(j.jsx)("label",{htmlFor:"animationDuration",className:"settings__label",children:"Animation duration:"}),Object(j.jsx)("input",{type:"number",className:"settings__input",name:"animationDuration",value:s,min:10,step:0,onChange:this.handleInputChange})]}),Object(j.jsxs)("div",{className:"settings__wrapper",children:[Object(j.jsx)("label",{htmlFor:"animationDuration",className:"settings__label",children:"Infinite:"}),Object(j.jsx)("input",{type:"checkbox",className:"settings__input",name:"infinite",checked:c,onChange:this.handleInputChange})]})]}),Object(j.jsx)(p,{images:t,step:i,frameSize:a,itemWidth:n,animationDuration:s,infinite:c,nav:a===i})]})}}]),n}(h.a.Component),d=g;i.a.render(Object(j.jsx)(d,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c86407f1.chunk.js.map