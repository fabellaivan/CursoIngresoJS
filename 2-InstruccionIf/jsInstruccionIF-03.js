function mostrar()
{
  	/*Al ingresar una edad debemos informar si la persona es mayor de edad,
	  sino informar que es un menor de edad.*/

	//tomo la edad  
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad>17)
	{
		alert("Usted es Mayor");
	}else 
		{
			alert("Usted es menor");
		}	
		
}//FIN DE LA FUNCIÓN