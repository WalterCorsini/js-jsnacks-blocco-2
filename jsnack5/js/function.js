/**
 * Description deletes the first element of an array
 * @param {array} DelElementToArray
 * @returns {array}
 */
function rimuoviDallaTesta(DelFirstElement){
    let result = [];
    for(let i=1; i<DelFirstElement.length; i++){
        result.push(DelFirstElement[i]);
    }
    return result;
}