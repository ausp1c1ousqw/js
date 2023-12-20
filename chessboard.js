let string = ''
let size = 9

for(let y = 0; y < size; y++){
    for(let x = 0; x < size; x++){
        if((x + y) % 2 == 0)
        string += '#'
        else
        string += ' '
    }
    string += '\n'
}
console.log(string)