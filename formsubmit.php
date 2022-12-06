<!--Validated Data Of Customer Details Are stored here-->
<?php
  $firstname=$_POST['firstName'];
  $lastname=$_POST['lastName'];
  $emailid=$_POST['email'];
  $password=$_POST['password'];
  $address=$_POST['address'];
  $pincode=$_POST['pincode'];
  echo "<table>".
  "<tr>".
    "<th>First-Name</th>".
    "<th>Last-Name</th>".
    "<th>Email</th>".
    "<th>Password</th>".
    "<th>Address</th>".
    "<th>Pincode</th>".
  "</tr>".
  "<tr>".
    "<td>".$firstname."</td>".
    "<td>".$lastname."</td>".
    "<td>".$emailid."</td>".
    "<td>".$password."</td>".
    "<td>".$address."</td>".
    "<td>".$pincode."</td>".
  "</tr>".
"</table>";

// $arr=date('Y-M-d');
// echo($arr);
// setcookie('user','sanober',time()+34600,"/");
// setcookie('user','shahid',time()+3600,"/");

?> 