function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  } 
  //original function, needs to be ES2015 version//

  const double = arr => arr.map(val => val * 2);
  //solution. ES2015 version with arrow and const function//

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  } 
  //replace all functions with arrow functions//
  
  const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)
//replaced with arrow functions//