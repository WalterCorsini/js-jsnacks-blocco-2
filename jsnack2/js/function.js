/**
 * Description : returns the position of the input in the array
 * @param {string} text
 * @param {array} arrayText
 * @returns {number}
 */
function trovaIndice(text, arrayText) {
  const result = -1;
  for (let i = 0; i < arrayText.length; i++) {
      if (isNaN(arrayText[i]) && text.toLowerCase() === arrayText[i].toLowerCase()) {
        return i;
      }
      if (text == arrayText[i]) {
        return i;
      }
    }
    return result;
  }

