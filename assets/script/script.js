// Declaring default colors
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

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

    //Add event listener
    squares[i].addEventListener("click", function(){
        if(colors[i] === pickedColor){
            alert("great!");
            newGame();
        }
        else{
            alert("wrong!");
            newGame();
        }
    });
    

    
    }
    //Pick winning color
    let pickedColor = colors[Math.floor(Math.random()*6)];

    //Select Span in header
    let changeHeader = document.querySelector("span");

    //Change text in header
    changeHeader.textContent = pickedColor;
    changeHeader.style.textTransform="uppercase";
}

//Call the function
newGame();


//Start new Game if "new game" button is clicked
document.getElementById("newGame").addEventListener("click", newGame);


