buttonB = document.querySelector(".button-b");
classList = [".item-a", ".item-b", "textarea", ".button-a", ".button-b", ".button-c", ".button-d"];

buttonB.addEventListener("click", ()=>{
    for (let item of classList) {
        document.querySelector(`${item}`).classList.toggle("darkBGColor");
    }
    
    if (buttonB.textContent === "Dark Theme") {
        buttonB.textContent = "Light Theme";
    }
    else {
        buttonB.textContent = "Dark Theme";
    }
})