function incrementAndCall(number, theFunction) {
    let incrementedNumber = number + 1;
    theFunction(incrementedNumber);
  }
  
  module.exports = incrementAndCall;
  