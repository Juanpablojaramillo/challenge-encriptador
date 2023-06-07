const textArea = document.querySelector(".textArea");
const messageArea = document.querySelector(".messageArea");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value) //encriptando texto//
    messageArea.value = textoEncriptado; //mostrando texto encriptado//
    textArea.value = ""; //borrando texto de entrada//
}

//Creando funcio encriptar//

function encriptar(stringEncriptada){
    let matrizCodigo =  [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0 ; i < matrizCodigo.length; i ++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(messageArea.value) //desencriptando texto//
    textArea.value = textoDesencriptado; //mostrando texto desencriptado//
    messageArea.value = ""; //borrando texto de entrada//
}

function desencriptar(stringDesencriptada){
    let matrizCodigo =  [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0 ; i < matrizCodigo.length; i ++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


//creando funcion boton copiar//
function btnCopiar(){
    copiar(messageArea.value)
}

//creando funcion de copiar//
function copiar(texto) {
    navigator.clipboard.writeText(texto);
}






