const Text = (type, content) => {
    const text = document.createElement(type);
    text.textContent = content;

    type === "p" &&
    text.classList.add("paragraph") 

    type === "h1" &&
    text.classList.add("title")

    return text
}

export default Text