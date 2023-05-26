var muñeco = document.querySelector(".contenedormuñeco");
var contenedor = document.querySelector(".contenedor-parrafo");
var mensaje = document.querySelector(".men");
var cajatexto = document.querySelector(".cajatexto");


function botonEncriptar(){
    const textoEncriptado = encriptar(cajatexto.value)
    mensaje.value = textoEncriptado
    cajatexto.value = "";
    ocultarAdelante()
    
}
function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado=stringEncriptado.toLowerCase()
    for(let i=0;i<matrizCodigo.length;i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }

    }
    return stringEncriptado
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(cajatexto.value)
    mensaje.value = textoEncriptado
    cajatexto.value = "";
    ocultarAdelante()
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado=stringDesencriptado.toLowerCase()
    for(let i=0;i<matrizCodigo.length;i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }

    }
    return stringDesencriptado
}

function ocultarAdelante(){
    muñeco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}


function copiar(){
    mensaje.select();
    document.execCommand("copy");
}
btnCopiar=copiar