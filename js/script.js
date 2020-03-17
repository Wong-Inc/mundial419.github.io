
var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();

var instructions = document.querySelector("#instructions");
 
recognition.onstart = function() { 
  instructions.innerHTML = 'Voice recognition is ON.';
};
 
recognition.onspeechend = function() {
  instructions.innerHTML = 'No Activity .';
};
 
recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.innerHTML = 'Try again.'; 
  }
};

recognition.onresult = function(event) {
	var current = event.resultIndex;
	var transcript = event.results[current][0].transcript;
	var txt = document.querySelector("#textbox");
	txt.value += transcript;
	var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript); 
	if (mobileRepeatBug) { 
	txt.value += transcript;
	};
};

var startVoice = function(e) {
	return  recognition.start();
};



 