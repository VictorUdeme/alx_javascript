#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            this.width = 0;
            this.height = 0;
        } else {
            this.width = w;
            this.height = h;
        }
    }

    print() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                console.log('X', end='');
            }
            console.log();
        }
    }
}

module.exports = Rectangle
