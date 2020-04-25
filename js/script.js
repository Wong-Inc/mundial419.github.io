
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
	Create(transcript);
	Add(transcript);
	var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript); 
	if (mobileRepeatBug) { 
	txt.value += transcript;
	};
};

var startVoice = function(e) {
	return  recognition.start();
};

function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}

function setupEditor()
{
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
	
  editor.setValue("",1);
 //1 = moves cursor to end
	/*var customPosition = {
    row: ,
    column: 0
};

var text = "This text has been dinamically inserted";

editor.session.insert(editor.getCursorPosition() , text);*/
  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();
  
  
  editor.setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();
  

String.prototype.indexOfEnd = function(string) {
    var io = this.indexOf(string);
    return io == -1 ? -1 : io + string.length;
};

function Create(transcript) {
		var element = /create/;
		if (element.test(transcript) === true) {
			var splitter = transcript.split(' ');
			globalSplit = splitter;
	
		var check = elementsArray.indexOf(globalSplit[1]);
			
		 if (check > -1){
				var elem =  "<" + elementsArray[check] + ">" + " " + "<" + "/" + elementsArray[check] + ">";
		return editor.session.insert(editor.getCursorPosition() , elem);
			}
			elementNames.forEach(cop);
			}
		
		
		

			
			
};

function Add(transcript) {
		var element = /add/;
		var cursor = editor.getCursorPosition();
			var line = editor.session.getLine(cursor.row);
		if (element.test(transcript) === true) {
			var splitter = transcript.split(' ');
					if (Attributes.indexOf(splitter[2]) > -1) {
					var addAttribute = " " + splitter[2] + "=" + "'" + "'";
			return editor.session.insert(editor.getCursorPosition() , addAttribute);
				}
			}

};

var globalSplit;


function Each(item) {
				if (Attributes.indexOf(globalSplit[2]) > -1) {
					var addAttribute = "=" + "'" + globalSplit[2] + "'";
			return editor.session.insert(editor.getCursorPosition() , addAttribute);
					}
			else {
			alert("egungun be careful");
			}
} 


	function cop(item) {
		if (globalSplit.indexOf(item) > -1) {
			return eval(item + "("  + ")");
			}
			
				}
				
					