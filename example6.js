var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1);
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice());


// arr1 = J,o,h,n
// arr2 = n,h,o,j 
// arr3 = j,o,n,e,s 
// [n,h,o,j , [ j,o,n,e,s]]
