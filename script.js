function TratarErro(){
    try{valorInexistente
    }catch(e){
        console.log("Ocorreu um erro:  "  + e.message)
    }
}
function Continuar(){
    console.log("Continue...");
}
TratarErro();
Continuar();

function Calcular(){
    const txtnumero = document.querySelector(' .inNumero').value
    const res = document.querySelector('.res')

    }

     
   