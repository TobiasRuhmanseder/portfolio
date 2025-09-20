<?php

$recipient = 'mail@tobias-ruhmanseder.de'; 
if (empty($recipient)) {
    die("Keine Empfängeradresse angegeben.");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? strip_tags($_POST['name']) : 'Unbekannt';
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
    $messageContent = isset($_POST['message']) ? strip_tags($_POST['message']) : '';

    $subject = "Kontaktformular von " . $name;
    $message = "Name: $name\nEmail: $email\n\nNachricht:\n$messageContent";

    $headers = "From: Portfolio <" . $recipient . ">\r\n";
    if (!empty($email)) {
        $headers .= "Reply-To: $email\r\n";
    }

    mail($recipient, $subject, $message, $headers);
    echo "Nachricht erfolgreich gesendet.";
    exit;
}

header("Allow: POST", true, 405);
exit;

?>
