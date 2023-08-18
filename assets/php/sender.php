<?php
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];
$token = "6665255288:AAFKNjIE5qSWwL8rn2njpgNMKh5itVCin7k";
$chat_id = "-1001789757448";
$arr = array(
  'Ім`я: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Повідомлення: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
