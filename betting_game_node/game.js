var prompt = require('sync-prompt').prompt;

var colors = require('colors');

var balance = 100;

while (balance > 0) {
  var wagerBet = prompt("Place a bet between $5 and $10 :");
  var guess = prompt("Choose a number between 1 and 10 :");
  var randomNumber = Math.floor(Math.random() * 10) + 1;

  if (guess == randomNumber) {
      balance += wagerBet;
    console.log(colors.green("Great guess! Your balance is: "+ balance + "."));
  } 
  else if ((guess - randomNumber) == 1 || (guess + randomNumber) == -1) {
    console.log(colors.yellow("Close, but no cigar.", "Your balance is: " + balance + "."));
  } 
  else if ((guess - randomNumber) > 1 || (guess - randomNumber) < -1) {
      balance -= 2;
      console.log(colors.red("Yikes!", "Better luck next time, your balance is: " + balance +  "\n This was the winning number: " + randomNumber));
  }
};


