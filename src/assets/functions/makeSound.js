const makeSound = (instrument, index) => {
    let audio = new Audio(instrument[index].soundSrc);
    audio.play();
}

export default makeSound