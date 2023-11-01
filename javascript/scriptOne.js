

const respostas = { 
    quest1type1: "c",
    quest1type2: "b",
    quest1type3: "a"
}
   

function resultado(clickedButton) {
    var buttonId = clickedButton.id
    var respostaCorreta = respostas [buttonId]
    var selectedRadio = document.querySelector('input[name="'+buttonId+'"]:checked');
   // alert(selectedRadio.value)

   var respostasEscolhida = selectedRadio.value
   
   if (respostasEscolhida == respostaCorreta) {
        alert("Bom trabalho!")
    
   } else {
     alert("Tente outra vez!")
   }





}





