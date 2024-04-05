
function rndGen(min,max,number){
    for(let i = 0; i<number; i++){
        let result = "";
        let rndNumber = 0;
        rndNumber = Math.floor(Math.random() * (max - min +1)+1);
        result.push(rndNumber);
    }

    return result;
}