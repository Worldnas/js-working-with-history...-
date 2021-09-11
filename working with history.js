var forward = document.getElementById("forward")
var back = document.getElementById("back")

forward.onclick=function(){
	//alert("works")
	window.history.forward();
	return false;
}

back.onclick=function(){
	//alert("works")
	window.history.back();
	return false;
}

//var dcide= document.getElementById("decide");

window.addEventListener("online",myfunction);

window.addEventListener("offline",myfunction);

function myfunction(e)
{
	var dcide=navigator.onLine;
	
	if(dcide)
	{
		alert("you are online");
	}
	else
	{
		alert("your are offline");
	}
}