#!/usr/bin/node

const Square1 = require('/.5-square.js');
class Square extends Square1 {
    charPrint(c) {
      if (c === undefined) {
        c = 'X';
      }
  
      for (let i = 0; i < this.size; i++) {
        console.log(c.repeat(this.size));
      }
    }
  }
  
  module.exports = Square;