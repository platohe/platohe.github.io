/**
 * TextStudio Service Worker
 * Enables offline support, push notifications, and background sync.
 *
 * This is a minimal service worker for demonstration. For production:
 * - Use workbox for automatic caching
 * - Add push notification handling
 * - Implement background sync for offline changes
 */

const CACHE_NAME = 'textstudio-v1'
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/favicon.svg',
]

// Install event — cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    )
})

// Activate event — clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            )
        ).then(() => self.clients.claim())
    )
})

// Fetch event — serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Return cached version, but also update in background
                    const fetchPromise = fetch(event.request)
                        .then((networkResponse) => {
                            if (networkResponse.ok) {
                                const responseClone = networkResponse.clone()
                                caches.open(CACHE_NAME).then((cache) => {
                                    cache.put(event.request, responseClone)
                                })
                            }
                        })
                        .catch(() => {}) // Ignore network errors
                    return cachedResponse
                }
                return fetch(event.request).then((response) => {
                    // Cache successful responses
                    if (response.ok) {
                        const responseClone = response.clone()
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone)
                        })
                    }
                    return response
                }).catch(() => {
                    // Return offline fallback for navigation requests
                    if (event.request.destination === 'document') {
                        return caches.match('/index.html')
                    }
                    return new Response('Offline', { status: 503 })
                })
            })
    )
})

// Push notification handler
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New message',
        icon: '/favicon.svg',
        badge: '/favicon.svg',
        vibrate: [200, 100, 200],
        actions: [
            { action: 'open', title: 'Open' },
            { action: 'dismiss', title: 'Dismiss' },
        ],
    }

    event.waitUntil(
        self.registration.showNotification('TextStudio', options)
    )
})

// Notification click handler
self.addEventListener('notificationclick', (event) => {
    event.notification.close()

    if (event.action === 'open') {
        event.waitUntil(
            self.clients.openWindow('/')
        )
    }
})

// Background sync handler
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-changes') {
        event.waitUntil(syncChanges())
    }
})

async function syncChanges() {
    // Get queued changes from IndexedDB
    const db = await openDatabase()
    const changes = await db.getAll('pending-sync')

    // Process each change
    for (const change of changes) {
        try {
            await syncToServer(change)
            await deleteChange(db, change.id)
        } catch (err) {
            console.error('Sync failed:', err)
            // Re-queue on failure
            break
        }
    }
}

function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('textstudio-sync', 1)
        request.onupgradeneeded = (event) => {
            const db = event.target.result
            if (!db.objectStoreNames.contains('pending-sync')) {
                db.createObjectStore('pending-sync', { keyPath: 'id' })
            }
        }
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })
}

async function syncToServer(change) {
    // POST to sync server
    const response = await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(change),
    })
    if (!response.ok) throw new Error('Sync failed')
}

async function deleteChange(db, id) {
    const tx = db.transaction('pending-sync', 'readwrite')
    await tx.objectStore('pending-sync').delete(id)
}

// Tell the service worker to control all clients immediately
self.addEventListener('message', (event) => {
    if (event.data === 'skip-waiting') {
        self.skipWaiting()
    }
})
