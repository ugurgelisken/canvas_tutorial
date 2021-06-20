window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
   	tuval.beginPath();
	tuval.arc(100,75,70,0,Math.PI/2,true);
	tuval.fill();
}