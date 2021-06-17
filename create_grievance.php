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

$get_field_1 = mysql_real_escape_string($data->field_1);
$get_field_2 = mysql_real_escape_string($data->field_2);
$get_field_3 = mysql_real_escape_string($data->field_3);
$get_field_4 = mysql_real_escape_string($data->field_4);
$get_site = mysql_real_escape_string($data->site);
$get_area = mysql_real_escape_string($data->area);
$get_field_5 = mysql_real_escape_string($data->field_5);
$get_field_6 = mysql_real_escape_string($data->field_6);
$get_field_7 = mysql_real_escape_string($data->field_7);
$get_field_8 = mysql_real_escape_string($data->field_8);
$get_field_9 =  mysql_real_escape_string($data->field_9);
$get_field_10 = mysql_real_escape_string($data->field_10);
$get_field_11 = mysql_real_escape_string($data->field_11);
$get_field_12 = mysql_real_escape_string($data->field_12);
$get_field_17 = 'No';
$get_type = mysql_real_escape_string($data->type);


if( empty($get_type ) ||empty($get_site ) ||empty($get_area) || empty($get_field_2) || 
	empty($get_field_3) ||
	empty($get_field_4) || empty($get_field_5) || empty($get_field_6) ||
	empty($get_field_7)  || empty($get_field_8)|| empty($get_field_10)|| 
	empty($get_field_11)|| empty($get_field_12) )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else if (strlen($get_field_6) != 10) 
{
	$response["success"] = 4;
	echo json_encode($response);
}
else
{
	
	
	if (strlen($get_field_2) >= 5)  // String Length Min 5 letters
	{
		$get_field_14 = '1';
		$get_field_21 = 'Under Progress';
		$get_created_date =date('Y-m-d');
		$get_field_13 = "";
				$get_manager = "";
$get_gri_forwardto = "";

		$get_for_empid ="";
	$get_field_19  = "";
		/********************************************************************/
		/********************************************************************/
		/********************************************************************/
	/*
		$result3 = mysql_query("SELECT * FROM tat WHERE field_1='$get_field_12' AND  field_2='$get_field_5' AND  field_3='$get_type' ");
		$Alldetails = mysql_fetch_array($result3);
		$tat_days = $Alldetails["field_5"];
		$get_field_13 = $tat_days;

		//		Assign to User Type group 
		// RTO for Type 2 to N -> shall not be type 1 
		if( (strcmp($get_field_9 ,"RTO")==0)  && (strcmp($get_type ,"type01")==1 ) ) 
		{
			//echo "RTO";
			$get_manager_1 = substr($get_type, -2);
			if ( (strcmp($get_type ,"type11")==0) or (strcmp($get_type ,"type12")==0) ) 
			{
				$get_manager = 'type' . ($get_manager_1 - 1);
			}
			else 
			{
				$get_manager = 'type0' . ($get_manager_1 - 1);
			}
			//echo $get_manager;
		}
		// If type 1 rise for RTO -> Type 1 stays
		else if( (strcmp($get_field_9 ,"RTO")==0) && (strcmp($get_type ,"type01")==0 ) )
		{
			$get_manager = 'type01';
		}
		// Any Type rise for admin
		else if( (strcmp($get_field_9 ,"Admin")==0)  )
		{
			$get_manager = 'type01';
		}
		else 
		{
			$get_manager = null;
		}
		

	$get_field_19  = $get_manager;
	// Generate ID 
	*/
	$result2 = mysql_query("SELECT COUNT(site) as total_balance FROM ticket WHERE site='$get_site'");
	$Allsurvey = mysql_fetch_array($result2);
	$get_id = $Allsurvey["total_balance"] ;
	$ticke_id = $get_field_5.'-'.($get_id + 1);
	/*
	// Forward TO Emp ID
	$result4 = mysql_query("SELECT * FROM login WHERE name='$get_field_10'");
	$Allforward = mysql_fetch_array($result4);
	$get_for_empid = $Allforward["field_1"];
	
	// Grievance Forward To *
	
	$result5 = mysql_query("SELECT * FROM hirarchy 
				WHERE dept='$get_field_5' AND type='$get_field_19'");
	$Allgrie_forward = mysql_fetch_array($result5);
	$get_gri_forwardto = $Allgrie_forward["description"];
		*/

	/*********************************************/
	//*********** Employee Rating 5 Avg	**********/
	/*********************************************/
	
	$result6 = mysql_query("SELECT * FROM site_results where site='$get_site' ");
	$Allsite= mysql_fetch_array($result6);
	$get_site_1 = $Allsite["site"];
	
	if( empty($get_site_1))
	{
		$get_field_UP = 1;
		$get_field_tot = 1;
		mysql_query("INSERT INTO site_results ( site,field_1, field_5	)
					VALUES(	'$get_site','$get_field_UP','$get_field_tot' )");
	}
	else
	{
		mysql_query("UPDATE site_results SET 
				field_1=field_1+1,field_5=field_5+1
				where site='$get_site' ");
	}

	
	
	
	$result = mysql_query("INSERT INTO ticket
							( email,field_1, field_2, field_3, field_4,site,area,
							field_5, field_6,field_7,field_8,field_9,fempid, field_10, 
							field_11, field_12,  field_13,field_14,field_15,field_17, field_19, field_21, created_date	)
			VALUES(	'$ticke_id', '$get_field_1', '$get_field_2', '$get_field_3', 
					'$get_field_4', '$get_site','$get_area', 
					'$get_field_5', '$get_field_6','$get_field_7',
					'$get_field_8', '$get_field_9','$get_for_empid',
					'$get_field_10','$get_field_11','$get_field_12',
					'$get_field_13','$get_field_14','$get_gri_forwardto',
					'$get_field_17','$get_field_19',
					'$get_field_21','$get_created_date')");

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
		else 
		{
			// unsuccess
			$response["success"] = 3;		
			// echoing JSON response
			echo json_encode($response);
		}
	
}
?>