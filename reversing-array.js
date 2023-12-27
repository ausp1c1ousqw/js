function reverseArray(array){
    let newArray = []
    for(let value of array)
        newArray.unshift(value)
    return(newArray)
}

function reverseArrayInPlace(array){
    for(i = 0; i < Math.floor(array.length/2); i++){
        let old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old
    }
    return(array)
}
