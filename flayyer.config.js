// Created with create-flayyer-app@1.18.2

const {config} = require('@flayyer/flayyer-types');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLAYYER_KEY,
  deck: 'simple-products',

  // Optionals
  name: 'Simple Products',
  description: `
    Free deck of templates for products.

    > Default image credits: [Photo by Bogdan Glisik from Pexels](https://www.pexels.com/photo/photo-of-woman-wearing-gray-adidas-hoodie-1661471/)
  `,
  homepage: 'https://flayyer.com',
  keywords: ['flayyer', 'typography', 'tailwind', 'tailwindcss'],
  license: 'MIT',
  private: false, // Set to false to deploy publicly to https://flayyer.com/community
  repository: 'https://github.com/flayyer/flayyer-marketplace-simpleproducts',
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY'] // Declare supported sizes
});
