function init(){
	
	var canvas=document.getElementById("myCanvas");
	var ctx=canvas.getContext("2d");
	var BB,BBoffsetX,BBoffsetY;
	setBB();


	var x;
	var y;
	var w=50;
	var h=50;		
			
	var numOfScores=0;
				

	function drawRect(){
		x=xCoordinate();
		y=yCoordinate();
		ctx.fillRect(x,y,w,h);
	}

	drawRect();

	canvas.onmousedown=handleMousedown;

	function handleMousedown(e){
	  e.preventDefault();
	  e.stopPropagation();
	  var mx=e.clientX-BBoffsetX;
	  var my=e.clientY-BBoffsetY;
	  
		if(count > 0){
			if(mx>=x && mx<=x+w && my>=y && my<=y+h){  
				numOfScores++;  
				ctx.clearRect(x,y,w,h); 
				w=w-2;
				h=h-2;
				document.getElementById('score').innerHTML = numOfScores; 
				drawRect();
			}	
		}
		 

	 
	}

	function setBB(){
		BB=canvas.getBoundingClientRect();
		BBoffsetX=BB.left;
		BBoffsetY=BB.top;
	}

	function xCoordinate(){
		var xx=canvas.width - 50;
		var x = Math.floor((Math.random() * xx) + 1);
		
		return x;
	}

	function yCoordinate(){
		var yy=canvas.height - 50;
		var y = Math.floor((Math.random() * yy) + 1);
		
		return y;
	}



	var count=10;

	var counter=setInterval(timer, 1000); 
	
	function timer(){
		
	  count=count-1;
	  document.getElementById("timer").innerHTML=count;
	  
	  if (count == 0)
	  {
		 clearInterval(counter);
		 ctx.clearRect(x,y,w,h);
		 
			var name = prompt("Please enter your name");
			
						var tr = document.createElement("tr");
						
						var td1 = document.createElement("td");
						var td2 = document.createElement("td");
						
						var t1 = document.createTextNode(name);
						var t2 = document.createTextNode(numOfScores);
						
						td1.appendChild(t1);
						td2.appendChild(t2);

						tr.appendChild(td1);
						tr.appendChild(td2);
						
						document.getElementById("table").appendChild(tr);

		 document.getElementById("timer").innerHTML=10;

		 document.getElementById("score").innerHTML=0;
	  }
		
	}



}

