import {Variable as V} from '@flayyer/variables';

import example from '../static/example.jpeg';

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
