import { unstable_cache } from 'next/cache';

/** Keep this aligned with the literal `revalidate = 3600` exports on each route. */
export const REVALIDATE_SECONDS = 3600;

/**
 * Deep-clone Contentful entries into plain JSON.
 * Shared links are copied. A link that points back at an ancestor is dropped
 * so the result can be stored in the Next.js data cache.
 */
export const toPlain = <T>(value: T): T => {
  const walk = (input: unknown, ancestors: WeakSet<object>): unknown => {
    if (input === null || typeof input !== 'object') return input;

    if (ancestors.has(input as object)) return undefined;

    ancestors.add(input as object);

    if (Array.isArray(input)) {
      const copy = input.map((item) => walk(item, ancestors));
      ancestors.delete(input);
      return copy;
    }

    const copy: Record<string, unknown> = {};

    for (const [key, nested] of Object.entries(input as Record<string, unknown>)) {
      if (typeof nested === 'function') continue;

      const walked = walk(nested, ancestors);

      if (walked !== undefined) copy[key] = walked;
    }

    ancestors.delete(input as object);

    return copy;
  };

  return walk(value, new WeakSet()) as T;
};

export const contentfulCache = <Args extends unknown[], Result>(
  query: (...args: Args) => Promise<Result>,
  key: string[]
): ((...args: Args) => Promise<Result>) => {
  const cached = unstable_cache(
    (async (...args: Args) => {
      const result = await query(...args);

      return toPlain(result);
    }) as (...args: unknown[]) => Promise<Result>,
    key,
    { revalidate: REVALIDATE_SECONDS, tags: ['contentful'] }
  );

  return cached;
};
