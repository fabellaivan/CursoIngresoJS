/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular 
y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular
 y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var base;
    var altura;
    var hilo;

    altura = txtIdLargo.value;
    altura = parseFloat(altura);
    base   = txtIdAncho.value;    
    base   = parseFloat(base);

    hilo   = (altura * base)/3 ;
    alert("La cantidad de alambre por rollo es de: "+hilo);

}
function Circulo () 
{
    var radio;
    var area;
    var hilo;
    
    radio = txtIdRadio.value;
    radio = parseFloat(radio);
    
    area  = (radio*radio)*3.14;
    
    hilo  = area /3;
  
    alert("La cantidad de alambre por rollo es de: "+hilo);

    
	
}
function Materiales () 
{ /*C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
    debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
    SIEMPRE Y CUANDO EL USR PONGA LAS MEDIDAS EN ANCHO Y LARGO
    */
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;

    largo   = txtIdLargo.value;
    largo   = parseFloat(largo);
    ancho   = txtIdAncho.value;
    ancho   = parseFloat(ancho);

    
    area    = largo*ancho;
    cemento = area*2 ;
    cal     = area*3 ;
    alert("Se necesitaran "+cemento+" bolsas de semento y "+cal+" bolsas de cal");


}