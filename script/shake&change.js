let imageStates = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
};

let imageNames = {
    1: "Joker",
    2: "Credit Card",
    3: "Fibonacci",
    4: "Cavendish",
    5: "Faceless Joker",
    6: "Mime",
    7: "Sock and Buskin",
    8: "Egg",
    9: "Lion",
    10: "DNA",
};

// Define an object to track the number of sound instances
let soundPlayCount = 0;

// Function to play sound with up to 3 instances
function playSound() {
    if (soundPlayCount < 5) { // Allow up to 3 sounds to play simultaneously
        const audio = new Audio('sound/card_sound.mp3'); // Replace with your sound file path
        audio.play();
        soundPlayCount++;

        // Decrease the count when the sound ends
        audio.addEventListener('ended', () => {
            soundPlayCount--;
        });
    }
}
document.querySelector(".scroll-button").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
// Function to toggle image and text based on button click
function toggleImage(buttonId) {
    const button = document.getElementById(`B_icon${buttonId}`);
    const image = document.getElementById(`button-image${buttonId}`);
    const textElement = document.getElementById(`text${buttonId}`);

    // Disable the button to prevent multiple clicks during animation
    button.disabled = true;

    // Play the sound each time the button is clicked
    playSound();

    // Trigger the shake animation
    button.classList.add('shake');

    // Toggle the image based on the current state
    if (imageStates[buttonId]) {
        image.src = 'cards/cover.webp';  // Original image
        textElement.textContent = "?????";  // Reset text when cover is shown
    } else {
        image.src = `cards/img${buttonId}.webp`;  // New image
        textElement.textContent = imageNames[buttonId];  // Set unique name based on the image
    }

    // Flip the state for the next toggle
    imageStates[buttonId] = !imageStates[buttonId];

    // Re-enable the button and remove the shake animation once it ends
    button.addEventListener('animationend', () => {
        button.classList.remove('shake');
        button.disabled = false;  // Re-enable button
    });
}