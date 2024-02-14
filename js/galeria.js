/************************************************/
/* Script desarrollado por Javier LOpez Sanchez */
/************************************************/

var galeria_imagen_id;
var galeria_video_id;
var galeria_columnas;

function dibujarGaleria(galeria_nombre)
{

	galeria_imagen_id = galeria_nombre   + "_"  ;
	galeria_video_id  = galeria_video_id + "_v_";

	// Crear cuerpo de la galerIa
	//-------------------------------------------------------
	var cuerpoGaleriaTKD = document.createElement('div');
	cuerpoGaleriaTKD.className = "galeria_cuerpo";
	document.getElementsByTagName("body")[0].append(cuerpoGaleriaTKD);
	//-------------------------------------------------------

	// Crear fila principal de la galerIa
	//-------------------------------------------------------
	var filaGaleriaTKD = document.createElement('div');
		filaGaleriaTKD.className = "galeria_fila";
	document.getElementsByClassName("galeria_cuerpo")[0].append(filaGaleriaTKD);
	//-------------------------------------------------------

	galeria_columnas = [];
	for(var i=1; i<=4; i++) galeria_columnas[i] = crearColumna(i);

		 if(galeria_nombre == "menuGaleria"			) dibujarMenuGaleria		();
	else if(galeria_nombre == "inauguracion"		) dibujarInauguracion		();
	else if(galeria_nombre == "grupo"				) dibujarGrupo				();
	else if(galeria_nombre == "elasticidad"			) dibujarElasticidad		();
	else if(galeria_nombre == "entrenamiento"		) dibujarEntrenamiento		();
	else if(galeria_nombre == "noche_jueves"		) dibujarNocheJueves		();
	else if(galeria_nombre == "despedida_marie"		) dibujarDespedidaMarie		();
	else if(galeria_nombre == "despedida_paola"		) dibujarDespedidaPaola		();
	else if(galeria_nombre == "entrega_cinturones"	) dibujarEntregaCinturones	();
	else if(galeria_nombre == "cinturon_amarillo"	) dibujarCinturonAmarillo	();
	else if(galeria_nombre == "cinturon_verde"		) dibujarCinturonVerde		();
	else if(galeria_nombre == "cinturon_azul"		) dibujarCinturonAzul		();
	else if(galeria_nombre == "cinturon_rojo"		) dibujarCinturonRojo		();
	else if(galeria_nombre == "cena_navidad_2023"	) dibujarCenaNavidad2023	();

}

function crearColumna(numero_columna)
{

	var columnaGaleriaTKD = document.createElement('div');
		columnaGaleriaTKD.className = "galeria_columna";
		columnaGaleriaTKD.id = "galeria_columna_" + numero_columna;

	document.getElementsByClassName("galeria_fila")[0].append(columnaGaleriaTKD); // Aniadir columna a la galerIa correspondiente

	return columnaGaleriaTKD;

}

function crearImagen(imagen_drive_id_numero, imagen_drive_url){

	var imagenTKD = document.createElement('img');
		imagenTKD.className	= "imagen_galeria";
		imagenTKD.id		= galeria_imagen_id + imagen_drive_id_numero;
		imagenTKD.alt		= "| No se ha podido cargar la imagen. Intentalo más tarde.";
		imagenTKD.src		= "https://drive.google.com/thumbnail?id=" + imagen_drive_url + "&sz=w1000";

	return imagenTKD;

}

function crearVideo(video_drive_id_numero, video_drive_url){

	var videoTKD = document.createElement('iframe');
		videoTKD.className	= "imagen_galeria";
		videoTKD.id			= galeria_video_id + video_drive_id_numero;
		videoTKD.controls	= "controls";
		videoTKD.src		= "https://drive.google.com/file/d/" + video_drive_url + "/preview";
		videoTKD.setAttribute('allowFullScreen', '');

	return videoTKD;

}

function dibujarMenuGaleria()
{

	console.log("PENDIENTE ADAPTAR")

}
