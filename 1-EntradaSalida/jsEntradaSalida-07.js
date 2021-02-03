/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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
	

}

function restar()
{
	var numeroA ;
	var numeroB ;
	var resto ;
	
	numeroA = txtIdNumeroUno.value ;
	numeroB = txtIdNumeroDos.value ;
	
	numeroA = parseInt(numeroA) ;
	numeroB = parseInt(numeroB) ;

	resto = numeroA - numeroB ;


	alert("La resta da  " + resto);
}

function multiplicar()
{  
	
	var numeroA ;
	var numeroB ;
	var multp ;
	
	numeroA = txtIdNumeroUno.value ;
	numeroB = txtIdNumeroDos.value ;
	
	numeroA = parseInt(numeroA) ;
	numeroB = parseInt(numeroB) ;


	multp = numeroA * numeroB ;


	alert("La multiplicacion da " + multp);
	
}

function dividir()
{
	var numeroA ;
	var numeroB ;
	var divi ;
	
	numeroA = txtIdNumeroUno.value ;
	numeroB = txtIdNumeroDos.value ;
	
	numeroA = parseInt(numeroA) ;
	numeroB = parseInt(numeroB) ;


	divi = numeroA / numeroB ;


	alert("La suma es " + divi);
	
}

// Fabella Ivan ivano.fabella@gmail.com Ejercicio 6//