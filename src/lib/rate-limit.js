/**
 * Simple in-memory rate limiter.
 * For production with multiple instances, replace with Redis-based solution.
 */
const store = new Map();

const CLEANUP_INTERVAL = 60 * 1000; // 1 minute
const WINDOW_MS = 10 * 60 * 1000;   // 10 minutes
const MAX_REQUESTS = 3;              // max requests per window

// Periodic cleanup of expired entries
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store) {
      if (now - entry.firstRequest > WINDOW_MS) {
        store.delete(key);
      }
    }
  }, CLEANUP_INTERVAL);
}

/**
 * Check rate limit for a given key (e.g. IP hash or email).
 * @param {string} key - Unique identifier
 * @returns {{ allowed: boolean, retryAfterMs: number }}
 */
export function checkRateLimit(key) {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now - entry.firstRequest > WINDOW_MS) {
    store.set(key, { count: 1, firstRequest: now });
    return { allowed: true, retryAfterMs: 0 };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfterMs = WINDOW_MS - (now - entry.firstRequest);
    return { allowed: false, retryAfterMs };
  }

  entry.count++;
  return { allowed: true, retryAfterMs: 0 };
}
