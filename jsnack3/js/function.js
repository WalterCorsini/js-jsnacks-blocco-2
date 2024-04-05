/**
 * Description inserts all the values ​​of the array into a string separated by a comma
 * @param {array} arrayText
 * @returns {string}
 */
function stampa(arrayText){
    let result = "";
    for(i = 0; i<arrayText.length; i++){
        result += arrayText[i] + ", ";
    }
    return result;
}