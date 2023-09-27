const addBtnImg = (instrument, button, index) => {
    const instrumentImg = instrument[index];
    button.style.backgroundImage = `url(${instrumentImg.imgSrc})`; 
}

export default addBtnImg