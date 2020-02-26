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
    console.log('[ServiceWorker] Install');
    
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});



/* Serve cached content when offline or new (if there are) when online. STALE-WHILE-REVALIDATE */
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);

  e.respondWith(
      
    /*caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
*/
      caches.open('CACHE_NAME').then(function(cache) {
      return cache.match(e.request).then(
          function(response) {
              if(e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin'){
              var fetchPromise = fetch(e.request).then(
                  function(networkResponse) {
                    cache.put(e.request, networkResponse.clone());
                      return networkResponse;
              })
              }
              return response || fetchPromise;
      })
    })
  );
});


self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate');
  //Remove previous cached data from disk.
e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
);
  self.clients.claim();
});

