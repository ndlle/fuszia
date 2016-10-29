var losowa_liczba;
var ilosc_petla;
var ilosc = 0;
var testowanie = 0;
var pomiar;


function start() {
    ilosc = 0;
    document.getElementById('gra').style.display = "block";
    losowa_liczba = Math.floor(Math.random()*100);
    document.getElementById('komunikat1').innerHTML = " ";
    console.log(losowa_liczba);

    
}
function spr() {
    var sprawdz = parseInt(document.getElementById('tablica1').value);
    if (losowa_liczba === sprawdz) {
        ilosc++;
        alert("Gratulacje! Udało Ci się za "+ilosc+" razem");
        document.getElementById('gra').style.display = "none";
    }
    else {
        ilosc++;
        if (sprawdz > losowa_liczba) {
            pomiar = "Liczba jest mniejsza.";
        }
        else {
            pomiar = "Liczba jest większa."
        }
        document.getElementById('komunikat1').innerHTML = "Liczba nieudanych prób: "+ilosc+"<br>"+pomiar;
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
