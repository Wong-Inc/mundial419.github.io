var oppSta = [];
var redoStack = [];
var opp = [];
var operation = "";
var inp = document.querySelector("#namer");
var undoBtn = document.querySelector("#un");
var redoBtn = document.querySelector("#re");
  

//var pp = document.querySelector("#demo");
  function stackFunction() {
    setInterval(function(){
     
      if (opp.indexOf(inp.textContent) > -1) {
       // var no = opp.indexOf(inp.textContent);
          //  opp.splice(no,1, inp.textContent);
      }
      else {
        opp.push(inp.textContent);
   //     pp.innerHTML = opp;
      }
  }, 3000);}

  function undo() {
           if (opp.length >= 1) {
            enableRedo();
            redoStack.push(opp[opp.length - 1]);
            opp.splice(opp.length - 1, 1);
        editor.getSession().setValue(opp[opp.length - 1]);

//	editor.replace(eval(opp + "[" + opp.length -1 + "]"));
   // inp.textContent = opp[opStack.length - 1];
  //          pp.innerHTML = opp[opStack.length - 1];
            if (opp.length === 1) {
              undoBtn.disabled = false;
            }
            }
            else {
                  undoBtn.disabled = true;
            }
            
        }
        
        
        
  function redo() {
                     if (redoStack.length >= 1) {
                   redoBtn.disabled = false; 
                   enableUndo();             
                  opp.push(redoStack[redoStack.length - 1]);
                
					 inp.textContent = redoStack[redoStack.length - 1];
            //      pp.innerHTML = redoStack[redoStack.length - 1];
                  redoStack.splice(redoStack.length - 1,1);
  }
            else {
               redoBtn.disabled = true;
            }
  }
       
  
 window.onload = stackFunction;

  function enableRedo() {
    redoBtn.disabled = false;
  }
 
 function enableUndo() {
   undoBtn.disabled = false;
 }