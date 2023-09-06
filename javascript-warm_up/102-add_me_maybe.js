let incrementAndCall = (number, theFunction) => {
    number++;
    theFunction(number);
  };
  
  module.exports = {
    incrementAndCall: incrementAndCall
}