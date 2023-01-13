const _ = [
  "/ebook-reader/_app/immutable/assets/_layout-eb5a125d.css",
  "/ebook-reader/_app/immutable/assets/store-ad073191.css",
  "/ebook-reader/_app/immutable/assets/_page-b843624e.css",
  "/ebook-reader/_app/immutable/assets/fa-32503cb2.css",
  "/ebook-reader/_app/immutable/chunks/stores-b581bec8.js",
  "/ebook-reader/_app/immutable/components/pages/auth/_page.svelte-d50deea4.js",
  "/ebook-reader/_app/immutable/components/pages/_page.svelte-fbaddfa0.js",
  "/ebook-reader/_app/immutable/chunks/singletons-d18d8c8a.js",
  "/ebook-reader/_app/immutable/chunks/format-page-title-91f1c985.js",
  "/ebook-reader/_app/immutable/chunks/index-cfdc196c.js",
  "/ebook-reader/_app/immutable/chunks/0-638dc48a.js",
  "/ebook-reader/_app/immutable/components/error.svelte-f5268613.js",
  "/ebook-reader/_app/immutable/start-7626b66b.js",
  "/ebook-reader/_app/immutable/chunks/2-cbaf8c81.js",
  "/ebook-reader/_app/immutable/chunks/theme-option-f9f8f697.js",
  "/ebook-reader/_app/immutable/chunks/5-aa6bddc0.js",
  "/ebook-reader/_app/immutable/chunks/3-bbe64743.js",
  "/ebook-reader/_app/immutable/chunks/4-35fb26d0.js",
  "/ebook-reader/_app/immutable/chunks/6-1230cd13.js",
  "/ebook-reader/_app/immutable/chunks/index-876111f7.js",
  "/ebook-reader/_app/immutable/chunks/error-handler-df8dffd6.js",
  "/ebook-reader/_app/immutable/chunks/fa-26600f17.js",
  "/ebook-reader/_app/immutable/chunks/merged-header-icon-fd5992a9.js",
  "/ebook-reader/_app/immutable/components/pages/_layout.svelte-2200b505.js",
  "/ebook-reader/_app/immutable/chunks/1-822ec354.js",
  "/ebook-reader/_app/immutable/components/pages/manage/_page.svelte-1ce1b800.js",
  "/ebook-reader/_app/immutable/components/pages/settings/_page.svelte-6970330c.js",
  "/ebook-reader/_app/immutable/components/pages/b/_page.svelte-2787a6f7.js",
  "/ebook-reader/_app/immutable/chunks/store-980e8526.js"
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
], h = "1673628120910", v = "/ebook-reader";
function j(e) {
  return Object.entries(e).map(([o, r]) => `${encodeURIComponent(o)}=${encodeURIComponent(r)}`).join("&");
}
const n = self, b = `build:${h}`, x = new Set(m), g = _.concat(w).concat(m), R = new Set(g);
n.addEventListener("install", (e) => {
  n.skipWaiting(), e.waitUntil(caches.open(b).then((o) => o.addAll(g)));
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((o) => {
      const r = o.filter((a) => a !== b);
      return Promise.all(r.map((a) => caches.delete(a)));
    })
  );
});
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const o = new URL(e.request.url), r = o.protocol.startsWith("http"), a = o.hostname === n.location.hostname && o.port !== n.location.port, c = o.host === n.location.host, d = c && R.has(o.pathname), s = e.request.cache === "only-if-cached" && !d;
  if (!(!r || a || s)) {
    if (c && x.has(o.pathname)) {
      const t = new Request(o.pathname);
      e.respondWith(
        l(e.request, !1, b, t)
      );
      return;
    }
    if (c) {
      const t = d ? caches.match(o.pathname).then((p) => p ?? fetch(e.request)) : y(e.request);
      if (t) {
        e.respondWith(t);
        return;
      }
    }
    o.host === "fonts.googleapis.com" && e.respondWith(l(e.request));
  }
});
async function l(e, o = !0, r, a) {
  const c = await caches.open(`other:${h}`), d = new AbortController();
  let s, t = !1, p = !1;
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
      s = await u(), p = !0, !(!s || t) && d.abort();
    }, 1e3), k = await fetch(e, { signal: d.signal });
    return t = !0, clearTimeout(i), o && c.put(e, k.clone()), k;
  } catch (i) {
    if (p || (s = await u()), s)
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
