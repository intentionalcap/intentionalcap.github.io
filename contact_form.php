<?php
require '../PHPMailerAutoload.php';
$name = $_POST['name1'];
$organization = $_POST['organization1'];
$position = $_POST['position1'];
$email = $_POST['email1'];
$subject = $_POST['subject1'];
$message = $_POST['message1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail

$mail = new PHPMailer;
$mail->setFrom($email, $name);
$mail->addAddress('samullman@gmail.com', 'John Doe');
$mail->Subject = $subject;
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
// $mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
//Replace the plain text body with one created manually
$mail->AltBody = $message;
//Attach an image file

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
