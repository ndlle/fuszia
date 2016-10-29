window.onload = czas();
window.onload = odliczanie();


function czas() {
    
    var d=new Date();
    document.getElementById('komunikat').innerHTML = d;

    var dni = new Array();
    dni[0] = "Niedziela";
    dni[1] = "Poniedziałek";
    dni[2] = "Wtorek";
    dni[3] = "Środa";
    dni[4] = "Czwartek";
    dni[5] = "Piątek";
    dni[6] = "Sobota";

    var miesiace = new Array();
    miesiace[0] = "styczeń";
    miesiace[1] = "luty";
    miesiace[2] = "marzec";
    miesiace[3] = "kwiecień";
    miesiace[4] = "maj";
    miesiace[5] = "czerwiec";
    miesiace[6] = "lipiec";
    miesiace[7] = "siperpień";
    miesiace[8] = "wrzesień";
    miesiace[9] = "październik";
    miesiace[10] = "listopad";
    miesiace[11] = "grudzień";

    var data_godziny = d.getHours();
    var data_minuty = d.getMinutes();
    var data_sekundy = d.getSeconds();
    var data_dzien = d.getDay();
    var data_dn = d.getDate();
    var data_miesiac = d.getMonth();
    var data_rok = d.getFullYear();
    var data_godziny = d.getHours();
    if (data_godziny<10) data_godziny = "0"+data_godziny;
		
    var data_minuty = d.getMinutes();
    if (data_minuty<10) data_minuty = "0"+data_minuty;
		
	var sekunda = d.getSeconds();
    if (data_sekundy<10) data_sekundy = "0"+data_sekundy;
    
    document.getElementById('komunikat1').innerHTML = "Dzisiaj jest "+dni[data_dzien]+" "+data_dn+" "+miesiace[data_miesiac]+" "+data_rok+" rok. Godzina "+data_godziny+":"+data_minuty+":"+data_sekundy;
    
    setTimeout("czas()",1000);
    
}

//ODLICZANIE DO POCZATKU WAKACJI.

function odliczanie () {
     var urodz = new Date("June 23, 2017");
     var now = new Date();
     var ile = urodz.getTime() - now.getTime();
     var dni = Math.floor(ile / (1000 * 60 * 60 * 24));
     if (dni > 1)
     document.getElementById('komunikat2').innerHTML = "Do wakacji pozostało " + dni +" dni!";}


// OBLICZENIE ILE MA LAT.
function oblicz() {
var data_rok = d.getFullYear();
var wiek = parseInt(document.getElementById("wiek").value);
var obliczanie = data_rok - wiek;
document.getElementById('komunikat3').innerHTML = "Posiadasz "+obliczenie+" lat";
}


