var N = parseInt(prompt("Enter N"));
var seed = parseInt(prompt("Enter seed"));

var divisor = seed + 2;
var sum = 0;
var m = 0;

while (sum < N) {var base = parseInt(prompt("Enter base"));
var distance = parseInt(prompt("Enter distance"));
var minutesLate = parseInt(prompt("Enter minutesLate"));
var seed = parseInt(prompt("Enter seed"));

var fare = base + 7 * distance;

if (minutesLate > 15) {
    fare = fare + 20;
}

if (distance > 10) {
    fare = fare + Math.floor(fare * 10 / 100);
}

if (seed % 2 != 0) {
    fare = fare - seed;
} else {
    fare = fare + seed;
}

if (fare % 5 != 0) {
    fare = fare + (5 - fare % 5);
}

alert(fare);
    m++;
    if (m % divisor != 0) {
        sum = sum + m;
    }
}

alert(m + " " + sum);
