
const botonEncriptar = document.getElementById('boton_encriptar');
const botonDesencriptar = document.getElementById('boton_desencriptar');
const botonCopiar = document.getElementById('boton_copiar');
const botonBorrar = document.getElementById('boton_borrar');

const entradaUsuario = document.getElementById('entrada_texto');
const salidaUsuario = document.getElementById('salida_texto');
const seccionPrevia = document.getElementById('esperando');
const seccionEncriptar = document.getElementById('ejecutando');


let inicio = false;

entradaUsuario.focus();

/**
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"
*/



botonEncriptar.addEventListener('click', () => {
    const mensajeEncriptado = encriptar(entradaUsuario.value);

    if (!inicio) {
        seccionPrevia.classList.add('no_mostrar');
        seccionEncriptar.classList.remove('no_mostrar');
    }

    salidaUsuario.value = mensajeEncriptado;

});

botonDesencriptar.addEventListener('click', () => {
    const mensajeDesencriptado = desencriptar(entradaUsuario.value);

    if (!inicio) {
        seccionPrevia.classList.add('no_mostrar');
        seccionEncriptar.classList.remove('no_mostrar');
    }

    salidaUsuario.value = mensajeDesencriptado;

});

botonCopiar.addEventListener('click', () => {

    const textoCopiado = salidaUsuario.value;

    navigator.clipboard.writeText(textoCopiado)


});

botonBorrar.addEventListener('click', () => {
    entradaUsuario.value = "";
    seccionEncriptar.classList.add('no_mostrar');
    seccionPrevia.classList.remove('no_mostrar');
});


function encriptar(entrada) {

    const busqueda = new RegExp('[aeiou]', 'g');

    const resultado = entrada.replaceAll(busqueda, (letra) => {
        if (letra === 'e') {
            return "enter";

        } else if (letra === 'i') {
            return "imes";

        } else if (letra === 'a') {
            return "ai";

        } else if (letra === 'o') {
            return "ober";

        } else if (letra === 'u') {
            return "ufat";

        }
    });
    return resultado;
}

function desencriptar(entrada) {

    const busqueda = new RegExp('enter|imes|ai|ober|ufat', 'g');

    const resultado = entrada.replaceAll(busqueda, (letra) => {
        if (letra === 'enter') {
            return "e";

        } else if (letra === 'imes') {
            return "i";

        } else if (letra === 'ai') {
            return "a";

        } else if (letra === 'ober') {
            return "o";

        } else if (letra === 'ufat') {
            return "u";

        }
    });
    return resultado;
}