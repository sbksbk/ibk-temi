self.addEventListener('install', function (e) {
  console.log('[Service Worker] 설치 완료');
  e.waitUntil(
    caches.open('ibk-ticket-cache').then(function (cache) {
      return cache.addAll([
        './',
        './index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
