// (function () {
//       console.log(1);
//       setTimeout(function () { console.log(2) }, 1000);
//       setTimeout(function () { console.log(3) }, 0);
//       console.log(4);
// })();



function palindrome(str) {
      var normalizedStr = str.replace(/\W/g, '').toLowerCase();
      var reverseStr = normalizedStr.split('').reverse().join('');
      return normalizedStr === reverseStr;
}

console.log(palindrome("level"));