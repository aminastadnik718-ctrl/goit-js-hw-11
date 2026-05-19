/* empty css                      */import{a as d,S as f,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="API_KEY",m="https://pixabay.com/api/";async function y(s){return(await d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a");function g(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${t.likes}</p>
            <p><b>Views</b> ${t.views}</p>
            <p><b>Comments</b> ${t.comments}</p>
            <p><b>Downloads</b> ${t.downloads}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",S);async function S(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o){b(),L();try{const t=await y(o);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch(t){console.log(t),a.error({message:"Something went wrong!",position:"topRight"})}finally{w(),u.reset()}}}
//# sourceMappingURL=index.js.map
