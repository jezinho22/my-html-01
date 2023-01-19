// let myName = prompt("What is your name?");
// console.log(myName);
// let myExperience = prompt("How experienced a player are you? (1-4) 1: beginner, 2: amateur, 3: semi-pro, 4:pro")
// console.log(myExperience);

let myName = "Jez";
let myExperience = 1

let message;

if (myExperience == 1){
    message = "Logged in as " + myName + " (Beginner level)";
} else if (myExperience == 2){
    message = "Logged in as " + myName + " (Amateur level)";
} else if (myExperience == 3){
    message = "Logged in as " + myName + " (Semi-professional level)";
} else if (myExperience == 4){
    message = "Logged in as " + myName + " (Professional level)";
} else {
    message = "Logged in as " + myName;
    myExperience = prompt("How experienced a player are you? (1-4) 1: beginner, 2: amateur, 3: semi-pro, 4:pro")
}
document.write(message);

// if (myTime <= 11){
//     console.log(`It's ${myTime} o'clock. Good morning, ${myName}`)
// } else if (myTime === 12){
//     console.log(`It's midday. Enjoy your lunch, ${myName}`)
// } else if (myTime <=18){
//     console.log(`It's ${myTime} o'clock. Good afternoon, ${myName}`)
// } else if (myTime <24){
//     console.log(`It's ${myTime} o'clock. Good evening, ${myName}`)
// } else {
//     console.log(`Oops. Are you sure that ${myTime} is a number between 0 and 23, ${myName}? Please try again`)
//     myTime = prompt("What hour of the day is it? 0-23")
// }
console.log("Hello world")


