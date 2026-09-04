/**
 * Canvas Studio — Service Worker for PWA offline support.
 * Implements cache-first strategy for shell assets,
 * network-first for data, and background sync where possible.
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CACHE_NAME = 'canvas-studio-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/index.css',
        OFFLINE_URL
      ]);
    })
  );
  // Activate immediately
  (self as any).skipWaiting();
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    )
  );
  // Take control immediately
  (self as any).claim();
});

/**
 * Fetch handler: cache-first for assets, network-first for API/data.
 */
self.addEventListener('fetch', (event: FetchEvent) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Strategy: cache-first for same-origin assets
  if (request.url.startsWith(self.location.origin)) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

async function cacheFirst(request: Request): Promise<Response> {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const network = await fetch(request);
    if (network.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, network.clone());
    }
    return network;
  } catch {
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match(OFFLINE_URL);
    }
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function networkFirst(request: Request): Promise<Response> {
  try {
    const network = await fetch(request);
    if (network.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, network.clone());
    }
    return network;
  } catch {
    return caches.match(request);
  }
}

/**
 * Background sync: queue project saves and retry when online.
 */
self.addEventListener('sync', (event: SyncEvent) => {
  if (event.tag === 'project-save') {
    event.waitUntil(savePendingProjects());
  }
});

async function savePendingProjects(): Promise<void> {
  // In a real implementation, read from IndexedDB queue and POST to server.
  // For local-first Canvas Studio, projects auto-save to IndexedDB directly.
  console.log('[CanvasStudio SW] Background sync: project save check');
}

/**
 * Push notification handler (for future collaboration alerts).
 */
self.addEventListener('push', (event: PushEvent) => {
  const data = event.data?.json?.() ?? { title: 'Canvas Studio', body: 'You have a new notification' };
  event.waitUntil(
    (self as any).showNotification(data.title, {
      body: data.body,
      icon: '/icon-192.png',
      badge: '/badge-72.png'
    })
  );
});

/**
 * Notification click handler.
 */
self.addEventListener('notificationclick', (event: NotificationClickEvent) => {
  event.notification.close();
  event.waitUntil(
    (self as any).clients.openWindow(self.location.origin)
  );
});
