'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e81f62fa9a09e25bb0feed8e25100e4d",
"index.html": "3702c89b84849de22eea413dcfb7793e",
"/": "3702c89b84849de22eea413dcfb7793e",
"main.dart.js": "2c622ab095a6ad8dbf7fa7a37cfa14bf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8f1a241742120f8f56f1e631f084f9ca",
".git/ORIG_HEAD": "959da5b0f7b5f280261be0db8aaa0f72",
".git/config": "596e6b33a1f531928e64a8ee11e9ff23",
".git/objects/92/5d11422176424063c9fe180adee17102cd55f1": "16375451d9c89197723d919f50b30695",
".git/objects/0c/c63c05ae0f667e2398917ad5a31eaf742eb788": "ca6dfc19f455cd7dc78527f72f8939b8",
".git/objects/0c/d22def6529167a0ed247350425f51f942f40af": "856593be8da4e4d8aed8f8fc3115b32b",
".git/objects/3e/b5c792fd0c81f2af2b8396fb528e6061d0f4d7": "288727bb29505553b0b036f2669190fe",
".git/objects/57/e1efa9468f04e998da134dedd6b22fe5630146": "eed0976e39e4eb946e3d2f5bd1601a63",
".git/objects/3b/d0e50cd09c28b532d225647941441fa7cc2354": "5d3fcb557afd1f20ea1780587cedb6f5",
".git/objects/9e/72fc8b8b57ce580ccf163b19463a3ef46b189a": "5715bae4f5d88a7aa241b8ba6241d73c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/56a95141a9a03fb6945d89775c7bd12a7c1b9a": "3cf9a18ced04a61e5f494024558e3579",
".git/objects/9c/c58c08e7024568d790fb74164ae27487ea006d": "dd740facb54ed73c5a7de9c88813c29e",
".git/objects/9c/a3fc6ae8c5a82ff51ca7d916ea491d00b4796a": "659d9dbb34062a1fea1bebbdec1b3cdd",
".git/objects/b2/5fa2107fbe68fb2662df9ffc017c39c4050e8a": "1fd571cd031a9524ce8e3cb293337711",
".git/objects/d7/a4b043beedae6191cfc47bf866d09669995f13": "56a06cf472e19439b20ddb956cc935d4",
".git/objects/d7/f19233d3024b2badb5cd914d992ad8a6937966": "d8db86589ee69e4894eed5fa9cc3ab3e",
".git/objects/a5/30cb20144b0c41c367ae0cfb9ed0ba799054d0": "725ce0f3bd0d957a3373df6367c359f9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/4ed4369d7f99e75b2323364f697d2f23f7facb": "98ecf66323e102605977a0f5ea7ec946",
".git/objects/c7/56af9a81aa5d6e943baff3cf425642f000406d": "d6271e5e3483fd2a2e00a047bd45a28c",
".git/objects/e3/cae9f0ebe6bdcf159f74f2069935445a96c539": "72224603564a6106caf4f5f5f9e68621",
".git/objects/fe/f08485bf34ca5c4e9b5aefa29d4aff6d20e570": "e9727f6aff9ecbd5df2ff30f2be0e871",
".git/objects/20/2a6491b9271a612ddf0cc497bdee620fd5a566": "74a998850384884193b0421b59ba63fb",
".git/objects/27/1a7fd80c3d7bafc7398c9e646f11539a9fa836": "7be4f5baf8e30424d836a2d1274f4860",
".git/objects/11/896f252533f49c64e0f1af74b0a9eb1a268d4d": "a340b3cd65f48b0e17b79f94ad32015f",
".git/objects/1f/4ed1ff73a5bf9f1d8a1129e975a27512695061": "879fb5a56d45defa2b3210d2bae798d3",
".git/objects/73/d2946fdd7c7495b47df32b7b920b05f8be3deb": "5a00fc4df7d5d3d4f185200583641771",
".git/objects/17/c564c7712c5bb041927823d7416ea6695c0e5c": "ce7a327428dc14bb67be2d5703e3f4bb",
".git/objects/17/fd5b12727b2c262eb14339eb7c49c6be172823": "1d4391ebaa55e4f9dabdd20cc79401dd",
".git/objects/8f/7dd1fd8f2c722d4f2284b3332f5690a6939e05": "04ab3ed0913ed664cde0bb143841cc3f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/4e9390d1805b0ee6d7ca3dbe3839b0e6843dc8": "70edcfd4e31a94ab5dee13e1af07739c",
".git/objects/6e/1e51706acaa14a278033325665bda29b8f89f3": "0d41f2df90d3070fb6445b2687f9cfea",
".git/objects/36/cc18c423c71a8f466063080b5a2d890bc4f095": "9a84b16fcb4612cdf40b2fb49210c25c",
".git/objects/36/e7941010cb363e4e0c756a86b00a4ddf56bc7d": "9ef14bd24ae36a30e40b5618dff6f442",
".git/objects/65/3b8a8522dd01f08212c9f1f53d786adca07fc1": "e4ff76d1f4362a5cb71056445ee1bc9a",
".git/objects/65/a0d913e29bf4f417fdb3f77496ec8ed92957af": "60c899d03c81a71d7615eb265aa8cc38",
".git/objects/54/dfc8ca4041dd1a5d68218f992af2a04e826884": "a7f281662a2242eddc94627231bcd125",
".git/objects/53/5fe269489f9f96317cc7fff595bfdaec7fba24": "17abfe521f1369cd448b33dbf0ad2761",
".git/objects/37/25b3e2e13ddc3503bf550b948f55fc9a1b6179": "bfbf85b6fe844478b1041b357a15c4ee",
".git/objects/6d/ff8d61438921be814f5b7b8d0008575b2d2723": "e254cacfdd2d8489fe5244c24b54c755",
".git/objects/01/e29d697beab407bd75da947f62c650eb1380a5": "f6e8e001a00bf2fdec72c97b8d187129",
".git/objects/39/957996407735b99a6905f529ecf5a157f7d27e": "8ccad853f10009044d5bda875e2e19d3",
".git/objects/99/4826c4a124d807934bf2f7efca695b8b8b5718": "88bf86fba8883dd8909ce94a2f3be505",
".git/objects/99/896451e4b300201e40cae36f3b2d622ce811b1": "c7f59d2a64c45fdde8143b8f99ddd6be",
".git/objects/90/a7bb6258e9b1c7265b766227035d535b693b2d": "ac86ea47a0899e41d364129f088efdaf",
".git/objects/af/165ed20e22bfb0ad5240ae72eab51861dc31cd": "f023444de8e088ce095a0aba634e5d7c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/eeebeeb655c2692a4142100d1dbee536992fd3": "2d9953422f10b0e137ff1197b231fb07",
".git/objects/f9/9031ae4cad03d8aaec9355e3dd4cf8e13db927": "51eb9d26634fee1d4c2470379981d3dc",
".git/objects/f7/c0cebf41081e52930b5bda4ce1dc6eb2a6ee97": "ff2b016bfe8af05938b2f5fda3296747",
".git/objects/e9/20aa99ea1fcb1d4374979c575662d470252f4a": "bd78fae3d5894d0ac2efbe7282628ddd",
".git/objects/e0/0935b9b2893bc62a924ec3e2ddd8e13be815ca": "e79ef7b32325fdde150b56570b30c5a0",
".git/objects/e0/1c886361c2c97f634ab4a6646bdb958364516b": "8b897f3342c7136b653bb17a1581beab",
".git/objects/e0/66d5ec088b3bc574a2fa3f062bcd14a06c869d": "da8e25d7d26cc98923014fb6912ac125",
".git/objects/46/16ee6c65ba1323bb09caeb91e0357c3c066364": "9d2a1e875b5f7c736a19ca6048bd5220",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/e961b81c34c69a1b37bab7557e1b7580a5932a": "c2cb63be07a4e7c90972ab980d02ebd9",
".git/objects/12/5ed42074189477d9b54a9088a570f9b5d97117": "8ec246e1834423f4e80337066f6ce639",
".git/objects/8c/0f85b8117169c586dfcab09f4c0d43ae2bea7f": "0e258bfb0c56c6f5ac4d6a4bb8ceef75",
".git/objects/8e/d0c4c293bc88d139ddc42cab41a6b69efbceb8": "a59c0c5a839ac83441e2fab9dd040ab9",
".git/objects/22/e481a226cc3692eee351b7f5dfbfd9e1155d6f": "0c4d89ee9bdeba0150bc05924dc93f38",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a7da985196a47968a85e20299febf58a",
".git/logs/refs/heads/main": "403b1511f5edc406f45924b9424e5aba",
".git/logs/refs/remotes/origin/HEAD": "ba93cbe5b80bbcbd1994db72d4f84720",
".git/logs/refs/remotes/origin/master": "b37cd8d6e2cbbad71f2b69a47a4f8458",
".git/logs/refs/remotes/origin/main": "b9a0549db1ea609d52ee64b64244c33e",
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
".git/refs/heads/main": "959da5b0f7b5f280261be0db8aaa0f72",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/master": "6e59524d4098fd3d853f12cee836a9e6",
".git/refs/remotes/origin/main": "60b42e14ab4eb573f8cd2a0a1a12ca5a",
".git/index": "df6ed7429917cbb80a15f9e8e642bf4b",
".git/COMMIT_EDITMSG": "310215d0bc2bd3749d0f0a090d2dd8a7",
".git/FETCH_HEAD": "6443f49e3eadcb5104b6cb5a1713dbac",
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
