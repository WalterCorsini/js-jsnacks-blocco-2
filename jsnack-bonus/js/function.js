/**
 * Description creates a new array with the user's element first
 * @param {array} arrayOriginal
 * @param {string}} newElement
 * @returns {array}
 */
function inserisciInTesta(arrayUser,newElement){
    const arrayNew =[newElement];
    for(let i = 0; i<arrayUser.length; i++){
        // arrayNew[i+1]=arrayUser[i];
        arrayNew.push(arrayUser[i]);
    }
    return arrayNew;
}