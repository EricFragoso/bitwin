var inicial;
var final;
var alvo; 
var tentativas=[];


function geraNumeros(){   
    inicial = getRandom(config.minInicial, config.maxInicial);
    final = getRandom(config.minFinal, config.maxFinal);
    alvo = getRandom(inicial, final);   
    
    return `O número escondido está entre ${inicial} e ${final}`
}

function getRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let final = Math.floor(Math.random()*(max-min+1))+min; 

    return final
}

function verificaNumero(numero){

    if (numero > alvo){
        atualizaLista("<",numero);
        return ('Menor');        
    }else{
        if (numero<alvo){
            atualizaLista(">",numero);
            return ('Maior')
        }else{
            atualizaLista("=",numero);
            return ('BITWIN')
        }
    }
}

function atualizaLista(numero, sinal){
    tentativas.push(`${numero}${sinal}`)
}


document.getElementById('dialogo').dangerouslySetInnerHTML = geraNumeros();
document.getElementById('btChute').addEventListener("click", function(){
    document.getElementById('dica').dangerouslySetInnerHTML = verificaNumero(document.getElementById('chute').value)
    document.getElementById('lista').dangerouslySetInnerHTML = tentativas.join();
 });

 document.getElementById('btRecomeça').addEventListener("click", function(){
    document.getElementById('dialogo').dangerouslySetInnerHTML = geraNumeros();
    document.getElementById('lista').dangerouslySetInnerHTML = '';
    document.getElementById('dica').dangerouslySetInnerHTML = '';
    document.getElementById('chute').value = '';
    tentativas = [];
 });


