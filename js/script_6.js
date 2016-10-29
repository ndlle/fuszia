//TABLICE I ZNAJDYWANIE ICH TRESCI
window.onload = sort();
window.onload = sort_odwr();
function znajdz() {
    var liczba = parseInt(document.getElementById('tablica').value);
    var tablica = new Array(5);
    tablica[0] = "Kot";
    tablica[1] = "Pies";
    tablica[2] = "Kupa";
    tablica[3] = "Ramola";
    tablica[4] = "Koń";
    var dlugosc_tablicy = tablica.length-1;

    if (liczba>=5) {
        document.getElementById('komunikat').innerHTML = "BŁĄD. Nie znaleziono wartości ("+liczba+") w tablicy. Największa wartość w tablicy: "+dlugosc_tablicy;
    }
    else {
    document.getElementById('komunikat').innerHTML = "Treść z tablicy pod numerem "+liczba+" to "+tablica[liczba];
}}
//TAB JOIN - DODAWANIE TRESCI POMIEDZY PRZERWAMI W TABLICACH
function przerwy() {
    var tresc = document.getElementById('tablica1').value;
    var tablica = new Array(5);
    tablica[0] = "Kot";
    tablica[1] = "Pies";
    tablica[2] = "Kupa";
    tablica[3] = "Ramola";
    tablica[4] = "Koń";
    var energy = tablica.join(" "+tresc+" ");
    document.getElementById('komunikat1').innerHTML = "Treść z tablicy = "+energy;
}
//SORTOWANIE ZAWARTOŚCI
function sort() {
    var tablica = new Array(5);
    tablica[0] = "Kot";
    tablica[1] = "Pies";
    tablica[2] = "Kupa";
    tablica[3] = "Ramola";
    tablica[4] = "Koń";
    tablica.sort();
    document.getElementById('komunikat2').innerHTML = tablica;
}function sort_odwr() {
    var tablica = new Array(5);
    tablica[0] = "Kot";
    tablica[1] = "Pies";
    tablica[2] = "Kupa";
    tablica[3] = "Ramola";
    tablica[4] = "Koń";
    tablica.sort();
    tablica.reverse();
    document.getElementById('komunikat3').innerHTML = tablica;
}