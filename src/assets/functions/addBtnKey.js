import Button from "../../components/Button/index.js";

const instrumentContainer = document.createElement("div");

const addBtnKey = (instrument, instrumentKey) => {
    instrument.map((instrumentPart, index) => {
        instrumentContainer.appendChild(Button("button", instrumentKey[index], "drumBtn"));
    });

    return instrumentContainer
}

export default addBtnKey