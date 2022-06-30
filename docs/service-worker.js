const build = [
  "/_app/immutable/start-664ee2c0.js",
  "/_app/immutable/pages/__layout.svelte-70295cbc.js",
  "/_app/immutable/assets/pages/__layout.svelte-27feaf16.css",
  "/_app/immutable/pages/__error.svelte-ee9d2e22.js",
  "/_app/immutable/pages/auth/index.svelte-547498f9.js",
  "/_app/immutable/pages/b/_id_integer_.svelte-faab746a.js",
  "/_app/immutable/pages/b/index.svelte-e45f076a.js",
  "/_app/immutable/assets/pages/b/index.svelte-aa463c1e.css",
  "/_app/immutable/pages/index.svelte-9714ee35.js",
  "/_app/immutable/pages/manage/index.svelte-383b144b.js",
  "/_app/immutable/pages/settings/index.svelte-59bb31a6.js",
  "/_app/immutable/chunks/index-df7a4262.js",
  "/_app/immutable/chunks/index-80298860.js",
  "/_app/immutable/chunks/singletons-d1fb5791.js",
  "/_app/immutable/chunks/stores-8abc4b4b.js",
  "/_app/immutable/chunks/dialog-manager-7832ece7.js",
  "/_app/immutable/chunks/storage-source-manager-6826c117.js",
  "/_app/immutable/chunks/fa-f5baca2c.js",
  "/_app/immutable/assets/fa-29562a41.css",
  "/_app/immutable/chunks/format-page-title-a92bc43a.js",
  "/_app/immutable/chunks/theme-option-e56e2f4c.js",
  "/_app/immutable/chunks/use-click-outside-599ab045.js",
  "/_app/immutable/chunks/index.es-ee948701.js",
  "/_app/immutable/chunks/popover-2a4f0d15.js"
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
  "/manage/__data.json",
  "/settings"
];
const version = "1656631548168";
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
