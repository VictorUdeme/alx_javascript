#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        // If w or h is equal to 0 or not a positive integer, create an empty object
        return {};
      }
      // Initialize instance attributes width and height
      this.width = w;
      this.height = h;
    }
  }
  
  class Square extends Rectangle {
    constructor(size) {
      // Call the constructor of the parent class (Rectangle) using super()
      super(size, size);
    }
  }
  
module.exports = Square
  