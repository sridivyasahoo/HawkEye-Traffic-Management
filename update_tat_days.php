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
	session_start();
    $get_emp_id =  $_SESSION['empid'];
	$result = mysql_query("SELECT * FROM login WHERE field_1 = '$get_empid' ");
		if (mysql_num_rows($result))
		{
			
			while($Allresponse = mysql_fetch_array($result))
			{
				// temp user array
				$response = array();
				$response = $Allresponse;
			}
		}
		
	$get_created_date =date('Y-m-d');
	
	$result2 = mysql_query("SELECT * FROM cur_date ");
	while($Alldetails2 = mysql_fetch_array($result2))
		{
			$get_date = $Alldetails2["created_date"];
		}	
//	echo $get_date;
	
	if ($get_date == $get_created_date)
	{
			$response["success"] = 3;		
			// echoing JSON response
			echo json_encode($response);
	}
	else 
	{
	mysql_query("INSERT INTO cur_date( created_date	)
						VALUES(	'$get_created_date')");
	// One Time Execution 
	// Last date flag newly instered shall be null 
	// Once TAT updated falg will be 1 
	$result3 = mysql_query("SELECT * FROM cur_date ");
	while($Alldate1 = mysql_fetch_array($result3))
		{
			$get_flag = $Alldate1["field_1"];
		}	
	//echo $get_flag ;

	if (  ($get_flag==null) )
	{
		$result1 = mysql_query("SELECT * FROM ticket ");
		//$response["details"] = array();	
			if(mysql_num_rows($result1))
			{
				while($Alldetails = mysql_fetch_array($result1))
				{
					$details = array();
					$details = $Alldetails;
					$get_field_14 = $Alldetails["field_14"];
					$get_field_14 = $get_field_14+1;
					mysql_query("UPDATE ticket SET field_14='$get_field_14'");
					//array_push($response["details"],$details);
				}	
			mysql_query("UPDATE cur_date SET field_1=field_1+1  ");
			$response["success"] = 3;		
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
		else 
		{
			// unsuccess
			$response["success"] = 3;		
			// echoing JSON response
			echo json_encode($response);
		}
	}
		
	

?>