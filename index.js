import Text from "./src/components/Text/index.js";
import addBtnKey from "./src/assets/functions/addBtnKey.js";
import drum from "./src/assets/objects/drum.js";
import drumKey from "./src/assets/objects/drumKey.js";

// Access and create main element's containers;
const main = document.querySelector("main");
const drumContainer = document.createElement("div");

// Append text and drum buttons
drumContainer.appendChild(addBtnKey(drum, drumKey));
main.appendChild(Text("h1", "Drum Kit"));
main.appendChild(drumContainer);
main. appendChild(Text("p", "Made with ♥ by Carol"))