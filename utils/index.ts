export function isFiniteNumber(value: any): value is number {
  return Number.isFinite(value);
}

export function useFormatter(
  locale: string | undefined,
  currency: string | undefined
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol'
  });
}
