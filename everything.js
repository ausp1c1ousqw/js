// function every(array, testFunc) {
//   for(let el of array) {
//     if(!testFunc(el))
//       return false 
//   }
//   return true
// }

function every(array, testFunc) {
 return !array.some(el => !testFunc(el))
}

console.log(every([1, 3, 5], n => n < 10))
console.log(every([2, 4, 16], n => n < 10))