<!-- To register new customer -->
<?php

  session_start();
  require_once('./databaseconnect.php');

  $obj = DatabaseConnect::getInstance();
  $colname = $obj->columnname('customerDetail');
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $email  = $_POST['email'];
  $result = $obj->table('customerDetail')->where([['first_name','=',$first_name],['last_name','=',$last_name],['email','=',$email]])->fetch();
  if($result){
    $_SESSION['err'] = "Data Already Exists";
    header('Location:/view/cart.php');
  }
  else{
    $obj->insert($_POST,'customerDetail',$colname);
    $_SESSION['err'] = '';
    header('Location:/view/logincustomer.php');
  }
  $obj->closeconnection();
  exit();
  
?>
