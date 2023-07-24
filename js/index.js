var imagen_seleccionada = 1;

function inicializarPagina()
{

    cambiarImagen();

}

function cambiarImagen()
{

    var imagen_fondo = document.getElementsByClassName("fondo")[0].getElementsByTagName("img")[0];
    imagen_fondo.classList.remove("imagenFadeIn");
    imagen_fondo.classList.add("imagenFadeOut");

    setTimeout(
        function()
        {
            imagen_fondo.classList.remove("imagenFadeOut");
            imagen_fondo.classList.add("imagenFadeIn");
            imagenActual(imagen_fondo);
            setTimeout(function() {cambiarImagen();}, 3000)
        }, 3000)

}

function imagenActual(imagen_fondo)
{

         if(imagen_seleccionada == 1) { imagen_fondo.src = "img/InauguracionYopChagui.jpg"; imagen_seleccionada = 2; }
    else if(imagen_seleccionada == 2) { imagen_fondo.src = "img/FotoGrupal5.jpg"; imagen_seleccionada = 3; }
    else if(imagen_seleccionada == 3) { imagen_fondo.src = "img/InauguracionInicioCombate.jpg"; imagen_seleccionada = 1; }

}