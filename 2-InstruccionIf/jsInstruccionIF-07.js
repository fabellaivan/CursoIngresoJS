function mostrar()
{
	//tomo la edad  
	//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
	// mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
	var edad;
	var estCiv;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estCiv = estadoCivil.value;

	if(edad<18 && estCiv=="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero.");
		}	


}//FIN DE LA FUNCIÓN