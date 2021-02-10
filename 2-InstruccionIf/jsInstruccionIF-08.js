function mostrar()
{
	//tomo la edad  
	/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
	 NO HACER NADA,
	pero si no es asi, y es soltero y no es menor, mostrar 
	el siguiente mensaje: 'Es soltero y no es menor.'*/
	var edad;
	var estCiv;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estCiv = estadoCivil.value;

	if(edad>18 && estCiv=="Soltero")
		{
			alert("Es soltero y no es menor.");
		}	
}
//FIN DE LA FUNCIÓN