import Button from "../../components/Button/index.js";
import addBtnImg from "./addBtnImg.js";
import addBtnSound from "./addBtnSound.js";

const instrumentContainer = document.createElement("div");
instrumentContainer.classList.add("instrumentContainer");

const addBtnKey = (instrument, instrumentKey) => {
    instrument.map((instrumentPart, index) => {
            const drumBtn = Button(
                "button", 
                instrumentKey[index], 
                "drumBtn", 
                () => addBtnSound(index)
                );
            addBtnImg(drumBtn, index);
            instrumentContainer.appendChild(drumBtn);
    });

    return instrumentContainer
}

export default addBtnKey