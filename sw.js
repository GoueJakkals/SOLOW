self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("SOLOW").then((cache) => {
      return cache.addAll(["SOLOW.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
