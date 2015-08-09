$(document).ready(function(){


	$(".combine").click(function(){
		var currentTotal = parseInt($("#white").html());
		var num = parseInt( $(this).html() );

		$("#white").html(currentTotal + num);	
	});

	$(".change-color").click(function(){
		$("#white").css("background-color", $(this).attr("id"));
		if ($(this).attr("id") == "white") {
			$("#white").html(0);
		}
	});

});

// $("#red").click(function(){
//   $("#out").css("background-color", "red");
// });

// $("#blue").click(function(){
//   $("#out").css("background-color", "blue");
// });
