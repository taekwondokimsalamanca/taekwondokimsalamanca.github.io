/************************************************/
/* Script desarrollado por Javier LOpez Sanchez */
/************************************************/

/**********************************************************************/
/* Variables globales */
var total_inauguracion = 21		; // Imagen en pantalla
/**********************************************************************/

function dibujarImagenes(galeria_nombre, total_imagenes)
{

    for(var i=1; i<=total_imagenes; i++)
    {

		// CreaciOn de la imagen
        var imagen_seleccionada		= document.createElement('img');
        imagen_seleccionada.className	= "imagen_galeria"
        imagen_seleccionada.src		= '../img/galeria/' + galeria_nombre + '/' + galeria_nombre + "_" + i + '.jpg';

		// IncorporaciOn de la imagen al menU
        document.getElementById('galeria_cuerpo').appendChild(imagen_seleccionada);
		
    }
    
}