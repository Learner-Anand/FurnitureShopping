<?php
// Connect to database
$conn = mysqli_connect("localhost", "root", "", "sign_in_data");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Process login form data
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Verify login credentials
  $login_success = verify_login($username, $password);

  if($login_success) {
    echo json_encode(array('success' => true, 'message' => 'Login successful'));
  } else {
    echo json_encode(array('success' => false, 'message' => 'Invalid credentials'));
  }
}

// Verify login credentials
function verify_login($username, $password) {
  $sql = "SELECT * FROM user_data WHERE username = '$username' AND password = '$password'";
  $result = mysqli_query($conn, $sql);
  if (mysqli_num_rows($result) > 0) {
    return true;
  } else {
    return false;
  }
}

// Close connection
mysqli_close($conn);
?>