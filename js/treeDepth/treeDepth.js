function perform(value){
    let depth = 0;
    let iterateDepth = 0
    
    for(index = 0; index < value.length; index++){

        if(value[index] === "("){
            iterateDepth++;
            depth = depth < iterateDepth? iterateDepth: depth
        }
        else if(value[index] === ")"){
            iterateDepth--;
        }
    }
    return depth;
}


console.log(perform("(0,0)"))//1
console.log(perform("((0,0),0)"))//2
console.log(perform("((0,0),(((0,0))))"))//4