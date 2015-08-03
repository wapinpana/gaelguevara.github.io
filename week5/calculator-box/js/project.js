var a10 = document.getElementById("a10").innerHTML;
var a20 = document.getElementById("a20").innerHTML;
var a30 = document.getElementById("a30").innerHTML; 
var n10 = document.getElementById("n10").innerHTML;
var n20 = document.getElementById("n20").innerHTML;
var n30 = document.getElementById("n30").innerHTML;

var out = 0;

$("#red").click(function(){
  $("#out").css("background-color", "red");
});

$("#blue").click(function(){
  $("#out").css("background-color", "blue");
});

$("#a10").click(function(){
	if(parseInt(a10) == 10){
	out = out + 10;
  	$("#out").value = out;
	}
});

$("#a20").click(function(){
	if(parseInt(a20) == 20){
	out = out + 20;
  	$("#out").value = out;
	}
});

$("#a30").click(function(){
	if(parseInt(a30) == 30){
	out = out + 30;
  	$("#out").innerHTML = out;
	}
});

$("#n10").click(function(){
	if(parseInt(n10) == "-10"){
	out = out - 10;
  	$("#out").innerHTML = out;
	}
});

$("#n20").click(function(){
	if(parseInt(n20) == -20){
	out = out - 20;
  	$("#out").innerHTML = out;
	}
});

$("#n30").click(function(){
	if(parseInt(n30) == -30){
	out = out - 30;
  	$("#out").innerHTML = out;
	}
});


// $("div").click(function(){
// 	out = out + 1;
// 	document.getElementById("out").innerHTML = out;
// 	}
// });

//function for addition

// function addition () {
// 	if

// }
//Everytime a div is clicked it is initializing the change in the "value' of out which should be the result of a calculation;

//function for subtraction
// $("#a10").click(function(){
// 	var a10 = document.getElementById("a10").innerHTML;
// 	if (a10 == "+10") {
//   	//Its going to add 10 to whatever the current value of 'out' is;
// 	}
// });

// $("#out").value = calculation;


// var divs = document.getElementsByTagName("div"); 

// /*divs[2].style.backgroundColor = "green";*/

// for(var i = 0; i < divs.length; i++){
//   divs[i].onclick = function(){
//   	document.getElementById("#a10").style.backgroundColor = "red";
//   };
// }



// $(document).ready(function(){
//   $("div").click(function() {
//     $("#out").css("color", $("#red").html());
//   });
//   //other code goes here
// 

// var count = 0;
// //variable to count value of clicks

// //eventlistener function for each click
// $("div").click(function(){
// 	alert("It works");

// });

	
	// count = count + document.$('div').innerHTML; //value of div clicked
	// document.getElementById('#a10').innerHTML = count; 
