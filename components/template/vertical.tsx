import React from 'react';
import {useFitText} from '@flyyer/use-fit-text';
import {GoogleFontsStatus, useGoogleFonts} from '@flyyer/use-googlefonts';
import {proxy} from '@flyyer/proxy';
import {Static} from '@flyyer/variables';
import clsx from 'clsx';

import {schema} from '../../schema/schema';
import {Layer} from '../layers';
import {Header} from './header';

type Variables = Static<typeof schema>;

export interface BaseTemplateProps extends Variables {
  locale?: string;
  reverse: boolean;
}
export function TemplateVertical(
  props: BaseTemplateProps & React.ComponentProps<typeof Layer>,
) {
  const {
    font,
    fontSecondary,
    locale,
    currency,
    title,
    description,
    price,
    image,
    // No variables
    reverse,
    className,
    ...extra
  } = props;

  const fonts = [font, fontSecondary].filter<string>(Boolean as any);
  const googleFont = useGoogleFonts(
    fonts.map((f) => ({
      family: f,
      styles: Array.from(new Set([200, 400, 600, 800])),
    })),
  );

  const {fontSize, ref, isCalculating} = useFitText(
    {maxFontSize: 100 /* 100% */, resolution: 6},
    [title, description, price, currency, font, fontSecondary],
  );

  return (
    <Layer
      className={clsx(
        'overflow-hidden subpixel-antialiased max-h-screen flex items-stretch',
        className,
        {
          'flyyer-wait':
            isCalculating || googleFont.status === GoogleFontsStatus.LOADING,
        },
      )}
      {...extra}
    >
      <Layer className="bg-white dark:bg-black" style={{zIndex: -10}} />

      <div className="flex-none banner:h-3/5">
        <img className="w-full h-full object-cover" src={proxy(image)} />
      </div>

      <div
        className={clsx(
          'hidden banner:block',
          'flex-none h-2/5 px-3 py-2 sq:px-4 sq:py-4',
          reverse ? 'story:pt-storysafe' : 'story:pb-storysafe',
        )}
      >
        <Header
          ref={ref}
          style={{fontSize}}
          className={clsx('w-full h-full')}
          {...{
            font,
            title,
            price,
            description,
            fontSecondary,
            locale,
            currency,
            image,
          }}
        />
      </div>
    </Layer>
  );
}
