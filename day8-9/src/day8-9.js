const gameForm= document.querySelector(".game__form")
const MaximumNumberInput = document.querySelector(".max__input");
const choiceNumberInput = document.querySelector(".choice__input");

const textBox= document.querySelector(".game__text")
const playingText= document.querySelector(".game__playing");
const resultText= document.querySelector(".game__result");
const HIDDEN_CLASSNAME ="hidden";




function game(event) {

    event.preventDefault();
    const maximumNumber= parseInt(MaximumNumberInput.value);
    const choiceNumber= parseInt(choiceNumberInput.value); 
    if (maximumNumber < choiceNumber) {
        alert("Please Input Smaller than Maximum Number!!")

    } else {  
    textBox.classList.remove(HIDDEN_CLASSNAME);
    const machineChoice= Math.ceil(Math.random()*maximumNumber);
    playingText.innerText = `You chose: ${choiceNumber}, the machine chose: ${machineChoice}.`
    showResult(machineChoice,choiceNumber);}
    


}


function showResult(machineChoice,choiceNumber){
        
    if (choiceNumber ===machineChoice) {
        resultText.innerText= "You won!!!!!!!!!!!!"
    } else {
        resultText.innerText= "You lost!!!!!!!!!!!!!!!!"
    }
    
}

gameForm.addEventListener("submit", game);

