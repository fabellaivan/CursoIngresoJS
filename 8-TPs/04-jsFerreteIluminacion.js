/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  cantidad bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  cantidad bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.

C.	Si compra 4  cantidad bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  cantidad bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos
 brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precio;
 	var cantidad;
    var descuento;
    var aumentoIIB;
    var cia;
    var valor;
    var iib;

    valor       = 35;
    valor       = parseInt(valor);
    cantidad    = txtIdCantidad.value;
    cantidad    = parseInt(cantidad);
    precio      = cantidad*valor;
    cia         = Marca.value;
    aumentoIIB  = parseInt(aumentoIIB);
    iib         = parseInt(iib);

    if(cantidad<3)
    {
        descuento = precio;
    }
    
    if(cantidad==3 && cia=="ArgentinaLuz")
    {
        descuento = precio - (precio *0.15); 
    }
    else{
            if(cantidad==3 && cia=="FelipeLamparas")
        {
            descuento = precio - (precio *0.1); 
        }else
        {
        if(cantidad==3)
        {
            descuento = precio - (precio *0.05);   
        }
        }            
        }

    if(cantidad==4 && cia=="ArgentinaLuz" || cia=="FelipeLamparas")
    {
        descuento = precio - (precio *0.25); 
    }
    else{
        if(cantidad==4)
        {
            descuento = precio - (precio *0.2); 
        }            
        }

    if(cantidad==5 && cia=="ArgentinaLuz")
    {
            descuento = precio - (precio *0.4); 
    }
    else{
        if(cantidad==5)
        {
            descuento = precio - (precio *0.3); 
        }            
        }
    
    if(cantidad>5)
    {
        descuento = precio - (precio *0.5); 
    }
   
    if(descuento>120)
    {
        iib         = descuento*0.1;
        aumentoIIB  = descuento + iib ;
        descuento   = aumentoIIB;
        alert("Usted pago: "+iib+" de IIBB");
    }
      
    txtIdprecioDescuento.value = descuento;
        


}//Fabella Ivan 
/* Hice el programa desde el menor importe(cantidad de lamparitas) al mayor,
buscando hacer que no se validen todos los IF pero no veo la manera...
Entiendo que lo mas optimo es que no valide en cada IF, pero me parecio 
mas prolijo hacerlo de esta manera que ir poniendo ELSE uno atras del otro
ademas de que cada consigna lleva una particularidad en la cantidad comprada.
El programa anda.
*/
