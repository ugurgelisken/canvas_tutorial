window.onload=function() {
    var canvas=document.getElementById("tuval");
    var tuval=canvas.getContext('2d');
    var resimObjesi = new Image();
    resimObjesi .onload = function() {
        tuval.drawImage(resimObjesi, 10, 10, 300, 150);
    }
    resimObjesi.src = 'katsura.jpg';
}