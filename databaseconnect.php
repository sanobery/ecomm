<?php
// namespace MyShop;

class DatabaseConnect{
  private $servername;
  private $username;
  private $password;
  private $dbname;
  private $conn;
  
  // Create connection
  public function connection(){
    $this->servername = "localhost";
    $this->username = "mindfire";
    $this->password = "mindfire";
    $this->dbname = "ecommerce";
    $this->conn = new mysqli($this->servername , $this->username ,$this->password ,$this->dbname);
    
    if ($this->conn->connect_error) {
      die("Connection failed: " . $this->conn->connect_error);
    }
    return $this->conn;
  }

  public function closeconnection(){
    $this->conn->close();
  }

  public function insert($data){
    $firstname=$data['firstName'];
    $lastname=$data['lastName'];
    $email=$data['email'];
    $password=$data['password'];
    $address=$data['address'];
    $pincode=$data['pincode'];
    
    $sql = "INSERT INTO customerDetail (first_name, last_name, email,password,address,pincode)
    VALUES ('$firstname','$lastname','$email','$password','$address',$pincode)";
    
    if ($this->conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $this->conn->error;
    }
  }
}

?>