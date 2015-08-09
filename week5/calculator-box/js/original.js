var a10 = document.getElementById("a10").innerHTML;
var a20 = document.getElementById("a20").innerHTML;
var a30 = document.getElementById("a30").innerHTML; 
var n10 = document.getElementById("n10").innerHTML;
var n20 = document.getElementById("n20").innerHTML;
var n30 = document.getElementById("n30").innerHTML;

// var out = document.getElementById('out').innerHTML;  

var out = 0;

// document.getElementById('out').innerHTML = out;


$("div").click(function(){
	$("this").parseInt($('div').attr("#"))) {
	out = out + 10;
  	$("#out").html(out);
	}
});

$("#red").click(function(){
  $("#out").css("background-color", "red");
});

$("#blue").click(function(){
  $("#out").css("background-color", "blue");
});


$('div').click(function() {
  $("#out").removeClass(); 
$("#out").addClass($(this).attr("class"));

///////


// $("#a10").click(function(){
// 	if(parseInt(a10) == 10){
// 	out = out + 10;
//   	$("#out").html(out);
// 	}
// });

// $("#a20").click(function(){
// 	if(parseInt(a20) == 20){
// 	out = out + 20;
//   	$("#out").html(out);
// 	}
// });

// $("#a30").click(function(){
// 	if(parseInt(a30) == 30){
// 	out = out + 30;
//   	$("#out").html(out);
// 	}
// });

// $("#n10").click(function(){
// 	if(parseInt(n10) == "-10"){
// 	out = out - 10;
//   	$("#out").html(out);
// 	}
// });

// $("#n20").click(function(){
// 	if(parseInt(n20) == -20){
// 	out = out - 20;
//   	$("#out").html(out);
// 	}
// });

// $("#n30").click(function(){
// 	if(parseInt(n30) == -30){
// 	out = out - 30;
// // The three lines below do the same thing
//   	$("#out").html(out);

//   	// $("#out")[0].innerHTML = out;

//   	// document.getElementById("out").innerHTML = out;
// 	}
// });

