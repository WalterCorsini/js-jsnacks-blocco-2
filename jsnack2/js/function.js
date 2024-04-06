/**
 * Description : returns the position of the input in the array
 * @param {string} text
 * @param {array} arrayText
 * @returns {number}
 */
function trovaIndice(text, arrayText) {
  let result = -1;
  for (let i = 0; i < arrayText.length; i++) {
    console.log(typeof arrayText[i]);

    if (isNaN(arrayText[i])) {
      if (text.toLowerCase() === arrayText[i].toLowerCase()) {
        result = i;
        return result;
      }
    } else {
        console.log(typeof arrayText[i]);
      if (text == arrayText[i]) {
        result = i;
        console.log(result);
        return result;
      }
    }
  }
  return result;
}
