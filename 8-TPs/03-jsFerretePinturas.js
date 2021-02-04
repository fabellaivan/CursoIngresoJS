/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura 
en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados debemos mostrar 
la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahren; 
    var centigrados;

    fahren      = txtIdTemperatura.value;
    fahren      = parseFloat(fahren);

    centigrados = (fahren-32)*5/9;
    centigrados = parseFloat(centigrados);

    alert(fahren +" Fahrenheit son "+ centigrados +" centigrados");
	
}

function CentigradosFahrenheit () 
{
    var fahren; 
    var centigrados;

   centigrados  = txtIdTemperatura.value;
   centigrados  = parseFloat(centigrados);

   fahren = (centigrados * 1.8)+32;
   fahren = parseFloat(fahren);

   alert(centigrados +" centigrados son "+fahren+" Fahrenheit");


}
