// let obj = { here: { is: "an" }, object: 2 };
// function deepEqual(value1, value2) {
//   if(value1 === value2)
//     return true
//   if(value1 === null || 
//      value2 === null ||
//      typeof(value1) !== 'object' ||
//      typeof(value2) !== 'object')
//     return false
//   if(Object.keys(value1).length !== Object.keys(value2).length)
//     return false
//   for(let key of Object.keys(value1)){
//     if(!Object.keys(value2).includes(key) || !deepEqual(value1.key, value2.key))
//       return false
//   }
//   return true
// }

// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))

function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));