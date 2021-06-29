// Created with create-flayyer-app@1.18.2

const {config} = require('@flayyer/flayyer-types');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLAYYER_KEY,
  deck: 'flayyer-simple-products',

  // Optionals
  name: 'Flayyer-Simple-Products',
  description: 'Created with create-flayyer-app',
  private: true, // Set to false to deploy publicly to https://flayyer.com/community
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY'] // Declare supported sizes
});
