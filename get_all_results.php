<?php
/*********************

**** CPanel ******************
*********/

/* Following code will match admin login credentials */

//user temp array
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

// check for post data
$data = json_decode(file_get_contents("php://input"));
/*
$get_site = mysql_real_escape_string($data->field_1);
$get_area = mysql_real_escape_string($data->field_2);
$get_dept = mysql_real_escape_string($data->field_3);
$get_status = mysql_real_escape_string($data->field_4);
*/
$result = mysql_query("SELECT * FROM fir ");

if(mysql_num_rows($result))
{
	$response["details"] = array();	
	
	while($Alldetails = mysql_fetch_array($result))
	{
		$details = array();
		$details = $Alldetails;
		array_push($response["details"],$details);
	}	
	$response["success"] = 1;
	echo json_encode($response);

}
else
{
	$response["success"] = 0;	
	echo json_encode($response);
}
	

?>