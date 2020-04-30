document.querySelector("#siguiente-paso").onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
};

document.querySelector("#calcular").onclick = function(event){
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', obtenerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));
    mostrarResultados();

    event.preventDefault();
};

function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll(".integrante");
    for(let i = 0 ; i < $integrantes.length ;i++){
        $integrantes[i].remove();
    }
}

function crearIntegrantes(cantidadIntegrantes){ 
    if (cantidadIntegrantes > 0){
        mostrarBotonCalculo();
    }    
    for(let i = 0 ; i < cantidadIntegrantes ;i++){
        crearIntegrante(i);
              
    }
}


function crearIntegrante(indice){
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante #' + (indice + 1);

    const $input = document.createElement('input');
    $input.type = 'number';   
   

    $div.appendChild($label);
    $div.appendChild($input);      

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);  
}

function mostrarBotonCalculo(){
    document.querySelector("#calcular").className = "";
}

function mostrarResultados(){
    document.querySelector("#analisis").className = "";
}

function mostrarEdad(tipo,valor){
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes(){
    const $salarioIntegrantes = document.querySelectorAll(".integrante input");
    const edades = [];
    for(let i = 0; i < $salarioIntegrantes.length ;i++){
        
        edades.push(Number($salarioIntegrantes[i].value));
    }
    return edades;
}
