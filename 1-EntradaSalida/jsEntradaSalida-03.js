/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreDelAlumno, edadDelAlumno;	
	// nombreDelAlumno = txtIdNombre.value;
	
	nombreDelAlumno= document.getElementById('txtIdNombre').value;
	edadDelAlumno = prompt("su edad","edad");
	

	alert("Usted se llama "+ nombreDelAlumno + " y tiene "+ edadDelAlumno + " años de edad" );

}


