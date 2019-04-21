"use strict";

// task 1
function getSqrt(param) {
  return param.filter(function(item) { return item > 0 } )
    .map(function(value) { return Math.sqrt(value); } );
}

var callResult = getSqrt([2, -5, 1, -2, 0, -3, 2, -14]);
console.log(callResult);

// task 2
function sum(param) {
  var isIncludes = false;

  return param.reduce(function(nextState, item) {
    if (!item) {
      isIncludes = true;
    }

    return !isIncludes ? nextState + item : nextState;
  });

}

sum([4, 3, 5, 5, 0, 4, 8, 6]);

// task 3
function sumArguments(param) {
  var result = 0;

  if (arguments.length < 2) {
    result += param;
  } else {
    for (let i = 0; i < arguments.length; i+=1) {
      result += arguments[i];
    }
  }

  return result;
}

sumArguments(10, 5, 7, 12);
