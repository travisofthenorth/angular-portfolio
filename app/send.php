<?php
require_once 'swift/lib/swift_required.php';

// We don't need no GETs!
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('HTTP/1.0 404 Not Found');
    echo "<h1>404 Not Found</h1>";
    echo "The page that you have requested could not be found.";
    exit();
}

// Angular encodes data as json, so decode it first
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

// Do some quick validation. Client-side validation and Swift will take care of the important things.
if ($request->name == null || $request->email == null || $request->body == null) {
    header('HTTP/1.0 500 Error');
    echo "<h1>Error</h1>";
    echo "Invalid input.";
    exit();
}

// Set your username/password here! Two-step authentication seems to be an issue if enabled.
$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
  ->setUsername('GMAIL_USERNAME')
  ->setPassword('GMAIL_PASSWORD');

$mailer = Swift_Mailer::newInstance($transport);

// Set the To: field here to the address that needs to receive the emails!
$message = Swift_Message::newInstance('Portfolio: Message from ' . $request->name)
  ->setFrom(array($request->email => $request->name))
  ->setTo(array('MY_EMAIL_ADDRESS'))
  ->setBody($request->body);

$result = $mailer->send($message);
?>