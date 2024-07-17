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

// fetch data
$sql = "SELECT * FROM category_image";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()){
    echo $row["img_id"] . "\n";
    $link = $row["img_src"] . "\n";
    echo $row["price"] . "\n";
    echo $row["type"] . "\n";
    $new_link = str_replace(array('file/d/','/view?usp=drive_link'),array('thumbnail/id=','&wp=1000'),$link);
    echo $new_link;
}
// Close connection
$conn->close();
?>