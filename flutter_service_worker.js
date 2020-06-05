'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "1c0f1ca61d45fb0961fd01dc4590a0cd",
"/": "1c0f1ca61d45fb0961fd01dc4590a0cd",
"main.dart.js": "29ea6eb410fdec60779009aebf61de78",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "30441d2c4087df826da628276ea61f37",
"assets/LICENSE": "7cf55a335964bd63f6706ae7eadaac7b",
"assets/AssetManifest.json": "9c4d2b9a451b3fedbe7bfa96d7bd2a73",
"assets/FontManifest.json": "114dfbb103920ebc541b5093a70bf049",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/Foul.ttf": "0adeeb0989e70d966e023cd8c2825a5e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Krungthep.ttf": "736cf5b08b01082a3645e14038868e20"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
