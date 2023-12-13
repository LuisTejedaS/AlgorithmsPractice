function perform(word1, word2) {
    if(word1.length !== word2.length){
        return false;
    }

    let wrd1Array = Array.from(word1).sort()
    let wrd2Array = Array.from(word2).sort()

    for (let index = 0 ; index < wrd1Array.length; index++){
        if(wrd1Array[index] !== wrd2Array[index]){
            return false
        }
    }
     
    return true;
}


function perform2(word1, word2) {
    if(word1.length !== word2.length){
        return false;
    }

    let wrd1Array = Array.from(word1).sort().join("");
    let wrd2Array = Array.from(word2).sort().join("");
    return wrd1Array === wrd2Array
}

console.log(perform("anita", "atina"))
console.log(perform("abcba", "ddddd"))
console.log(perform("anita", "atinas"))

console.log(perform2("anita", "atina"))
console.log(perform2("abcba", "ddddd"))
console.log(perform2("anita", "atinas"))