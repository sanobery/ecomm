<?php
  require_once('./databaseconnect.php');

  $obj = DatabaseConnect::getInstance();
  $table = 'customerDetail';
  $arr= array('tablename'=>$table);
  $result = $obj->select('first_name,last_name,email')->table($table)->where([['email','=','sanoberyousuf786@gmail.com']])->orderBy([['first_name','desc'],['last_name','asc']])->fetch(); 
  $obj->closeconnection();

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Users</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>

<body>

  <h3 class = "text-dark text-uppercase ms-4 py-4">Customer Details :</h3>
  <div class = "container">
  <table class = "table table-dark table-striped">
    <thead>
      <tr>
        <th scope = "col">#</th>
        <th scope = "col">First</th>
        <th scope = "col">Last</th>
        <th scope = "col">Email</th>
        <th scope = "col">Password</th>
        <th scope = "col">Address</th>
        <th scope = "col">Pincode</th>
      </tr>
    </thead>
    <tbody>

      <?php
          foreach($result as $row){
            echo '<th scope = "row">'. $row["id"].'</th>';
            echo '<td>'. $row["first_name"].'</td>';
            echo '<td>'. $row["last_name"].'</td>';
            echo '<td>'. $row["email"].'</td>';
            echo '<td>'. $row["password"].'</td>';
            echo '<td>'. $row["address"].'</td>';
            echo '<td>'. $row["pincode"].'</td>';
            echo '</tr>';
          }
      ?>

    </tbody>
  </table>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
    crossorigin="anonymous"></script>
    
</body>
</html>