/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */
function _(e) {
  return Object.entries(e).map(([a, r]) => `${encodeURIComponent(a)}=${encodeURIComponent(r)}`).join("&");
}
const j = [
  "/ebook-reader/_app/immutable/start-3891e8ba.js",
  "/ebook-reader/_app/immutable/pages/__layout.svelte-1ec64d48.js",
  "/ebook-reader/_app/immutable/assets/__layout-7dc72dc4.css",
  "/ebook-reader/_app/immutable/pages/__error.svelte-7f42a0b4.js",
  "/ebook-reader/_app/immutable/pages/b/_id_integer_.svelte-706dcdbf.js",
  "/ebook-reader/_app/immutable/pages/b/index.svelte-9d44db46.js",
  "/ebook-reader/_app/immutable/assets/index-a673c84c.css",
  "/ebook-reader/_app/immutable/pages/index.svelte-3d6a0b2f.js",
  "/ebook-reader/_app/immutable/pages/manage/index.svelte-a6ec6e58.js",
  "/ebook-reader/_app/immutable/pages/settings/index.svelte-c5bccc9b.js",
  "/ebook-reader/_app/immutable/chunks/index-df0cdd8f.js",
  "/ebook-reader/_app/immutable/chunks/index-31b77272.js",
  "/ebook-reader/_app/immutable/chunks/singletons-a14e46a6.js",
  "/ebook-reader/_app/immutable/chunks/stores-b20e80ef.js",
  "/ebook-reader/_app/immutable/chunks/dialog-manager-cce8b3b0.js",
  "/ebook-reader/_app/immutable/chunks/utils-f9d0cd9e.js",
  "/ebook-reader/_app/immutable/chunks/format-page-title-36cd2a0a.js",
  "/ebook-reader/_app/immutable/chunks/theme-option-f666c2ca.js",
  "/ebook-reader/_app/immutable/chunks/merged-header-icon-197d1b73.js",
  "/ebook-reader/_app/immutable/assets/merged-header-icon-32503cb2.css",
  "/ebook-reader/_app/immutable/chunks/index.es-d81d3801.js"
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
], g = "1661952917317", n = self, b = `build:${g}`, w = new Set(k), f = j.concat(x).concat(k), v = new Set(f);
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
  const a = new URL(e.request.url), r = a.protocol.startsWith("http"), o = a.hostname === n.location.hostname && a.port !== n.location.port, c = a.host === n.location.host, p = c && v.has(a.pathname), t = e.request.cache === "only-if-cached" && !p;
  if (!(!r || o || t)) {
    if (c && w.has(a.pathname)) {
      const s = new Request(a.pathname);
      e.respondWith(h(e.request, !1, b, s));
      return;
    }
    if (c) {
      const s = p ? caches.match(a.pathname).then((i) => i != null ? i : fetch(e.request)) : y(e.request);
      if (s) {
        e.respondWith(s);
        return;
      }
    }
    a.host === "fonts.googleapis.com" && e.respondWith(h(e.request));
  }
});
async function h(e, a = !0, r, o) {
  const c = await caches.open(`other:${g}`), p = new AbortController();
  let t, s = !1, i = !1;
  const l = () => r ? caches.match(o != null ? o : e, { cacheName: r }) : void 0, u = async () => {
    if (!a)
      return l();
    const d = await c.match(e);
    if (d)
      return d;
    if (!!r)
      return l();
  };
  try {
    const d = setTimeout(async () => {
      t = await u(), i = !0, !(!t || s) && p.abort();
    }, 1e3), m = await fetch(e, { signal: p.signal });
    return s = !0, clearTimeout(d), a && c.put(e, m.clone()), m;
  } catch (d) {
    if (i || (t = await u()), t)
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
