$(document).ready(function(){
	$(".next").click(function(){
		$("img").removeClass();
		$("img").addClass("current slide");
		var nextSlide = $(this).index();
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