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