if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,i,r)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const a={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return t;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-7797d470"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Zf9CAtrPkVtbmghliNIYl/_buildManifest.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/Zf9CAtrPkVtbmghliNIYl/_ssgManifest.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/1ad99113b62f156a94fbf28e27edb10b90c88a87.01b2f226748be39c86d3.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/29107295.ab8845ca473224868a75.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/39374740d0e80d6f7e419ed025fe2df2ce866c46.d57f944d828c5a925179.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/5570e264ffe48ce1659acdc636bd8ae22872104b.bfba1957aec80c4fc589.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/59b219cd0f71863461df34ba805b8ebc621fae63.628418208cfd0a52d793.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/commons.c7fbf83a99e9e07c86cc.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/da038609794fce2eccdce10d3a8f4377f3701a1f.d8444fb337d1fc947a6a.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/ea88be26.26b57d1a193a9ade9a1d.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/framework.9646a17da24c01c28cf8.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/main-5150b31bed8fe1f91480.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/%5Bslug%5D-e54ae346a63a88e57305.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/_app-4c5dc01c974bf1212d42.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/_error-4fbe1f81407e743acc67.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/articles-14b90f4325806417a5ac.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/articles/%5Bslug%5D-dba83ea5485ff7a5b9dd.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/articles/topics/%5Bslug%5D-d2f1bddcd320297f419e.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/index-b2b1e38424e68a7fa92b.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/manifest.json-8ff65bf966e9b3e1302d.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/site-stats-920003cc00effe4df612.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/pages/sitemap.xml-6a8b0892b13d8acb5d7d.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/polyfills-ad30d1320810fa304e64.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/css/15ba1ee3e59766b2d5b0.css",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/_next/static/css/8367003db24b6b584d34.css",revision:"Zf9CAtrPkVtbmghliNIYl"},{url:"/favicon.ico",revision:"091c09c38908f76168913c3ad99cab6e"},{url:"/logos/GIS-Netzwerk-Logo.png",revision:"46fd143caa23a688c9da35159e8b6a7f"},{url:"/logos/GIS-Netzwerk-Logo_1080.png",revision:"34d984c5fc8e638171431a32b53f5a38"},{url:"/logos/android-chrome-192x192.png",revision:"9e465bb59f36f0785b82222d8148fb88"},{url:"/logos/android-chrome-512x512.png",revision:"b50d82000faecce20906f51e83cca52a"},{url:"/logos/apple-touch-icon.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/logos/browserconfig.xml",revision:"b8e5b96dfa8ac9788a70fc02576657b1"},{url:"/logos/favicon-16x16.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/logos/favicon-32x32.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/logos/gis-netzwerk_favicon.png",revision:"c70f8e29cfbc381db9eb1bd75c2aeac0"},{url:"/logos/logo_square.png",revision:"303f8c8d9b24624d30af8b7328910645"},{url:"/logos/logo_square_1024.png",revision:"f75a8124b6655c7802151946ef10d5d5"},{url:"/logos/logo_square_48.png",revision:"c70f8e29cfbc381db9eb1bd75c2aeac0"},{url:"/logos/logo_square_512.png",revision:"b50d82000faecce20906f51e83cca52a"},{url:"/logos/mstile-150x150.png",revision:"ab4494884aa57756b0bcf7d0949fe08b"},{url:"/logos/site.webmanifest",revision:"bea2a98a746270436326ab6263ccdb2d"},{url:"/robots.txt",revision:"b6b6cd30efb30525ab84e21781e1a3cc"},{url:"/world-110m.geojson",revision:"a028ebcd17fafbf2239e3ef446ba4205"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
