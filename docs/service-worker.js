/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */
function toSearchParams(params) {
  return Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
}
const build = [
  "/ebook-reader/_app/immutable/start-e868ccf9.js",
  "/ebook-reader/_app/immutable/pages/__layout.svelte-93bc80cc.js",
  "/ebook-reader/_app/immutable/assets/pages/__layout.svelte-3a7dbc11.css",
  "/ebook-reader/_app/immutable/pages/__error.svelte-cc011de0.js",
  "/ebook-reader/_app/immutable/pages/b/_id_integer_.svelte-59591826.js",
  "/ebook-reader/_app/immutable/pages/b/index.svelte-b359597f.js",
  "/ebook-reader/_app/immutable/assets/pages/b/index.svelte-aa463c1e.css",
  "/ebook-reader/_app/immutable/pages/index.svelte-07bea970.js",
  "/ebook-reader/_app/immutable/pages/manage/index.svelte-63ffda9f.js",
  "/ebook-reader/_app/immutable/pages/settings/index.svelte-d6d035b7.js",
  "/ebook-reader/_app/immutable/chunks/index-91a5e740.js",
  "/ebook-reader/_app/immutable/chunks/index-dccf800c.js",
  "/ebook-reader/_app/immutable/chunks/singletons-d1fb5791.js",
  "/ebook-reader/_app/immutable/chunks/stores-c16cb913.js",
  "/ebook-reader/_app/immutable/chunks/dialog-manager-2d1393e2.js",
  "/ebook-reader/_app/immutable/chunks/utils-48991f97.js",
  "/ebook-reader/_app/immutable/chunks/store-afb7c6c1.js",
  "/ebook-reader/_app/immutable/chunks/merged-header-icon-eb22e290.js",
  "/ebook-reader/_app/immutable/assets/merged-header-icon-63544cfc.css",
  "/ebook-reader/_app/immutable/chunks/format-page-title-d2ff14dd.js",
  "/ebook-reader/_app/immutable/chunks/theme-option-c3fe1088.js",
  "/ebook-reader/_app/immutable/chunks/tap-495987ce.js",
  "/ebook-reader/_app/immutable/chunks/index.es-98a5a7c8.js",
  "/ebook-reader/_app/immutable/chunks/storage-294dab94.js"
];
const files = [
  "/ebook-reader/.nojekyll",
  "/ebook-reader/apple-touch-icon.png",
  "/ebook-reader/favicon.ico",
  "/ebook-reader/favicon.png",
  "/ebook-reader/icons/maskable-icon@128x128.png",
  "/ebook-reader/icons/maskable-icon@16x16.png",
  "/ebook-reader/icons/maskable-icon@192x192.png",
  "/ebook-reader/icons/maskable-icon@32x32.png",
  "/ebook-reader/icons/maskable-icon@512x512.png",
  "/ebook-reader/icons/regular-icon@16x16.png",
  "/ebook-reader/icons/regular-icon@192x192.png",
  "/ebook-reader/icons/regular-icon@32x32.png",
  "/ebook-reader/icons/regular-icon@512x512.png",
  "/ebook-reader/manifest.webmanifest",
  "/ebook-reader/safari-pinned-tab.svg"
];
const prerendered = [
  "/ebook-reader/b",
  "/ebook-reader/manage",
  "/ebook-reader/settings",
  "/ebook-reader"
];
const version = "1657109226244";
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
