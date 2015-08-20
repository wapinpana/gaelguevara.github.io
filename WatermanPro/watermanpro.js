var $linkOne = $("#linkOne");
var linkOne = document.querySelector("#linkOne");
linkOne.addEventListener("click", function (e) {console.log(e)});

$linkOne.on("mouseenter", function(eventObject) {
	// console.log($(this));
	//^^^took regular this and re-wrapped it in jquery to give it jquery options
	$(this).text("Go to Website");
});

$linkOne.on("mouseleave", function(eventObject) {
	
	$(this).text("Canalero").css("color", "yellow");

});


var $Equipment = $("#Equipment");


