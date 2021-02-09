function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es mayor de edad
	// (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad>17)
	{
		alert("Usted es Mayor");
	}else 
		{
			if(edad>12 && edad<18)
			{
			alert("Usted es adolescente, edad entre 13 y 17 años ");
			}else
				{
					alert("usted es un niño");
				}
		}	


}//FIN DE LA FUNCIÓN