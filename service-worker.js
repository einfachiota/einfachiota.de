!function(){"use strict";const t=1616852943222,i="cache"+t,e=["client/client.cb42972e.js","client/index.7641e0de.js","client/nodesoftware.7f401c77.js","client/impressum.6e61b1ff.js","client/about.bcda4668.js","client/index.f986ccb5.js","client/[slug].136f4a62.js"].concat(["service-worker-index.html","Guide.afdesign","Guide.svg","Server.afdesign","Server.svg","chrysalis.svg","favicon.png","fonts/merriweather-latin-300.woff","fonts/merriweather-latin-300.woff2","fonts/merriweather-latin-300italic.woff","fonts/merriweather-latin-300italic.woff2","fonts/merriweather-latin-400.woff","fonts/merriweather-latin-400.woff2","fonts/merriweather-latin-400italic.woff","fonts/merriweather-latin-400italic.woff2","fonts/merriweather-latin-700.woff","fonts/merriweather-latin-700.woff2","fonts/merriweather-latin-700italic.woff","fonts/merriweather-latin-700italic.woff2","fonts/merriweather-latin-900.woff","fonts/merriweather-latin-900.woff2","fonts/merriweather-latin-900italic.woff","fonts/merriweather-latin-900italic.woff2","fonts/rubik-latin-300.woff","fonts/rubik-latin-300.woff2","fonts/rubik-latin-300italic.woff","fonts/rubik-latin-300italic.woff2","fonts/rubik-latin-400.woff","fonts/rubik-latin-400.woff2","fonts/rubik-latin-400italic.woff","fonts/rubik-latin-400italic.woff2","fonts/rubik-latin-500.woff","fonts/rubik-latin-500.woff2","fonts/rubik-latin-500italic.woff","fonts/rubik-latin-500italic.woff2","fonts/rubik-latin-700.woff","fonts/rubik-latin-700.woff2","fonts/rubik-latin-700italic.woff","fonts/rubik-latin-700italic.woff2","fonts/rubik-latin-900.woff","fonts/rubik-latin-900.woff2","fonts/rubik-latin-900italic.woff","fonts/rubik-latin-900italic.woff2","fonts.css","global.css","highlight.css","logo-192.png","logo-512.afdesign","logo-512.png","logo.svg","manifest.json","undraw-illustration.svg"]),n=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open(i).then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const e of t)e!==i&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",i=>{if("GET"!==i.request.method||i.request.headers.has("range"))return;const e=new URL(i.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&n.has(e.pathname)?i.respondWith(caches.match(i.request)):"only-if-cached"!==i.request.cache&&i.respondWith(caches.open("offline"+t).then(async t=>{try{const e=await fetch(i.request);return t.put(i.request,e.clone()),e}catch(e){const n=await t.match(i.request);if(n)return n;throw e}}))))})}();
