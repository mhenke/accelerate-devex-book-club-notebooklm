// Service Worker for Progressive Web App functionality
const CACHE_NAME = 'accelerate-book-club-v1.2';
const STATIC_ASSETS = [
  '/accelerate-devex-book-club-notebooklm/',
  '/accelerate-devex-book-club-notebooklm/assets/main.css',
  '/accelerate-devex-book-club-notebooklm/meetings/',
  '/accelerate-devex-book-club-notebooklm/resources/',
  '/accelerate-devex-book-club-notebooklm/transformation-complete/'
];

// Install event - cache static assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(function() {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(function() {
        // If both cache and network fail, show offline page
        if (event.request.destination === 'document') {
          return caches.match('/accelerate-devex-book-club-notebooklm/offline.html');
        }
      })
  );
});