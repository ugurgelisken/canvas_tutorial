window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    tuval.beginPath();
    tuval.moveTo(75, 40);
    tuval.bezierCurveTo(75, 37, 70, 25, 50, 25);
    tuval.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    tuval.bezierCurveTo(20, 80, 40, 102, 75, 120);
    tuval.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    tuval.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    tuval.bezierCurveTo(85, 25, 75, 37, 75, 40);
    tuval.fillStyle="red";
    tuval.fill();
    tuval.closePath();
}