function arrayToList (array) {
    let list = null
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
      }
    return list
}

function listToArray (list) {
    let array = []
    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array
}

function prepend (elem, list) {
    list = {
        value: elem,
        rest: list
    }
    return list
}

function nth (list, pos) {
    return (listToArray (list))[pos]
}

function recursiveNth (list, value) {
    let array = listToArray (list)
    for(let elem = 0; elem < array.length; elem++){
        if(array[elem] == value)
            return elem       
    }
}