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
  
    print() {
      if (this.width === undefined || this.height === undefined) {
        console.log('Empty Rectangle');
      } else {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      }
    }
  }
  

module.exports = Rectangle
