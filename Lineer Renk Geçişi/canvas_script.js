window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    var lineerRenkAlani = tuval.createLinearGradient(0,canvas.width,canvas.height,canvas.width);
	lineerRenkAlani.addColorStop(0,"black");
	lineerRenkAlani.addColorStop(0.2,"red");
	lineerRenkAlani.addColorStop(0.6,"blue");
	lineerRenkAlani.addColorStop(1,"white");
	tuval.fillStyle = lineerRenkAlani;
	tuval.fillRect(0,0,canvas.width,canvas.height);
}