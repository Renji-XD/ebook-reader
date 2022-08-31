/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */
function _(e) {
  return Object.entries(e).map(([o, r]) => `${encodeURIComponent(o)}=${encodeURIComponent(r)}`).join("&");
}
const j = [
  "/ebook-reader/_app/immutable/start-b684f91a.js",
  "/ebook-reader/_app/immutable/pages/__layout.svelte-1ec64d48.js",
  "/ebook-reader/_app/immutable/assets/__layout-7dc72dc4.css",
  "/ebook-reader/_app/immutable/pages/__error.svelte-7f42a0b4.js",
  "/ebook-reader/_app/immutable/pages/b/_id_integer_.svelte-706dcdbf.js",
  "/ebook-reader/_app/immutable/pages/b/index.svelte-d64657af.js",
  "/ebook-reader/_app/immutable/assets/index-a673c84c.css",
  "/ebook-reader/_app/immutable/pages/index.svelte-0ad5d913.js",
  "/ebook-reader/_app/immutable/pages/manage/index.svelte-a44d6e48.js",
  "/ebook-reader/_app/immutable/pages/settings/index.svelte-951d835d.js",
  "/ebook-reader/_app/immutable/chunks/index-df0cdd8f.js",
  "/ebook-reader/_app/immutable/chunks/index-31b77272.js",
  "/ebook-reader/_app/immutable/chunks/singletons-a14e46a6.js",
  "/ebook-reader/_app/immutable/chunks/stores-b20e80ef.js",
  "/ebook-reader/_app/immutable/chunks/dialog-manager-cce8b3b0.js",
  "/ebook-reader/_app/immutable/chunks/utils-f9d0cd9e.js",
  "/ebook-reader/_app/immutable/chunks/format-page-title-609e4cb2.js",
  "/ebook-reader/_app/immutable/chunks/theme-option-e682eef6.js",
  "/ebook-reader/_app/immutable/chunks/merged-header-icon-2e70bebf.js",
  "/ebook-reader/_app/immutable/assets/merged-header-icon-32503cb2.css",
  "/ebook-reader/_app/immutable/chunks/index.es-8c17048e.js"
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
], g = "1661954024287", n = self, b = `build:${g}`, w = new Set(k), f = j.concat(x).concat(k), v = new Set(f);
n.addEventListener("install", (e) => {
  n.skipWaiting(), e.waitUntil(caches.open(b).then((o) => o.addAll(f)));
});
n.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((o) => {
    const r = o.filter((a) => a !== b);
    return Promise.all(r.map((a) => caches.delete(a)));
  }));
});
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const o = new URL(e.request.url), r = o.protocol.startsWith("http"), a = o.hostname === n.location.hostname && o.port !== n.location.port, i = o.host === n.location.host, p = i && v.has(o.pathname), t = e.request.cache === "only-if-cached" && !p;
  if (!(!r || a || t)) {
    if (i && w.has(o.pathname)) {
      const s = new Request(o.pathname);
      e.respondWith(h(e.request, !1, b, s));
      return;
    }
    if (i) {
      const s = p ? caches.match(o.pathname).then((c) => c != null ? c : fetch(e.request)) : y(e.request);
      if (s) {
        e.respondWith(s);
        return;
      }
    }
    o.host === "fonts.googleapis.com" && e.respondWith(h(e.request));
  }
});
async function h(e, o = !0, r, a) {
  const i = await caches.open(`other:${g}`), p = new AbortController();
  let t, s = !1, c = !1;
  const l = () => r ? caches.match(a != null ? a : e, { cacheName: r }) : void 0, u = async () => {
    if (!o)
      return l();
    const d = await i.match(e);
    if (d)
      return d;
    if (!!r)
      return l();
  };
  try {
    const d = setTimeout(async () => {
      t = await u(), c = !0, !(!t || s) && p.abort();
    }, 1e3), m = await fetch(e, { signal: p.signal });
    return s = !0, clearTimeout(d), o && i.put(e, m.clone()), m;
  } catch (d) {
    if (c || (t = await u()), t)
      return t;
    throw d;
  }
}
function y(e) {
  const o = new URL(e.url), a = /\/b\/(?<id>\d+)\/?(\?|$)/.exec(o.pathname);
  if (a != null && a.groups)
    return U(`/b?${_(a.groups)}`);
}
function U(e) {
  return new Response(null, {
    status: 302,
    headers: {
      location: e
    }
  });
}
