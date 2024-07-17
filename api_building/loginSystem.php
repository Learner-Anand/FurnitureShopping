<?php
// connect to mysql database
$conn = new mysqli("localhost","root","","sign_in_data");

// check connection
if($conn->connect_error){
    die("connection failed: ". $conn->connect_error);
}
?>