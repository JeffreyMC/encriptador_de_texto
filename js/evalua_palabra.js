function tieneAcentoOEspecial(palabra){
    let regex = /[áéíóúÁÉÍÓÚñÑ!"{}123@%^$#&4567890]/;
    
    return regex.test(palabra);
}