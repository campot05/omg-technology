!function(){var e=document.querySelector("[store-open]"),t=document.querySelector("[shop-close]"),n=document.querySelector("[shop-backdrop]"),r=document.querySelector("[shop-open]"),o=document.querySelector("[shop-form]");e.addEventListener("click",(function(){return i(n)})),t.addEventListener("click",(function(){return i(n)})),r.addEventListener("click",(function(){return i(n)}));var u=document.querySelector("[thanks-modal]"),l=document.querySelector("[thank-close]"),c=document.querySelector("[thank-continue]");function i(e){e.classList.toggle("is-hidden")}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.classList.toggle("is-hidden"),document.body.style.overflowY=t?"hidden":null}l.addEventListener("click",(function(){return i(u)})),c.addEventListener("click",(function(){return i(u)})),o.addEventListener("submit",(function(e){e.preventDefault(),function(e){var t=!0,n=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(t=(o=u.next()).done);t=!0)if(!o.value.validity.valid)return!1}catch(e){n=!0,r=e}finally{try{t||null==u.return||u.return()}finally{if(n)throw r}}return!0}(o.getElementsByTagName("input"))&&(i(u),i(n),function(e){var t=!0,n=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(t=(o=u.next()).done);t=!0)o.value.value=null}catch(e){n=!0,r=e}finally{try{t||null==u.return||u.return()}finally{if(n)throw r}}}(o.getElementsByTagName("input")))}))}();
//# sourceMappingURL=index.0e52cd65.js.map
