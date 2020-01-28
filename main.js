var $ = document.querySelector.bind(document);
var palavra = ['l','i','n','d','s','e','y','s','t','i','r','l','i','n','g'];
var tentativas = new Array();
var letra = new Array();
var bntTentar = $('#bntTentar');
var resposta = $('#resposta');
var entradaLetra = $('#entradaLetra');
var numTentativas = $('.numTentativas');
var letrasTentadas = $('.letrasTentadas');
var letrasErradas = $('.letrasErradas');
var bntNovoJogo = $('#bntNovoJogo');
var imgShow = $('#imgShow');
var inputResposta = document.querySelectorAll('.inputResposta');

bntTentar.addEventListener('click', function() {
    var arrEntrada = palavra.indexOf(entradaLetra.value);

    if (entradaLetra.value != '' && (arrEntrada != -1 && letra.indexOf(entradaLetra.value) == -1)) {

        while(arrEntrada != -1){
            letra.push(entradaLetra.value);
            arrEntrada = palavra.indexOf(entradaLetra.value, arrEntrada + 1);
        }

        switch (entradaLetra.value) {
            case "l":
                inputResposta[0].value = 'l';
                inputResposta[11].value = 'l';
                break;
            case "i":
                inputResposta[1].value = 'i';
                inputResposta[9].value = 'i';
                inputResposta[12].value = 'i';
                break;
            case "n":
                inputResposta[2].value = 'n';
                inputResposta[13].value = 'n';
                break;
            case "d":
                inputResposta[3].value = 'd';
                break;
            case "s":
                inputResposta[4].value = 's';
                inputResposta[7].value = 's';
                break;
            case "e":
                inputResposta[5].value = 'e';
                break;
            case "y":
                inputResposta[6].value = 'y';
                break;
            case "t":
                inputResposta[8].value = 't';
                break;
            case "r":
                inputResposta[10].value = 'r';
                break;
            case "g":
                inputResposta[14].value = 'g';
                break;
        }

        if (letra.length == 15) {
            resposta.textContent = 'você ganhou';
            entradaLetra.value = '';
            entradaLetra.setAttribute('disabled', true);
            bntNovoJogo.classList.remove('d-none');
            imgShow.classList.remove('d-none');
        }

        var novoArr = [...new Set(letra)];

        letrasTentadas.textContent = novoArr;

    } else {
        if (letra.indexOf(entradaLetra.value) == -1) {
            tentativas.push(entradaLetra.value);
            numTentativas.textContent = tentativas.length;
            letrasErradas.textContent = tentativas;
            
            if (tentativas.length >= 3) {
                numTentativas.textContent = 0;
                resposta.textContent = 'você perdeu';
                tentativas = [];
                letra = [];
                entradaLetra.value = '';
                inputResposta[0].value = '';
                inputResposta[1].value = '';
                inputResposta[2].value = '';
                inputResposta[3].value = '';
                inputResposta[4].value = '';
                inputResposta[5].value = '';
                inputResposta[6].value = '';
                inputResposta[7].value = '';
                inputResposta[8].value = '';
                inputResposta[9].value = '';
                inputResposta[10].value = '';
                inputResposta[11].value = '';
                inputResposta[12].value = '';
                inputResposta[13].value = '';
                inputResposta[14].value = '';                
                letrasErradas.textContent = '_';
            } 
        }
    }

    entradaLetra.value = '';
});
