<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$job = $_POST['job'];
$joblink = $_POST['joblink'];
$message = $_POST['message'];
header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'Sorry but you have to include your name', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'I really, really need your email', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'Fix your email format please', 'code' => 0));
  exit();
  }
}
if ($job === ''){
  print json_encode(array('message' => 'I need to know which job you are considering me for', 'code' => 0));
  exit();
}
$content="From: $name \n Email: $email \n Phone: $phone \n Job: $job \n Joblink: $joblink \n Message: $message";
$recipient = "tanjamedic@mostba.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Your email was successfuly sent!', 'code' => 1));
exit();
?>