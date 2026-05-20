type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const hits = new Map<string, RateLimitRecord>();

export function checkRateLimit(key: string, options: RateLimitOptions) {
  const now = Date.now();
  const existing = hits.get(key);

  if (!existing || existing.resetAt <= now) {
    hits.set(key, {
      count: 1,
      resetAt: now + options.windowMs,
    });

    return {
      allowed: true,
      remaining: options.limit - 1,
      retryAfter: 0,
    };
  }

  if (existing.count >= options.limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  hits.set(key, existing);

  return {
    allowed: true,
    remaining: options.limit - existing.count,
    retryAfter: 0,
  };
}
