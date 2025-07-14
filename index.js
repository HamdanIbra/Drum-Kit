// Define a mapping between keys and their corresponding sound file names
const keySoundMap = {
  w: "tom-1.mp3",
  a: "tom-2.mp3",
  s: "tom-3.mp3",
  d: "tom-4.mp3",
  j: "snare.mp3",
  k: "crash.mp3",
  l: "kick-bass.mp3"
};

// Select all buttons with the class 'drum' (assumes each button has a class matching the key it represents)
const drumButtons = document.querySelectorAll(".drum");

// Attach a click event listener to each drum button
// When clicked, play the sound and animate the button

// Loop through each button in the NodeList

// `.forEach()` is preferred over a traditional for-loop for readability here
drumButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the inner HTML of the clicked button and convert to lowercase (to match the keys in our map)
    const key = button.innerHTML.toLowerCase();
    playSound(key);
    animateButton(key);
  });
});

// Add an event listener to the whole document to listen for key presses
// When a valid key is pressed, play the sound and animate the corresponding button
document.addEventListener("keydown", event => {
  // Convert the pressed key to lowercase (in case Shift is held)
  const key = event.key.toLowerCase();
  playSound(key);
  animateButton(key);
});

// Function that plays the sound associated with a given key
function playSound(key) {
  // Look up the sound file name for the key
  const soundFile = keySoundMap[key];

  // If there is a mapped sound file, create an Audio object and play it
  if (soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
  } else {
    // If key is not mapped, log it for debugging
    console.log(`No sound mapped for key: ${key}`);
  }
}

// Function that applies and removes the 'pressed' CSS class to animate the button
function animateButton(key) {
  // Select the button element with a class that matches the key
  const activeButton = document.querySelector(`.${key}`);

  // If such a button exists, add the 'pressed' class temporarily
  if (activeButton) {
    activeButton.classList.add("pressed");

    // Use setTimeout to remove the class after 100ms for a quick visual effect
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
