const CACHE_NAME = "cache-v1";
const ASSETS = [
    "/App-de-Gaby/index.html",
    "/App-de-Gaby/script.js",
    "/App-de-Gaby/style.css",
    "/App-de-Gaby/images/planeta.png", 
  ];
  

// Instalar el Service Worker y almacenar archivos en caché
self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log("Archivos almacenados en caché");
        return cache.addAll(ASSETS).catch((err) => {
          console.error("Error al agregar los archivos al caché:", err);
        });
      })
    );
  });
  

// Interceptar las solicitudes y responder desde el caché o red
self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; // Si está en caché, retorna la respuesta
        }
  
        // Si no está en caché, intenta hacer un fetch
        return fetch(event.request)
          .then((networkResponse) => {
            const clonedResponse = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clonedResponse);
            });
            return networkResponse;
          })
          .catch((err) => {
            console.error("Error de red:", err);
            // Fallback a contenido en caché
            if (event.request.headers.get("accept").includes("text/html")) {
              return caches.match("/App-de-Gaby/index.html");
            }
            // Para otros archivos, puedes agregar un fallback
            if (event.request.url.includes(".png")) {
              return caches.match("/App-de-Gaby/images/planeta.png");
            }
          });
      })
    );
  });
  