
function mostrarMensaje(){

alert(
"Bienvenido al Sistema Integral de Gestión Empresarial"
);

}

function abrirAyuda(){

alert(
"Su solicitud de ayuda ha sido enviada correctamente."
);

}

document.querySelectorAll('.card')
.forEach(card=>{

card.addEventListener('click',()=>{

card.style.transform='scale(1.05)';

setTimeout(()=>{

card.style.transform='scale(1)';

},300);

});

});
