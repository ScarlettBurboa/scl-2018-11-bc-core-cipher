window.onload = () =>{
    const contcipher = document.getElementById('contentresult');
        document.getElementById('actioncipher').addEventListener('click', (eventcipher) =>{
        eventcipher.preventDefault();    
        let strngText = (document.getElementById("processcipher").value).toUpperCase();
        let offsetNumber = parseInt(document.getElementById("processoffset").value);
        contcipher.classList.add('resultext');
        contcipher.innerHTML = cipher.encode(strngText, offsetNumber);

        /*let buttonCopy = document.createElement('button');
        let buttonCopyContent = document.createTextNode('Copiar Texto');
        buttonCopy.appendChild(buttonCopyContent);
        buttonCopy.setAttribute("type","button");
        buttonCopy.classList.add('buttoncopy');
        document.getElementById("contentresult").appendChild(buttonCopy);
        buttonCopy.addEventListener('click', (eventcopy) => {
          eventcopy.preventDefault();
          let textToCopy = document.querySelector('.texttocopy');
          var range = document.createRange();
          range.selectNode(textToCopy);
          window.getSelection().addRange(range);
          try {
            // intentar copiar el contenido seleccionado
            var resultado = document.execCommand('copy');
            console.log(resultado ? 'Email copiado' : 'No se pudo copiar el email');
          } catch(err) {
            console.log('ERROR al intentar copiar el email');
          }
          // eliminar el texto seleccionado
          window.getSelection().removeAllRanges();
          // cuando los navegadores lo soporten, habría
          // que utilizar: removeRange(range)
          })*/
    });
    const contdechiper = document.getElementById('contentresult');
    document.getElementById('actiondecipher').addEventListener('click', (eventdechiper) =>{
        eventdechiper.preventDefault();
        let strngText = (document.getElementById("processcipher").value).toUpperCase();
        let offsetNumber = parseInt(document.getElementById("processoffset").value);
        contdechiper.classList.add('resultext');
        contdechiper.innerHTML = cipher.decode(strngText, offsetNumber);
    }); 

}

