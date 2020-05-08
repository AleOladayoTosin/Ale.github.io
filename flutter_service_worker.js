'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1e171fe7a7036897c6c16e4a52fe4588",
"assets/assets/fonts/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"assets/assets/fonts/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/assets/images/image_01.png": "a299c520f67de8b3642ff90f910ae81b",
"assets/assets/images/menu.png": "24085b165cf07dbb15583b1fa0ea583d",
"assets/assets/images/preview.png": "0836f96e85698bca319d68169bd3ab38",
"assets/FontManifest.json": "107b00bc03207a1723f76030e3831029",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "33a3d977f9e0d56daedfe68f0adbf8b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "67b799d2856d5289dfd2b95b28e6e8cf",
"icons/Icon-192.png": "1b09d9ad12db8c1fae936d8a98eb134a",
"icons/Icon-512.png": "bfbf6825ee5e5a2c18833831f0b19b74",
"index.html": "5c42f1f38fdd1947b873436fa2e70f67",
"/": "5c42f1f38fdd1947b873436fa2e70f67",
"main.dart.js": "e5011053ad2464579f0d6b04fb309783",
"manifest.json": "bce15d631ac5c1c6b7f317479a98d233"
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
