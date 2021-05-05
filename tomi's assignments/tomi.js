var principal = parseInt(prompt("At a rate of 5%, How much do you want to borrow?"));
var time = parseInt(prompt("How long do you want to keep the money, in years time."));
var rate = 5;
var compoundTime = parseInt(prompt("Enter the number of times interest applied per time second."));
var x = 1 + (rate / compoundTime);
var y = compoundTime * time;
var z = Math.pow(x, y);
var compoundInterest = principal * z;
alert("Your Compound Interest is " + compoundInterest);