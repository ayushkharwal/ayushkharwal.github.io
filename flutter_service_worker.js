'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "848681af659fdc10efa08714608127f1",
"assets/AssetManifest.bin.json": "949366b5ca4754dddc63cad8f924233c",
"assets/AssetManifest.json": "e086900129eb03035395229d43c52cd3",
"assets/assets/circle_loader.json": "e466d2919e29da1f4bfab363d199a255",
"assets/assets/icons/github.svg": "366f3200ec4d379ec6889e2bbdccf4fb",
"assets/assets/icons/instagram.svg": "cadfa7dc20269989995631a2a371d4ce",
"assets/assets/icons/linkedin.svg": "0dab79bfaa9f5aa85129e45874f5bd1a",
"assets/assets/icons/twitter.svg": "071e8830844eaf7beb1df029de2c3686",
"assets/assets/icons/wave.svg": "eebece4bb80e5dd85823a6dc9044357e",
"assets/assets/images/bg_img.svg": "9dc5960c7124dc361ba30bd79188b881",
"assets/assets/images/flutter_service_img.png": "93d903468a771b89b9245e330d4d58bf",
"assets/assets/images/full_stack_development.jpeg": "6f7f21d796f87d0519f2f4de822688a8",
"assets/assets/images/main_pic.png": "38ea98fefcfbf4c784ea894669fe4d3d",
"assets/assets/images/nodejs_mongodb_express_service.jpg": "ce6137b553f25894ea39480304644947",
"assets/assets/images/project_images/habit_tracker1.png": "ba631c09e663d2b246778fb09c587465",
"assets/assets/images/project_images/habit_tracker2.png": "0fc78d4173de44c8199761afc6d5f1aa",
"assets/assets/images/project_images/habit_tracker3.png": "cd527ffdf15ccf85b627e9a49b5a9095",
"assets/assets/images/project_images/KT%25201.png": "a5a78c3fc2c7cd4089d73bf6c2fccef2",
"assets/assets/images/project_images/KT%25202.png": "a5e42a17928c7b349e67f4dbc6416d21",
"assets/assets/images/project_images/KT%25203.png": "2748e6bfaf02fc5ee5b74e42b41f1476",
"assets/assets/images/project_images/KT%25204.png": "340a60622bb8dce09c41e2ac42b1f2cf",
"assets/assets/images/project_images/Shoea1.png": "789c7aef18f97e49bd10479a8d197010",
"assets/assets/images/project_images/Shoea2.png": "46b2822585818e38263c0213a4ccc245",
"assets/assets/images/project_images/Shoea3.png": "6d5f79b1e08b2c80fe82da3d8a6c9998",
"assets/assets/images/project_images/Shoea4.png": "dfa14d02034621a6b7cb4689428366e6",
"assets/assets/images/project_images/Starr%2520GEO%25201.png": "1e9641974c3a2ea68b77b36998c8e340",
"assets/assets/images/project_images/Starr%2520GEO%25202.png": "09b4d918feb75d842a17578195e80c0d",
"assets/assets/images/project_images/Starr%2520GEO%25203.png": "36aae4a041d8123f9a1742b7ee7abd93",
"assets/assets/images/project_images/Starr%2520GEO%25204.png": "719ce155fb052f89e5451bcf4ae29bac",
"assets/assets/images/project_images/Starr%2520Key%25201.png": "cbcfa1762522208231b0f56a530cef37",
"assets/assets/images/project_images/Starr%2520Key%25202.png": "a4c37d19534af162700b591a0ee79e86",
"assets/assets/images/project_images/Starr%2520Key%25203.png": "c7fc9d501749ce1ca91b0d4a7f5e5d81",
"assets/assets/images/project_images/Starr%2520Key%25204.png": "aa1f7473d06635733bdf34cb3913f007",
"assets/assets/images/project_images/Starr%2520Key%25205.png": "66eb32f76e8c3cb8c5376bbf89f68b97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9e24c4fc4515faa58bc63db2721fc340",
"assets/NOTICES": "dfd4e9fce6316254f4d9f374885c147c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "4e057eda12866a5b55673b200c2ca372",
"canvaskit/canvaskit.wasm": "59fddb8ae82f2156f987d6fce4584928",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "1a402b5f22e7bf3062421e850d025c3b",
"canvaskit/chromium/canvaskit.wasm": "85712bbf9dc9b01ec7be9a001e834c7c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "3f19809190a2866b6849ce17d97f26cc",
"canvaskit/skwasm.wasm": "b32a9969e65a7f573044b758f53ce3cf",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2989f5445905e244724b5a05c07e7c82",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b5adac6a3a6a87b8d7b9b46261d10e6",
"/": "3b5adac6a3a6a87b8d7b9b46261d10e6",
"main.dart.js": "02358cd5b16d7fe15b6e012960f5c09c",
"manifest.json": "150b0dacfc8235aeff6f0a100acf9a48",
"version.json": "48dd23b51abb368ca9ea7fd41b8beb0f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
