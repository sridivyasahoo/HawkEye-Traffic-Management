<?php

//user temp array
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

// check for post data

$data = json_decode(file_get_contents("php://input"));
$get_field_1 =  mysql_real_escape_string($data->field_1);
$get_field_2 =  mysql_real_escape_string($data->field_2);
$get_empid =  mysql_real_escape_string($data->email);

$result = mysql_query("SELECT * FROM login WHERE field_1 = '$get_empid'");
$Allresponse = mysql_fetch_array($result);
$get_name = $Allresponse["name"];

$result1 = mysql_query("SELECT * FROM login WHERE field_1 = '$get_empid'");
$Allresponse1 = mysql_fetch_array($result1);
$get_number = $Allresponse1["mobile"];
$get_number_2 = $Allresponse1["field_2"];

	$username = "contact@arudhrainnovations.com";
	$hash = "5a920f96a12b4702b59fe996787fe7d1f9a7c61c";
	$numbers = $get_number;
	$numbers1 = $get_number_2;
	
	
	$get_lat = substr($get_field_1, 0,6);
	$get_log =  substr($get_field_2,0,6);

	$test = "0";
	$sender = "AISOFT"; 	
	$message = 'Im '.$get_name.', current location lat '.$get_lat.' and log '.$get_log.'';
	$message = urlencode($message);

	if ($result)
	{
	$data = "username=".$username."&hash=".$hash."&message=".$message."&sender=".$sender."&numbers=".$numbers."&test=".$test;
	$ch = curl_init('http://api.textlocal.in/send/?');
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$result2 = curl_exec($ch); // This is the result from the API
	curl_close($ch);

	
			$response["success"] = 1;	
			echo json_encode($response);

	}
	else {
	
			$response["success"] = 0;	
			echo json_encode($response);
		
	}
?>