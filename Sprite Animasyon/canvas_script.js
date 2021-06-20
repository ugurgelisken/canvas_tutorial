window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');

    var altin = new Image();
	altin.src = 'altin.png';

    tuval.drawImage(altin,150,150,10,10,10,10,50,50);
  

}