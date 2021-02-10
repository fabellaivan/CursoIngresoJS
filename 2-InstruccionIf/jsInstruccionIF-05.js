function mostrar()
{
	//tomo la edad  
	/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad<13 || edad>17)
		{
			alert("No es adolescente");
		}

}//FIN DE LA FUNCIÓN