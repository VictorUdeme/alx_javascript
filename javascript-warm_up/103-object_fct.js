const myObject = {
    type: 'object',
    value: 12,
    }

    function  incr() {
        this.value++
};

myObject.incr = incr;
console.log(myObject)

delete myObject.incr;


myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);