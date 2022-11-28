buttonA = document.querySelector(".button-a");
buttonB = document.querySelector(".button-b");
buttonD = document.querySelector(".button-d");
textArea = document.querySelector("textarea");
classList1 = [".item-a", ".item-b", "textarea", ".button-a", ".button-b", ".button-c", ".button-d"];
classList2 = ["textarea", ".button-c", ".button-d"];


buttonB.addEventListener("click", () => {
    for (let item of classList1) {
        document.querySelector(`${item}`).classList.toggle("darkBGColor");
    }

    if (buttonB.textContent === "Dark Theme") {
        buttonB.textContent = "Light Theme";
    }
    else {
        buttonB.textContent = "Dark Theme";
    }
})

buttonD.addEventListener("click", () => {
    for (let item of classList2) {
        document.querySelector(`${item}`).classList.add("hide");
    }
})

buttonA.addEventListener("click", () => {
    if (!textArea.classList.contains("hide")) {
        textArea.value = "";
    }

    for (let item of classList2) {
        document.querySelector(`${item}`).classList.remove("hide");
    }
})