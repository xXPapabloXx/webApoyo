<?php 
$destino = "sebayala020@gmail.com";
$nombre = $_POST['name'];
$correo = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = $_POST['message'];
$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;
mail($destino, $asunto, $contenido);
header("location:../index.html")
?>