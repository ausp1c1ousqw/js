function beanCounting(string){
    let numberOfB = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] == 'B')
            numberOfB++
    }
    return numberOfB
}
function characterCounting(string, characterToFind){
    let numberOfCharacters = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] == characterToFind)
        numberOfCharacters++
    }
    return numberOfCharacters
}
