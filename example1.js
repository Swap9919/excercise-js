// (function () {
//       var a = b = 3;
// })();

// var a = b = 3;  // var a = b and b = 3 , var a = (b = 3) 

(function () {
      var a = b = 3;
})();


console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
console.log(typeof a);
console.log(typeof b);
console.log(b);
console.log(a);  // a is not defined here