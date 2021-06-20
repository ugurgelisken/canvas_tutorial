window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    	
    tuval.beginPath();
    tuval.arc(50, 50, 40, 0, Math.PI*2, true); 
    tuval.closePath();
    tuval.stroke();

    tuval.beginPath();
    tuval.arc(150, 50, 40, 0, Math.PI*2, true); 
    tuval.closePath();
    tuval.fill();



}