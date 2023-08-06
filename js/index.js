/************************************************/
/* Script desarrollado por Javier LOpez Sanchez */
/************************************************/

/**********************************************************************/
/* Variables globales */
var imagen_seleccionada = 1		; // Imagen en pantalla
var timeout_imagen		= 3000	; // Timeout de la imagen (milisegundos)
/**********************************************************************/

function inicializarPagina()
{

	setTimeout( function() { cambiarImagen(); }, 3000);

	animacionTKD(document.getElementById("animacionTaekwondista"), "animacionTaekwondista/animacionTaekwondista", 5, 0);

}

function cambiarImagen()
{

    var imagen_fondo = document.getElementsByClassName("fondo")[0].getElementsByTagName("img")[0]; // ObtenciOn de la imagen

    imagen_fondo.style.opacity = "0.25%"; // Final Fade In

	// Inicio Fade Out
    imagen_fondo.classList.remove("imagenFadeIn");
    imagen_fondo.classList.add("imagenFadeOut");

    setTimeout( function() // Espera Fade Out
        {

            imagen_fondo.style.opacity = "0%"; // Final Fade Out

			// Cambio de Imagen + Inicio Fade In
			imagen_fondo.classList.remove("imagenFadeOut");
			imagenActual(imagen_fondo);
			imagen_fondo.classList.add("imagenFadeIn");

            setTimeout(function() {cambiarImagen();}, timeout_imagen);  // Espera Fade In

        }, timeout_imagen)

}

function imagenActual(imagen_fondo)
{

    if(imagen_seleccionada == 4) imagen_seleccionada = 1;
    else imagen_seleccionada++;

    imagen_fondo.src = "img/fotosPortada/FotoPortada" + imagen_seleccionada + ".jpg";
    
}

function animacionTKD(elemento_animacion, nombre_animacion, tamanio_animacion, numero_secuencia_anterior)
{

	var numero_secuencia;
	if(numero_secuencia_anterior < tamanio_animacion) numero_secuencia = numero_secuencia_anterior + 1;
	else numero_secuencia = 1;

	elemento_animacion.src = "img/animacionesTKD/" + nombre_animacion + "_" + numero_secuencia + ".png";

	setTimeout( function () { animacionTKD(elemento_animacion, nombre_animacion, tamanio_animacion, numero_secuencia) } , tiempoAnimacionTKD("animacionTaekwondista",numero_secuencia));

}

function tiempoAnimacionTKD(nombre_animacion, numero_secuencia)
{

	var segundos_animacion;

	if(nombre_animacion == "animacionTaekwondista")
	{

		if (numero_secuencia == 5)	segundos_animacion = 3;
		else 						segundos_animacion = 0.2;

	}

	return segundos_animacion * 1000;  // Milisegundos


}