buttonA = document.querySelector(".button-a");
buttonB = document.querySelector(".button-b");
buttonC = document.querySelector(".button-c");
buttonD = document.querySelector(".button-d");
textArea = document.querySelector("textarea");
classList1 = [".item-a", ".item-b", "textarea", ".button-a", ".button-b", ".button-c", ".button-d"];
classList2 = ["textarea", ".button-c", ".button-d"];
notesArray = [{title:"note one", body:"this is my first note"}, {title:"note two", body:"this is my second note"}];

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

buttonC.addEventListener("click", () => {
    if (textArea.value !== "") {
        alert("Please input a title!");
        input = prompt("What do you want to name your note?");
        listItem = document.createElement("li");
        listItem.innerText = input;
        document.querySelector(".item-b").appendChild(listItem);
        note = {title:input, body:textArea.value};
        notesArray.push(note);
    }
})

