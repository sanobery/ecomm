<?php

class DatabaseConnect{
  private $servername;
  private $username;
  private $password;
  private $dbname;
  private $conn; 

  public function connection(){

    $this->servername = "localhost";
    $this->username = "mindfire";
    $this->password = "mindfire";
    $this->dbname = "ecommerce";

    try {
      $this->conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $table = [];
      $query = $this->conn->prepare('show tables');
      $query->execute();
      $result = $query->setFetchMode(PDO::FETCH_ASSOC);
      while($conn = $query->fetch()){
        array_push($table,$conn["Tables_in_ecommerce"]);
      }
      return $table[0];
    } 

    catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }

  }

  public function closeconnection(){
    $this->conn = null;
  }

  public function insert($data,$table,$colname){

    try{

      $col = '';

      $values = '(';
      
      foreach ($data as $key => $value) {
        if(in_array($key,$colname)) {
          $col .= "$key,"; 
          $values .= ":$key,";
        } 
      }

      $col = rtrim($col,",");
      $values = rtrim($values,",");
      $values .= ')';

      $stmt = $this->conn->prepare("INSERT INTO $table ($col) VALUES $values ");

      foreach ($data as $key => $value) {
        if(in_array($key,$colname)) {
          $stmt->bindValue( ":$key", $value);
        } 
      }

      $stmt->execute();
    } 
    catch(PDOException $e) {
      echo  "<br>" . $e->getMessage();
    }
  }

  public function read($data,$table){
    try{ 
      $email  = $data['email'];
      $pass   = $data['password'];
      $stmt = $this->conn->prepare("SELECT * FROM $table where email = 'email' and password = 'password'");
      //var_dump($stmt);
      $stmt->execute();
      $result  = $stmt->setFetchMode(PDO::FETCH_ASSOC);
      $rowdata = $stmt->fetchAll();
      // var_dump($rowdata);
      // die;
      return $rowdata;
      // var_dump($rowdata);
      // die;
    }

    catch(PDOException $e) {
      echo $sql . "<br>" . $e->getMessage();
    }

  }

  public function update($data){

    try{
      $sql = "update customerDetail set first_name = 'mindfire'  where first_name='$data'";
      $this->conn->prepare($sql)->execute();
    }

    catch(PDOException $e) {
      echo $sql . "<br>" . $e->getMessage();
    }

  }

  public function delete($data){

    try{
      $sql = "delete from customerDetail where first_name = $data";
      $this->conn->prepare($sql)->execute();
    }

    catch(PDOException $e) {
      echo $sql . "<br>" . $e->getMessage();
    }

  }

  public function columnname($table){

    $colname = [];
    $query=$this->conn->prepare("show columns from ".$table);
    $query->execute();
    $row     = $query->setFetchMode(PDO::FETCH_ASSOC);
    while($row = $query->fetch()){
      array_push($colname,$row['Field']);
    }
    return $colname;
  }

}

?>