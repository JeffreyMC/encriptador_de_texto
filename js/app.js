
/*/FUNCIONES*/
function desencriptar(palabraEncriptada){
    let palabra_desencriptada = palabraEncriptada;

    const reglas = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u' 
    };

    //iterar las reglas con la palabra
    for(let key in reglas){
        if(reglas.hasOwnProperty(key)){
            let regex = new RegExp(key, 'g');
            palabra_desencriptada = palabra_desencriptada.replace(regex, reglas[key]);
        }
    }
    return palabra_desencriptada;
}

function encriptar(palabra){
    let palabra_encriptada = '';

    for(i=0; i<palabra.length; i++){
        switch(palabra[i]){
            case 'a': palabra_encriptada += 'ai';
            break;
            case 'e': palabra_encriptada += 'enter';
            break;
            case 'i': palabra_encriptada += 'imes';
            break;
            case 'o': palabra_encriptada += 'ober';
            break;
            case 'u': palabra_encriptada += 'ufat';
            break;
            default: palabra_encriptada += palabra[i];
            break;
        }   
    }

    return palabra_encriptada;
}


function tieneAcentoOEspecial(palabra){
    let regex = /[áéíóúÁÉÍÓÚñÑ!"{}123@%^$#&4567890]/;
    
    return regex.test(palabra);
}

function limpiar_campo(id){
    document.getElementById(id).value = '';
}

function copiar_texto(id){
    // Seleccionar el elemento del textbox
    var elemento = document.getElementById(id);
        
    // Seleccionar el texto dentro del textbox
    elemento.select();
    elemento.setSelectionRange(0, 99999); // Para dispositivos móviles
        
    // Copiar el texto seleccionado al portapapeles
    navigator.clipboard.writeText(elemento.value);
      
    let btn_copiar = document.querySelector('#copiar');
    btn_copiar.innerHTML = "¡¡¡Texto Copiado!!!";
      
}

function mensaje_error_vacio(evento){
    Swal.fire({
        title: 'Error',
        text: 'Debes escribir la palabra a ' + evento,
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
}

function mensaje_error_caracteres(){
    Swal.fire({
        title: 'Error',
        text: 'La palabra no puede tener números ni caracteres especiales',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
}

/** capturar los eventos*/
/**botones y campos*/
let btn_encriptar = document.getElementById('encriptar');
let btn_desencriptar = document.querySelector('#desencriptar');
let btn_copiar = document.getElementById('copiar');
let resultado = document.getElementById('resultado');

btn_encriptar.addEventListener('click', function (){
    btn_copiar.innerHTML = 'Copiar';

    let palabra = document.getElementById('palabra').value.toLowerCase();

    /** se evalua que la palabra no este vacia ni contenga caracteres especiales*/
    if(palabra == ''){
        mensaje_error_vacio('encriptar');
    }else if(tieneAcentoOEspecial(palabra)){
        mensaje_error_caracteres();
    }else{
        let palabra_encriptada = encriptar(palabra);
        resultado.innerHTML = palabra_encriptada;
    }
});

btn_desencriptar.addEventListener('click', function(){
    btn_copiar.innerHTML = 'Copiar';

    let palabra = document.getElementById('palabra').value.toLowerCase();

    if(palabra == ''){
        mensaje_error_vacio('desencriptar');

    }else if(tieneAcentoOEspecial(palabra)){
        mensaje_error_caracteres();
    }else{
        let palabra_desencriptada = desencriptar(palabra);
        resultado.innerHTML = palabra_desencriptada;
    }
});

btn_copiar.addEventListener('click', function(){
    copiar_texto('resultado');
})