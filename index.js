let passwordOne = document.getElementById("password1")
let passwordTwo = document.getElementById("password2")
let firstPassword = ""
let secondPassword = ""
let copyFirst = document.getElementById("copyFirst")
let copySecond = document.getElementById("copySecond")
let length = document.getElementById("passwordLength")


let letters = document.getElementById("lettersToggle")
let numbers = document.getElementById("numbersToggle")
let symbols = document.getElementById("symbolsToggle")


let lettersSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbersSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbolsSet = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]



function generatePasswords() {
    let characters = []
    firstPassword = ""
    secondPassword = ""
    copyFirst.className = "empty"
    copySecond.className = "empty"
    randomisedCharacters = []
    randomisedCharactersIndexUsed = []


    if (letters.checked === true) {
        for (i = 0; i < lettersSet.length; i++) {
            characters.push(lettersSet[i])
        }
    }
    if (numbers.checked === true) {
        for (i = 0; i < numbersSet.length; i++) {
            characters.push(numbersSet[i])
        }
    }
    if (symbols.checked === true) {
        for (i = 0; i < symbolsSet.length; i++) {
            characters.push(symbolsSet[i])
        }
    }

    do {
        let x = Math.floor(Math.random() * characters.length)
        do {
            x = Math.floor(Math.random() * characters.length)
        }
        while (randomisedCharactersIndexUsed.includes(x))
        randomisedCharactersIndexUsed.push(x)
        randomisedCharacters.push(characters[x])

    } 
    while (randomisedCharacters.length < characters.length)  
    
    characters = randomisedCharacters
    
    if (letters.checked === false && numbers.checked === false && symbols.checked === false) {
        firstPassword = "Enter valid parameters"
        secondPassword = "Enter valid parameters"
    } else {
        for (let i = 0; i < length.value; i++) {
            let char = Math.floor(Math.random() * characters.length)
            firstPassword = firstPassword + characters[char]

            let char2 = Math.floor(Math.random() * characters.length)
            secondPassword = secondPassword + characters[char2]

        }
        copyFirst.className = ""
        copySecond.className = ""
    }
    passwordOne.textContent = firstPassword
    passwordTwo.textContent = secondPassword
}


function copyFirstPassword() {
    navigator.clipboard.writeText(firstPassword)
    copyFirst.textContent = "Copied ✔️"
    setTimeout(function() {
        copyFirst.textContent = "Copy ⎘"
    }, 500)
}

function copySecondPassword() {
    navigator.clipboard.writeText(secondPassword)
    copySecond.textContent = "Copied ✔️"
    setTimeout(function() {
        copySecond.textContent = "Copy ⎘"
    }, 500)
}

let settingsView = document.querySelector("#settingsView")
let changeParameters = document.querySelector("#changeParameters")
let total = 0

changeParameters.addEventListener("click", function() {
    if (total % 2 === 0) {
        settingsView.className = ""
        changeParameters.textContent = "Change Parameters ↡"
        total += 1
    } else {
        settingsView.className = "empty"
        changeParameters.textContent = "Change Parameters ↠"
        total += 1
    } 
})

