const staticCacheName = 'site-static-V1-0';
const dynamicCacheName = 'site-dynamic-V1-0';
const assets = [
    '/',
    '/index.html',
    '/js/script.js',
    '/css/style2.css',
    '/images/icons/',
    '/pages/fallback.html',
    '/pages/load.html',
    'https://wa.me/message/2LCKJWNAKPCWG1',
    'https://fonts.gstatic.com/s/sourcesanspro/v18/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap',
    'https://wa.me/message/EEDHPGP4IGESM1',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
];

const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {

            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});


self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());

                    limitCacheSize(dynamicCacheName, 10);
                    return fetchRes;
                })
            });
        })
        .catch(() => caches.match('/pages/fallback.html'))
    );
});
