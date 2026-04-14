 Question 1 – Digit Gatekeeper

Approach

Start loop from L to R.
Check divisibility of number by K.
Check absence of zero.
Calculate sum of digits.
Check if sum is a prime number.
Count numbers.

Time Complexity:
O(N × D)
(N = range, D = digits)

 Question 2 – Roll-Seed Lock

Approach

Apply transformation three times.
Use odd/even property.
Check if:
number lies within 100-999
middle digit is seed.

Time Complexity:
O(1)

 Question 3 – Mirror Corridor

Approach

Iterate through X values up to 100000.
Check palindrome property.
Check divisibility by K.
Find minimum X.

Time Complexity:
O(100000 × D)

 Question 4 – Fare Calculator

Approach

Calculate initial fare.
Subtract late fee.
Add distance bonus to fare.
Perform seed modification on final fare.
Rounded off to nearest multiple of 5.

Time Complexity:
O(1)

 Question 5 – Skipping Numbers

Approach

Sum continuously all integers starting from 1.
Exclude sum of multiples of seed+2.
Stop the loop until sum reaches N.

Time Complexity:
O(m)

 Question 6 – Contest Score Judge

Approach

Calculate score = 3*a + b - 2*c.
If score is negative set to zero.
Subtract 10 points if total submissions > 50.
Calculate PASS/FAIL.

Time Complexity:
O(1)
