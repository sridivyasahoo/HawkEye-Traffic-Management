<?php
/*********************

**** CPanel ******************
*********/

/* Following code will match user login credentials */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

$data = json_decode(file_get_contents("php://input"));

$get_email = mysql_real_escape_string($data->field_1);
$get_admin_id = mysql_real_escape_string($data->password);

if(empty($get_email) || empty($get_admin_id))
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	// get customer 
	$result = mysql_query("UPDATE login SET password='$get_admin_id' WHERE field_1 = '$get_email'");

	// check for empty result
	if($result)
	{
		// success
		$response["success"] = 1;
		
		// echoing JSON response
		echo json_encode($response);
	}
	else 
	{
		// unsuccess
		$response["success"] = 0;
		
		// echoing JSON response
		echo json_encode($response);
	}
}	
?>