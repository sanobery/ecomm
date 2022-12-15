<!--customer login Page -->
<?php

  session_start();
  require_once('./databaseconnect.php');
  $obj = DatabaseConnect::getInstance();
  $table = 'customerDetail';
  $email  = $_POST['email'];
  $pass   = $_POST['password'];
  $result = $obj->table($table)->where([['email','=',$email],['password','=',$pass]])->fetch();
  $obj->closeconnection();

?>
<!DOCTYPE html>
<html lang = "en">

<head>
  <meta charset = "UTF-8">
  <meta http-equiv = "X-UA-Compatible" content = "IE=edge">
  <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <?php
    if($result){
      echo "LOG-IN successfully! $result[first_name]<br>";
      $_SESSION['err'] = '';
    }
    else{
      $_SESSION['err'] = "InCorrect Data";
      header('Location:/view/logincustomer.php');
    }
  ?>

</body>
</html>