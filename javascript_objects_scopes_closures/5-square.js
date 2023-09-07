#!/usr/bin/node

const Rectangle = require('./Rectangle'); // Imports the Rectangle class from Rectangle.js

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

module.exports = Square; // Exports the Square class

  