window.onload = random_ob();
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 38 || event.keyCode === 40) {
        event.preventDefault();
    }
}, false);
var c = document.getElementById('gierka');
var dlugosc = c.width;
var wysokosc = c.height;
var y = 50;
var x = 0;
var color = "red";
var dx = 15;
var dy = 15;
var wielkosc = 10;
var cos = 0;
var cos2 = 2;
function random_ob() {
    var randx = Math.floor((Math.random() * document.getElementById('gierka').width) + 1);
    var randy = Math.floor((Math.random() * document.getElementById('gierka').height) + 1);
    console.log(randx);
    console.log(randy);
    var rand = document.getElementById("gierka");
    var pkt = rand.getContext("2d");
    pkt.beginPath();
    pkt.fillRect(randx, randy,30,30);
    pkt.fillStyle = "#FF00FF";
    pkt.closePath();
}
function rysuj() {
    var c = document.getElementById("gierka");
    var ctx = c.getContext("2d");
    ctx.beginPath;
    ctx.clearRect(0, 0, dlugosc, wysokosc);
    ctx.fillRect(x, y, 30, 30);
    ctx.fillStyle = "Red";
    ctx.closePath;
    
    if (x > dlugosc - 30) {
        console.log("klocek przekroczył PRAWĄ granice");
        x = x - dx;
        rysuj();
    }
    if (x < 0) {
        console.log("klocek przekroczył LEWĄ granice");
        x = x + dx;
        rysuj();
    }
    if (y < 0) {
        console.log("klocek przekroczył DOLNĄ granice");
        y = y + dy;
        rysuj();
    }
    if (y > wysokosc - 20) {
        console.log("klocek przekroczył GÓRNĄ granice");
        y = y - dy;
        rysuj();
    }
}
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) { // Left
        console.log('Lewo');
        x -= dx;
        rysuj();
    }
    if (event.keyCode == 38) { // up
        console.log('Góra');
        y -= dy;
        rysuj();
    }
    if (event.keyCode == 39) { // right
        x += dx;
        console.log('Prawo');
        rysuj();
    }
    if (event.keyCode == 40) { // down
        console.log('Dół');
        y += dy;
        rysuj();
    }

}, false);

