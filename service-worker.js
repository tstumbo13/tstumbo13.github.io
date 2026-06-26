// FORGE service worker — cache-first for the app shell, network-first for everything else
const CACHE_NAME = 'forge-v1';
const APP_SHELL = [
  '/',
  '/index.html',
  '/app.bundle.js',
  '/manifest.json',
  '/icon-32.png',
  '/icon-72.png',
  '/icon-96.png',
  '/icon-144.png',
  '/icon-152.png',
  '/icon-167.png',
  '/icon-180.png',
  '/icon-192.png',
  '/icon-256.png',
  '/icon-384.png',
  '/icon-512.png',
];

// Install: precache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch strategy:
// - Same-origin GET requests: cache-first, falling back to network, then to cache update
// - Cross-origin (fonts, YouTube embeds, etc.): network-first, no caching
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  if (!sameOrigin) return; // let the network handle external requests (YouTube, Google Fonts)

  event.respondWith(
    caches.match(req).then((cached) => {
      const networkFetch = fetch(req)
        .then((response) => {
          // Update the cache in the background
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return response;
        })
        .catch(() => cached); // if network fails, serve the cached copy

      return cached || networkFetch;
    })
  );
});
