// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    console.log(str)
    
    let arrWords = str.split(' ')
    console.log(arrWords)
    
    // Converti cada palavra em um array, dei um reverse em cada letra e juntei a array
    let tpm = arrWords.map(word => word.split('').reverse().join(''))
    console.log(tpm)

    return tpm.join(' ')
}


// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.