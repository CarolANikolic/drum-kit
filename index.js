import Text from "./src/components/Text/index.js";
import addBtnKey from "./src/assets/functions/addBtnKey.js";
import drum from "./src/assets/objects/drum.js";
import drumKey from "./src/assets/objects/drumKey.js";

// Access the main element's containers;
const main = document.querySelector("main");

// Append text and drum buttons
main.appendChild(Text("h1", "Drum Kit"));
main.appendChild(addBtnKey(drum, drumKey));
main. appendChild(Text("p", "Made with ♥ by Carol"))