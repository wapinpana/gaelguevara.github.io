var celNumber;
var fahNumber;

document.getElementById("clickme1").onclick = calculateFah;
document.getElementById("clickme2").onclick = calculateCel;


function calculateFah () {
	celNumber = document.getElementById("celNumber").value;

	var convertTempFah = celNumber * 1.8 + 32 + "  Fahrenheit";
	document.getElementById("convertTempFah").innerHTML = convertTempFah;

}

function calculateCel () {
	fahNumber = document.getElementById("fahNumber").value; 

	var convertTempCel = (fahNumber - 32) / 1.8 + "  Celcius";
	document.getElementById("convertTempCel").innerHTML = convertTempCel;

}

document.getElementById("reset").onclick = function() {
   document.getElementById("celNumber").innerHTML = " ";
};