window.cipher = {
  encode: (strngText, offsetNumber) => {
    let resulText = "";
    const complementext = "<h2>Tu texto cifrado es:</h2>";  
    for (let i = 0; i < strngText.length; i++){
        if (strngText[i] === " "){
            resulText = resulText + " ";            
        } else {
            resulText = resulText + (String.fromCharCode((strngText.charCodeAt(i) - 65 + offsetNumber) % 26 + 65));
        }        
    }
return complementext + '<br>' + resulText + '<br><br><br>';
  },
  decode: (strngText, offsetNumber) => {
    const complementext = "<h2>Tu texto cifrado es:</h2>"; 
    let list = [];
    for (let i = 0; i < strngText.length; i++){
        if (strngText[i] === " "){
            list.push(" ");
        } else if ((strngText.charCodeAt(i) - 65 - offsetNumber) >= 0 || ((strngText.charCodeAt(i) - 65 - offsetNumber) % 26 + 91) > 90){
            list.push(String.fromCharCode((strngText.charCodeAt(i) - 65 - offsetNumber) % 26 + 65));
        } else {
            list.push(String.fromCharCode((strngText.charCodeAt(i) - 65 - offsetNumber) % 26 + 91));
            }
    }
    let unitedWords = list.join("");
  return complementext + '<br>' + unitedWords + '<br>';
  }
};
