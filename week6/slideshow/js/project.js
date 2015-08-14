$(document).ready(function(){
	$(".next").click(function(){
		$(this).removeClass();
		$(this).addClass($(this).attr("src"));

	});

	$(".prev").click(function(){
		$(this).removeClass();
		$(this).addClass($(this).attr("src"));

	});
});