import Button from "../../components/Button/index.js";

const instrumentContainer = document.createElement("div");
instrumentContainer.classList.add("instrumentContainer");

const createInstrumentButtons = (instrument, buttonType, buttonClass, soundFunction, imageFunction) => {
    instrument.map((item, index) => {
            const button = Button(
                buttonType, 
                item.drumKey, 
                buttonClass, 
                () => soundFunction(instrument, index)
                );
                imageFunction(instrument, button, index);
            instrumentContainer.appendChild(button);
    });

    return instrumentContainer
}

export default createInstrumentButtons