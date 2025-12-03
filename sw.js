const CACHE_NAME = "deutschhero-cache-v2";

const ASSETS = [
  // لا تحط "/" حالياً
  "/index.html",
  "/style.css",
  "/main.js",
  "/icon/icon-192.png",
  "/icon/icon-512.png",
  // لسه بدون أيقونات
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
