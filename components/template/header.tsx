import React from 'react';
import {Static} from '@flyyer/variables';
import clsx from 'clsx';

import {useFormatter, isFiniteNumber} from '../../utils';
import {schema} from '../../schema/schema';

type Variables = Static<typeof schema>;

export interface HeaderProps extends Variables {
  locale?: string;
}
export const Header = React.forwardRef<
  HTMLElement,
  HeaderProps & React.ComponentProps<'header'>
>((props, ref) => {
  const {
    font,
    title,
    price,
    description,
    fontSecondary,
    locale,
    currency,
    className,
    ...extra
  } = props;
  const formatter = useFormatter(locale, currency);

  return (
    <header ref={ref} className={clsx(className)} {...extra}>
      <h1
        style={{fontFamily: font}}
        className={clsx(
          'font-semibold leading-tight text-2xl text-gray-800 dark:text-white'
        )}
      >
        {title}
      </h1>
      {formatter && isFiniteNumber(price) && (
        <p
          className={clsx(
            'mt-1 text-gray-900 dark:text-gray-300 text-base font-normal'
          )}
        >
          {price <= Number.EPSILON ? 'Free' : formatter.format(price)}
        </p>
      )}
      <div className="mt-1 space-y-1">
        {description?.split('\n').map((text, i) => (
          <p
            key={i}
            style={{fontFamily: fontSecondary}}
            className={clsx(
              'font-normal',
              'text-sm sq:text-base',
              'text-gray-600 dark:text-gray-500'
            )}
          >
            {text}
          </p>
        ))}
      </div>
    </header>
  );
});
