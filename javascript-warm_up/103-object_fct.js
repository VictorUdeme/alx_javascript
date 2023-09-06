const myObject = {
    type: 'object',
    value: 12,
    incr: function() {
        this.value++
    }
};

console.log(myObject);
myObject.incr();

