import Button from "../../components/Button/index.js";
import addBtnImg from "./addBtnImg.js";

const instrumentContainer = document.createElement("div");
instrumentContainer.classList.add("instrumentContainer");

const addBtnKey = (instrument, instrumentKey) => {
    instrument.map((instrumentPart, index) => {
            const drumBtn = Button("button", instrumentKey[index], "drumBtn");
            addBtnImg(drumBtn, index);
            instrumentContainer.appendChild(drumBtn);
    });

    return instrumentContainer
}

export default addBtnKey