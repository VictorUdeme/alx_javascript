#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        // If w or h is equal to 0 or not a positive integer, throw an error
        throw new Error('Invalid input. Width and height must be positive integers.');
      }
      // Initialize instance attributes width and height
      this.width = w;
      this.height = h;
    }
  }
  

module.exports = Rectangle