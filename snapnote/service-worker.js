const CACHE_NAME = 'snapnote-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/snapnote-lightning.svg',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
  '/src/styles/fluent-theme.css',
  '/src/styles/snapnote-layout.css',
  '/src/index.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});
