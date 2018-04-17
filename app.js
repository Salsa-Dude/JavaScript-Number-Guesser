
// Game function
// - User must guess a number between 1 and 10
// - User has a certain amount tries 
// - Notify user of guess remaining
// - Notify user of the correct answer if loose
// - let user choose to play again

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.querySelector('.message');

// Assign UI min & max
minNum.textContent = min;
maxNum.textContent = max;

// Event Listeners
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} & ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum) {
    // Disable input
    guessInput.disabled = true;
    // Chanage Border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!!`, 'green');
  } else {

  }

});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

