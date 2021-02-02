/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreDelEmpleado;
	var edadDelEmpleado;
	var apellidoEmpleado;
	
	nombreDelEmpleado= txtIdNombre.value;
	edadDelEmpleado= txtIdEdad.value
	

	alert("Usted se llama " + nombreDelEmpleado + " y tiene " +edadDelEmpleado +" años de edad y su apellido "+ apellidoEmpleado );
}