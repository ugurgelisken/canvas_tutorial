window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');

    var x = 10;
    function kareCizVeIlerlet(){
		tuval.clearRect(0, 0, canvas.width,canvas.height);
		tuval.beginPath();
	    tuval.rect(x,20,50,50,0.1);
		x = x + 10;
		tuval.fill();
			
    }
    setInterval(kareCizVeIlerlet,100);
}