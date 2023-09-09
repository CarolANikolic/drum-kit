import addBtnKey from "./src/assets/functions/addBtnKey.js";
import drum from "./src/assets/objects/drum.js";
import drumKey from "./src/assets/objects/drumKey.js";

const main = document.querySelector("main");

main.appendChild(addBtnKey(drum, drumKey));