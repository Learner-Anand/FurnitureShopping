<?php 
// connect to mysql database
$conn = new mysqli("localhost","root","","sign_in_data");

// check connection
if($conn->connect_error){
    die("connection failed: ". $conn->connect_error);
}

$catType = ($_GET["categoryType"]);

$sql = "SELECT * FROM `category_image`";
$result = $conn->query($sql);

$data = array();

if ($catType == 'search'){
    while($row = $result->fetch_assoc()){
        $row["img_src"] = str_replace(array('file/d/','/view?usp=drive_link','/view?usp=sharing'),array('thumbnail?id=','',''),$row["img_src"]);
        $data[] = $row;
    }
}
else if($catType == 'img_id'){
    while($row = $result->fetch_assoc()){
        $data[] = $row['img_id'];
    }
}
else{
    $sql = "SELECT * FROM `category_image` WHERE `type` LIKE '$catType'";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
        $row["img_src"] = str_replace(array('file/d/','/view?usp=drive_link','/view?usp=sharing'),array('thumbnail?id=','',''),$row["img_src"]);
        $data[] = $row;
    }
}
// fetch category type from url
// print_r($catType);

// retrieve data from database
// $sql = "SELECT * FROM `category_image` WHERE `type` LIKE '$catType'";
$sql = "SELECT * FROM `category_image`";

//create an array to store the data

// Fetch data and store in array

// Close connection
$conn->close();

//Output data in JSON format
echo json_encode($data);
?>