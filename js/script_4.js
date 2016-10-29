function wypisz() {
    var a = parseInt(document.getElementById("liczba").value);
    //document.getElementById("komunikat").innerHTML = a;
    for(i=0;i<=a;i++) {
        document.getElementById("komunikat").innerHTML+=i+" ";
    }
}