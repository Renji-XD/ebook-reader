/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */
function _(e) {
  return Object.entries(e).map(([a, r]) => `${encodeURIComponent(a)}=${encodeURIComponent(r)}`).join("&");
}
const j = [
  "/ebook-reader/_app/immutable/start-90deda10.js",
  "/ebook-reader/_app/immutable/pages/__layout.svelte-483d6cc9.js",
  "/ebook-reader/_app/immutable/assets/__layout-d2329f45.css",
  "/ebook-reader/_app/immutable/pages/__error.svelte-01ee862f.js",
  "/ebook-reader/_app/immutable/pages/b/_id_integer_.svelte-db722f80.js",
  "/ebook-reader/_app/immutable/pages/b/index.svelte-9955dcb7.js",
  "/ebook-reader/_app/immutable/assets/index-51df7492.css",
  "/ebook-reader/_app/immutable/pages/index.svelte-c65051ba.js",
  "/ebook-reader/_app/immutable/pages/manage/index.svelte-b9c03300.js",
  "/ebook-reader/_app/immutable/pages/settings/index.svelte-804de89f.js",
  "/ebook-reader/_app/immutable/chunks/index-3b353f70.js",
  "/ebook-reader/_app/immutable/chunks/index-cf958a56.js",
  "/ebook-reader/_app/immutable/chunks/singletons-a14e46a6.js",
  "/ebook-reader/_app/immutable/chunks/stores-fd80d0b6.js",
  "/ebook-reader/_app/immutable/chunks/dialog-manager-b382bc32.js",
  "/ebook-reader/_app/immutable/chunks/utils-e1cc7b00.js",
  "/ebook-reader/_app/immutable/chunks/format-page-title-45aa809e.js",
  "/ebook-reader/_app/immutable/chunks/theme-option-20bb7f00.js",
  "/ebook-reader/_app/immutable/chunks/merged-header-icon-79ae4f7f.js",
  "/ebook-reader/_app/immutable/assets/merged-header-icon-32503cb2.css",
  "/ebook-reader/_app/immutable/chunks/index.es-d3712321.js",
  "/ebook-reader/_app/immutable/chunks/storage-79cb84a6.js"
], x = [
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
], k = [
  "/ebook-reader/b",
  "/ebook-reader/manage",
  "/ebook-reader/settings",
  "/ebook-reader"
], g = "1658921116778", n = self, b = `build:${g}`, w = new Set(k), f = j.concat(x).concat(k), v = new Set(f);
n.addEventListener("install", (e) => {
  n.skipWaiting(), e.waitUntil(caches.open(b).then((a) => a.addAll(f)));
});
n.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((a) => {
    const r = a.filter((o) => o !== b);
    return Promise.all(r.map((o) => caches.delete(o)));
  }));
});
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), r = a.protocol.startsWith("http"), o = a.hostname === n.location.hostname && a.port !== n.location.port, i = a.host === n.location.host, p = i && v.has(a.pathname), t = e.request.cache === "only-if-cached" && !p;
  if (!(!r || o || t)) {
    if (i && w.has(a.pathname)) {
      const s = new Request(a.pathname);
      e.respondWith(h(e.request, !1, b, s));
      return;
    }
    if (i) {
      const s = p ? caches.match(a.pathname).then((c) => c != null ? c : fetch(e.request)) : y(e.request);
      if (s) {
        e.respondWith(s);
        return;
      }
    }
    a.host === "fonts.googleapis.com" && e.respondWith(h(e.request));
  }
});
async function h(e, a = !0, r, o) {
  const i = await caches.open(`other:${g}`), p = new AbortController();
  let t, s = !1, c = !1;
  const u = () => r ? caches.match(o != null ? o : e, { cacheName: r }) : void 0, l = async () => {
    if (!a)
      return u();
    const d = await i.match(e);
    if (d)
      return d;
    if (!!r)
      return u();
  };
  try {
    const d = setTimeout(async () => {
      t = await l(), c = !0, !(!t || s) && p.abort();
    }, 1e3), m = await fetch(e, { signal: p.signal });
    return s = !0, clearTimeout(d), a && i.put(e, m.clone()), m;
  } catch (d) {
    if (c || (t = await l()), t)
      return t;
    throw d;
  }
}
function y(e) {
  const a = new URL(e.url), o = /\/b\/(?<id>\d+)\/?(\?|$)/.exec(a.pathname);
  if (o != null && o.groups)
    return U(`/b?${_(o.groups)}`);
}
function U(e) {
  return new Response(null, {
    status: 302,
    headers: {
      location: e
    }
  });
}
