function validarEdades(edades){
    for (let i = 0; i < edades.length; i++){
        if(/[,\.]/.test(edades[i])){
            console.log('La edad no puede ser un numero decimal.');
        }
        else if(/^[-]/.test(edades[i])){
            console.log('La edad no puede ser negativa.');
        }
        else if(edades[i]>= 110){
            console.log('Este campo admite edades hasta 110 años.');
        } else{
            console.log('');
        }
    }
}


