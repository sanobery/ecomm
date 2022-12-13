<!--for Database connection & CRUD operation-->
<?php

class DatabaseConnect{
  private $servername;
  private $username;
  private $password;
  private $dbname;
  static $conn; 
  static $instance;
  protected $tablename;
  protected $where;
  protected $columns;
  protected $orderby;
  protected $query;
  
  private function __construct(){
    $this->servername = "localhost";
    $this->username = "mindfire";
    $this->password = "mindfire";
    $this->dbname = "ecommerce";

    try {
      self::$conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
      self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } 

    catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }
  }

  public static function getInstance(){
    if(!self::$instance){
      self::$instance = new self();
    }
    return self::$instance;
  }

  // Closing database connection
  public function closeconnection(){
    self::$conn = null;
  }

  // insert data into database
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

      $stmt = self::$conn->prepare("INSERT INTO $table ($col) VALUES $values ");

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

  // read data from database dynamically
  public function read($arr){
    try{ 
      if(count($arr)==1){
        $stmt = self::$conn->prepare("SELECT * FROM $arr[tablename]");
        $stmt->execute();
        $result  = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $rowdata = $stmt->fetchAll();
        return $rowdata;
      }
      else if(count($arr)>1 and count($arr)<4){
        $stmt = self::$conn->prepare("SELECT * FROM $arr[tablename] where email = '$arr[email]' and password = '$arr[password]' limit 1");
        $stmt->execute();
        $result  = $stmt->fetch(PDO::FETCH_ASSOC);
        return $result;
      }
      else{
        $stmt = self::$conn->prepare("SELECT * FROM $arr[tablename] where first_name = '$arr[first_name]' and last_name = '$arr[last_name]' and  email = '$arr[email]' and password = '$arr[password]'");
        $stmt->execute();
        $result  = $stmt->fetch(PDO::FETCH_ASSOC);
        return $result;
      }
    }

    catch(PDOException $e) {
      echo $sql . "<br>" . $e->getMessage();
    }

  }

  // update data from database dynamically
  public function update($data){

    try{
      $sql = "update customerDetail set first_name = 'mindfire'  where first_name='$data'";
      self::$conn->prepare($sql)->execute();
    }

    catch(PDOException $e) {
      echo $sql . "<br>" . $e->getMessage();
    }

  }

  // delete data from database
  public function delete($data){

    try{
      $sql = "delete from customerDetail where first_name = $data";
      self::$conn->prepare($sql)->execute();
    }

    catch(PDOException $e) {
      echo $sql . "<br>" . $e->getMessage();
    }

  }

  // get columns detail of a particular table.
  public function columnname($table){

    $colname = [];
    $query = self::$conn->prepare("show columns from ".$table);
    $query->execute();
    $row     = $query->setFetchMode(PDO::FETCH_ASSOC);
    while($row = $query->fetch()){
      array_push($colname,$row['Field']);
    }
    return $colname;
  }

  public function select($cols){
    $this->columns = implode(",",$cols);
    return $this;
  }

  public function table($tablename){
    $this->tablename = $tablename;
    // var_dump($this->tablename);
    // die;
    return $this;
  }

  public function where($where){
    $this->where = $where;
    // var_dump($this->where);
    // die;
    return $this;
  }

  public function fetch(){
    $columns = '*';
    $condition = '';
    try{
      if(!empty($this->columns)){
        $columns = $this->columns;
      }
      if(!empty($this->where)){
        $strarr = $this->parseString($this->where);
        $string = implode(' AND ',$strarr);
        $condition = "WHERE $string"; 
      }
      if(!empty($this->orderby)){
        $orderby = $this->orderby;
        $condition .= "ORDER BY $orderby";
      }
      $tablename = $this->tablename;
      $this->query = "SELECT $columns FROM $tablename $condition";
      // var_dump($this->query);
      // die;
      $stmt = self::$conn->prepare($this->query);
      $stmt->execute();
      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    catch(PDOException $e) {
      var_dump($stmt , $e->getMessage());
    }
  }
  
  public function parseString($arr){
    $data = [];
    foreach ($arr as $condition) {
      $conditionString = '';
      $conditionString .= $condition[0]. ' ' .$condition[1]." '$condition[2]'"; 
      array_push($data,$conditionString);
    }
    return $data;
  }

  public function orderby($column){
    $this->orderby = $column;
    return $this;
  }
}

?>