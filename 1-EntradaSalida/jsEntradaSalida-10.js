/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var importe;
	var descuento;
	var resultado;

	importe   = txtIdImporte.value;
	importe   = parseFloat(importe);
	//descuento = importe * 0.25;

	//descuento = importe * 25/100;
    resultado = importe - (importe *0.25);
    // descuento = importe - descuento;
    //resultado = importe - descuento;

	txtIdResultado.value = resultado;


}
