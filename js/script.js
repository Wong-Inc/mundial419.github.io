
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

function foc() {
    var div = document.getElementById("container");
var classAttr = document.createAttribute("class");
      classAttr.value = "myCurrencyContainer";
      div.setAttributeNode(classAttr);
    }
function rm() {
    document.getElementById("container").removeAttribute("class");
    return jQuery.event.trigger({ type: 'keydown', which: 46 });

    }
    function ok() {

    function noenter() { return !(window.event && window.event.keyCode == 13); } 

    
    }


var displayResult = document.getElementById("display");
displayResult.innerHTML = "Equals " + conversion   ;
//
function execute(){
     var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
    var resp = {};
    resp.Data = myData;
    var i;
            return eval(firstOptionValue.value + "()");
  
};

function reg() {
     var inputValue = document.getElementById("input1").value;
    if (inputValue.includes("a") === true || inputValue.includes("A") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
         else     if (inputValue.includes("b") === true || inputValue.includes("B") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
         else     if (inputValue.includes("c") === true || inputValue.includes("C") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
         else     if (inputValue.includes("d") === true || inputValue.includes("D") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
         else     if (inputValue.includes("e") === true || inputValue.includes("E") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }

         else     if (inputValue.includes("f") === true || inputValue.includes("F") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
         else     if (inputValue.includes("g") === true || inputValue.includes("G") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
        
         else     if (inputValue.includes("h") === true || inputValue.includes("H") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        } else     if (inputValue.includes("i") === true || inputValue.includes("I") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
         else     if (inputValue.includes("j") === true || inputValue.includes("J") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
         else     if (inputValue.includes("k") === true || inputValue.includes("K") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
         else     if (inputValue.includes("l") === true || inputValue.includes("L") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
         else     if (inputValue.includes("m") === true || inputValue.includes("M") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
         else     if (inputValue.includes("n") === true || inputValue.includes("N") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
         else     if (inputValue.includes("o") === true || inputValue.includes("O") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
         else     if (inputValue.includes("p") === true || inputValue.includes("P") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
         else     if (inputValue.includes("q") === true || inputValue.includes("Q") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
         else     if (inputValue.includes("r") === true || inputValue.includes("R") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
        
        else     if (inputValue.includes("s") === true || inputValue.includes("S") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("t") === true || inputValue.includes("T") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("v") === true || inputValue.includes("V") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("u") === true || inputValue.includes("U") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("w") === true || inputValue.includes("W") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("x") === true || inputValue.includes("X") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("y") === true || inputValue.includes("Y") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("z") === true || inputValue.includes("Z") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("#") === true || inputValue.includes("*") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("£") === true || inputValue.includes("&") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("&") === true || inputValue.includes("_") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("-") === true || inputValue.includes("?") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("@") === true || inputValue.includes("=") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("+") === true || inputValue.includes("!") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes(":") === true || inputValue.includes("%") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("/") === true || inputValue.includes(",") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes(".") === true || inputValue.includes("$") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("€") === true || inputValue.includes("¥") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("¢") === true || inputValue.includes("©") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("®") === true || inputValue.includes("™") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("~") === true || inputValue.includes("¿") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
        
            else     if (inputValue.includes(">") === true || inputValue.includes("<") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("^") === true || inputValue.includes("¡") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return    setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("÷") === true || inputValue.includes("×") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("|") === true || inputValue.includes("b") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return     setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("`") === true || inputValue.includes(";") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return     setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes(" ") === true || inputValue.includes("§") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return     setTimeout("location.reload();", 1000);

        }
        
            else     if (inputValue.includes("¦") === true || inputValue.includes("°") === true ) {
         alert("Amount is not valid. App will now reload");
        
          document.getElementById("button").removeAttribute("onclick");
        return     setTimeout("location.reload();", 1000);

        }
        
         }
        


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
var conversion = d * a/b;
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};
function NGN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.NGN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
var conversion = d * a/b;
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function GBP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.GBP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function EUR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.EUR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;


}

function AFD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.AFD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function AFN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.AFN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};



function ALL() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ALL; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};



function AMD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.AMD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function ANG() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ANG; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function AOA() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.AOA; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function ARS() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ARS; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};



function AUD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.AUD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};



function AWG() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.AWG; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function AZN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.AZN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BAM() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BAM; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BBD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BBD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BDT() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BDT; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BGN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BGN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BHD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BHD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BIF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BIF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BMD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BMD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};



function BND() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BND; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function BOB() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BOB; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BRL() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BRL;
         var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BSD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BTC; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function BTN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BTN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function BWP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BWP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function BYN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BYN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function BZD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.BZD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function CAD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CAD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function CDF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CDF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};



function CHF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CHF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function CLF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.data.rates.CLF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};



function CLP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CLP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function CNH() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CNH; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function CNY() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CNY; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};

function COP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.COP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function  CRC() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CRC; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function CUC() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CUC; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};


function CUP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CUP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};



function CVF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CVF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};



function CZK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.CZK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function DJF() {
    var firstOptionValue  = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.DJF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function DKK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.DKK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function DOP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.DOP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function DZD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.DZD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function EGP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.EGP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function ERN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ERN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function ETB() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ETB; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function FJD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.FJD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function FKD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.FKD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function GEL() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.GEL; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function GGP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.GGP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function GHS() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.GHS; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function GIP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.GIP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function GMD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.GMD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function GNF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.GFN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function GTQ() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.GTQ; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function GYD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.GYD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function HKD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.HKD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function HNL() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.HNL; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function HRK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.HRK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function HRK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.HRK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function HTG() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.HTG; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function HUF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.HUF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function IDR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.IDR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function ILS() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ILS; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function IMP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.IMP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function INR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.INR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function IQD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.IQD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function IRR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.IRR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function ISK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ISK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function JEP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.JEP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function JMD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.JMD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function JOD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.JOB; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function JPY() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.JPY; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function KES() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.KES; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function KGS() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.KGS; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function KHR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.KHR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function KMF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.KMF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function KPW() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.KPW; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function KRW() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.KRW; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function KWD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.KWD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function KYD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.KYD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function KZT() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.KZT; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function LAK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.LAK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function LBP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.LKR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function LRD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.LRD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function LSL() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.LSL; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function LYD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.LYD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MAD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MDL; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MGA() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MGA; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MKD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MKD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MMK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MMK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MNT() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MOP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MRD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MRD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MRU() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MRU; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MUR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MUR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MVR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MVR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MWK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MWK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MXN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MXN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MYR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MYR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function MZN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.MZN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function NAD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.NAD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function NID() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.NID; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function NOK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.NOK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function NPR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.NPR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function NZD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.NZD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function OMR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.OMR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function PAB() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.PAB; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function PEN(){
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.PEN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function PGK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.PGK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function PHP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.PHP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function PKR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.PKR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function PLN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.PLN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function PYG() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.PYG; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function QAR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.QAR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function RON() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.RON; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function RSD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.RSD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function RUB() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.RUB; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function RWF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.RWF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SAR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SAR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SBD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SBD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SCR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SCR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SDG() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SDG; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SEK() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SEK; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SGD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SGD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SHP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SHP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SLL() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SLL; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SOS() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SOS; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SRD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SRD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SSP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SSP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function STD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.STD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function STN() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.STN; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SVC() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SVC; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};




function SYP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SYP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};





function SZL() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.SZL; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function THB() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.THB; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function TJS() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.TJS; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function TMT() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.TMT; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function TND() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.TND; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function TOP() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.TOP; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function TRY() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.TRY; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function TTD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.TTD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function TWD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.TWD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function TZS() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.TZS; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function UAH() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.UAH; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function UGX() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.UGX; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function UYU() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.UYU; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function UZS() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.UZS; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function VEF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.VEF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function VES() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.VES; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function VND() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.VND; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function VUV() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.VUV; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function WST() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.WST; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function XAF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.XAF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function XAG() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.XAG; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function XAU() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.XAU; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function XCD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.XCD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function XDR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.XDR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function XOF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.XOF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function XPD() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.XPD; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function XPF() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.XPF; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function XPT() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.XPT; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function YER() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.YER; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function ZAR() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ZAR; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function ZMW() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ZMW; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};







function ZWL() {
    var firstOptionValue = document.getElementById("sell");
     var secondOptionValue = document.getElementById("sel");
         var resp = {};
    resp.Data = myData;
     var b = resp.Data.rates.ZWL; 
    var str = new String(secondOptionValue.value);
    var d = resp.Data.rates[str];
    var c;
    var a = document.getElementById("input1").value;
            c = a/b;    
//
var displayResult = document.getElementById("display"); return displayResult.innerHTML = "Equals " + (d * a/b).toFixed(4) + " " + eval( " " + "document.body.querySelector(" + JSON.stringify("option[value = " + JSON.stringify(secondOptionValue.value) + "]") + ")" + ".textContent") ;

};





