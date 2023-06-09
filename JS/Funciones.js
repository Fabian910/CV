sortComments();

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
    let table = document.getElementById("comentarios").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);


newRow.insertCell(0).innerHTML = nombre;
newRow.insertCell(1).innerHTML = apellido;
newRow.insertCell(2).innerHTML = empresa;
newRow.insertCell(3).innerHTML = email;
newRow.insertCell(4).innerHTML = mensaje;
newRow.insertCell(5).innerHTML = sueldoEnPesos;
newRow.insertCell(6).innerHTML = sueldoEnPesos / 49;
newRow.insertCell(7).innerHTML = sueldoEnPesos / 484.00;
newRow.insertCell(8).innerHTML = sueldoEnPesos / 30;

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

function sortComments() {
    var sortingField = document.getElementById("metodoDeOrdenamientoCampo").value;
    var sortingOrder = document.getElementById("metodoDeOrdenamientoForma").value;
    var table = document.getElementById("comentarios").getElementsByTagName('tbody')[0];
    var rows = Array.from(table.rows);

    rows.sort(function (a, b) {
        var aValue, bValue;

        switch (sortingField) {
            case "0":
                aValue = a.cells[0].innerText.toLowerCase();
                bValue = b.cells[0].innerText.toLowerCase();
                break;
            case "1":
                aValue = a.cells[1].innerText.toLowerCase();
                bValue = b.cells[1].innerText.toLowerCase();
                break;
            case "2":
                aValue = a.cells[2].innerText.toLowerCase();
                bValue = b.cells[2].innerText.toLowerCase();
                break;
            case "3":
                aValue = parseFloat(a.cells[5].innerText);
                bValue = parseFloat(b.cells[5].innerText);
                break;
            default:
                return 0;
        }

        if (sortingOrder === "formaDescendente") {
            if (typeof aValue === 'string') {
                return bValue.localeCompare(aValue);
            } else {
                return bValue - aValue;
            }
        } else {
            if (typeof aValue === 'string') {
                return aValue.localeCompare(bValue);
            } else {
                return aValue - bValue;
            }
        }
    });

    for (var i = 0; i < rows.length; i++) {
        table.appendChild(rows[i]);
    }
}   