$(document).ready(function(){
	var signOn = true;
	function changeColor () {
	if(signOn == true){
		$('h1').css("color", "#e74c3c");
		signOn = false;
	} else if (signOn == false){
		$(h1).css("color", "#9b59b6");
		signOn = true; 
	}
}

setInterval("changeColor()", 400);

});



// /////////////////////////////////////////////////
// var flag = true;
// function changeColor () {
//     if(flag==true){
//         document.getElementById("yourId").style.background="yourColor 1";
//         flag=false;
//     }
//     else if (flag==false){
//     document.getElementById("yourId").style.background="yourcolor 2";
//     flag = true;
//     }
// }
// setInterval("changeColor()", timeinmillisec);