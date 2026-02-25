const CACHE_NAME = 'jornadas-atm-v3'; // Versión actualizada para forzar refresco
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './ESCUDO ATM.png',
  './Jornadas ATM.png', // Añadida la imagen correcta a la caché
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});