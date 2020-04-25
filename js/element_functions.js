function paragraph() {
			 if (globalSplit.indexOf("paragraph") > -1 ) {
		var checkStr = elementNames.indexOf("paragraph");
		
		var elem =  "<" + "p" + ">" + " " + "<" + "/" + "p" + ">";
		return editor.session.insert(editor.getCursorPosition() , elem);
		}
	}