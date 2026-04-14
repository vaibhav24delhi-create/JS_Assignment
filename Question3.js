var N = parseInt(prompt("Enter N"));
var K = parseInt(prompt("Enter K"));

var answer = -1;

for (var X = 0; X <= 100000; X++) {
    var val = N + X;
    var str = val.toString();
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if (str == reversed && val % K == 0) {
        answer = X;
        break;
    }
}

alert(answer);