/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */
function toSearchParams(params) {
  return Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
}
const build = [
  "/_app/immutable/start-5c0e434e.js",
  "/_app/immutable/pages/__layout.svelte-7b7f8cbf.js",
  "/_app/immutable/assets/pages/__layout.svelte-3a7dbc11.css",
  "/_app/immutable/pages/__error.svelte-8829d64b.js",
  "/_app/immutable/pages/b/_id_integer_.svelte-ea82f39f.js",
  "/_app/immutable/pages/b/index.svelte-a70ef235.js",
  "/_app/immutable/assets/pages/b/index.svelte-aa463c1e.css",
  "/_app/immutable/pages/index.svelte-980c3f8a.js",
  "/_app/immutable/pages/manage/index.svelte-ff5d0fa7.js",
  "/_app/immutable/pages/settings/index.svelte-40c2c739.js",
  "/_app/immutable/chunks/index-91a5e740.js",
  "/_app/immutable/chunks/index-dccf800c.js",
  "/_app/immutable/chunks/singletons-d1fb5791.js",
  "/_app/immutable/chunks/stores-c16cb913.js",
  "/_app/immutable/chunks/dialog-manager-2d1393e2.js",
  "/_app/immutable/chunks/utils-48991f97.js",
  "/_app/immutable/chunks/store-afb7c6c1.js",
  "/_app/immutable/chunks/merged-header-icon-fca71072.js",
  "/_app/immutable/assets/merged-header-icon-63544cfc.css",
  "/_app/immutable/chunks/format-page-title-d2ff14dd.js",
  "/_app/immutable/chunks/theme-option-c3fe1088.js",
  "/_app/immutable/chunks/tap-495987ce.js",
  "/_app/immutable/chunks/index.es-98a5a7c8.js",
  "/_app/immutable/chunks/storage-d5018154.js"
];
const files = [
  "/.nojekyll",
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.png",
  "/icons/maskable-icon@128x128.png",
  "/icons/maskable-icon@16x16.png",
  "/icons/maskable-icon@192x192.png",
  "/icons/maskable-icon@32x32.png",
  "/icons/maskable-icon@512x512.png",
  "/icons/regular-icon@16x16.png",
  "/icons/regular-icon@192x192.png",
  "/icons/regular-icon@32x32.png",
  "/icons/regular-icon@512x512.png",
  "/manifest.webmanifest",
  "/safari-pinned-tab.svg"
];
const prerendered = [];
const version = "1656983609299";
const worker = self;
const BUILD_CACHE_NAME = `build:${version}`;
const prerenderedSet = new Set(prerendered);
const assetsToCache = build.concat(files).concat(prerendered);
const cachedAssets = new Set(assetsToCache);
worker.addEventListener("install", (event) => {
  worker.skipWaiting();
  event.waitUntil(caches.open(BUILD_CACHE_NAME).then((cache) => cache.addAll(assetsToCache)));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => {
    const keysWithOldCache = keys.filter((key) => key !== BUILD_CACHE_NAME);
    return Promise.all(keysWithOldCache.map((key) => caches.delete(key)));
  }));
});
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === worker.location.hostname && url.port !== worker.location.port;
  const isSelfHost = url.host === worker.location.host;
  const isBuildAsset = isSelfHost && cachedAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isBuildAsset;
  if (!isHttp || isDevServerRequest || skipBecauseUncached)
    return;
  if (isSelfHost && prerenderedSet.has(url.pathname)) {
    const requestWithoutParams = new Request(url.pathname);
    event.respondWith(networkFirstRaceCache(event.request, false, BUILD_CACHE_NAME, requestWithoutParams));
    return;
  }
  if (isSelfHost) {
    const response = isBuildAsset ? caches.match(url.pathname).then((r) => r != null ? r : fetch(event.request)) : selfHostParameterizedUrlResponse(event.request);
    if (response) {
      event.respondWith(response);
      return;
    }
  }
  if (url.host === "fonts.googleapis.com") {
    event.respondWith(networkFirstRaceCache(event.request));
  }
});
async function networkFirstRaceCache(request, storeResponse = true, fallbackCacheName, fallbackCacheRequest) {
  const cache = await caches.open(`other:${version}`);
  const controller = new AbortController();
  let cachedResponse;
  let done = false;
  let attempted = false;
  const retrieveFromFallbackCache = () => fallbackCacheName ? caches.match(fallbackCacheRequest != null ? fallbackCacheRequest : request, { cacheName: fallbackCacheName }) : void 0;
  const retrieveFromCache = async () => {
    if (!storeResponse)
      return retrieveFromFallbackCache();
    const response = await cache.match(request);
    if (response)
      return response;
    if (!fallbackCacheName)
      return void 0;
    return retrieveFromFallbackCache();
  };
  try {
    const handle = setTimeout(async () => {
      cachedResponse = await retrieveFromCache();
      attempted = true;
      if (!cachedResponse || done)
        return;
      controller.abort();
    }, 1e3);
    const response = await fetch(request, { signal: controller.signal });
    done = true;
    clearTimeout(handle);
    if (storeResponse) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    if (!attempted) {
      cachedResponse = await retrieveFromCache();
    }
    if (cachedResponse)
      return cachedResponse;
    throw err;
  }
}
function selfHostParameterizedUrlResponse(request) {
  const url = new URL(request.url);
  const readerRegex = /\/b\/(?<id>\d+)\/?(\?|$)/;
  const readerRegexResult = readerRegex.exec(url.pathname);
  if (readerRegexResult == null ? void 0 : readerRegexResult.groups) {
    return createRedirectResponse(`/b?${toSearchParams(readerRegexResult.groups)}`);
  }
  return void 0;
}
function createRedirectResponse(location) {
  return new Response(null, {
    status: 302,
    headers: {
      location
    }
  });
}
