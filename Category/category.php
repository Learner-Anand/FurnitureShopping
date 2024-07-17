<?php
$server_name = "localhost";
$user_name = "root";
$password = "";
$dbname = "sign_in_data";

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