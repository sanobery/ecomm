<?php
  require_once('./databaseconnect.php');

  $obj     = new DatabaseConnect();
  $table   = $obj->connection();
  $colname = $obj->columnname($table);
  $obj->insert($_POST,$table,$colname);
  $obj->closeconnection();
  header('location:users.php');
  exit();
  
?>
