$(document).ready(function(){

	$("button").click(function() {

	  	$("#roost").animate({"left" : "900px" }, "fast");

		$("#dancing").animate({"left" : "100px" }, "100s");

		$("#cow1").animate({"top" : "100px"}, "slow");

		$("#cow2").animate({
            height: 'toggle'
        });

		$("#sun").animate({
    		"top": "100%",
    		"left": "100%"
  			}, 2000);
	});

	// $("div").hover(function(){
	// 	$("#horse").animate({
	// 		"top" : 50%;
	// 		"left" : 100%;
	// 	}, 2000);

	// });

});

	



// $("a").click(function() {
//   var num = $(this).index();
//   $("div").eq(num).css("background-color", "red");
//   $("div").eq(num).animate({
//     "height": "70px", 
//     "width": "20px"
//   }, 200);
// });

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