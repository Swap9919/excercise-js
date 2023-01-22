function foo1() {
      return {
            bar: "hello"
      };
}

function foo2() {
      return   // js automatically inserts semicolon after return so it returns undefined
            {
            bar: "hello"
      };
}

console.log(foo1());
console.log(foo2());



console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 1.3 );


// function areTheNumbersAlmostEqual(num1, num2) {
//       return Math.abs(num1 - num2) < Number.EPSILON;
// }
// console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));



console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);