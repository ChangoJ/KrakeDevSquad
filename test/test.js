saludar = function () {
    let cmpNombre;
    let cmpApellido;
    let cmpResultado;
    let nombre;
    let apellido;
    let saludo;
    cmpNombre = document.getElementById("txtNombre");
    cmpApellido = document.getElementById("txtApellido");

    nombre = cmpNombre.value;
    apellido = cmpApellido.value;

    saludo = generarSaludo(nombre, apellido);

    cmpResultado = document.getElementById("lblResultado")
    cmpResultado.innerHTML = saludo


    console.log(saludo);
}