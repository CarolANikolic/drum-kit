const Button = (type, content, keyword, event, action) => {
    const generalBtn = document.createElement("button");
    generalBtn.type = type;
    generalBtn.textContent = content;
    generalBtn.className = "btn";
    keyword === "drumBtn" ? (
        generalBtn.setAttribute("data-keyword", keyword),
        generalBtn.classList.add(keyword)
    ) : '';
    generalBtn.addEventListener(event, action);

    return generalBtn
}

export default Button