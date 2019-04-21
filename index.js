"use strict";

// task 1
function filter(param) {
  const positive = [];
  let squareRoot = 0;

  param.filter(function(item) {
    return item > 0 ? positive.push(item) : null;
  });

  positive.map(function(value) {
    squareRoot = Math.sqrt(value);
  });

  console.log(squareRoot);
}
filter([2, -5, 1, -2, 0, -3, 2, -14]);

// task 2
function sum(param) {
  let isIncludes = false;

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
  let result = 0;

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
