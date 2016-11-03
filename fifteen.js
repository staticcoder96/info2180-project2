document.addEventListener("DOMContentLoaded", function() { 
	var left = 0;
	var top = 0;
	var playing = false;
	var s = 0;
	const MOVES = 0;


	
    document.getElementById("puzzlearea").className = "puzzlepiece";
	var piecesArray = document.querySelectorAll("#puzzlearea > div"); 
	var pieces = document.querySelectorAll("#puzzlearea > div");
    Setup(pieces); //call Setup() 


    do{
    	shuffle(piecesArray); //call shuffle()
    	s++;

    }
     while (s <= 500);

     canMove(pieces);	
	Complete(pieces);




//Arranges the puzzle from 1 -15 with an empty slot.
function Setup(p){
	//var newleft = 0; 
	var left = 0;
	var top = 0;


	for (var i = 0; i < p.length; i++){ 
		if (left ==400) {
			left = 0;
			top += 100;	
		}
		p[i].style.left = left.toString()+"px";
		p[i].style.top =  top + "px";
		if(!playing){
			p[i].style.backgroundPosition = "-"+left+"px -" +top+  "px"; // Adjusts the background position
		}
		left+=100;
		if(!playing){
			p[i].className = "puzzlepiece";
		}		
		
		}
	}


/* Shuffle the puzzle pieces*/
	function shuffle(pieces){ 
		var count = pieces.length;		
		var newArray = [];

		for(var x = 0; x<pieces.length;x++){
			newArray.push(pieces[x]);
		}
		console.log(newArray);
		var shuffle = document.getElementById("shufflebutton");
		shuffle.addEventListener("click", function(){ 
			for(var i = 500; i>0; i--) {
				var ran  = Math.floor(Math.random() * count);
				var newel = newArray[ran];

				if(canMove(newel)){
					repo(newel,emp_piece_left,emp_piece_top,false);
				}
			}
			
			var begin = new Date();
			var n = begin.getSeconds();
			MOVES;
			//var finished = false;

			/*while (count > 0 ) {
				var ran  = Math.floor(Math.random() * count);
				count--;
				var temp = newArray[count];
				newArray[count]= newArray[ran];
				newArray[ran] = temp;
				
			}*/
					

			
			playing = true;
			Setup(newArray);
		});

	}


	//check if piece can move and move it
function canMove(el){
	var opl = el.style.left;
	var opt = el.style.top;
	var emp_piece_top = 300;
	var emp_piece_left = 300;	
	if(emp_piece_left - opl == 100 && emp_piece_top == opt){//can move right
		var newpl = opl + 100;
		repo(el,newpl,opt,true).setAttribute("class",".movablepiece:hover");
	}
	else if(emp_piece_left - opl == -100 && emp_piece_top == opt){//can move left
		var newpl = opl - 100;
		repo(el,newpl,opl,true).setAttribute("class",".movablepiece:hover");		
	}
	else if(emp_piece_top - opt == -100 && emp_piece_left == opl ){ //can move up
		var newpt = opt - 100;
		repo(el,opl,newpl,true).setAttribute("class",".movablepiece:hover");
	}
	else if(emp_piece_top - opt == 100 && emp_piece_left == opl ){ //can move down
		var newpt = opt +100;
		repo(el,opl,newpt,true).setAttribute("class",".movablepiece:hover");
		
	}
}

function repo(el,x,y,a){
	var opl = newel.style.left;
	var opt = newel.style.top;

	for (var i = 0; i < p.length; i++){
		if(!a){
			el[i].style.left = x + "px";
			el[i].style.top = y + "px";
			MOVES++;
		}
		

	}

	emp_piece_left = opl;
	emp_piece_top = opt;
	}



/* if puzzle piece is beside an empty slot then light up red on hover 
	    /*and move to the free space.  */
	function Complete(com){
		var done = false;
		top = 0;
		left = 0;

		for(var x = 0; x<pieces.length;x++){ 
			if (com[x].style.left == left && com[x].style.top == top){
				done = true;
			}
			else {
				done = false;
			} 
			
		}

	}//end of Complete() 

//Time taken to complete the puzzle
	function Time(){
		var stop = new Date();
		var s = stop.getSeconds();
		var tim = (n - s);

		Duration = "Number Of Moves Made : " +MOVES + "Time Taken : " +tim + "seconds";
	}

		

});

	




