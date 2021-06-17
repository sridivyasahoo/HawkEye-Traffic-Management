<?php
/*********************
**** CPanel ******************
*********/

/* Following code will retrieve table values */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';
	
// connecting to db
$db = new DB_CONNECT();

// check for post data
$data = json_decode(file_get_contents("php://input"));
$get_email = mysql_real_escape_string($data->email);
$get_field_3 = mysql_real_escape_string($data->field_3);
		$result1 = mysql_query("SELECT  * FROM answer where field_3='$get_field_3' AND email='$get_email'");
			// Sum query rating
			
			$result2 = mysql_query("SELECT SUM(field_9) as total_price FROM answer WHERE  email='$get_email' AND field_3='$get_field_3'");
			
if (mysql_num_rows($result1))
{
			$Total_Sum = mysql_fetch_array($result2);			
			$get_total_sum = $Total_Sum["total_price"];
			$response["products"] = array();
			$response["details"] = array();
			while($AllProducts = mysql_fetch_array($result1))
			{
				$products = array();
				$details = array();
				$products = $AllProducts;
				$get_comment = $AllProducts["field_13"];
				$details["question"] = $get_field_3;
				$products["get_comment"] = $get_comment;
				$details["sum"] = $get_total_sum;
				array_push($response["products"],$products);
			}
				array_push($response["details"],$details);
				$response["success"] = 1;
				echo json_encode($response);
}
		
else
{
	$response["success"] = 0;
	echo json_encode($response);
}
		

?>