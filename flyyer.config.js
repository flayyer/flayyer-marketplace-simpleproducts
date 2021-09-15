// Created with create-flyyer-app@1.18.2

const process = require('process');

const {default: endent} = require('endent');
const {config} = require('@flyyer/types');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLYYER_KEY,
  deck: 'simple-products',

  // Optionals
  name: 'Simple Products',
  description: endent`
    Free deck of templates for products.

    > Default image credits: [Photo by Bogdan Glisik from Pexels](https://www.pexels.com/photo/photo-of-woman-wearing-gray-adidas-hoodie-1661471/)
  `,
  homepage: 'https://flyyer.io',
  keywords: ['flyyer', 'typography', 'tailwind', 'tailwindcss'],
  license: 'MIT',
  private: false, // Set to false to deploy publicly to https://flyyer.io/community
  repository: 'https://github.com/useflyyer/flyyer-marketplace-simpleproducts',
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY'], // Declare supported sizes
});
