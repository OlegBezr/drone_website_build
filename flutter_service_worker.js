'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e81f62fa9a09e25bb0feed8e25100e4d",
"index.html": "6204a25ca0b5829130b418646093c51b",
"/": "6204a25ca0b5829130b418646093c51b",
"main.dart.js": "707d66c8ac3de3ba7875f85163bee228",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8f1a241742120f8f56f1e631f084f9ca",
".git/ORIG_HEAD": "6e59524d4098fd3d853f12cee836a9e6",
".git/config": "596e6b33a1f531928e64a8ee11e9ff23",
".git/objects/0c/c63c05ae0f667e2398917ad5a31eaf742eb788": "ca6dfc19f455cd7dc78527f72f8939b8",
".git/objects/0c/d22def6529167a0ed247350425f51f942f40af": "856593be8da4e4d8aed8f8fc3115b32b",
".git/objects/9e/72fc8b8b57ce580ccf163b19463a3ef46b189a": "5715bae4f5d88a7aa241b8ba6241d73c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/56a95141a9a03fb6945d89775c7bd12a7c1b9a": "3cf9a18ced04a61e5f494024558e3579",
".git/objects/9c/a3fc6ae8c5a82ff51ca7d916ea491d00b4796a": "659d9dbb34062a1fea1bebbdec1b3cdd",
".git/objects/a5/30cb20144b0c41c367ae0cfb9ed0ba799054d0": "725ce0f3bd0d957a3373df6367c359f9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/56af9a81aa5d6e943baff3cf425642f000406d": "d6271e5e3483fd2a2e00a047bd45a28c",
".git/objects/fe/f08485bf34ca5c4e9b5aefa29d4aff6d20e570": "e9727f6aff9ecbd5df2ff30f2be0e871",
".git/objects/20/2a6491b9271a612ddf0cc497bdee620fd5a566": "74a998850384884193b0421b59ba63fb",
".git/objects/27/1a7fd80c3d7bafc7398c9e646f11539a9fa836": "7be4f5baf8e30424d836a2d1274f4860",
".git/objects/73/d2946fdd7c7495b47df32b7b920b05f8be3deb": "5a00fc4df7d5d3d4f185200583641771",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/4e9390d1805b0ee6d7ca3dbe3839b0e6843dc8": "70edcfd4e31a94ab5dee13e1af07739c",
".git/objects/65/3b8a8522dd01f08212c9f1f53d786adca07fc1": "e4ff76d1f4362a5cb71056445ee1bc9a",
".git/objects/6d/ff8d61438921be814f5b7b8d0008575b2d2723": "e254cacfdd2d8489fe5244c24b54c755",
".git/objects/39/957996407735b99a6905f529ecf5a157f7d27e": "8ccad853f10009044d5bda875e2e19d3",
".git/objects/99/896451e4b300201e40cae36f3b2d622ce811b1": "c7f59d2a64c45fdde8143b8f99ddd6be",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f7/c0cebf41081e52930b5bda4ce1dc6eb2a6ee97": "ff2b016bfe8af05938b2f5fda3296747",
".git/objects/e9/20aa99ea1fcb1d4374979c575662d470252f4a": "bd78fae3d5894d0ac2efbe7282628ddd",
".git/objects/e0/66d5ec088b3bc574a2fa3f062bcd14a06c869d": "da8e25d7d26cc98923014fb6912ac125",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8e/d0c4c293bc88d139ddc42cab41a6b69efbceb8": "a59c0c5a839ac83441e2fab9dd040ab9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "122b556a3c86e5709629402c8ad2410a",
".git/logs/refs/heads/main": "68dc39b96030b90e042b8b50af7f38c2",
".git/logs/refs/remotes/origin/HEAD": "ba93cbe5b80bbcbd1994db72d4f84720",
".git/logs/refs/remotes/origin/master": "b37cd8d6e2cbbad71f2b69a47a4f8458",
".git/logs/refs/remotes/origin/main": "7c3af4212e33b34fc138e9f062f9a16e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6e59524d4098fd3d853f12cee836a9e6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/master": "6e59524d4098fd3d853f12cee836a9e6",
".git/refs/remotes/origin/main": "6e59524d4098fd3d853f12cee836a9e6",
".git/index": "d0d2ff9c03e1a606904354ceaa8b356b",
".git/COMMIT_EDITMSG": "5ed6b8bbd06cff64f9f6011fc4d34b47",
".git/FETCH_HEAD": "9df1b6751caab2e54fab2282b6b9e40e",
"assets/AssetManifest.json": "66bb52ad6db4587b98aa799c4fb822f5",
"assets/NOTICES": "6675e283753cc9c4f1e922a18641eaa4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/plane.png": "9571b5c01eec38bd5e6742d6abaf0076",
"assets/assets/images/map.png": "7c00dd10bbb3e1981e82933e2293a72a",
"assets/assets/images/flight.gif": "f2cade18c53f0fe16f9d86fc9d3c0193"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
