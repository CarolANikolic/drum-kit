import makeSound from "./makeSound.js"

const addKeyboardSound = (instrument, action) => {
    document.addEventListener("keydown", (e) => {
        for (let index = 0; index < instrument.length; index++) {
            let instrumentKey = instrument[index].instrumentKey
            if (instrumentKey === e.key) {
                action(instrument, index);
            }  
        };
    })
}

export default addKeyboardSound