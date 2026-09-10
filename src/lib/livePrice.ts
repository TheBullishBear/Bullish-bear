/**
 * Deterministic "live" price ticker.
 *
 * Every stock can have a price range (min/max) for a round. Instead of storing
 * a new price every second, we derive the price from a hash of
 * (stockId + round + current second) so that every device shows the exact
 * same number at the same second.
 */

const TICK_MS = 1000;

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
}

export interface PriceRange {
  price: number;
  min_price?: number | null;
  max_price?: number | null;
}

export function getTick(now: number = Date.now()): number {
  return Math.floor(now / TICK_MS);
}

/**
 * Returns the price to display/trade at for this stock right now.
 * Falls back to the fixed round price when no range is configured.
 */
export function getLivePrice(
  stockId: string,
  round: number,
  range: PriceRange,
  tick: number = getTick()
): number {
  const min = range.min_price;
  const max = range.max_price;

  if (min == null || max == null || !(max > min)) {
    return range.price;
  }

  // Two blended waves keep the movement smooth-ish instead of pure noise.
  const a = hash(`${stockId}:${round}:${tick}`);
  const b = hash(`${stockId}:${round}:${tick - 1}`);
  const r = a * 0.65 + b * 0.35;

  return Math.round((min + (max - min) * r) * 100) / 100;
}
