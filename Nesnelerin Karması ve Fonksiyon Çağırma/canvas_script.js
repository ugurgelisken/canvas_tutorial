
var canvas=document.getElementById("tuval");
var tuval=canvas.getContext('2d');
	
function karma(tur){

    tuval.clearRect(0, 0, canvas.width, canvas.height);

	tuval.globalCompositeOperation = tur;	

  	tuval.beginPath();
    tuval.rect(50, 50, 150, 150);
    tuval.fillStyle = 'blue';
    tuval.fill();
	
	tuval.beginPath();
    tuval.arc(200, 200, 100, 0, 2 * Math.PI);
    tuval.fillStyle = 'red';
    tuval.fill();
  
    tuval.font="30px Arial";
    tuval.fillStyle = 'black';
    tuval.fillText(tur,50,350);

}