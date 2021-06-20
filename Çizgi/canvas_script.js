window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    tuval.moveTo(50,50);
	tuval.lineTo(50,100);
	tuval.lineTo(100,100);
	tuval.lineTo(150,100);
	tuval.lineTo(50,50);
	tuval.strokeStyle="#FF0000";
	tuval.lineWidth=5;
	tuval.stroke();
}