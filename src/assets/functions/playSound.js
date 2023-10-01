const playSound = (soundSrc) => {
    const audio = new Audio(soundSrc);
    audio.play();
}

export default playSound
