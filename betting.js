var balance = 100; 

var wagerBet = document.getElementById("wager");

var guess = document.getElementById("guess");

var buttonOne = document.getElementById('button_one');

var buttonTwo = document.getElementById('button_two');


//prompts user for name

//prints name on screen 

//randomizes a number between the range
function getRandomIntInclusive() {
   return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

buttonOne.addEventListener('click', function(event) {
  event.preventDefault();
    if (wagerBet.value > 10 || wagerBet.value < 5) {
      swal({
        title: "Error!",
        text: "Your bet has to be between 5 and 10.",
        type: "error",
        confirmButtonText: "Alright!"
      })
    }
});

buttonTwo.addEventl

// //function that checks if randomized num = guessed num
buttonTwo.addEventListener('click', function(event) {
  winningNum = getRandomIntInclusive();
  switch (Math.abs(guess - winningNum)) {
    case 0:
      balance += wagerBet.value;
      swal("Great guess! Your balance is: "+ balance, "success");
      break;
    case 1:
      balance += 0
      swal("Close, but no cigar.", "Your balance is: " + balance);
      break;
    default:
      balance -= 2
      sweetAlert("Yikes!", "Better luck next time, your balance is " + balance, "error");
      break;
  }
});












