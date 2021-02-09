function mostrar()
{	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4*/
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero =  Math.floor(Math.random() * 10);
	numero = parseInt(numero);
	if(numero>8)
		{
			alert("Excelente");
		}else
			{
				if(numero<8 && numero>3)
					{
						alert("Aprobo");
					}else
						{
							alert("Vamos, la proxima se puede");
						}
			}
	
	alert("Su nota es: "+numero);
}

//FIN DE LA FUNCIÓN