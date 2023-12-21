function range (start, end, pace = start < end ? 1 : -1){
    let array = []
    if(pace > 0){
        for(start; start <= end; start += pace)
            array.push(start)
    }
    else{
        for(start; start >= end; start += pace)
            array.push(start)
    }
    return array
}

function sum (array){
    let sum = 0
    for(let number of array)
        sum += number 
    return sum
}