const myObject = {
    type: 'object',
    _value: 12,
    get value() {
      return this._value;
    },
    set value(newValue) {
      this._value = newValue;
    },
  };
  
  myObject.incr = function () {
    this.value++;
  };
  
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  
  
  
  
  
  