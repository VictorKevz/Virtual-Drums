// 1. Let's locate all buttons and store in array
const myButtons = document.querySelectorAll(".drum");

// 2. Use for Loop to add event listener to all the buttons
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", function () {
    let buttonClicked = myButtons[i].innerHTML;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);

  });
}

// 4. Add event listener for key presses
document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
})

// 5. Add an animation when the button is clicked/pressed
function buttonAnimation(key) {
   
    // This part is a bit tricky.
    // Remember in the HTML doc all buttons have a class with a letter
    // Let's locate which button is active by concantenation and find its class 
    const activeButton = document.querySelector("."+key);
 
    // Once we know the class of the button, we can now add a class to that button
    activeButton.classList.add("pressed");
 
    // We have a little problem, the animation isn't going away after key press or click
    // To address that problem we need to remove the class.
    // Then set how long that class shows after after every key press or click
    setTimeout(function () {
       activeButton.classList.remove("pressed");
    }, 100);
 }

function makeSound(button) {
  // 3. The switch case checks each button clicked or pressed
  // And plays the corresponding sound
  switch (button) {
    case "a":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;

    case "g":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "h":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var extra = new Audio("sounds/snare.mp3");
      extra.play();
      break;
    default:
      console.log(buttonClicked);
      break;
  }
}
