import playSound from "./playSound.js";
import animateBtn from "./animateBtn.js";

// Function to handle action for the button events (click and keydown)
const handleButtonEvent = (instrument, index,) => {
    playSound(instrument[index].soundSrc); // Play the sound
    animateBtn(instrument[index].instrumentKey, ".drumBtn", "drumBtnActive"); // Animate the button
}

export default handleButtonEvent