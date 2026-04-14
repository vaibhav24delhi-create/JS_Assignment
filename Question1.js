var L = parseInt(prompt("Enter L"));
var R = parseInt(prompt("Enter R"));
var K = parseInt(prompt("Enter K"));

var count = 0;

for (var x = L; x <= R; x++) {

    if (x % K != 0) continue;

    // check for zero digit
    var temp = x;
    var hasZero = false;
    while (temp > 0) {
        if (temp % 10 == 0) {
            hasZero = true;
            break;
        }
        temp = Math.floor(temp / 10);
    }
    if (hasZero) continue;

    // sum of digits
    temp = x;
    var digitSum = 0;
    while (temp > 0) {
        digitSum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    // check if digitSum is prime
    var isPrime = true;
    if (digitSum < 2) {
        isPrime = false;
    } else {
        for (var i = 2; i <= Math.sqrt(digitSum); i++) {
            if (digitSum % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) count++;
}

alert(count);