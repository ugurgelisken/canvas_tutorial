window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    tuval.shadowColor = 'black';
    tuval.shadowBlur = 10;
    tuval.shadowOffsetX = 15;
    tuval.shadowOffsetY = 15;
    var resimObjesi = new Image();
      
    resimObjesi .onload = function() {
        tuval.drawImage(resimObjesi, 10, 10, 300, 150);
    }
    resimObjesi.src = 'katsura.jpg';
}