const Button = (type, content, action) => {
    const generalBtn = document.createElement("button");
    generalBtn.type = type;
    generalBtn.textContent = content;
    generalBtn.className = "btn";
    generalBtn.addEventListener("click", action);

    return generalBtn
}

export default Button