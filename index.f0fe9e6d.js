(()=>{const e=document.querySelector("[data-store-open]"),t=document.querySelector("[data-shop-close]"),n=document.querySelector("[data-shop-backdrop]"),o=document.querySelector("[data-shop-open]"),c=document.querySelector("[data-shop-form]");e.addEventListener("click",(()=>r(n))),t.addEventListener("click",(()=>r(n))),o.addEventListener("click",(()=>r(n)));const d=document.querySelector("[data-thanks-modal]"),a=document.querySelector("[data-thank-close]"),l=document.querySelector("[data-thank-continue]");function r(e){e.classList.toggle("is-hidden")}function r(e,t=!1){e.classList.toggle("is-hidden"),document.body.style.overflowY=t?"hidden":null}a.addEventListener("click",(()=>r(d))),l.addEventListener("click",(()=>r(d))),c.addEventListener("submit",(function(e){e.preventDefault(),function(e){for(let t of e)if(!t.validity.valid)return!1;return!0}(c.getElementsByTagName("input"))&&(r(d),r(n),function(e){for(let t of e)t.value=null}(c.getElementsByTagName("input")))}))})();
//# sourceMappingURL=index.f0fe9e6d.js.map
