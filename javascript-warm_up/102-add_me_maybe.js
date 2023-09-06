let incrementAndCall = (number, theFunction) => {
    number++;
    theFunction(number);
  };
  
  export { incrementAndCall };
  