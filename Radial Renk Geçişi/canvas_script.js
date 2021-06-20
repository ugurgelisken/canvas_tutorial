window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    var lineerRenkAlani = tuval.createRadialGradient(0,0,canvas.width,canvas.height,120,100);
	lineerRenkAlani.addColorStop(0,"white");
	lineerRenkAlani.addColorStop(0.8,"red");
	lineerRenkAlani.addColorStop(1,"black");
	tuval.fillStyle = lineerRenkAlani;
	tuval.fillRect(0,0,canvas.width,canvas.height);
}