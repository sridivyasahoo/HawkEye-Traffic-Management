<?php
/*********************
**** CPanel ******************
*********/

/* Following register will admin login credentials */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

$data = json_decode(file_get_contents("php://input"));

$get_type = mysql_real_escape_string($data->type);
$get_dept = mysql_real_escape_string($data->dept);
$get_created_date =date('Y-m-d');

if( empty($get_type)  )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	$result = mysql_query("UPDATE ticket SET field_17 = 'Yes' WHERE field_5='$get_dept' AND field_19='$get_type' ");


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