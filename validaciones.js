function validarEdades(edades){
    for (let i = 0; i < edades.length; i++){
        if(/,\./.test(edades[i])){
            console.log('error');
        }
    }
}
