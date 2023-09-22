import drum from "../objects/drum.js";

const addBtnImg = (drumBtn, index) => {
    const drumImg = drum[index];
    drumBtn.style.backgroundImage = `url(${drumImg.imgSrc})`; 
}

export default addBtnImg