/**
 * Description: counts the elements of an array
 * @param {array} arrayLength
 * @returns {number}
 */
function contaElementi(countArray){
    let result = 0;
    for(let i = 0; i <countArray.length; i++){
        result += 1;
    }
    return result;
}