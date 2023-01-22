function sum(x) {
      if (arguments.length == 2) {
            return arguments[0] + arguments[1];
      } else {
            return function (y) {
                  return x + y;
            }
      }
}


console.log(sum(3,4));
console.log(sum(3)(4));