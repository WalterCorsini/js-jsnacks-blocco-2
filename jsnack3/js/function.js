/**
 * Description inserts all the values ​​of the array into a string separated by a comma
 * @param {array} arrayText
 * @returns {string}
 */
function stampa(arrayText){
    let result = "";
    for(i = 0; i<arrayText.length; i++){
        if(i <arrayText.length-1){
        result += arrayText[i] + ", ";
        } else {
        result += arrayText[i];

        }
    }
    return result;
}