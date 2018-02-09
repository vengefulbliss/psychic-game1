
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var currentIndex = Math.floor(Math.random() * 10);

var wins = 0;
var losses = 0;
var numberOfGuesses = 9;
var incorrectLetters = []


document.on('keyup', handlPress)


function handlePress(event) {
  // check if letter pressed is correct
  // handle accordingly
  if (event.key === letters[currentIndex]) {
    // handle win
  } else {
    // handle incorrect guess
    numberOfGuesses--
    incorrectLetters.push(event.key)
    if (numberOfGuesses < 1) {
      // handle loss
    }
  }
}

function handleWin() {
  // increment wins
  reset()
}

function handleLoss() {
  // increment losses
  reset()
}

function reset() {
   // reset game, reroll random index number
  // reset incorrectLetters = []
  // numberofguesses = 0
}