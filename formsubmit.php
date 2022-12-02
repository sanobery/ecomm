<!--Validated Data Of Customer Details Are stored here-->
<?php
  $firstname=$_POST['firstName'];
  $lastname=$_POST['lastName'];
  $emailid=$_POST['Email'];
  $password=$_POST['Password'];
  $address=$_POST['Address'];
  $pincode=$_POST['Pincode'];
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
?>