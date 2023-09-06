function addMeMaybe(number, theFunction) {
    let incrementedNumber = number + 1;
    theFunction(incrementedNumber);
  }
  
  module.exports = addMeMaybe;
  