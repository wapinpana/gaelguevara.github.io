$(document).ready(function(){
	// var current = $(".current slide");
	// $current.src($(this).attr("src");

	$(".next").click(function(){
		$("img").removeClass();
		$("img").addClass("current slide");
		$("img").attr("src", "images/3.jpg");
		var nextSlide = $(this).next();
		$("img.current slide").fadeOut(200, function(){
			$("img.current slide").removeClass("current slide");
			$("img").eq(nextSlide).show().addClass("current slide");
		});
	});
});

// 	$(".prev").click(function(){
// 		$(this).removeClass();
// 		$(this).addClass($(this).attr("src"));

// 	});
// });