acomodarComentarios();

function agregarComentarios(event) {
    event.preventDefault(); //Evito que la página se actualice cuando se envía el formulario

    // Leo el formulario
    let sueldoEnPesos = document.getElementById("sueldo").value;
    if(sueldoEnPesos>=10000){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let empresa = document.getElementById("empresa").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
   



// creo una nueva fila en la tabla
    let tabla = document.getElementById("comentarios").getElementsByTagName('tbody')[0];
    let fila = tabla.insertRow(table.filas.length);


fila.insertCell(0).innerHTML = nombre;
fila.insertCell(1).innerHTML = apellido;
fila.insertCell(2).innerHTML = empresa;
fila.insertCell(3).innerHTML = email;
fila.insertCell(4).innerHTML = mensaje;
fila.insertCell(5).innerHTML = sueldoEnPesos;
fila.insertCell(6).innerHTML = sueldoEnPesos / 49;
fila.insertCell(7).innerHTML = sueldoEnPesos / 484.00;
fila.insertCell(8).innerHTML = sueldoEnPesos / 30;

//limpio los campos si el sueldo es mayor a 10000
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("empresa").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
    document.getElementById("sueldo").value = "";

}
else{

}
    
}

function acomodarComentarios() {
    var ordenarPorCampo = document.getElementById("metodoDeOrdenamientoCampo").value;
    var OrdenarPorForma = document.getElementById("metodoDeOrdenamientoForma").value;
    var tabla = document.getElementById("comentarios").getElementsByTagName('tbody')[0];
    var filas = Array.from(tabla.filas);

    filas.sort(function (a, b) {
        var valorDeA, valorDeB;

        switch (ordenarPorCampo) {
            case "0":
                valorDeA = a.cells[0].innerText.toLowerCase();
                valorDeB = b.cells[0].innerText.toLowerCase();
                break;
            case "1":
                valorDeA = a.cells[1].innerText.toLowerCase();
                valorDeB = b.cells[1].innerText.toLowerCase();
                break;
            case "2":
                valorDeA = a.cells[2].innerText.toLowerCase();
                valorDeB = b.cells[2].innerText.toLowerCase();
                break;
            case "3":
                valorDeA = parseFloat(a.cells[5].innerText);
                valorDeB = parseFloat(b.cells[5].innerText);
                break;
            default:
                return 0;
        }

        if (OrdenarPorForma === "formaDescendente") {
            if (typeof valorDeA === 'string') {
                return valorDeB.localeCompare(valorDeA);
            } else {
                return valorDeB - valorDeA;
            }
        } else {
            if (typeof valorDeA === 'string') {
                return valorDeA.localeCompare(valorDeB);
            } else {
                return valorDeA - valorDeB;
            }
        }
    });

    for (var i = 0; i < filas.length; i++) {
        tabla.appendChild(filas[i]);
    }
}   
