export function isFiniteNumber(value: any): value is number {
  return Number.isFinite(value);
}
