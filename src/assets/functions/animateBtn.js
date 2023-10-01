const animateBtn = (buttonKey, selector, className) => {
    const buttons = document.querySelectorAll(selector);
    let targetBtn;

    // Loop through the buttons to find the one with the matching innerText
    buttons.forEach(button => {
        if (button.innerText === buttonKey) {
            targetBtn = button;
            
            if (targetBtn) {
                targetBtn.classList.add(className);
                setTimeout(() => {
                    targetBtn.classList.remove(className);
                }, 100)
            }
            return; // Stop iterating once a match is found
        }
    });
}

export default animateBtn;