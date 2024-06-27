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

