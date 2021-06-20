window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
   	var oranlar = [40,60,210,50];
   	var renkler = ["red","blue","green","pink"];
   	var sonAciDegeri = 0;
	for (var i = 0; i < 4; i++) {
	    tuval.fillStyle = renkler[i];
	    tuval.beginPath();
		tuval.moveTo(canvas.width / 2, canvas.height / 2);
	    tuval.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, sonAciDegeri, sonAciDegeri + (Math.PI * 2 * (oranlar[i] / 360)), false);
		tuval.fill();
		sonAciDegeri += Math.PI * 2 * (oranlar[i] / 360);
	}
}