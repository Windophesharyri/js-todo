let userInput = document.querySelector(".input")
let button = document.querySelector(".submit")
let notes = []
function createElement() {
    if (userInput.value == "") {
        return
    }
    else {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i] == userInput.value) {
                alert ("Такая запись уже есть")
                return
            }
        }
        notes.push(userInput.value)
        function colourElement() {
            if (newDiv.style.backgroundColor == "yellow") {
                newDiv.style.backgroundColor = "white"
            }
            else {
                newDiv.style.backgroundColor = "yellow"
            }

        }
        function deleteElement() {
            if (confirm("Вы уверены, что хотите удалить элемент?")) {
                for (let i = 0; i < notes.length; i++) {
                    if (notes[i] == userInput.value) {
                        notes.splice(i, 1)
                    }
                }
                newDiv.remove()                
            }
            else {
                return
            }
        }
        newDiv = document.createElement('div')
        newDiv.style.display = "flex"
        newDiv.style.alignContent = "center"
        newDiv.style.justifyContent = "center"
        newDiv.style.marginTop = "10px"
        document.body.append(newDiv)
        newText = document.createElement('p')
        newText.textContent = userInput.value
        newText.style.fontSize = "x-large"
        newDiv.append(newText)
        readyButton = document.createElement('button')
        readyButton.style.backgroundColor = "green"
        readyButton.style.marginLeft = "20px"
        readyButton.textContent = "Готово"
        newDiv.append(readyButton)
        cancelButton = document.createElement('button')
        cancelButton.style.backgroundColor = "red"
        cancelButton.style.marginLeft = "20px"
        cancelButton.textContent = "Отмена"    
        newDiv.append(cancelButton)
        readyButton.addEventListener("click", colourElement)
        cancelButton.addEventListener("click", deleteElement)   
    }
}
userInput.addEventListener("keypress", function(key) {
    if (key.key == "Enter") {
        button.click()
    }
})
button.addEventListener("click", createElement)