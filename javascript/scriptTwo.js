
const respostas2 = { 
    quest2type1: "a",
    quest2type2: "c",
    quest2type3: "b"
}

function resultado(clickedButton) {
    var buttonId = clickedButton.id
    var respostaCorreta = respostas2 [buttonId]
     

    var selectedRadio = document.querySelector('input[name="'+buttonId+'"]:checked');
   // alert(selectedRadio.value)
   
   var respostasEscolhida = selectedRadio.value
   
   if (respostasEscolhida == respostaCorreta) {
        alert("Bom trabalho! ")
    
   } else {
     alert("Tente outra vez!")
   }





}