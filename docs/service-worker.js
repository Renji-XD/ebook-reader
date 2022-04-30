const build = [
  "/_app/start-8f4121ee.js",
  "/_app/pages/__layout.svelte-98977e55.js",
  "/_app/assets/pages/__layout.svelte-30ab4994.css",
  "/_app/pages/__error.svelte-e3308680.js",
  "/_app/pages/b/_id_integer_.svelte-de85ded9.js",
  "/_app/pages/b/index.svelte-58fb15ea.js",
  "/_app/assets/pages/b/index.svelte-bba36acd.css",
  "/_app/pages/index.svelte-71d951da.js",
  "/_app/pages/manage/index.svelte-a57e3d96.js",
  "/_app/pages/settings/index.svelte-eddacabd.js",
  "/_app/chunks/index-2fb0f594.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/stores-35b585f4.js",
  "/_app/chunks/dialog-manager-f50f3d91.js",
  "/_app/chunks/store-9e108e48.js",
  "/_app/chunks/css-classes-359d4da4.js",
  "/_app/assets/css-classes-90564669.css",
  "/_app/chunks/format-page-title-3c1ce953.js",
  "/_app/chunks/theme-option-640ec189.js",
  "/_app/chunks/tap-7ad8a228.js",
  "/_app/chunks/index.es-43e109f6.js",
  "/_app/chunks/storage-3b104820.js"
];
const files = [
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
const prerendered = [
  "/",
  "/b",
  "/manage",
  "/settings"
];
const version = "1651356349469";
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
