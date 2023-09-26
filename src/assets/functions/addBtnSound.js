import drumSounds from "../objects/drumSounds.js";

const addBtnSound = (index) => {
    let audio = new Audio(drumSounds[index].soundSrc);
    audio.play();
}

export default addBtnSound