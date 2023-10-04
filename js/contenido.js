function inicializarPagina() { CrearTablaCinturones(); }

function CrearTablaCinturones()
{

	var tabla_items_cinturon = document.getElementById("items_cinturon");

	var cinturon;
	var tipo_item;

	tabla_items_cinturon.append(NuevoItemCinturon('TECNICA', 'TIPO DE TECNICA', 'CINTURON'));

	/***************************************************/
	cinturon = 'AMARILLO';
	/***************************************************/
		tipo_item = 'PATADA';
		/**************************/
			tabla_items_cinturon.append(NuevoItemCinturon('Ap Chagui'		, tipo_item, cinturon));
			tabla_items_cinturon.append(NuevoItemCinturon('Bandal Chagui'	, tipo_item, cinturon));
			tabla_items_cinturon.append(NuevoItemCinturon('Dollyo Chagui'	, tipo_item, cinturon));
			tabla_items_cinturon.append(NuevoItemCinturon('Yop Chagui'		, tipo_item, cinturon));
			tabla_items_cinturon.append(NuevoItemCinturon('Twi Chagui'		, tipo_item, cinturon));
		/**************************/
		tipo_item = 'DEFENSA';
		/**************************/
			tabla_items_cinturon.append(NuevoItemCinturon('Olgul Maki'		, tipo_item, cinturon));
			tabla_items_cinturon.append(NuevoItemCinturon('Montong Maki'	, tipo_item, cinturon));
			tabla_items_cinturon.append(NuevoItemCinturon('Are Maki'		, tipo_item, cinturon));
		/**************************/
		tipo_item = 'GOLPE';
		/**************************/
			tabla_items_cinturon.append(NuevoItemCinturon('Olgul Jirugui'	, tipo_item, cinturon));
			tabla_items_cinturon.append(NuevoItemCinturon('Montong Jirugui'	, tipo_item, cinturon));
		/**************************/
		tipo_item = 'POOMSAE';
		/**************************/
			tabla_items_cinturon.append(NuevoItemCinturon('Poomsae Cero'	, tipo_item, cinturon));
	/***************************************************/
	cinturon = 'NARANJA';
	/***************************************************/
		tipo_item = 'POOMSAE';
			/**************************/
			tabla_items_cinturon.append(NuevoItemCinturon('Primer Poomsae'	, tipo_item, cinturon));
			tabla_items_cinturon.append(NuevoItemCinturon('Segundo Poomsae'	, tipo_item, cinturon));
			tabla_items_cinturon.append(NuevoItemCinturon('Tercer Poomsae'	, tipo_item, cinturon));
	/***************************************************/


}

function NuevoItemCinturon(nombre_item, nombre_tipo, nombre_cinturon)
{

	var fila_cinturon = document.createElement('tr');
	fila_cinturon.className	= "item_cinturon cinturon_" + nombre_cinturon.toLowerCase();

	fila_cinturon.append(NuevaColumnaCinturon(nombre_item		, 'item_nombre'		)); // Asignar Nombre del Item
	fila_cinturon.append(NuevaColumnaCinturon(nombre_tipo		, 'item_tipo'		)); // Asignar Tipo del Item
	fila_cinturon.append(NuevaColumnaCinturon(nombre_cinturon	, 'cinturon_nombre'	)); // Asignar Nombre del CinturOn

	return fila_cinturon;

}

function NuevaColumnaCinturon(dato_item_cinturon, claseItem)
{

    var columna_cinturon = document.createElement('td');
	columna_cinturon.className = "dato_item_cinturon " + claseItem;
	columna_cinturon.innerHTML = dato_item_cinturon;

	return columna_cinturon;

}