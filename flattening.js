let arrays = [[1, 2, 3], [4, 5], [6]];
let array = arrays.reduce((acc, item) => {
 return acc.concat(item)
})
console.log(array)