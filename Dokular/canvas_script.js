window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    var dokuObjesi = new Image();
    dokuObjesi.onload = function() {
        var doku = tuval.createPattern(dokuObjesi, 'repeat-y');
        tuval.rect(0, 0, canvas.width, canvas.height);
        tuval.fillStyle = doku;
        tuval.fill();
    }
    dokuObjesi.src = 'doku.jpg';
}