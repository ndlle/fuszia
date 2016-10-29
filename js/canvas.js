

window.onload = rysuj();

var c = document.getElementById('gierka');
var dlugosc = c.width;
var wysokosc = c.height;



var y = 50;
var x = 0;

var color = "red";
var dx = 10;
var dy = 10;
var wielkosc = 10;
var cos = 0;
var cos2 = 2;



function rysuj() {
  var c = document.getElementById('gierka');
var ctx = c.getContext("2d");  
    ctx.clearRect(0, 0, 480, 900);

ctx.beginPath;
   // ctx.fillStyle = 'red';
ctx.arc(x,y,wielkosc,cos,cos2*Math.PI);
ctx.stroke();
ctx.closePath;   
  //  poruszaj();
//}
//function poruszaj() {
    if (x > dlugosc) {
        console.log("obiekt znajduje sie poza obszarem roboczym! (prawo)");
        dx = -dx;

 }
    if (x < 0) {
      dx = -dx;
         console.log("obiekt znajduje sie poza obszarem roboczym! (lewo)");
   }
    if (y < 0) {
         console.log("obiekt znajduje sie poza obszarem roboczym! (góra)");
        dy = -dy;
    }
    if (y > wysokosc) {
         console.log("obiekt znajduje sie poza obszarem roboczym! (dół)");
        dy = -dy;
    }
    
    x = x + dx;
    y = y + dy;
    wielkosc = wielkosc + 0.1;

    

    setTimeout("rysuj()",1);
}
