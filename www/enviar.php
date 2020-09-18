<?php
error_reporting (E_ALL ^ E_NOTICE);
$post = (!empty($_POST)) ? true : false;
if($post) {
	function ValidateEmail($email){

		$regex = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";
		$eregi = preg_replace($regex,'', trim($email));
		
		return empty($eregi) ? true : false;
	}
	
	$name = stripslashes($_POST['ContactName']);
	$to = trim($_POST['to']);
	$email = strtolower(trim($_POST['ContactEmail']));
	$phone = stripslashes($_POST['ContactPhone']);
	$subject = stripslashes($_POST['subject']);
	$message = stripslashes($_POST['ContactComment']);
	$error = '';
	$Reply=$to;
	$from=$to;
	
	if(!$name) {
		$error .= 'Por favor, insira seu nome.<br />';
	}
	if(!$email) { 
		$error .= 'Por favor insira um endereço de e-mail.<br />';
	}
	if($email && !ValidateEmail($email)) {
		$error .= 'Por favor insira um endereço de e-mail válido.<br />';
	}
	if(!$phone) {
		$error .= 'Por favor, insira seu telefone.<br />';
	}
	if(!$subject) {
		$error .= 'Por favor, insira seu assunto.<br />';
	}
	if(!$message || strlen($message) < 3) {
		$error .= "Por favor insira a sua mensagem. Deve ter pelo menos 5 caracteres.<br />";
	}
	if(!$error) {
		$messages="Nome: $name <br>";
		$messages.="E-mail: $email <br>";
		$messages.="Telefone: $name <br>";
		$messages.="Mensagem: $message <br><br>";
		$emailto=$to;
		
		$mail = mail($emailto,$subject,$messages,"from: $from <$Reply>\nReply-To: $Reply \nContent-type: text/html");	
	
		if($mail) {
			echo 'success';
		}
	} else {
		echo '<div class="error">'.$error.'</div>';
	}
}
?>