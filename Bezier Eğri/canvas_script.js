window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');

    tuval.moveTo(50, 10);
    tuval.bezierCurveTo(120, 70, -140, 120, 250, 140);
    tuval.lineWidth = 5;
    tuval.strokeStyle = 'red';
    tuval.stroke();
}