/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroA ;
	var numeroB ;
	var suma ;
	
	numeroA = txtIdNumeroUno.value ;
	numeroB = txtIdNumeroDos.value ;
	
	numeroA = parseInt(numeroA) ;
	numeroB = parseInt(numeroB) ;

	//  Para sumar numeros con decimales
	//	numeroA = parseFloat(numeroA) ;
	//  numeroB = parseFloat(numeroB) ;
	suma = numeroA + numeroB ;


	alert("La suma es " + suma);
	
	//parseInt numeroA;
	//parseInt numeroB;
	

    //arseInt numeroC;
	//numeroC = numeroA + numeroB ;
}

