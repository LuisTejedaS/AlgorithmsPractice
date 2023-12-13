function perform(phrase) {
    let alfPhraseLength = parseInt(phrase.length / 2);
    let index = 0
    let rigthIndex = phrase.length-1;

    while(index < alfPhraseLength){
        if(phrase.charAt(index) !== phrase.charAt(rigthIndex)){
            if(phrase.charAt(index) === " "){
                index++;
                continue;
               }
               else if(phrase.charAt(rigthIndex) === " "){
                rigthIndex--;
                continue;
               }
            return false
        }
        index++;
        rigthIndex--;
    }

    return true;
}

console.log(perform("anita lava la tina"))
console.log(perform("abcba"))
console.log(perform("i am not a palyndrome"))