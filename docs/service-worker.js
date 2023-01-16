const w = [
  "/ebook-reader/_app/immutable/assets/_layout-9fbfe096.css",
  "/ebook-reader/_app/immutable/assets/store-ad073191.css",
  "/ebook-reader/_app/immutable/assets/fa-32503cb2.css",
  "/ebook-reader/_app/immutable/assets/_page-b843624e.css",
  "/ebook-reader/_app/immutable/components/pages/_page.svelte-450b9239.js",
  "/ebook-reader/_app/immutable/components/pages/auth/_page.svelte-c786bd8a.js",
  "/ebook-reader/_app/immutable/chunks/format-page-title-256dab77.js",
  "/ebook-reader/_app/immutable/components/error.svelte-e274a964.js",
  "/ebook-reader/_app/immutable/chunks/5-7b35523c.js",
  "/ebook-reader/_app/immutable/chunks/2-12a0aba5.js",
  "/ebook-reader/_app/immutable/chunks/1-5c958862.js",
  "/ebook-reader/_app/immutable/chunks/4-f85e23ba.js",
  "/ebook-reader/_app/immutable/chunks/fonts-e5a631ed.js",
  "/ebook-reader/_app/immutable/chunks/singletons-f66f3112.js",
  "/ebook-reader/_app/immutable/chunks/0-f83afc73.js",
  "/ebook-reader/_app/immutable/chunks/theme-option-f9f8f697.js",
  "/ebook-reader/_app/immutable/chunks/index-b146a6c7.js",
  "/ebook-reader/_app/immutable/chunks/index-876111f7.js",
  "/ebook-reader/_app/immutable/chunks/merged-header-icon-4609f9c6.js",
  "/ebook-reader/_app/immutable/chunks/3-1c6459a4.js",
  "/ebook-reader/_app/immutable/components/pages/manage/_page.svelte-0ebcaf81.js",
  "/ebook-reader/_app/immutable/chunks/stores-708a1552.js",
  "/ebook-reader/_app/immutable/components/pages/_layout.svelte-c7e0d910.js",
  "/ebook-reader/_app/immutable/start-2edf4966.js",
  "/ebook-reader/_app/immutable/chunks/error-handler-df8dffd6.js",
  "/ebook-reader/_app/immutable/chunks/6-8f3fa4c8.js",
  "/ebook-reader/_app/immutable/components/pages/settings/_page.svelte-75c4281d.js",
  "/ebook-reader/_app/immutable/chunks/fa-884f19f7.js",
  "/ebook-reader/_app/immutable/components/pages/b/_page.svelte-f1bb578d.js",
  "/ebook-reader/_app/immutable/chunks/store-34c5451e.js"
], j = [
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
], l = [
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
], h = "1673881916633", v = "/ebook-reader";
function x(e) {
  return Object.entries(e).map(([o, r]) => `${encodeURIComponent(o)}=${encodeURIComponent(r)}`).join("&");
}
const R = "ttu-userfonts", c = self, f = `build:${h}`, y = new Set(l), g = w.concat(j).concat(l), C = new Set(g);
c.addEventListener("install", (e) => {
  c.skipWaiting(), e.waitUntil(caches.open(f).then((o) => o.addAll(g)));
});
c.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((o) => {
      const r = o.filter(
        (a) => a !== f && a !== R
      );
      return Promise.all(r.map((a) => caches.delete(a)));
    })
  );
});
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const o = new URL(e.request.url), r = o.protocol.startsWith("http"), a = o.hostname === c.location.hostname && o.port !== c.location.port, t = o.host === c.location.host, p = t && C.has(o.pathname), n = e.request.cache === "only-if-cached" && !p;
  if (!(!r || a || n)) {
    if (t && y.has(o.pathname)) {
      const s = new Request(o.pathname);
      e.respondWith(
        k(e.request, !1, f, s)
      );
      return;
    }
    if (t && o.pathname.startsWith("/userfonts/")) {
      e.respondWith(
        caches.match(o.pathname).then((s) => s ?? _("/fonts/noto-serif-v21-regular.woff2"))
      );
      return;
    }
    if (t) {
      const s = p ? caches.match(o.pathname).then((d) => d ?? fetch(e.request)) : U(e.request);
      if (s) {
        e.respondWith(s);
        return;
      }
    }
    o.host === "fonts.googleapis.com" && e.respondWith(k(e.request));
  }
});
async function k(e, o = !0, r, a) {
  const t = await caches.open(`other:${h}`), p = new AbortController();
  let n, s = !1, d = !1;
  const b = () => r ? caches.match(a ?? e, { cacheName: r }) : void 0, u = async () => {
    if (!o)
      return b();
    const i = await t.match(e);
    if (i)
      return i;
    if (!!r)
      return b();
  };
  try {
    const i = setTimeout(async () => {
      n = await u(), d = !0, !(!n || s) && p.abort();
    }, 1e3), m = await fetch(e, { signal: p.signal });
    return s = !0, clearTimeout(i), o && t.put(e, m.clone()), m;
  } catch (i) {
    if (d || (n = await u()), n)
      return n;
    throw i;
  }
}
function U(e) {
  const o = new URL(e.url), a = /\/b\/(?<id>\d+)\/?(\?|$)/.exec(o.pathname);
  if (a != null && a.groups)
    return _(`${[[v]]}/b?${x(a.groups)}`);
}
function _(e) {
  return new Response(null, {
    status: 302,
    headers: {
      location: e
    }
  });
}
