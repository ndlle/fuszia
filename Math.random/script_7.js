var losowa_liczba;
var ilosc_petla;
var ilosc = 0;
var testowanie = 0;

function start() {
    document.getElementById('gra').style.display = "block";
    losowa_liczba = Math.floor(Math.random()*100);
    alert(losowa_liczba);
    
}
function spr() {
    var sprawdz = parseInt(document.getElementById('tablica1').value);
    if (losowa_liczba === sprawdz) {
        alert("Gratulacje! Udało Ci się.");
        document.getElementById('gra').style.display = "none";
    }
    else {
        ilosc++;
        document.getElementById('komunikat1').innerHTML = "Liczba nieudanych prób: "+ilosc;
    }
}



/*function losowanie() {
    
    
}

function szukanie() {
    alert(testowanie);
    while(testowanie==10) {
        
        testowanie = Math.floor(Math.random()*10);
        ilosc_petla++;
        document.getElementById('komunikat2').innerHTML = "Szukanie liczby.. Ilość przeszukanych zakamarków szafki: "+ilosc_petla;
        setTimeout("szukanie()",500);
    }
}*/
