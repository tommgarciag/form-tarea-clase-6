//-------------------------  EDAD INTEGRANTES  ---------------------------//

document.querySelector("#siguiente-paso").onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
};


function crearIntegrantes(cantidadIntegrantes){ 
    if (cantidadIntegrantes > 0){
        mostrarBotonCalculo();
        mostrarBotonAgregarSalarios();
                
    } else {
        resetear();
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

function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll(".integrante");
    for(let i = 0 ; i < $integrantes.length ;i++){
        $integrantes[i].remove();
    }
}


//----------------------  SALARIO INTEGRANTES  -------------------------//

document.querySelector("#agregar-salarios").onclick = function(event){
    const $cantidad = document.querySelector("#cantidad-integrantes");
    const cantidad = Number($cantidad.value);

    borrarSalariosAnteriores();
    crearSalarios(cantidad);

    event.preventDefault();
    
};


function crearSalarios(cantidadIntegrantes){ 
    if (cantidadIntegrantes > 0){
        
        mostrarBotonCalcularSalarios();
    } else {
        resetear();
    }

    for(let i = 0 ; i < cantidadIntegrantes ;i++){
        
        crearInputIngresoSalarios(i);       
    }
}

function crearInputIngresoSalarios(indice){
    const $divSalarios = document.createElement('div');
    $divSalarios.className = 'salario-integrante';
    

    const $labelSalarios = document.createElement('label');
    $labelSalarios.textContent = 'Ingrese el salario del integrante: ';

    const $inputSalarios = document.createElement('input');
    $inputSalarios.type = 'number';    

    $divSalarios.appendChild($labelSalarios);
    $divSalarios.appendChild($inputSalarios);

    const $salarios = document.querySelector('#salarios');
    $salarios.appendChild($divSalarios);
}

function borrarSalariosAnteriores(){
    const $inputSalario = document.querySelectorAll(".salario-integrante");
    for (let i = 0; i < $inputSalario.length; i++){
        $inputSalario[i].remove();
    }
}


// -------------------------   RESET  -------------------------------//

document.querySelector("#resetear").onclick = resetear;

function resetear(){
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    borrarSalariosAnteriores();
    ocultarBotonAgregarSalarios();
    ocultarBotonCalcularSalarios();
    ocultarResultados();
    ocultarResultadoSalario();
}

//----------------------------  BOTONES  ----------------------------//

function mostrarBotonCalculo(){
    document.querySelector("#calcular").className = "";
}

function ocultarBotonCalculo(){
    document.querySelector("#calcular").className = "oculto";
}

function mostrarBotonAgregarSalarios(){
    document.querySelector("#agregar-salarios").className = "";
}
function ocultarBotonAgregarSalarios(){
    document.querySelector("#agregar-salarios").className = "oculto";
}

function mostrarBotonCalcularSalarios(){
    document.querySelector("#calcular-salarios").className = "";
}

function ocultarBotonCalcularSalarios(){
    document.querySelector("#calcular-salarios").className = "oculto";
}



// --------------------------  RESULTADOS  ------------------------------//

function mostrarResultados(){
    document.querySelector("#analisis").className = "";
}

function ocultarResultados(){
    document.querySelector("#analisis").className = "oculto";
}

function mostrarResultadoSalario(){
    document.querySelector("#resultados").className = "";
}

function ocultarResultadoSalario(){
    document.querySelector("#resultados").className = "oculto";
}



// ----------------------------  EDADES  -------------------------------//

document.querySelector("#calcular").onclick = function(event){
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', obtenerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));
    mostrarResultados();

    event.preventDefault();
};

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

//----------------------------  SALARIOS  --------------------------------//

document.querySelector("#calcular-salarios").onclick = function(event){
    const inputSalarios = obtenerSalarios();
    
    mostrarSalario('mayor-anual', obtenerMayorNumero(inputSalarios));
    mostrarSalario('menor-anual', obtenerMenorNumero(inputSalarios));
    mostrarSalario('promedio-anual', obtenerPromedio(inputSalarios));
    mostrarSalario('promedio-mensual', obtenerPromedioMensual(inputSalarios));
    mostrarResultadoSalario();

    event.preventDefault();
};

function mostrarSalario(tipo,valor){
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function obtenerSalarios(){
    const $salarioIntegrante = document.querySelectorAll(".salario-integrante input");
    const salarioIntegrantes = [];

    for(let i = 0; i < $salarioIntegrante.length; i++){
        if($salarioIntegrante[i].value === "") {
            continue;            
        }
        salarioIntegrantes.push(Number($salarioIntegrante[i].value));
    }
    return salarioIntegrantes;
}
