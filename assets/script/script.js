// Declaring default colors
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

let pickedColor;

// Declaring the score
let score=0
let displayScore = document.querySelector("h3 span") 

//Select all squares
let squares = document.querySelectorAll(".square");

//Declaring the function that generate new colors
function newGame(){

    //Generate random colors for every square
    for(let i=0; i<colors.length; i++){
        colors[i] =`rgb(` + Math.round(Math.random()*255)+`, `+Math.round(Math.random()*255)+`, `+Math.round(Math.random()*255)+`)`;
    }
    //Change squares colors
    for (let i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i]; 
    }
    //Pick winning color
    pickedColor = colors[Math.floor(Math.random()*colors.length)];

    //Select Span in header
    let changeHeader = document.querySelector("span");

    //Change text in header
    changeHeader.textContent = pickedColor;
    changeHeader.style.textTransform="uppercase";
}

//Call the function
newGame();

//
text = document.querySelector("h2")

//Add event listener - clicking the square
for (let i=0; i<squares.length; i++){
squares[i].addEventListener("click", function(){
    if(colors[i] === pickedColor){
        text.textContent = "Well done!";
        text.style.color = "green"
        score++;
        displayScore.textContent = score;
        newGame();
    }
    else{
        text.textContent = "Try again";
        text.style.color = "red";

        newGame();
    }
});
}

//Start new Game if "new game" button is clicked
document.getElementById("newGame").addEventListener("click", newGame);

//Change difficulty when clicked the button
document.getElementById("changeDiff").addEventListener("click", function(){
    //Loop that toggle display-none class
    for(let i=3; i<6; i++){
        squares[i].classList.toggle("difficulty");}

        //changing the game rules
            colors.length === 3? colors.length = 6: colors.length = 3;
            newGame();
})


