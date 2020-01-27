var $ = document.querySelector.bind(document);
var palavra = ['l','i','n','d','s','e','y','s','t','i','r','l','i','n','g'];
var tentativas = new Array();
var letra = new Array();
var bntTentar = $('#bntTentar');
var resposta = $('#resposta');
var entradaLetra = $('#entradaLetra');
var inputResposta = document.querySelectorAll('.inputResposta');
console.log(inputResposta);
bntTentar.addEventListener('click', function() {
    var arrEntrada = palavra.indexOf(entradaLetra.value);

    if (entradaLetra.value != '' && arrEntrada != -1) {       
        while(arrEntrada != -1){            
            letra.push(entradaLetra.value);
            arrEntrada = palavra.indexOf(entradaLetra.value, arrEntrada + 1);
        }
        if (letra.length == 15) {
            resposta.textContent = 'você ganhou';
        }
        console.log('letra', letra);
    } else {
        console.log('tentativas', tentativas);

        if (tentativas.length >= 3) {
            resposta.textContent = 'você perdeu';
            tentativas = [];
            letra = [];
            entradaResposta.value = '';
            entradaLetra.value = '';
            inputResposta.values = '';
        }
    }
});
