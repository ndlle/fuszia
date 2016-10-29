function sprawdz() {
     var a = parseInt(document.getElementById("tekst").value);
    //document.getElementById("komunikat").innerHTML = a;
    for(i=0;i<=a;i++) {
        document.getElementById("komunikat").innerHTML+=i+" ";
    }
}
function sprawdz1() {
    var i = 1;
    var b = parseInt(document.getElementById('tekst1').value);
    while(i<=b) {
        document.getElementById("komunikat1").innerHTML+=i+" ";
        i++;
    }
}
