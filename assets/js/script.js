Document.addEventlistener("DOMContentLoaded", function runGame() {
    let buttons= document.getElementsByTagName("button");

    for(let button of buttons){
    }    button.addEventlistener("click", function() {
            }   if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!"); 
            } else {
                let gametype= this.getAttribute("data-type");
                alert('You clicked ${gameType}');
            }

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}