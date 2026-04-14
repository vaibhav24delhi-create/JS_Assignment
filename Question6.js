var a = 20;
var b = 25;
var c = 15;

var score = a + b + c;

if (a + b + c > 50) {
    score = score - 10;
}

if (score < 0) {
    score = 0;
}
var result;   
if (score >= 60) {
    result = "PASS";
} else {
    result = "FAIL";
}

alert(score + ", " + result);