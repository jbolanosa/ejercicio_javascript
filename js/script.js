let contador = 0;

class estudiante{
    constructor(carnet, nombre, nota){
        this.carnet = carnet;
        this.nombre = nombre;
        this.nota = nota;
    }
}

function eliminarFila(numeroFila){
    let tabla = document.getElementById("table-content");
    tabla.removeChild(document.getElementById(`${numeroFila}`));
}

function agregarInformacion(carnet, nombre, nota){
    contador++;
    const contenido = 
    `
        <td>${carnet}</td>
        <td>${nombre}</td>
        <td>${nota}</td>
        <td><button type="button" onclick="eliminarFila(${contador})">Eliminar</button></td>
    `
    const nodo = document.createElement("tr");
    nodo.id = contador;
    nodo.innerHTML = contenido;

    document.getElementById("table-content").appendChild(nodo);

    document.getElementById("carnet").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("nota").value= "";

}

function obtenerInformacion(){

    let carnet = document.getElementById("carnet").value;
    let nombre = document.getElementById("nombre").value;
    let nota = document.getElementById("nota").value;
    

    if(carnet == "" || nombre == "" || nota == ""){
        alert("Faltan ingresar datos en las casillas");
        return;
    }

    agregarInformacion(carnet, nombre, nota);
}