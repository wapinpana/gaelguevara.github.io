$(document).ready(function(){

	$("button").click(function() {

		$("#cow1").animate({"top" : "100px"}, "slow");

		$("#cow2").animate({"height" : 'toggle'}, "slow");

		$("#dancing").animate({"left" : "100px" }, 7000);

		$("#horse").animate({"left" : "800px"}, 5000);

		$("#lamb").animate({"right" : "200px"}, "slow");

		$("#sun").animate({"left" : "950px"}, 2000);

		$("#roost").animate({"left" : "900px" }, "fast");

	});

});
