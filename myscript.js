// function gets and writes user name
function getName() {
  let myName = prompt("What is your name?");
  document.write(myName);
}

// function asks experience as number, interprets to words and writes
function getExperience() {
  let experience = "";
  while (experience == "") {
    let myExperience = prompt(
      "How experienced a player are you? (1-4) 1: beginner, 2: amateur, 3: semi-pro, 4:pro"
    );
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
  let myColour = prompt(
    "Choose background colour: 1 = blue, 2 = green, 3 = red, 4 = white"
  );
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
