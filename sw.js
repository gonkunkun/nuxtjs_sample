importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/336508afac9af36afcbb.js",
    "revision": "ad211080756a474583571f4810369406"
  },
  {
    "url": "/_nuxt/34b8742a96752ee98ce5.js",
    "revision": "9d065b2761835e8ad025f5569d827377"
  },
  {
    "url": "/_nuxt/6eefc43159428b863b53.js",
    "revision": "c6e15210c4505ff5b8c9dbc5a28f94bf"
  },
  {
    "url": "/_nuxt/9b6af0eb4362c49910b4.js",
    "revision": "b9f562f0d9a6c7982f3c77a143357d5c"
  },
  {
    "url": "/_nuxt/e5476a82f69db5ed662b.js",
    "revision": "afb2b818b6459dcf8bdc77998f7866a3"
  },
  {
    "url": "/_nuxt/ea4eb78df233e0b40712.js",
    "revision": "017041a18bdc7086da70d78f96c440ff"
  }
], {
  "cacheId": "sample-app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
