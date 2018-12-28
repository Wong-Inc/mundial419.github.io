/* Making a server Request */

var Http = new XMLHttpRequest();

var url = 'https://openexchangerates.org/api/latest.json?app_id=bbd0eb036ee540a789ee9723c965fc63';

Http.open('GET', url);

Http.send();

Http.onload = Request;

			function Request() {

	

	 var data = JSON.parse(Http.response);

 console.log(Http.response);

 myData = Http.response;

 myData = JSON.parse(myData);

    document.getElementById("display").innerHTML = Http.response;

}

  

Request();

/* My Variables */

var myData;

function newChangePlaceholderAttribute() {

    var secondInputValue  = document.getElementById("sel").value;

    var secondInput = document.getElementById("input2");

   var placeH = document.createAttribute("placeholder");

    placeH.value = "Amount in " + secondInputValue;

    secondInput.setAttributeNode(placeH);

}

function changePlaceholderAttribute() {

    var firstInputValue = document.getElementById("sell").value;

    var firstInput = document.getElementById("input1");

   var placeH = document.createAttribute("placeholder");

    placeH.value = "Amount in " + firstInputValue;

    firstInput.setAttributeNode(placeH);

}

function execute(){

	 var firstOptionValue = document.getElementById("sell");

	 var secondOptionValue = document.getElementById("sel");

	var resp = {};

	resp.Data = myData;

	var i;

	for (i in resp.Data.rates) {

	if (i === firstOptionValue.value){

		if (i === secondOptionValue.value) {

			return eval(firstOptionValue.value + "()");

			}

		}

	}

	

};

function USD() {

	var firstOptionValue = document.getElementById("sell");

	 var secondOptionValue = document.getElementById("sel");

	 	var resp = {};

	resp.Data = myData;

	 var b = resp.Data.rates.USD; 

	var str = new String(secondOptionValue.value);

	var d = resp.Data.rates[str];

	var c;

	var a = document.getElementById("input1").value;

			c = a/b;	

return alert(d * a/b);

}
