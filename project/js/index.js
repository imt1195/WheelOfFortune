//let WIN = false;
let word = ""
let hiddenWord = []
let guessedLetters = []

function start(){
    word = getRandomWord();
    const initialLetters = ['r','s', 't', 'l', 'n', 'e']
    hideWord()
    fillWord(initialLetters)
    displayGuessed(guessedLetters)
}

//go through the length of the word, set the display word to the same length, but all characters are "_"
function hideWord(){
    for(let i=0; i<word.length; i++){
        hiddenWord = hiddenWord + '-'
    }
}

//if the letters given exist in the word replace all "_" in the display word with the letters given in the respective spots
function fillWord(letters){
    let currLetter = "-"
    for(let i=0; i<word.length; i++){
        currLetter = word.charAt(i)
        if(letters.includes(currLetter)){
            // currLetter = word.charAt(i)
            // console.log(currLetter)
            hiddenWord[i] = word.charAt(i)
        }
    }
    guessedLetters = guessedLetters.concat(letters)
    displayHiddenWord();
}

function displayHiddenWord(){
    let x = ""
    for(let i=0; i<hiddenWord.length; i++){
        x = x.concat(hiddenWord[i])
       //document.getElementById("answerDisplay").innerHTML = hiddenWord[i]
    }
    console.log(x)
    document.getElementById("answerDisplay").innerHTML="The word is: " + x
    return console.log(x)
}

//take in the guessed word, check it against the word, set "WIN" value to true
function guessWord(){
    const guess = document.forms['guessedWord']['guess'].value
    if(guess == word){
        // WIN = true
        alert("You Guessed correctly")
        return true
    }else{
        alert("Try again")
        return false
    }
}

//display the guessed letters
function displayGuessed(letters){
    //edit the diplayed word section of the html to display the updated displayWord
    const usedLetterSpace = document.getElementById("usedLetters")
    // let x = ""
    // for(let i=0; i<hiddenWord.length; i++){
    //     x = x.concat(hiddenWord[i])
    //    //document.getElementById("answerDisplay").innerHTML = hiddenWord[i]
    // }
    usedLetterSpace.innerHTML = "Letters Guessed: " + guessedLetters.toString()
    console.log(guessedLetters)
}

//const letterInput = document.getElementById("letters")
//on submission of letters, check if they are 3 consonants 1 one vowel
function submitLetters(){
//const submitLetters = function(event){
    // event.preventDefault()
    // const formElements = event.target
    const cons1 = document.forms['letters']['cons1'].value
    const cons2 = document.forms['letters']['cons2'].value
    const cons3 = document.forms['letters']['cons3'].value
    const vowel = document.forms['letters']['vowel'].value

    // const cons1 = formElements.cons1.value
    // const cons2 = formElements.cons2.value
    // const cons3 = formElements.cons3.value
    // const vowel = formElements.vowel.value

    if(vowel !== "A" && vowel !== "E" && vowel !== "I" && vowel !== "O" && vowel !== "U"
        &&vowel !== "a" && vowel !== "e" && vowel !== "i" && vowel !== "o" && vowel !== "u"){
        alert("Please enter a valid vowel")
        return false
    }
    if(cons1 === "A" || cons1 === "E" || cons1 === "I" || cons1 === "O" || cons1 === "U"
        ||cons1 === "a" || cons1 === "e" || cons1 === "i" || cons1 === "o" || cons1 === "u"){
        alert("Please enter valid consonants")
        return false
    }
    if(cons2 === "A" || cons2 === "E" || cons2 === "I" || cons2 === "O" || cons2 === "U"
        ||cons2 === "a" || cons2 === "e" || cons1 === "i" || cons2 === "o" || cons2 === "u"){
        alert("Please enter valid consonants")
        return false
    }
    if(cons3 === "A" || cons3 === "E" || cons3 === "I" || cons3 === "O" || cons3 === "U"
        ||cons3 === "a" || cons3 === "e" || cons3 === "i" || cons3 === "o" || cons3 === "u"){
        alert("Please enter valid consonants")
        return false
    }

    const letters = [cons1, cons2, cons3, vowel]
    fillWord(letters)
}


//letterInput.addEventListener("submit",submitLetters)