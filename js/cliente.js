
const formulario = document.getElementById("formCliente");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const cliente = {

        identificacion:
        document.getElementById("identificacion").value,

        nombre:
        document.getElementById("nombre").value,

        correo:
        document.getElementById("correo").value,

        telefono:
        document.getElementById("telefono").value,

        direccion:
        document.getElementById("direccion").value,

        ciudad:
        document.getElementById("ciudad").value,

        tipoCliente:
        document.getElementById("tipoCliente").value,

        estado:
        document.getElementById("estado").value
    };

    console.log(cliente);

    mensaje.innerHTML =
    "✅ Cliente registrado correctamente.";

    mensaje.className = "exito";

    formulario.reset();

});

formulario.addEventListener("reset",()=>{

    mensaje.innerHTML="";
});