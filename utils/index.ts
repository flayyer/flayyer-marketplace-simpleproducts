export function isFiniteNumber(value: any): value is number {
  return Number.isFinite(value);
}

export function useFormatter(
  locale: string | undefined,
  currency: string | undefined
) {
  try {

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'symbol' // 'narrowSymbol' fails on Safari iOS
    });
  } catch {
    return null
  }
}
