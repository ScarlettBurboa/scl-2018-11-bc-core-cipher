window.cipher = {
  encode: (strngText, offsetNumber) => { /* función encode con dos parametros texto a cifrar y número de offset */
    let resulText = ""; /* variable resultado solo ingresada */
        
    for (let i = 0; i < strngText.length; i++){ /** Comienzo del for */
        
        if (strngText[i] === " "){  /**Si el string contiene un espacio este se agregará al resultado */           
            resulText = resulText + " ";            
        } else {
            let codeacsii = strngText.charCodeAt(i) - 65 + offsetNumber; /** devuelve la posición de un caracter en unicode  */
            let formnumber = (String.fromCharCode((codeacsii) % 26 + 65)); /** Números enteros decimales que representan valores ASCII. y lo devuelve en una cadena */
            resulText = resulText + formnumber;
        }        
    }
return  resulText;
  },
  decode: (strngText, offsetNumber) => {
    
    let word = [];
    for (let i = 0; i < strngText.length; i++){
        if (strngText[i] === " "){
            word.push(" ");
        } else if ((strngText.charCodeAt(i) - 65 - offsetNumber) >= 0 || ((strngText.charCodeAt(i) - 65 - offsetNumber) % 26 + 91) > 90){
            word.push(String.fromCharCode((strngText.charCodeAt(i) - 65 - offsetNumber) % 26 + 65));
        } else {
            word.push(String.fromCharCode((strngText.charCodeAt(i) - 65 - offsetNumber) % 26 + 91));
            }
    }
    let unitedWords = word.join("");
  return unitedWords;
  }
};
/**Metodo push:  */
/**Metodo join */
