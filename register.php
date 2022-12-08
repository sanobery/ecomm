<?php
  require_once('../databaseconnect.php');

  $obj=new DatabaseConnect();
  $obj->connection();
  $obj->insert($_POST);
  $obj->closeconnection();
  header('location:users.php');
  exit();

?>
