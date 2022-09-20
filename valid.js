function validateForm() 
{
  var x = document.getElementById("name").value;
  var alp = /^[0-9A-Za-z]+$/;
  if (x == "") 
  {
    alert("Please Fill The Name");
    return false;  
  }
  if (x.length<5) 
  {
    alert("Name must be more than 5 character");
    return false;
  }

  //Email

  var e = document.getElementById("email").value; 
  if (e.indexOf('@')<=0) 
  {
    alert("Invalid Email");
    return false;
  }
  
 //num

  var n = document.getElementById("num").value;
  if (n == "") 
  {
  	alert("Enter Your Mobile Number");
  	return false;
  }
  if (isNaN(n)) 
  {
     alert("Enter Numeric Value");
     return false;
  }
  if (n.length<11) 
  {
    alert("Mobile Number must be less than 11 Digit");
    return false;
  }
  if ((n.charAt(0)!=9) && (n.charAt(0)!=8) && (n.charAt(0)!=7) ) 
  {
  	alert("Your Mobile Number Should Starts From 9,8,6 or 7");
  	return false;
  }

  //password
  var b = document.getElementById("pass1").value;
	var c = document.getElementById("pass2").value;

	if (b=="") 
	{
       alert("Please Fill The Password");
       return false;
	}

	if (b.length<5) 
	{
		alert("password must more of 5 character");
		return false;
	}
  if (c.length<5) 
  {
    alert("password must more of 5 character");
    return false;
  }

	if (b.length>20) 
	{
		alert("password must less than 20");
        return false;
	}

	if (b!=c) 
	{
       alert("Password must be same");
       return false;
	}

    var h=document.getElementById("birthday").value;
    if (h=="") 
	{
       alert("Please Fill Your DOB");
       return false;
	}
}

























