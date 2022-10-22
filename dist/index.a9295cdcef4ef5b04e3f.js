(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap);"]),a.push([n.id,':root {\n  --dark-gray: hsl(0, 0%, 63%);\n  --black: hsl(0, 0%, 0%);\n  --white: hsl(0, 0%, 100%);\n  --very-dark-gray: hsl(0, 0%, 27%);\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.container {\n  font-family: "Roboto Slab", serif;\n  height: 100vh;\n  font-size: 12px;\n  width: 100vw;\n}\n.brand-title {\n  font-size: 2rem;\n  font-weight: 500;\n  color: var(--white);\n}\n.desktop-menu {\n  position: absolute;\n  display: flex;\n  top: 10px;\n  left: 50px;\n  align-items: center;\n  gap: 50px;\n  width: 50%;\n}\n.desktop-menu ul {\n  color: var(--white);\n  display: flex;\n  gap: 25px;\n\n  list-style-type: none;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.desktop-menu ul li {\n  position: relative;\n}\n.desktop-menu ul li::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  bottom: -3px;\n  left: 0;\n  transform: scaleX(0);\n  transition: transform 0.5s ease;\n  transform-origin: center left;\n  height: 0.3px;\n  border: 1px solid var(--white);\n  background-color: var(--white);\n}\n.desktop-menu ul li:hover::after {\n  transform: scaleX(1);\n  transform-origin: left center;\n}\n\n.section-1 {\n  display: flex;\n  width: 100%;\n  height: 65vh;\n}\n.section-1 img {\n  width: 60%;\n}\n.section-1-main {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 15px;\n  width: 40%;\n  padding: 0px 50px;\n}\n.section-1-main p {\n  width: 100%;\n  font-size: 0.8rem;\n  line-height: 1.3rem;\n  color: var(--dark-gray);\n}\n\n.section-1-main h1 {\n  font-size: 2rem;\n  transition: transform 0.5s ease;\n  transform: translateY(10%);\n}\n.section-1-main h1.slide {\n  transform: translateY(0);\n}\n.section-1-main .btn-shop {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 50px;\n}\n.section-1-main .btn-shop h5 {\n  letter-spacing: 0.8rem;\n  text-transform: uppercase;\n  font-size: 0.7rem;\n}\n.section-1-main .btn-shop img {\n  width: 10%;\n}\n\n.slider-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-collapse: collapse;\n}\n.slider-btn {\n  display: inline;\n  background-color: var(--black);\n  padding: 20px 25px;\n  float: left;\n  border: none;\n  cursor: pointer;\n}\n.slider-btn:hover {\n  background-color: var(--very-dark-gray);\n}\n.section-2 {\n  display: flex;\n  height: 35vh;\n  width: 100%;\n}\n\n.section-2 img {\n  width: 30%;\n  object-fit: cover;\n}\n.section-2-main {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n  padding: 30px;\n  width: 40%;\n}\n.section-2-main h1 {\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  letter-spacing: 0.5rem;\n}\n.section-2-main p {\n  font-size: 0.7rem;\n  line-height: 1.2rem;\n  color: var(--dark-gray);\n}\n.hamburger {\n  position: fixed;\n  opacity: 0;\n  z-index: 3;\n  top: 20px;\n  left: 10px;\n  width: 40px;\n  height: 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.hamburger-top,\n.hamburger-middle,\n.hamburger-bottom {\n  content: "";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 30px;\n  right: -5px;\n  border: 1px solid var(--white);\n  background-color: var(--white);\n  transition: all 0.5s ease;\n}\n.hamburger-middle {\n  transform: translateY(7px);\n}\n.hamburger-bottom {\n  transform: translateY(14px);\n}\n\n.open .hamburger-top {\n  background-color: var(--dark-gray);\n  border: 1px solid var(--dark-gray);\n  transform: rotate(45deg) translateY(5px) translateX(5px);\n}\n.open .hamburger-middle {\n  display: none;\n}\n.open .hamburger-bottom {\n  background-color: var(--dark-gray);\n  border: 1px solid var(--dark-gray);\n  transform: rotate(-45deg) translateY(5px) translateX(-5px);\n}\n.show-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n.mobile-menu {\n  color: var(--black);\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100px;\n  background-color: var(--white);\n  font-size: 20px;\n  transform: translateY(-100%);\n  transition: transform 0.3s ease;\n  z-index: 2;\n}\n.mobile-menu ul {\n  display: flex;\n  list-style: none;\n  font-size: 1rem;\n  font-weight: 700;\n  gap: 20px;\n  justify-content: center;\n  margin-top: 40px;\n}\n.mobile-menu li {\n  cursor: pointer;\n}\n.mobile-menu li:hover {\n  color: var(--dark-gray);\n}\n.mobile-menu.open {\n  transform: translateY(0);\n}\n@media only screen and (max-width: 1100px) {\n  .section-1-main h1 {\n    font-size: 1.5rem;\n  }\n  .section-1-main {\n    padding: 0 20px;\n  }\n  .section-2-main {\n    padding: 0 5px;\n  }\n  .section-2 h1 {\n    font-size: 0.8rem;\n  }\n}\n@media only screen and (max-width: 675px) {\n  .section-1,\n  .section-2 {\n    flex-direction: column;\n    height: 100%;\n  }\n  .section-1 img,\n  .section-2 img {\n    width: 100%;\n  }\n  .section-1-main,\n  .section-2-main {\n    width: 100%;\n    padding: 30px 20px;\n  }\n  .slider-container {\n    top: -70px;\n  }\n  .btn-shop {\n    margin-top: 20px;\n  }\n  .desktop-menu ul {\n    display: none;\n  }\n\n  .brand-title {\n    margin: auto;\n  }\n  .desktop-menu {\n    left: 0;\n    width: 100%;\n  }\n  .hamburger {\n    opacity: 1;\n  }\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(28),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"imgs/desktop-image-hero-1.jpg",g=t.p+"imgs/desktop-image-hero-2.jpg",v=t.p+"imgs/desktop-image-hero-3.jpg",y=document.querySelector(".slider-left"),b=document.querySelector(".slider-right"),x=document.querySelector(".img-holder"),w=document.querySelector(".title-holder"),k=document.querySelector(".text-holder"),S=document.querySelector(".hamburger"),L=document.querySelector(".overlay"),z=document.querySelector(".mobile-menu"),j=[f,g,v],T=[{title:"Discover innovative ways to decorate",des:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},{title:"We are available all across the globe",des:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today"},{title:"Manufactured with the best materials",des:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."}];b.addEventListener("click",(function(){w.classList.remove("slide");let n=+x.dataset.curimg;n===j.length-1&&(n=-1);const e=n+1;x.src=j[e],x.dataset.curimg=e,w.textContent=T[e].title,k.textContent=T[e].des,setTimeout((()=>{w.classList.add("slide")}),500)})),y.addEventListener("click",(function(){w.classList.remove("slide");let n=+x.dataset.curimg;0===n&&(n=j.length);const e=n-1;x.src=j[e],x.dataset.curimg=e,w.textContent=T[e].title,k.textContent=T[e].des,setTimeout((()=>{w.classList.add("slide")}),500)})),S.addEventListener("click",(function(){this.classList.toggle("open"),L.classList.toggle("show-overlay"),z.classList.toggle("open")})),L.addEventListener("click",(function(){this.classList.remove("show-overlay"),S.classList.remove("open"),z.classList.remove("open")}))})()})();