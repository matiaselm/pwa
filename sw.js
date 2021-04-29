const cacheName = 'hello-pwa';
const filesToCache = [
    './',
    'index.html',
    'css/style.css',
    'js/main.js',
    'fonts/seaside.ttf',
    'fonts/PlayfairDisplay.otf',
    'images/ocean-view.jpg',
    'images/hello-icon-128.png',
    'images/hello-icon-144.png',
    'images/hello-icon-152.png',
    'images/hello-icon-192.png',
    'images/hello-icon-256.png',
    'images/hello-icon-512.png',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});