const build = [
  "/ebook-reader/_app/start-374ed71a.js",
  "/ebook-reader/_app/pages/__layout.svelte-e7575aa4.js",
  "/ebook-reader/_app/assets/pages/__layout.svelte-d60b55fd.css",
  "/ebook-reader/_app/pages/__error.svelte-2cccb58f.js",
  "/ebook-reader/_app/pages/b/_id_integer_.svelte-14fa4a1f.js",
  "/ebook-reader/_app/pages/b/index.svelte-c3bf46e0.js",
  "/ebook-reader/_app/assets/pages/b/index.svelte-aa463c1e.css",
  "/ebook-reader/_app/pages/index.svelte-6b629ebf.js",
  "/ebook-reader/_app/pages/manage/index.svelte-0e9f7eb9.js",
  "/ebook-reader/_app/pages/settings/index.svelte-79d171cf.js",
  "/ebook-reader/_app/chunks/index-200ea95d.js",
  "/ebook-reader/_app/chunks/index-d4330c35.js",
  "/ebook-reader/_app/chunks/singletons-d1fb5791.js",
  "/ebook-reader/_app/chunks/stores-2840616d.js",
  "/ebook-reader/_app/chunks/dialog-manager-f50f3d91.js",
  "/ebook-reader/_app/chunks/store-9e108e48.js",
  "/ebook-reader/_app/chunks/css-classes-3657a0d4.js",
  "/ebook-reader/_app/assets/css-classes-90564669.css",
  "/ebook-reader/_app/chunks/format-page-title-db029841.js",
  "/ebook-reader/_app/chunks/use-click-outside-c6870518.js",
  "/ebook-reader/_app/chunks/tap-67010267.js",
  "/ebook-reader/_app/chunks/index.es-efcd32b8.js",
  "/ebook-reader/_app/chunks/storage-f4c5ff63.js"
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
  "/ebook-reader",
  "/ebook-reader/b",
  "/ebook-reader/manage",
  "/ebook-reader/settings"
];
const version = "1652306538319";
/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */
function toSearchParams(params) {
  return Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
}
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
    event.respondWith(networkFirstRaceCache(event.request, BUILD_CACHE_NAME));
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
async function networkFirstRaceCache(request, fallbackCacheName) {
  const cache = await caches.open(`other:${version}`);
  const controller = new AbortController();
  let cachedResponse;
  let done = false;
  let attempted = false;
  const retrieveFromCache = async () => {
    const response = await cache.match(request);
    if (response)
      return response;
    if (!fallbackCacheName)
      return void 0;
    return caches.match(request, { cacheName: fallbackCacheName });
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
    cache.put(request, response.clone());
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
