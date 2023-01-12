const _ = [
  "/ebook-reader/_app/immutable/assets/_layout-62774bd7.css",
  "/ebook-reader/_app/immutable/assets/store-ad073191.css",
  "/ebook-reader/_app/immutable/assets/fa-32503cb2.css",
  "/ebook-reader/_app/immutable/assets/_page-b843624e.css",
  "/ebook-reader/_app/immutable/chunks/stores-6a6870f3.js",
  "/ebook-reader/_app/immutable/chunks/theme-option-f9f8f697.js",
  "/ebook-reader/_app/immutable/chunks/4-dc3892eb.js",
  "/ebook-reader/_app/immutable/chunks/3-5c73f605.js",
  "/ebook-reader/_app/immutable/chunks/fa-f7462c86.js",
  "/ebook-reader/_app/immutable/chunks/index-be8ea2fc.js",
  "/ebook-reader/_app/immutable/chunks/2-abdd9ffe.js",
  "/ebook-reader/_app/immutable/chunks/singletons-6176161c.js",
  "/ebook-reader/_app/immutable/components/pages/_page.svelte-0663697a.js",
  "/ebook-reader/_app/immutable/chunks/6-3a6d4a3c.js",
  "/ebook-reader/_app/immutable/chunks/format-page-title-2ca75b98.js",
  "/ebook-reader/_app/immutable/chunks/1-36f4ec71.js",
  "/ebook-reader/_app/immutable/start-9c907016.js",
  "/ebook-reader/_app/immutable/components/pages/auth/_page.svelte-f52daa05.js",
  "/ebook-reader/_app/immutable/components/pages/manage/_page.svelte-4a308612.js",
  "/ebook-reader/_app/immutable/chunks/merged-header-icon-bd37420f.js",
  "/ebook-reader/_app/immutable/components/error.svelte-5086bf37.js",
  "/ebook-reader/_app/immutable/chunks/error-handler-df8dffd6.js",
  "/ebook-reader/_app/immutable/chunks/5-ac78af10.js",
  "/ebook-reader/_app/immutable/chunks/0-87fe9ac1.js",
  "/ebook-reader/_app/immutable/components/pages/_layout.svelte-28a79004.js",
  "/ebook-reader/_app/immutable/components/pages/settings/_page.svelte-41497b11.js",
  "/ebook-reader/_app/immutable/chunks/index-6454b96b.js",
  "/ebook-reader/_app/immutable/components/pages/b/_page.svelte-5b03b1c2.js",
  "/ebook-reader/_app/immutable/chunks/store-12fb6ab6.js"
], w = [
  "/ebook-reader/.nojekyll",
  "/ebook-reader/apple-touch-icon.png",
  "/ebook-reader/favicon.ico",
  "/ebook-reader/favicon.png",
  "/ebook-reader/fonts/genEiKoburiMin5.ttf",
  "/ebook-reader/fonts/klee-one-v7-600.woff",
  "/ebook-reader/fonts/klee-one-v7-600.woff2",
  "/ebook-reader/fonts/klee-one-v7-regular.woff",
  "/ebook-reader/fonts/klee-one-v7-regular.woff2",
  "/ebook-reader/fonts/noto-sans-v42-500.woff",
  "/ebook-reader/fonts/noto-sans-v42-500.woff2",
  "/ebook-reader/fonts/noto-sans-v42-700.woff",
  "/ebook-reader/fonts/noto-sans-v42-700.woff2",
  "/ebook-reader/fonts/noto-sans-v42-regular.woff",
  "/ebook-reader/fonts/noto-sans-v42-regular.woff2",
  "/ebook-reader/fonts/noto-serif-v21-500.woff",
  "/ebook-reader/fonts/noto-serif-v21-500.woff2",
  "/ebook-reader/fonts/noto-serif-v21-700.woff",
  "/ebook-reader/fonts/noto-serif-v21-700.woff2",
  "/ebook-reader/fonts/noto-serif-v21-regular.woff",
  "/ebook-reader/fonts/noto-serif-v21-regular.woff2",
  "/ebook-reader/fonts/shippori-mincho-v14-500.woff",
  "/ebook-reader/fonts/shippori-mincho-v14-500.woff2",
  "/ebook-reader/fonts/shippori-mincho-v14-700.woff",
  "/ebook-reader/fonts/shippori-mincho-v14-700.woff2",
  "/ebook-reader/fonts/shippori-mincho-v14-regular.woff",
  "/ebook-reader/fonts/shippori-mincho-v14-regular.woff2",
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
], m = [
  "/ebook-reader/auth",
  "/ebook-reader/auth/__data.json",
  "/ebook-reader/b",
  "/ebook-reader/b/__data.json",
  "/ebook-reader/manage",
  "/ebook-reader/manage/__data.json",
  "/ebook-reader/settings",
  "/ebook-reader/settings/__data.json",
  "/ebook-reader",
  "/ebook-reader/__data.json"
], h = "1673562834298", v = "/ebook-reader";
function j(e) {
  return Object.entries(e).map(([o, r]) => `${encodeURIComponent(o)}=${encodeURIComponent(r)}`).join("&");
}
const n = self, p = `build:${h}`, x = new Set(m), g = _.concat(w).concat(m), R = new Set(g);
n.addEventListener("install", (e) => {
  n.skipWaiting(), e.waitUntil(caches.open(p).then((o) => o.addAll(g)));
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((o) => {
      const r = o.filter((a) => a !== p);
      return Promise.all(r.map((a) => caches.delete(a)));
    })
  );
});
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const o = new URL(e.request.url), r = o.protocol.startsWith("http"), a = o.hostname === n.location.hostname && o.port !== n.location.port, c = o.host === n.location.host, b = c && R.has(o.pathname), s = e.request.cache === "only-if-cached" && !b;
  if (!(!r || a || s)) {
    if (c && x.has(o.pathname)) {
      const t = new Request(o.pathname);
      e.respondWith(
        l(e.request, !1, p, t)
      );
      return;
    }
    if (c) {
      const t = b ? caches.match(o.pathname).then((d) => d ?? fetch(e.request)) : y(e.request);
      if (t) {
        e.respondWith(t);
        return;
      }
    }
    o.host === "fonts.googleapis.com" && e.respondWith(l(e.request));
  }
});
async function l(e, o = !0, r, a) {
  const c = await caches.open(`other:${h}`), b = new AbortController();
  let s, t = !1, d = !1;
  const f = () => r ? caches.match(a ?? e, { cacheName: r }) : void 0, u = async () => {
    if (!o)
      return f();
    const i = await c.match(e);
    if (i)
      return i;
    if (!!r)
      return f();
  };
  try {
    const i = setTimeout(async () => {
      s = await u(), d = !0, !(!s || t) && b.abort();
    }, 1e3), k = await fetch(e, { signal: b.signal });
    return t = !0, clearTimeout(i), o && c.put(e, k.clone()), k;
  } catch (i) {
    if (d || (s = await u()), s)
      return s;
    throw i;
  }
}
function y(e) {
  const o = new URL(e.url), a = /\/b\/(?<id>\d+)\/?(\?|$)/.exec(o.pathname);
  if (a != null && a.groups)
    return U(`${[[v]]}/b?${j(a.groups)}`);
}
function U(e) {
  return new Response(null, {
    status: 302,
    headers: {
      location: e
    }
  });
}
