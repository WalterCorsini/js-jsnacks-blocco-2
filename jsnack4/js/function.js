/**
 * Description deletes the last element of an array
 * @param {array} DelElementToArray
 * @returns {array}
 */
function rimuoviDallaCoda(DelLastElement){
    let result = [];
    for(let i=0; i<DelLastElement.length-1; i++){
        result.push(DelLastElement[i]);
    }
    return result;
}