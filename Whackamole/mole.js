/* Link the elements in the 
   HTML to the JS!
   Hint: Look at the demos or at the Rebar workshop
*/

const mole = document.getElementById("mole"); 
const score = document.getElementById("score"); 
const timer = document.getElementById("time"); 

/* Initialize your variables.
   Hint: Keep track of a few different numbers
*/
let scoreCounter = 0;
let time = 400;
let gameOver = false;


/* This function runs every 100th of a second.
   Use it to update the timer and run the game.
*/
function timerFunc() {
  
  if (time >= 0) {
      time--;
      timer.innerText = time;
  }
  else {
    gameOver = true;
    timer.innerText = "GAME OVER"
  }
}

/* This will repeatedly run the timer function every 100th of a second. */
setInterval(timerFunc, 1)


/* This will run every time the mole is clicked.
   You decide what this function should do!
*/
function click() {
  if (!gameOver) {
    time = 400 
    
    //relocate
    let x = 5 + Math.random() * 90;
    let y = 15 + Math.random() * 45;
    mole.style.left = x + "%"
    mole.style.top = y + "%"
  
    //resize
    let size = 25 + Math.random() * 100;
    mole.style.transform = `scale(${size}%, ${size}%`
    
    //will update score
    scoreCounter++;
    score.innerText = "Score: " + scoreCounter;
  }
}

function reset() {
  time = 400;
}

/* Add a listener to the mole to run the click function */

mole.addEventListener("click", click);