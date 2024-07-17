<?php
$server_name = "bd09ybkhu3grbxzuqmz2-mysql.services.clever-cloud.com";
$user_name = "ult1ijqhr2eoguyx";
$password = "9UHn4cWH36BcF382LcKS";
$dbname = "bd09ybkhu3grbxzuqmz2";

// Create Connection
$conn = new mysqli($server_name,$user_name,$password,$dbname);

// Check connection
if ($conn->connect_error){
    die("Connection faild:" .$conn->connect_error);
}
echo "Connection successfully";

// Close connection
$conn->close();
?>
