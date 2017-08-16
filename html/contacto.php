<?php

	$mensaje="Mensaje nuevo desde el formulario de contacto de www.seguristore.cl";

	$mensaje.= "\n\nNombre: ". $_POST['nombre'];

	$mensaje.= "\n\nEmail: ".$_POST['email'];

	$mensaje.= "\n\nMensaje: \n\n".$_POST['mensaje'];

	$destino = "hola@joshua.cl, ventas@seguristore.cl";

	$remitente = $_POST['email'];

	$asunto = "Mensaje nuevo desde el formulario de contacto de www.seguristore.cl";

	mail($destino,$asunto,$mensaje,"FROM: $remitente");

?>