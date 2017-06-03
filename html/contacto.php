<?php
//validar formulario

	// if($_POST){

		$nombre = $_POST["nombre"];

		$email = $_POST["email"];

		echo "$nombre";

		echo "$email";

		// $claseNombre = "";

		// $claseEmail = "";

		// if($nombre == ""){

		// 	$msgNombre = "Ingrese un Nombre";

		// 	$claseNombre = "error";}

		// if(!eregi("^([_a-z0-9-]+)(\.[_a-z0-9-]+)*@([a-z0-9-]+)(\.[a-z0-9-]+)*(\.[a-z]{2,4})$",$email)){

		// 	$msgEmail = "Ingrese un Email valido";

		// 	$claseEmail = "error";

		// 	$email = "";}

		// if($claseNombre == "" && $claseEmail == ""){

		//funcion mail para enviar los datos del formulario
		$mensaje="Mensaje nuevo desde el formulario de contacto de www.seguristore.cl";

		$mensaje.= "\n\nNombre: ". $_POST['nombre'];

		$mensaje.= "\n\nEmail: ".$_POST['email'];

		$mensaje.= "\n\nMensaje: \n\n".$_POST['mensaje'];

		$destino = "contacto@seguristore.cl", "hola@joshua.cl";

		$destino = "hola@joshua.cl, contacto@seguristore.cl";

		$remitente = $_POST['email'];

		$asunto = "Mensaje nuevo desde el formulario de contacto de www.seguristore.cl";

		mail($destino,$asunto,$mensaje,"FROM: $remitente");

		// $nombre = "";

		// $email = "";

		// $mensaje = "Muchas gracias su mensaje ha sido enviado, le responderemos a la brevedad.";

	// }

?>