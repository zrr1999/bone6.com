if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let c={};const n=e=>s(e,d),f={module:{uri:d},exports:c,require:n};i[d]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(a(...e),c)))}}define(["./workbox-cf1bfd16"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_astro/client.5I5BMcNS.js",revision:null},{url:"_astro/client.DF42emXe.js",revision:null},{url:"_astro/hoisted.Co2dIeUj.js",revision:null},{url:"_astro/hoisted.Dvl9AY_e.js",revision:null},{url:"_astro/index.C9mk__OU.js",revision:null},{url:"_astro/index.Cf74mTwH.css",revision:null},{url:"_astro/index.CZNXKH1e.js",revision:null},{url:"_astro/page.BaUUwzE3.js",revision:null},{url:"_astro/search.CUcZi9mk.css",revision:null},{url:"404",revision:"791154c80999897479418e2c46c5768a"},{url:"/",revision:"ab8a83f6295070dc5eca4e55f3f62846"},{url:"pagefind/pagefind-highlight.js",revision:"9884f0f1d546e073cc0aff4442619b05"},{url:"pagefind/pagefind-modular-ui.css",revision:"8ba82b0fc3b73d70717347223422b193"},{url:"pagefind/pagefind-modular-ui.js",revision:"e7aa1fd072985ba091cbfcb3317822ac"},{url:"pagefind/pagefind-ui.css",revision:"f3a0c2b7836ea429ca865b4807d76e60"},{url:"pagefind/pagefind-ui.js",revision:"df02800618a9c02101317fdb18a836bd"},{url:"pagefind/pagefind.js",revision:"4e4b0d7f35d3a2efc8a352aed9503522"},{url:"posts/1",revision:"3dd62e8a4a1d85fbe4afd3ab7e3fa1a5"},{url:"posts/2",revision:"b9aef5202d655e8cbf0ad8fa212e7d04"},{url:"posts/all-in-one",revision:"21530ebba7db31e6cb9c52e480cd5b99"},{url:"posts/incus-qcow2",revision:"e12285cedbe0560b40e1e8e911cd2412"},{url:"posts",revision:"d38faa83836313a9ee8c17fe8d417bcf"},{url:"posts/linux-gateway",revision:"68fc884944613a943727c551bf6d5472"},{url:"posts/rational-decomposition",revision:"1c8dfcbbc6f3b344d8b9221a84445638"},{url:"posts/sparse-tensor",revision:"420dab53a07c0cc0ab30b7a299b6812b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"resume",revision:"ff5b7fcec842913b950a758d70d6d472"},{url:"search",revision:"55f15f594acd1601f90dffc2cc50db42"},{url:"tags",revision:"1ccfd2daf89505115d653015a5397787"},{url:"tags/数学/1",revision:"d4408f6b4e14a56cf899f62a369fe116"},{url:"tags/数学",revision:"ddaf0625166ccdfe7eeda631e8ab2609"},{url:"tags/智能家居/1",revision:"714b5af673f5d6796a8ff550cd7f4e9d"},{url:"tags/智能家居",revision:"13d27b5b1dca367e921fd58366202cab"},{url:"tags/稀疏张量/1",revision:"aed6e7fe023839cb0cf4ebbbf101a9c1"},{url:"tags/稀疏张量",revision:"d69db62578ab0a19a2498f3f4651bbc6"},{url:"tags/网络/1",revision:"24e29aa9c4f1525b891d04a2de6fe06e"},{url:"tags/网络",revision:"ebe2b80a52315c64fbc283976bc260b1"},{url:"tags/虚拟机/1",revision:"a9f5e6dfbeccbdb2d266b48039195d6c"},{url:"tags/虚拟机",revision:"8f23366b327b75d1362d5244bb622d06"},{url:"tags/路由/1",revision:"93fbc9a91e9d582c513c7c29cf8ccfc9"},{url:"tags/路由",revision:"c7fb4b3cc43e7e15456c041250c05e28"},{url:"toggle-theme.js",revision:"36b2ffb9bcf05d5de685f65ffb658469"},{url:"manifest.webmanifest",revision:"e4b3bd9e3b02963e679de6e65befc364"}],{directoryIndex:"index.html"}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
