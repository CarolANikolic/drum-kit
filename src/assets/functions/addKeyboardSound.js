const addKeyboardSound = (instrument, action) => {
    document.addEventListener("keydown", (e) => {
        for (let index = 0; index < instrument.length; index++) {
            let instrumentKey = instrument[index].instrumentKey
            if (instrumentKey === e.key.toLowerCase()) {
                action(instrument, index);
            }  
        };
    })
}

export default addKeyboardSound