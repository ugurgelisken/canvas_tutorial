// DEĞİŞKEN VE SABİTLER TANIMLANIYOR
var canvas = document.getElementById('tuval'),
    tuval = canvas.getContext('2d'),
    // Saatlerin font büyüklüğü
    FONT_BUYUKLUGU = 20,
    // Saat rakamlarının çemberden uzaklığı
    NUMARA_BOSLUGU = -20,
    // Saat çemberinden ibrelere olan uzaklık mesafeleri
    MESAFE = 30,
    IBRE_UCU_MESAFESI = 20,
    SAAT_IBRE_UCU_MESAFESI = 50,
    // Saat çemberinin yarıçapı
    // Canvas'ın yarısından -30 kadar
    YARICAP = canvas.width/2 - MESAFE,
    // İbrelerin yarıçapı
    // Saatin yarıçapından -20 kadar
    NUMARALAR_YARICAP = YARICAP + NUMARA_BOSLUGU;

// Font büyüklüğü ve aile tipi belirleniyor.
tuval.font = FONT_BUYUKLUGU + 'px Tahoma';

// FONKSİYONLAR

// Saatin çemberi çiziliyor.
// Yarıçapı, Canvas'ın ölçülerinin yarısı kadar.
function cemberCiz() {
   tuval.beginPath();
   tuval.arc(canvas.width/2, canvas.height/2,
               YARICAP, 0, Math.PI*2);
   tuval.stroke();
}
   
// Saat rakamları oluşturuluyor
// Her bir rakam yerleştiriliyor ve açıları hesaplanıyor
function saatSayilariniYerlestir() {
   var saatler = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
       saatAcisi,
       saatGenisligi;

   // saatler isimli dizinin her bir elemani ...
   saatler.forEach(function(saat) {
      // tek tek açici hesaplaniyor
      // -3 ile çıkarmamızın sebebi şu;
      // Canvas ekseninde 0 açısı X ekseninde sağ taraf
      // Bu nedenle -3 yaptıgimizde 15 dereceyi elde ederiz.
      // 15 derecesi saat çemberinde 1'e denk gelir.
      saatAcisi = Math.PI/6 * (saat-3);
      
      // Text olarak yazdırılan saatin genişliği hesaplanıyor.
      // Saat metni yazdirilirken, X ekseninden bu değerin yarısı çıkarılacak.
      // Böylece saaat rakamları hizalı bir şekilde yazdirilmiş olacak.
      saatGenisligi = tuval.measureText(saat).width;
      // Her bir saat sayısı yerleri hesaplanarak yazdırılıyor.
      tuval.fillText(saat, 
         canvas.width/2  + Math.cos(saatAcisi)*(NUMARALAR_YARICAP) - saatGenisligi/2,
         canvas.height/2 + Math.sin(saatAcisi)*(NUMARALAR_YARICAP) + FONT_BUYUKLUGU/3);
   });
}


// Parametre olarak verilen zaman bilgisine göre ibreler çizilecek.
function ibreCiz(hesaplanacakZaman, ibreTuru) {
    // Açı hesabı yapılıyor
    var saatAcisi = (Math.PI*2) * (hesaplanacakZaman/60) - Math.PI/2;
    // ibreTuru değerine göre yarıçap mesafe uzunlukları hesaplanıyor.
    switch(ibreTuru) {
        case 'saat':
            ibreYaricap = 150;
            break;
        case 'dakika':
             ibreYaricap = 130;
            break;
        case 'saniye':
             ibreYaricap = 110;
            break;
    }                       

   // Tuvalin ortasından, yani saatin ortasindan çizime başlanıyor
   tuval.moveTo(canvas.width/2, canvas.height/2);
   // Uzunlukları hesaplanarak ibre çiziliyor.
   tuval.lineTo(canvas.width/2  + Math.cos(saatAcisi)*ibreYaricap, 
                  canvas.height/2 + Math.sin(saatAcisi)*ibreYaricap);
   tuval.stroke();

}

// Akrep, Yelkovan ve Saniye ibrelerini çizen fonksiyon
function ibreleriCiz() {
    // Date nesnesi ile anlık zaman bilgisi alınıyor.
   var zaman = new Date,
       saat = zaman.getHours();
   // 12'lik saat sistemi hesaplanıyor.
   // Eğer saat 12'den büyükse...
   // O anki saatten 12 çıkarılıyor.
   saat = saat > 12 ? saat - 12 : saat;
   // Akrep ibresini çiz
   ibreCiz(saat*5 + (zaman.getMinutes()/60)*5, 'saniye');
   // Yelkovan ibresini çiz
   ibreCiz(zaman.getMinutes(), 'dakika');
   // Saniye ibresini çiz
   ibreCiz(zaman.getSeconds(), 'saat');
}

// Her saniye bu fonksiyon çağırılıyor
function saatiOlustur() {
   // Tuval temizleniyor
   tuval.clearRect(0,0,canvas.width,canvas.height);
   // Çember çiziliyor
   cemberCiz(); 
   // İbreler tek tek çizecek fonksiyon çağırılıyor
   ibreleriCiz();
   // Rakamlar açıları hesaplanarak yerleştiriliyor
   saatSayilariniYerlestir();
}

// Her saniye saatiOlustur fonksiyonunu çağır
setInterval(saatiOlustur, 1000);