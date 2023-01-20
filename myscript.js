// function gets and writes user name
function getName() {
  let myName = "Jez"; //prompt("What is your name?");
  document.write(myName);
}

// function asks experience as number, interprets to words and writes
function getExperience() {
  let experience = "";
  while (experience == "") {
    let myExperience = 2; //prompt("How experienced a player are you? (1-4) 1: beginner, 2: amateur, 3: semi-pro, 4:pro");
    if (myExperience == 1) {
      experience = " (Beginner level)";
    } else if (myExperience == 2) {
      experience = " (Amateur level)";
    } else if (myExperience == 3) {
      experience = " (Semi professional level)";
    } else if (myExperience == 4) {
      experience = " (Professional level)";
    } else {
      experience = "";
      myExperience = prompt(
        "How experienced a player are you? (1-4) 1: beginner, 2: amateur, 3: semi-pro, 4:pro"
      );
    }
    document.write(experience);
  }
}
// function sets background colour as chosen by user
function chooseBackground() {
  let colourCode = "#3ab1c8";
  let myColour = 3; //prompt("Choose background colour: 1 = blue, 2 = green, 3 = red, 4 = white");
  if (myColour == 1) {
    colourCode = "#5497A7";
  } else if (myColour == 2) {
    colourCode = "#7AE582";
  } else if (myColour == 3) {
    colourCode = "#721817";
  } else if (myColour == 4) {
    colourCode = "#EEFFDB";
  }

  document.body.style.backgroundColor = colourCode;
}

function numberGuess() {
  let number = Math.floor(Math.random() * 10);
  let guess;
  let guessCounter = 0;
  while (number != guess) {
    guessCounter++;
    guess = prompt("Guess my number: give a number 1 to 10");
  }
  document.write(`You got it. You took ${guessCounter} guesses`&nbsp;&nbsp;)
}

// function getRating() {
//   let acceptable = 0;
//   // get the rating and keep asking until user gives 1 to 5
//   while (acceptable != 1) {
//     let rating = prompt("Please rate my website 1-5");
//     if (rating < 1 || rating > 5) {
//       prompt("Sorry. That's not between 1 and 5. Please rate my website 1-5");
//     } else {
//       acceptable = 1;
//     }
//   }

//   let output = "You rate us: ";
//   // transform rating into message plus icons
//   for (let i = 0; i < rating; i++) {
//     output =
//       output +
//       "<img src='rugby-ball 512x512.png' style='width:25%; height:25%;'>";
//   }
//   document.write(output);
// }
