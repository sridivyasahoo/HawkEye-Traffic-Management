var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookies, $cookieStore, $http, $filter) 
{
	
/****************************************************************************/
/**************************User Cookies **********************************/	
/****************************************************************************/	
	
	$scope.cook_user_dept = $cookieStore.get("cook_user_dept");
	$scope.cook_user_email = $cookieStore.get("cook_user_email");
	$scope.cook_admin_email = $cookieStore.get("cook_admin_email");
	$scope.cook_user_mail = $cookieStore.get("cook_user_mail");

/****************************************************************************/
/************************** User Logout ************************************/
/****************************************************************************/		
	$scope.user_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_admin_email = "";
			$cookies.cook_user_email = "";
			$cookies.cook_user_type = "";
			$cookies.cook_user_dept = "";
			$cookies.cook_res_field_1 = "";
			$cookies.cook_res_field_2 = "";
			$cookies.cook_res_field_3 = "";
			$cookies.cook_res_field_4 = "";
			$cookies.cook_survey_id = "";
			$cookies.cook_survey_name = "";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}
/****************************************************************************/
/************************Home page*********************************
/****************************************************************************/
	if(!$cookies.cook_admin_email)
	{
		$scope.UserHomeVar = false; //hide
		$scope.HomeVar = true; //hide
	}
	else 
	{
		$scope.UserHomeVar = true; //show
		$scope.HomeVar = false; //hide
	}
	
/****************************************************************************/
/************************** Post Query User *********************************/
/****************************************************************************/
	$scope.complaint_status = function(email) 
	{		
		window.location = "admin_post_solution.html";
		$cookieStore.put("cook_user_email",email);
		return;				
    }
	$scope.cook_user_email = $cookieStore.get("cook_user_email");
/****************************************************************************/
/************************** update_grievance  **********************************/
/****************************************************************************/
		 
	$scope.update_status = function(email) 
	{		
		$http.post('update_status.php',{
		 'email':email
		 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Completed successfully");
				window.location = "view_fir.html";fir_details
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }


		 
	$scope.update_status_csr = function(email) 
	{		
		$http.post('update_status_csr.php',{
		 'email':email
		 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Completed successfully");
				window.location = "view_csr.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }


/****************************************************************************/
/************************** create_employee *********************************/
/****************************************************************************/
	$scope.create_employee = function() 
	{
	$http.post('create_employee.php', 
		{
		'name':$scope.name1,'email':$scope.email,'password':$scope.password,
		'mobile':$scope.mobile,'field_1':$scope.field_1,'field_2':$scope.field_2,
		'field_3':$scope.field_3,'field_4':$scope.field_4,
		'field_5':$scope.field_5,'field_6':$scope.field_6,
		'field_7':$scope.field_7,'field_8':$scope.field_8
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Created Successfully");
				window.location = "view_employee.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }


/****************************************************************************/
/************************** create_employee *********************************/
/****************************************************************************/
	$scope.create_fir = function() 
	{
		
	$scope.to_date = document.getElementById('to_date').value;
	$scope.field_5 = "Nil";
	$scope.field_1 = "Nil";

	$http.post('create_fir.php', 
		{
		'name':$scope.name1,'email':$scope.email,'password':$scope.from_date,
		'mobile':$scope.mobile,'field_1':$scope.field_1,'field_2':$scope.cook_user_dept,
		'field_3':$scope.field_3,'field_4':$scope.field_4,
		'field_5':$scope.field_5,'field_6':$scope.to_date,
		'field_7':$scope.field_7,'field_8':$scope.field_8
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("FIR Created Successfully");
				window.location = "view_fir.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			else if(data.success == 3)
			{
				alert("Enter 10 Digit Mobile No");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }

/****************************************************************************/
/************************** create_employee *********************************/
/****************************************************************************/
	$scope.create_csr = function() 
	{
		
	$scope.from_date = "Nil";
	$scope.to_date = "Nil";
	$scope.field_5 = "Nil";
	$scope.field_3 = "Nil";
	$scope.field_4 = "Nil";
	$scope.field_5 = "Nil";
	$scope.field_7 = "Nil";
	$scope.field_8 = "Nil";
	
	$http.post('create_csr.php', 
		{
		'name':$scope.name1,'email':$scope.email,'password':$scope.from_date,
		'mobile':$scope.mobile,'field_1':$scope.field_1,'field_2':$scope.cook_user_dept,
		'field_3':$scope.field_3,'field_4':$scope.field_4,
		'field_5':$scope.field_5,'field_6':$scope.to_date,
		'field_7':$scope.field_7,'field_8':$scope.field_8
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Traffic Updated Successfully");
				window.location = "view_csr.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			else if(data.success == 3)
			{
				alert("Enter 10 Digit Mobile No");
			}
			else
				{
					alert("Un Successfully");
				}
        });
    }

	$scope.create_employee_1 = function() 
	{
	$http.post('user_register.php', 
		{
		'name':$scope.name1,'email':$scope.email,'password':$scope.password,
		'mobile':$scope.mobile,'field_1':$scope.field_1,'field_2':$scope.field_2,
		'field_3':$scope.field_3,'field_4':$scope.field_4,
		'field_5':$scope.field_5,'field_6':$scope.field_6,
		'field_7':$scope.field_7,'field_8':$scope.field_8
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Registered Successfully");
				window.location = "index.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else if(data.success == 3)
			{
				alert("Enter 10 Digit Mobile No");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/*****************************************************************************/
/************************** Update update_employee **************************/
/****************************************************************************/
	$scope.update_employee = function(user_id,name,email,password,mobile,field_1,field_2,
					field_3,field_4,field_5,field_6,field_7,field_8) 
	{
		
		$cookieStore.put("user_id",user_id);
		$cookieStore.put("cook_name",name);
		$cookieStore.put("cook_email",email);
		$cookieStore.put("cook_password",password);
		$cookieStore.put("cook_mobile",mobile);
		$cookieStore.put("cook_field_1",field_1);
		$cookieStore.put("cook_field_2",field_2);
		$cookieStore.put("cook_field_3",field_3);
		$cookieStore.put("cook_field_4",field_4);
		$cookieStore.put("cook_field_5",field_5);
		$cookieStore.put("cook_field_6",field_6);
		$cookieStore.put("cook_field_7",field_7);
		$cookieStore.put("cook_field_8",field_8);
		
		window.location = "edit_employee.html";
		return;
	}
	

	$scope.user_id = $cookieStore.get("user_id");
	$scope.cook_name = $cookieStore.get("cook_name");
	$scope.cook_email = $cookieStore.get("cook_email");
	$scope.cook_password = $cookieStore.get("cook_password");
	$scope.cook_mobile = $cookieStore.get("cook_mobile");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	$scope.cook_field_2 = $cookieStore.get("cook_field_2");
	$scope.cook_field_3 = $cookieStore.get("cook_field_3");
	$scope.cook_field_4 = $cookieStore.get("cook_field_4");
	$scope.cook_field_5 = $cookieStore.get("cook_field_5");
	$scope.cook_field_6 = $cookieStore.get("cook_field_6");
	$scope.cook_field_7 = $cookieStore.get("cook_field_7");
	$scope.cook_field_8 = $cookieStore.get("cook_field_8");
	

	$scope.employee_more_info = function(user_id) 
	{
		
		$cookieStore.put("cook_user_id",user_id);
		window.location = "view_employee_info.html";
		return;
	}
	$scope.cook_user_id = $cookieStore.get("cook_user_id");

	$http.post('get_employee_info.php', 
		{
		'id':$scope.cook_user_id
		})
		.success(function(data, status, headers, config) 
		{
			$scope.employee_more_details = data.details;
        });
    
	
	
	
	
$scope.save_employee = function() 
	{
		console.log("--------------------");
		alert("Hi.....");
	$http.post('save_employee.php', {
			'id': $scope.user_id,'name': $scope.cook_name,'email': $scope.cook_email, 
			'password': $scope.cook_password,'mobile': $scope.cook_mobile,
			'field_1': $scope.cook_field_1,'field_2': $scope.cook_field_2, 
			'field_3': $scope.cook_field_3,  'field_4': $scope.cook_field_4,
			'field_5': $scope.cook_field_5,'field_6': $scope.cook_field_6,
			'field_7': $scope.cook_field_7,'field_8': $scope.cook_field_8})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "view_employee.html";
			$cookies.id = "";
				$cookies.cook_field_1 = "";	
				$cookies.cook_field_2 = "";
				$cookies.cook_field_3 = "";	
				$cookies.cook_field_4 = "";
				$cookies.cook_field_5 = "";	
				$cookies.cook_field_6 = "";	
				$cookies.cook_field_7 = "";	
				$cookies.cook_field_8 = "";	
				$cookies.cook_name = "";	
				$cookies.cook_email = "";	
				$cookies.cook_mobile = "";	
				$cookies.cook_password = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
/****************************************************************************/
/************************** create_category *********************************/
/****************************************************************************/
	$scope.create_category = function() 
	{
	$http.post('create_category.php', 
		{
		'field_1':$scope.field_1
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				location.reload(); 
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/****************************************************************************/
/************************** create_dept *********************************/
/****************************************************************************/
	$scope.create_dept = function() 
	{
	$http.post('create_dept.php', 
		{
		'field_1':$scope.field_1
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				   location.reload(); 
			return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/*****************************************************************************/
/************************** Update update_employee*********************************/
/****************************************************************************/
	$scope.update_dept = function(cus_id,field_1) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		window.location = "edit_dept.html";
		return;
	}
	
	$scope.update_cat = function(cus_id,field_1) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		window.location = "edit_cat.html";
		return;
	}
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_dept = function() 
	{
	$http.post('save_dept.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_dept.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
$scope.save_cat = function() 
	{
	$http.post('save_cat.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_cat.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
/****************************************************************************/
/************************** create Site *********************************/
/****************************************************************************/
	$scope.create_site = function() 
	{
	$http.post('create_site.php', 
		{
		'field_1':$scope.field_1
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				   location.reload(); 
			return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/*****************************************************************************/
/************************** Update update_employee*********************************/
/****************************************************************************/
	$scope.update_site = function(cus_id,field_1) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		window.location = "edit_site.html";
		return;
	}
	

	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_site = function() 
	{
	$http.post('save_site.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_site.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
/****************************************************************************/
/************************** create Area *********************************/
/****************************************************************************/
	$scope.create_area = function() 
	{
	$http.post('create_area.php', 
		{
		'field_1':$scope.field_1,'field_2':$scope.field_2
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				location.reload(); 
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/*****************************************************************************/
/************************** Update update_employee*********************************/
/****************************************************************************/
	$scope.update_area = function(cus_id,field_2) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_2);
		window.location = "edit_area.html";
		return;
	}
	

	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_area = function() 
	{
	$http.post('save_area.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_area.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
$scope.get_site_area = function(field_6) 
	{
	$http.post('get_site_area.php', {
			'field_6': $scope.field_6})
	.success(function(data, status, headers, config) 
	{
		$scope.site_area_details = data.details;

    });
	}
$scope.get_site_area_2 = function(field_20) 
	{
	$http.post('get_site_area.php', {
			'field_6': $scope.field_20})
	.success(function(data, status, headers, config) 
	{
		$scope.site_area_details_assign = data.details;

    });
	}
	
/****************************************************************************/
/************************** create User Type *********************************/
/****************************************************************************/
	$scope.create_user = function() 
	{
	$http.post('create_user.php', 
		{
		'field_1':$scope.field_1
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("User Type Created");
				window.location = "view_user.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/***********************************************************************/
/************************** Update user*********************************/
/*********************************************************************s**/
	$scope.update_user = function(cus_id,field_1) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		window.location = "create_user.html";
		return;
	}
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_user = function() 
	{
	$http.post('save_user.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "view_user.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
/*****************************************************************************/
/************************** create_question *********************************/
/****************************************************************************/
	$scope.create_question = function(email,field_1) 
	{
		$cookieStore.put("cook_survey_id",email);
		$cookieStore.put("cook_survey_name",field_1);
		window.location = "survey_question.html";
		return;
	}
	
	$scope.cook_survey_id = $cookieStore.get("cook_survey_id");
	$scope.cook_survey_name = $cookieStore.get("cook_survey_name");
	
/**************************************************************************/
/************************** Delete User  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_hirarchy = function(cusid) 
	{		
        $http.post('delete_hirarchy.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_hirarchy.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/**************************************************************************/
/************************** Delete tat  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_tat = function(cusid) 
	{		
        $http.post('delete_tat.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				window.location = "create_tat.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/**************************************************************************/
/************************** Delete tat  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_traffic = function(user_id) 
	{		
        $http.post('delete_traffic.php', 
		{
		'id': user_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				window.location = "view_csr.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/**************************************************************************/
/************************** Delete User  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_question = function(cusid,email) 
	{		
        $http.post('delete_question.php', 
		{
		'id': cusid,'survery_id': email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "survey_question.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/****************************************************************************/
/************************** Delete User  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_dept = function(cusid) 
	{		
        $http.post('delete_dept.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_dept.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

	$scope.delete_cat = function(cusid) 
	{		
        $http.post('delete_cat.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_cat.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/****************************************************************************/
/************************** Delete Area  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_area = function(cusid) 
	{		
        $http.post('delete_area.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_area.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/****************************************************************************/
/************************** Delete User  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_site = function(cusid) 
	{		
        $http.post('delete_site.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_site.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/****************************************************************************/
/************************** All service_get_al Details*********************************/
/****************************************************************************/

	$http.post('application_get_admin.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.admin_details = data.details;
		}
		else
		{
			$scope.admin_details = "No Data Found !!!";
		}
    });
/****************************************************************************/
/************************** All GET get_employee Details*********************************/
/****************************************************************************/
	$http.post('update_tat_grievance.php')
		.success(function(data, status, headers, config) 
		{
				$scope.update_tat_details = data.details;
		});

	$http.post('get_tat.php')
	.success(function(data, status, headers, config) 
	{
		$scope.tat_details = data.details;
    });
	
	$http.post('get_employee.php')
	.success(function(data, status, headers, config) 
	{
		$scope.emp_details = data.details;
    });
	
	$http.post('get_fir.php')
	.success(function(data, status, headers, config) 
	{
		$scope.fir_details = data.details;
    });
	
	$http.post('get_csr.php')
	.success(function(data, status, headers, config) 
	{
		$scope.csr_details = data.details;
    });
	
	$http.post('get_date.php')
	.success(function(data, status, headers, config) 
	{
		$scope.date_details = data.details;
	});
	

	
	$http.post('get_dept.php')
	.success(function(data, status, headers, config) 
	{
			$scope.dept_details = data.details;
	});
	
	
	$http.post('get_category.php')
	.success(function(data, status, headers, config) 
	{
			$scope.category_details = data.details;
	});
	
	$http.post('get_hirarchy.php')
	.success(function(data, status, headers, config) 
	{
			$scope.hirarchy_details = data.details;
	});
	
	$http.post('get_site.php')
	.success(function(data, status, headers, config) 
	{
			$scope.site_details = data.details;
	});
	
	$http.post('get_area.php')
	.success(function(data, status, headers, config) 
	{
			$scope.area_details = data.details;
	});
	
	$http.post('get_user_type.php')
	.success(function(data, status, headers, config) 
	{
			$scope.user_type_details = data.details;
	});
	
	$http.post('get_site_results.php')
	.success(function(data, status, headers, config) 
	{
			$scope.all_site_results = data.details;
	});
	
	$http.post('get_search_results.php')
	.success(function(data, status, headers, config) 
	{
			$scope.all_ticket_results = data.details;
	});
	


/****************************************************************************/
/************************** All User Details*********************************/
/****************************************************************************/

	$http.post('user_get_all.php')
	.success(function(data, status, headers, config) 
	{
		$scope.user_details = data.details;
    });
	

	
/****************************************************************************/
/************************** create_TAT	 **************************/
/****************************************************************************/

	$scope.create_tat = function() 
	{
	$http.post('create_tat.php', 
		{
		'field_1':$scope.field_1,'field_2':$scope.field_2,
		'field_4':$scope.field_4,'field_5':$scope.field_5
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Created Successfully");
				location.reload(); 
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/****************************************************************************/
/************************** create_hirarchy		 **************************/
/****************************************************************************/

	$scope.create_hirarchy = function() 
	{
	$http.post('create_hirarchy.php', 
		{
		'field_1':$scope.field_1,'field_2':$scope.field_2,
		'field_3':$scope.field_3
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Created Successfully");
				location.reload(); 
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
	
	$scope.update_hirarchy = function(cus_id,description) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_3",description);
		window.location = "edit_hirarchy.html";
		return;
	}	
	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_3 = $cookieStore.get("cook_field_3");

	$scope.save_hirarchy = function() 
	{		
		$http.post('save_hirarchy.php',{
		  'id':$scope.cook_cus_id,'field_1':$scope.field_1,
		  'field_2': $scope.field_2,'field_3': $scope.cook_field_3
		  })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted successfully");
				window.location = "create_hirarchy.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

/****************************************************************************/
/************************** update_tat **********************************/	
/****************************************************************************/	
	
	$scope.update_tat = function(cus_id,field_1,field_2,field_4,field_5) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		$cookieStore.put("cook_field_2",field_2);
		$cookieStore.put("cook_field_4",field_4);
		$cookieStore.put("cook_field_5",field_5);
		window.location = "edit_tat.html";
		return;
	}	
	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	$scope.cook_field_2 = $cookieStore.get("cook_field_2");
	$scope.cook_field_4 = $cookieStore.get("cook_field_4");
	$scope.cook_field_5 = $cookieStore.get("cook_field_5");

	$scope.save_tat = function() 
	{		
		$http.post('save_tat.php',{
		  'id':$scope.cook_cus_id,'field_1':$scope.cook_field_1,
		  'field_2': $scope.cook_field_2,'field_4': $scope.cook_field_4,
		  'field_5': $scope.cook_field_5
		  })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				$cookies.cook_cus_id = "";
				$cookies.cook_field_1 = "";
				$cookies.cook_field_2 = "";
				$cookies.cook_field_4 = "";
				$cookies.cook_field_5 = "";
				window.location = "create_tat.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

	
/****************************************************************************/
/**************************User Cookies **********************************/	
/****************************************************************************/	
	
	$scope.cook_admin_email = $cookieStore.get("cook_admin_email");
	
/****************************************************************************/
/************************** Admin Update Profile *********************************/
/****************************************************************************/
	
	
/****************************************************************************/
/************************** Admin Update Profile *********************************/
/****************************************************************************/
	
		$http.post('get_admin_info.php',
		{
			'field_1':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{			
				$scope.admindetails = data.details;
			}
			
          });
		  
	$scope.admin_update_info = function(password) 
	{
		window.location = "admin_info_edit.html";
		$cookieStore.put("cook_password",password);
		return;
	}	
	
	
	$scope.cook_password = $cookieStore.get("cook_password");
	$scope.cook_admin_email = $cookieStore.get("cook_admin_email");

	
	$scope.save_update_admin = function() 
	{		
		$http.post('admin_update_info.php',{
		  'password':$scope.cook_password,'field_1': $scope.cook_user_email})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted successfully");
				window.location = "admin_update_info.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

/****************************************************************************/
/************************** Validation **********************************/
/****************************************************************************/
	$scope.er_email = true;
	// mobile number verification
	$scope.register_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.pimage))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	// mobile number verification
	$scope.login_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.log_email))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	
	$scope.er_mob = true;
	// mobile number verification
	$scope.mobile_no = function()
	{
		var filter = /^\d{10}$/;
		if(filter.test($scope.description))
		{
			$scope.er_mob = true;
			$scope.btn_sgnup = false;
		}
		else
		{
			$scope.er_mob = false;
			$scope.btn_sgnup = true;
		}
	}

	/****************************************************************************/
/************************** Reporting To  **********************************/
/****************************************************************************/
// client name

	$scope.error_names = false;
	$scope.myCustomer = true;
	$scope.toggle = function() 
	{
		$scope.myCustomer = false;
		$http.post('get_employee.php')
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{	
				$scope.error_names = true;
				$scope.names = data.details;
			}
			else
			{
				$scope.error_names = false;
				$scope.er_names = "No Matching Client Name found";
			}
		});	
	}
	
	$scope.name = function(name) 
	{
		$scope.ng_names = name;
		$scope.myCustomer = true;
	}
	 
/************************************************************************/
/*********************** Get Results ***********************************/
/*************************************************************************/
	$scope.get_survey_report = function(field_1,field_2,field_3,field_4) 
	{
		$cookieStore.put("cook_res_field_1",field_1);
		$cookieStore.put("cook_res_field_2",field_2);
		$cookieStore.put("cook_res_field_3",field_3);
		$cookieStore.put("cook_res_field_4",field_4);
		window.location = "view_all_results.html";
		return;
	}

	$scope.cook_res_field_1 = $cookieStore.get("cook_res_field_1");
	$scope.cook_res_field_2 = $cookieStore.get("cook_res_field_2");
	$scope.cook_res_field_3 = $cookieStore.get("cook_res_field_3");
	$scope.cook_res_field_4 = $cookieStore.get("cook_res_field_4");
		
/*************************************************************************/
/*********************Cummulative 5 Rating*********************************/
/****************************************************************************/
	$http.post('get_all_results.php')
		.success(function(data, status, headers, config) 
		{
			$scope.all_results = data.details;
        });
		
		
		
	$scope.exportData = function () {
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Complaint_Report.xls");
		};
		
	$scope.upload_file = function(cus_id) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		window.location = "file.html";
		return;
	}
	
	$scope.upload_file_1 = function(cus_id) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		window.location = "file_1.html";
		return;
	}
	

	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	



	
	
});