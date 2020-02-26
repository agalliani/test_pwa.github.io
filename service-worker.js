var CACHE_NAME= 'test-pwa';
var FILES_TO_CACHE= [
'index.html',
  'main.dart.js',
  'main.dart.js.map',
  'assets/AssetManifest.json',
  'assets/FontManifest.json',
  'assets/fonts/MaterialIcons-Regular.ttf',
  'assets/packages/cupertino_icons/assets/CupertinoIcons.ttf'
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

/* Serve cached content when offline or new (if there are) when online. STALE-WHILE-REVALIDATE */
self.addEventListener('fetch', function(e) {
  e.respondWith(
      
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

    /*  caches.open('CACHE_NAME').then(function(cache) {
      return cache.match(event.request).then(function(response) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
});
*/