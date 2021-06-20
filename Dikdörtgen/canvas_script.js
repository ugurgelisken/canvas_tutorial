window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    	
    var olculer = [5,10,15,20];
    var renkler = ["#FF000","#FF00FF","#00FFF0","#D0F0F0"];

    for (var i=0;i<olculer.length;i++){
    	var olcu = olculer[i];
    	tuval.fillStyle=renkler[i];
    	tuval.fillRect(olcu*i,olcu*i,olcu,olcu*2);

		tuval.stroke();
    }


}