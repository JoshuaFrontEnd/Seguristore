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


<!-- <?php

	//Aclaro que este php recibe 3 valores desde un formulario tipico en HTML los valores son Nombre (input), Mail(input) y Mensaje(textarea).

	// Aquí creo el mensaje del mailing todo en una sola variable que se llama mensaje pero en este formato:

	// - Primero agrego un mensaje informativo
	$mensaje="Mensaje nuevo desde el formulario de contacto de www.seguristore.cl";

	// - Después concateno el nombre recibido por post.
	$mensaje.= "\n\nNombre: ". $_POST['nombre'];

	// - Concateno el mailing
	$mensaje.= "\n\nEmail: ".$_POST['email'];

	// - Concateno el mensaje que la persona ingreso en el formulario.
	$mensaje.= "\n\nMensaje: \n\n".$_POST['mensaje'];

	// Acá declaro los o el correo que recibirá el mailing, reemplaza estos cuando hagas tu ejercicio.
	$destino = "correo@seguristore.cl", "hola@joshua.cl";

	// Acá declaro el remitente (osea la persona que ingreso los datos desde el formulario).
	$remitente = $_POST['email'];

	// Acá declaro el asunto del correo de manera genérica, también puedes agregar un input en el formulario donde este valor se ingrese.
	$asunto = "Mensaje nuevo desde el formulario de contacto de www.seguristore.cl";

	// Y para finalizar la magia la hace esta simple linea de código, ocupo la función mail (antigua en PHP, aunque no se si ahora habrá algún método moderno esta a mi me funciona) esta función recibe el destinatario, el asunto, el mensaje y el remitente, puedes hacer una validación en PHP antes de crear el mensaje y colocar este código en la parte donde todas las condiciones se cumplan, pero por JS la validación se haría desde el cliente y una vez validados llegarían los datos acá ya listos, siempre lo mejor es validar en el servidor pero no es estrictamente necesario en algo muy básico, por eso te preguntaba si el ramo es de PHP, lo mas lógico es hacer la validación acá y si queri hacer la cuestion perfecta validas en el cliente también.
	mail($destino,$asunto,$mensaje,"FROM: $remitente");

?> -->