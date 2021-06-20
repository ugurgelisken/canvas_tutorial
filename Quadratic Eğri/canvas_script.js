window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    tuval.moveTo(100, 10);
    tuval.quadraticCurveTo(50, 100, 200, 50);
    tuval.lineWidth = 5;
    tuval.strokeStyle = 'red';
    tuval.stroke();
}