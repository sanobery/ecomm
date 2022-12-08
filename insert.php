<!DOCTYPE html>
<body>
  <?php
  class insert extends databaseconnect{

$firstname=$_POST['firstName'];
$lastname=$_POST['lastName'];
$email=$_POST['email'];
$password=$_POST['password'];
$address=$_POST['address'];
$pincode=$_POST['pincode'];

$sql = "INSERT INTO customerDetail (first_name, last_name, email,password,address,pincode)
VALUES ('$firstname','$lastname','$email','$password','$address',$pincode)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

  }
  ?>
</body>
</html>