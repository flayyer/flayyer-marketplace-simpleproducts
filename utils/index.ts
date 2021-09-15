import {useMemo} from 'react';

export function isFiniteNumber(value: any): value is number {
  return Number.isFinite(value);
}

export function useFormatter(
  locale: string | undefined,
  currency: string | undefined,
) {
  return useMemo(() => {
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        currencyDisplay: 'narrowSymbol', // 'narrowSymbol' fails on Safari iOS
      });
    } catch {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        currencyDisplay: 'symbol', // Fallback
      });
    }
  }, [currency, locale]);
}
