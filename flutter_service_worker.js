'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e0371468885829d9e686dbe15e2e578f",
".git/config": "3fc0ffd9f8b0b2ff1adbbd272a5b8099",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dad2a8738b625cb6b71956c4fa63a466",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "bf47e2b089de0abbfcbbe5a146ea0655",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "15fa816a797ce9c7053f836f0fdbdec6",
".git/logs/refs/heads/master": "15fa816a797ce9c7053f836f0fdbdec6",
".git/logs/refs/remotes/origin/master": "dbddc30386093fd703c14eab3866ae18",
".git/objects/09/7e6ac9d2b73db020a252ce3b3f3dc5675e60a5": "aef563e85a4ef2fcfc31e210710862f3",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/161f56e59b43bddae14932bada150396ee475f": "531833822d250186924f1489c6017099",
".git/objects/15/5f3c84d31308951b91a2a9027c6e13cc950749": "9bbe76c10eace0c72dd31a4074316190",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/1edbf8177daeb9ed5ee64205b1e70da29e6f2d": "7ef653a805ea876a0b3545ae1063d767",
".git/objects/1a/6d5709e3828278d70f654d8c0b7deb11c08627": "aa84d8d9819187602cdce2807c8144a9",
".git/objects/1e/6d9d2914fa09b41e5047634333cc8be5d08315": "d673d4af9aa231ce5a5d28cb7212f85e",
".git/objects/25/f2a1d1726c9a36218a5523f6fd32d1f8072ad2": "bb4b84a3c5c6a4d31265f08eae76ea05",
".git/objects/3b/6d61b6329f0724de63620cfd15d71ee280c78b": "e291554349a6675f2187df9b9f2078b9",
".git/objects/49/1c92bab189e9502a15c1edddb4e9f349a63db4": "2a55ecf4ec15d232bf7aef8306dfa0aa",
".git/objects/67/8daf9fa67e3cc688944c723dd22acfcac72aba": "1c04d281627dd678ee738164c9e275c2",
".git/objects/70/c80343ea3732bf26c0051fecf892e8df0109de": "0582eab5849456ce47c72f82680471d1",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/94/d29455b1d8fa140e5b4e41a8653ea0dad05144": "2310cadc318ef7c598745caa934cc41f",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a5/87cc6f5e4bddecf99f479b618aca50aa8d052d": "1f46f034bf0a8ded84d4148b55ebd239",
".git/objects/a8/1928e480dcb9f336d6579489a3d557d2dbbec0": "ceaab7efccc24e893eb4ac12220972d6",
".git/objects/ae/a19fbf4b230fe55f7023d2f23e9fa770cd375f": "e803d39fd45622edb71b7e58a6b8bcab",
".git/objects/b1/c580a6837e08e12830d26c05472e2428949529": "772048baec119ed5bf8f32e4e8b1eabd",
".git/objects/bd/9cf9e8a411040a44b1c679f690dfe351fddde5": "0f588582f374612cde05ef84eef3c130",
".git/objects/c7/4231775aaed64494091c69c2cd5730669b2ab6": "6de327d9fad1fba5da0ac1522cf0268a",
".git/objects/c8/bb71aadce530a65c68f032246defb6e420c566": "70548a675f73da29bb42d56adaa22edc",
".git/objects/cc/cc1f4dded89927023746497503dd244ab7bebe": "975dd956824189a61757a3a6dc05b11f",
".git/objects/d4/ce44c76b9c02be65210195d7bf23de733b8192": "364dac04ba6e966489e5fb5c83b11320",
".git/objects/d8/e186a0d4a823f3e5476bc32362d5083897f059": "dc72fc16856df3d7f34312f357c07f67",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/f7/d976133670066dcc31c77300625ff47c084c14": "23fe93118d63cd8d8f60e8bf9b1ccb90",
".git/objects/f9/99052559cbec2bb05cf731aa9a93f6567fbe24": "e680ab5200f449f320646250c89f6af1",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "add46ebc46090e225d0a7f22c6700aeb",
".git/refs/remotes/origin/master": "add46ebc46090e225d0a7f22c6700aeb",
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
"main.dart.js": "041e3cd77df77545b81915d0aea6cf12",
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
