<?php
// connect to mysql database
$conn = new mysqli("bd09ybkhu3grbxzuqmz2-mysql.services.clever-cloud.com","ult1ijqhr2eoguyx","9UHn4cWH36BcF382LcKS","bd09ybkhu3grbxzuqmz2");

// check connection
if($conn->connect_error){
    die("connection failed: ". $conn->connect_error);
}
?>
