import Text from "./src/components/Text/index.js";
import createInstrumentButtons from "./src/assets/functions/createInstrumentButtons.js";
import drum from "./src/assets/objects/drum.js";
import addBtnImg from "./src/assets/functions/addBtnImg.js";
import addBtnSound from "./src/assets/functions/addBtnSound.js";

// Access the main element's containers;
const main = document.querySelector("main");

// Append text and drum buttons
main.appendChild(Text("h1", "Drum Kit"));
main.appendChild(createInstrumentButtons(
    drum, 
    "button", 
    "drumBtn", 
    (drum, index) => addBtnSound(drum, index), // Pass the necessary parameters to addBtnSound
    (drum, button, index) => addBtnImg(drum, button, index) // Pass the necessary parameters to addBtnImg
));
main. appendChild(Text("p", "Made with ♥ by Carol"))