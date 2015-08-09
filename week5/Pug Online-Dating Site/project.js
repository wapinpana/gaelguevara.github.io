$(document).ready(function(){

	$(".thumb").click(function(){
		$("#display").hide();
		$("#display").attr("src", $(this).attr("src"));
		$("#display").fadeIn(400);
	});
});

// 	$(document).ready(function(){
// 	$(".thumb").click(function(){
// 		$("#bigimage").hide();
// 		$("#bigimage").attr("src", $(this).attr("src"));
// 		$("#bigimage").fadeIn(400);
// 	});
// });