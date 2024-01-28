saludar=function(){
    let cmpNombre;
    let cmpApellido;
    let nombre;
    let apellido;
    let saludo;
   cmpNombre=document.getElementById("txtNombre");
    cmpApellido=document.getElementById("txtApellido");

    nombre = cmpNombre.value;
    apellido = cmpApellido.value;

    saludo=generarSaludo(nombre,apellido);

    console.log(saludo);
}