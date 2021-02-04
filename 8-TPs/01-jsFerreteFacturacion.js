/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numeroA;
    var numeroB;
    var numeroC;
    var suma;
    numeroA =  txtIdPrecioUno.value;
    numeroA = parseInt(numeroA);
    numeroB =  txtIdPrecioDos.value;
    numeroB = parseInt(numeroB);
    numeroC =  txtIdPrecioTres.value;
    numeroC = parseInt(numeroC);
    suma = numeroA + numeroB + numeroC ;
    alert("La suma"+suma);
}
function Promedio () 
{
    var numeroA;
    var numeroB;
    var numeroC;
    var promedio;
    numeroA =  txtIdPrecioUno.value;
    numeroA = parseInt(numeroA);

    numeroB =  txtIdPrecioDos.value;
    numeroB = parseInt(numeroB);

    numeroC =  txtIdPrecioTres.value;
    numeroC = parseInt(numeroC);

    promedio=  (numeroA + numeroB + numeroC ) / 3;
    
    alert("El promedio es: "+ promedio );

	
}
function PrecioFinal () 
{
    var numeroA;
    var numeroB;
    var numeroC;
    var finalPrecio;
    var finalPrecioB;

    numeroA =  txtIdPrecioUno.value;
    numeroA = parseInt(numeroA);

    numeroB =  txtIdPrecioDos.value;
    numeroB = parseInt(numeroB);

    numeroC =  txtIdPrecioTres.value;
    numeroC = parseInt(numeroC);

    finalPrecio = (numeroA + numeroB + numeroC )* 1.25;  

    alert("El precio Final es de: "+ finalPrecio);
}