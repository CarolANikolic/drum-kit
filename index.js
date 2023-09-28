import Text from "./src/components/Text/index.js";
import createInstrumentButtons from "./src/assets/functions/createInstrumentButtons.js";
import drum from "./src/assets/objects/drum.js";
import addBtnImg from "./src/assets/functions/addBtnImg.js";
import makeSound from "./src/assets/functions/makeSound.js";
import addKeyboardSound from "./src/assets/functions/addKeyboardSound.js";

// Access the main element's containers;
const main = document.querySelector("main");

// Append text and drum buttons
main.appendChild(Text("h1", "Drum Kit"));
main.appendChild(createInstrumentButtons(
    drum, 
    "button", 
    "drumBtn", 
    (drum, index) => makeSound(drum, index), // Pass the necessary parameters to addBtnSound
    (drum, button, index) => addBtnImg(drum, button, index) // Pass the necessary parameters to addBtnImg
));
main. appendChild(Text("p", "Made with ♥ by Carol"))

// Add an event listener for handling keypressed on keyboard
addKeyboardSound(drum, (drum, index) => makeSound(drum, index));