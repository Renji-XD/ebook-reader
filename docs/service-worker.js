const w = [
  "/ebook-reader/_app/immutable/assets/_layout-458bc673.css",
  "/ebook-reader/_app/immutable/assets/_page-b843624e.css",
  "/ebook-reader/_app/immutable/assets/store-ad073191.css",
  "/ebook-reader/_app/immutable/assets/fa-32503cb2.css",
  "/ebook-reader/_app/immutable/chunks/5-f4bae7ed.js",
  "/ebook-reader/_app/immutable/components/error.svelte-e274a964.js",
  "/ebook-reader/_app/immutable/chunks/4-59054113.js",
  "/ebook-reader/_app/immutable/chunks/1-5c958862.js",
  "/ebook-reader/_app/immutable/chunks/stores-708a1552.js",
  "/ebook-reader/_app/immutable/chunks/theme-option-f9f8f697.js",
  "/ebook-reader/_app/immutable/chunks/fonts-e5a631ed.js",
  "/ebook-reader/_app/immutable/chunks/index-1e1f1562.js",
  "/ebook-reader/_app/immutable/chunks/2-09735e3f.js",
  "/ebook-reader/_app/immutable/start-16de4971.js",
  "/ebook-reader/_app/immutable/chunks/3-1c6459a4.js",
  "/ebook-reader/_app/immutable/chunks/6-14bd7f28.js",
  "/ebook-reader/_app/immutable/chunks/singletons-f66f3112.js",
  "/ebook-reader/_app/immutable/components/pages/_page.svelte-ea52fa46.js",
  "/ebook-reader/_app/immutable/chunks/0-056caec4.js",
  "/ebook-reader/_app/immutable/components/pages/auth/_page.svelte-c786bd8a.js",
  "/ebook-reader/_app/immutable/chunks/format-page-title-256dab77.js",
  "/ebook-reader/_app/immutable/chunks/index-876111f7.js",
  "/ebook-reader/_app/immutable/components/pages/_layout.svelte-826ea343.js",
  "/ebook-reader/_app/immutable/chunks/error-handler-df8dffd6.js",
  "/ebook-reader/_app/immutable/chunks/merged-header-icon-56b247b6.js",
  "/ebook-reader/_app/immutable/chunks/fa-884f19f7.js",
  "/ebook-reader/_app/immutable/components/pages/manage/_page.svelte-0cd93b79.js",
  "/ebook-reader/_app/immutable/components/pages/settings/_page.svelte-355f0b4f.js",
  "/ebook-reader/_app/immutable/components/pages/b/_page.svelte-32844897.js",
  "/ebook-reader/_app/immutable/chunks/store-773a7b08.js"
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
], h = "1673885174597", v = "/ebook-reader";
function x(e) {
  return Object.entries(e).map(([o, r]) => `${encodeURIComponent(o)}=${encodeURIComponent(r)}`).join("&");
}
const R = "ttu-userfonts", i = self, b = `build:${h}`, y = new Set(l), g = w.concat(j).concat(l), C = new Set(g);
i.addEventListener("install", (e) => {
  i.skipWaiting(), e.waitUntil(caches.open(b).then((o) => o.addAll(g)));
});
i.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((o) => {
      const r = o.filter(
        (a) => a !== b && a !== R
      );
      return Promise.all(r.map((a) => caches.delete(a)));
    })
  );
});
i.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const o = new URL(e.request.url), r = o.protocol.startsWith("http"), a = o.hostname === i.location.hostname && o.port !== i.location.port, t = o.host === i.location.host, p = t && C.has(o.pathname), n = e.request.cache === "only-if-cached" && !p;
  if (!(!r || a || n)) {
    if (t && y.has(o.pathname)) {
      const s = new Request(o.pathname);
      e.respondWith(
        k(e.request, !1, b, s)
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
  const f = () => r ? caches.match(a ?? e, { cacheName: r }) : void 0, u = async () => {
    if (!o)
      return f();
    const c = await t.match(e);
    if (c)
      return c;
    if (!!r)
      return f();
  };
  try {
    const c = setTimeout(async () => {
      n = await u(), d = !0, !(!n || s) && p.abort();
    }, 1e3), m = await fetch(e, { signal: p.signal });
    return s = !0, clearTimeout(c), o && t.put(e, m.clone()), m;
  } catch (c) {
    if (d || (n = await u()), n)
      return n;
    throw c;
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
