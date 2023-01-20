// console.log(5);
// a = 5;
// console.log(a);
// a++;
// console.log((a = a * 5));
// console.log(a);
function numberGuess() {
  let number = Math.floor(Math.random() * 10);
  let guess;
  let guessCounter = 0;
  while (number != guess) {
    guessCounter++;
    guess = prompt("Guess my number: give a number 1 to 10");
  }
  console.log(`You got it. You took ${guessCounter} guesses`);
}
numberGuess();

function rateMySite() {
  let rating = prompt("Please rate this site (1 - 5)");
  let output = "";
  for (let i = 0; i < rating; i++) {
    //console.log(i);
    output =
      output +
      "<img src='rugby-ball 512x512.png' style='width:25%; height:25%;'>";
  }
}

// function that lets the user rate the website
function getRating() {
  let acceptable = 0;

  while (acceptable != 1) {
    let rating = prompt("Please rate my website 1-5");
    if (rating > 5) {
      prompt("Sorry that's too big. Please rate my website 1-5");
    } else if (rating < 0) {
      prompt("Sorry that's less than 0. Please rate my website 1-5");
    } else {
      acceptable = 1;
    }
  }

  let output = "You rate us: ";

  for (let i = 0; i < rating; i++) {
    output = output + "<img src='./yoyo.png' class='yoyo' />";
  }
  document.write(output);
}
