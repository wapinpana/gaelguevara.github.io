var tempNumberCel;
var tempNumberFah;

document.getElementById("clickme").onclick = convertTemp;

function convertTemp () {
	tempNumberCel = document.getElementById("tempNumberCel").value;
	tempNumberFah = document.getElementById("tempNumberFah").value; 

	var resultTempCel = (tempNumberCel - 32) * 5 / 9;
	var resultTempFah = (tempNumberFah * 9) / 5 + 32;

	document.getElementById("resultTempCel").innerHTML = resultTempCel;
	document.getElementById("resultTempFah").innerHTML = resultTempFah;

}

// function kindOfDay () {
// 	if (resultTempCel >== 30){
// 		document.write("Let's Go to the Beach!");
// 	} else if (resultTempCel < 10){
// 		document.write("Grab your coat! It's chilly!");
// 	} else {
// 		document.write("What are you doing outside! Its too cold!");
// 	}
// }
// // °F to °C	Deduct 32, then multiply by 5, then divide by 9
// // °C to °F	Multiply by 9, then divide by 5, then add 32

// // 30	86	Beach weather
// // 10	50	Cool Day
// // -40  -40 Very Cold Day 

// var age;
// var maxAge;
// var drink;
// var numPerDay; 

// document.getElementById("clickme").onclick = calculateTotal;

// function calculateTotal () {
// 	age = document.getElementById("age").value;
// 	maxAge = document.getElementById("maxAge").value;
// 	drink = document.getElementById("drink").value;
// 	numPerDay = document.getElementById("numPerDay").value; 

// 	var totalDrink = (maxAge - age) * 365 * numPerDay;
// 	document.getElementById("totalDrink").innerHTML = totalDrink; 
// 	document.getElementById("whichDrink").innerHTML = drink; 
// }