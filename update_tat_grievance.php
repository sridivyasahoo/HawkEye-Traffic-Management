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
	/***************TAT Grivence Move Ticket to Admin Start**************/
	$get_manager = 'type01';
	$get_gri_forwardto = 'Admin';
	$get_field_19  = $get_manager;

	$result7 = mysql_query("SELECT * FROM ticket ");
			if(mysql_num_rows($result7))
			{
	
				while($Alldetails1 = mysql_fetch_array($result7))
				{
					$pending_days = $Alldetails1["field_13"];
					$current_days = $Alldetails1["field_14"];
					$get_cus_id = $Alldetails1["cus_id"];
					$get_type = $Alldetails1["field_19"];
					$get_updated = $Alldetails1["field_20"];
					// Pending days < tat days 
					// Get Each Ticket days & status
					// Check status to be Moved and not to be admin
				// (strcmp($get_updated,"Moved")==1)
				if ( ($pending_days < $current_days) && (strcmp($get_type,"type01")==1) 
					&& empty($get_updated) )
				{
					$result8 = mysql_query("SELECT * FROM ticket WHERE cus_id='$get_cus_id'");
						if(mysql_num_rows($result8))
						{
							// One Time Move to Admin
							mysql_query("UPDATE ticket SET field_20='Moved'  WHERE cus_id='$get_cus_id'");
							//$response["details"] = array();
				
							while($Alldetails3 = mysql_fetch_array($result8))
							{
								// temp user array
								//$details3 = array();
								//$details3 = $Alldetails3;
								$ticke_id = $Alldetails3["email"];
								$get_field_1 = $Alldetails3["field_1"];
								$get_field_2 = $Alldetails3["field_2"];
								$get_field_3 = $Alldetails3["field_3"];
								$get_field_4 = $Alldetails3["field_4"];
								$get_field_5 = $Alldetails3["field_5"];
								$get_field_6 = $Alldetails3["field_6"];
								$get_field_7 = $Alldetails3["field_7"];
								$get_field_8 = $Alldetails3["field_8"];
								$get_field_9 = $Alldetails3["field_9"];
								$get_field_10 = $Alldetails3["field_10"];
								$get_field_11 = $Alldetails3["field_11"];
								$get_field_12 = $Alldetails3["field_12"];
								$get_field_13 = $Alldetails3["field_13"];
								$get_field_14 = $Alldetails3["field_14"];
								$get_field_15 = $Alldetails3["field_15"]; // current Dept >> Desc
								$get_field_21 = $Alldetails3["field_21"];
								$get_site = $Alldetails3["site"];
								$get_area = $Alldetails3["area"];
								$get_for_empid = $Alldetails3["fempid"];
								$get_created_date = $Alldetails3["created_date"];
								$get_closing_date = $Alldetails3["closing_date"];
								$get_rating = $Alldetails3["rating"];
								$get_comment = $Alldetails3["comment"];

				$result = mysql_query("INSERT INTO ticket
										( email,field_1, field_2, field_3, field_4,site,area,
										field_5, field_6,field_7,field_8,field_9,fempid, field_10, field_11, field_12,  field_13,field_14,field_15,field_16, field_19, field_21, rating,comment,created_date,closing_date	)
						VALUES(	'$ticke_id', '$get_field_1', '$get_field_2', '$get_field_3', 
								'$get_field_4', '$get_site','$get_area', '$get_field_5', '$get_field_6',
								'$get_field_7', '$get_field_8', '$get_field_9','$get_for_empid',
								'$get_field_10','$get_field_11','$get_field_12',
								'$get_field_13','$get_field_14','$get_field_15',
								'$get_gri_forwardto','$get_field_19',
								'$get_field_21','$get_rating','$get_comment',
								'$get_created_date','$get_closing_date' )");

								//array_push($response["details"],$details);

							}	
					}
						//$response["success"] = 3;		
						// echoing JSON response
						//echo json_encode($response);
				}
					else 
					{
						// unsuccess
						//$response["success"] = 0;		
						// echoing JSON response
						//echo json_encode($response);
					}
		
				}
						
						$response["success"] = 3;		
						// echoing JSON response
						echo json_encode($response);
			}

						/***************TAT Grivence Move Ticket to Admin End**************/

	

?>