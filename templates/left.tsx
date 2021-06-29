import React from 'react';
import {Variable as V, Validator, Static} from '@flayyer/variables';
import {TemplateProps} from '@flayyer/flayyer-types';
import {useGoogleFonts} from '@flayyer/use-googlefonts';
import {proxy} from '@flayyer/proxy';
import clsx from 'clsx';

import '../styles/tailwind.css';

import example from '../static/example.jpeg';

import {Layer} from '../components/layers';
import {isFiniteNumber} from '../utils';

/**
 * Export to enable variables UI on Flayyer.com
 */
export const schema = V.Object({
  title: V.String({default: 'Gray hoodie'}),
  description: V.String({
    default: `A sweatshirt is fashioned out of a thick, usually cotton jersey material.`
  }),
  image: V.Image({
    title: 'Image',
    default: example,
    examples: [example]
  }),
  currency: V.Optional(
    V.String({default: 'USD', examples: ['USD', 'EUR', 'CLP', 'RUB']})
  ),
  price: V.Optional(V.Number({examples: ['59.99']})),
  font: V.Optional(
    V.Font({
      default: 'Inter',
      examples: ['Inter', 'Oswald', 'Dela Gothic One', 'Lato'],
      description: "Title's font"
    })
  ),
  fontSecondary: V.Optional(
    V.Font({
      default: 'Inter',
      examples: ['Inter', 'Arvo', 'Open Sans'],
      description: "Description's font"
    })
  )
});
type Variables = Static<typeof schema>;

const validator = new Validator(schema);

// Make sure to 'export default' a React component
export default function MainTemplate(props: TemplateProps<Variables>) {
  const {width, height, variables, locale} = props;

  const {
    data: {title, description, image, currency, price, font, fontSecondary}
  } = validator.parse(variables);

  const fonts = [font, fontSecondary].filter<string>(Boolean as any);
  const googleFont = useGoogleFonts(
    fonts.map((f) => ({
      family: f,
      styles: Array.from(new Set([200, 400, 600, 800]))
    }))
  );

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol'
  });

  return (
    <Layer
      className={clsx('overflow-hidden', {
        dark: 0,
        'flayyer-ready': googleFont.status
      })}
    >
      <Layer className="flex flex-row items-stretch bg-white">
        <div className="flex-none w-2/5 ">
          <img className="w-full h-full object-cover" src={proxy(image)} />
        </div>

        <div className="hidden banner:block flex-none w-3/5 p-4 sq:p-5 story:py-storysafe">
          <h1
            style={{fontFamily: font}}
            className={clsx(
              'font-semibold text-2xl leading-tight text-gray-800'
            )}
          >
            {title}
          </h1>
          {isFiniteNumber(price) && (
            <p className={clsx('mt-1 text-gray-900 sq:text-base font-normal')}>
              {price <= Number.EPSILON ? 'Free' : formatter.format(price)}
            </p>
          )}
          <div className="mt-1 space-y-1">
            {description?.split('\n').map((text, i) => (
              <p
                key={i}
                style={{fontFamily: fontSecondary}}
                className={clsx(
                  'font-normal text-sm sq:text-base text-gray-600'
                )}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </Layer>
    </Layer>
  );
}
