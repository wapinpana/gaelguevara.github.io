// $(document).ready(function(){
// 	// var current = $(".current slide");
// 	// $current.src($(this).attr("src");
// 		// var current = $(".current_slide");
// 		// $current.attr("src", "images/1.jpg");
// 	$(".next").click(function(){
// 		// $current = $current.next();
// 		$("img").removeClass();
// 		$("img").next().addClass("current_slide");
// 		$("img").attr("src", "images/3.jpg");
// 		var nextSlide = $(this).next();
// 		$("img.current slide").fadeOut(200, function(){
// 			$("img.current slide").removeClass("current slide");
// 			$("img").eq(nextSlide).show().addClass("current slide");
// 		});
// 	});
// });

// 	$(".prev").click(function(){
// 		$(this).removeClass();
// 		$(this).addClass($(this).attr("src"));

// 	});
// });

$(document).ready(function(){
	$(".next").click(function(){
		$(".current_slide").removeClass("current_slide").next().addClass("current_slide");
		// if($(".current_slide").is(":last-of-type")) {
			

		// }
	});

	$(".prev").click(function(){
		$(".current_slide").removeClass("current_slide").prev().addClass("current_slide");
	// 	// if($(".current_slide").is(":last-of-type")) {
	});


});