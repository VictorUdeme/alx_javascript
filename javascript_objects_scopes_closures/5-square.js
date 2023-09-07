#!/usr/bin/node

const Rectangle = require('./4-rectangle'); // Imports the Rectangle class from 4-rectangle.js

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

module.exports = Square; // Exports the Square class

  