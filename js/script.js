try {
var SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  
}
catch(error){
	return console.log(error);
}

var instructions = document.querySelector("#instructions");
 
recognition.onstart = function() { 
  instructions.text('Voice recognition is ON.');
};
 
recognition.onspeechend = function() {
  instructions.text('No activity.');
};
 
recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('Try again.');  
  }
};

recognition.onresult = (event) => {
	var current = event.resultIndex;
	var transcript = event.results[current][0].transcript;
	var txt = document.querySelector("#textbox");
	txt.value += transcript;
	var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript); 
	if (!mobileRepeatBug) { 
	txt.value += transcript;
	};
};

var startVoice = (e) => {
	return  recognition.start();
};



 