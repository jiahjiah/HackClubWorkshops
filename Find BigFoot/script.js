let scoreCounter = 0;

function loadBigFoot() {
  document.getElementById("bigFoot").src = 'bigfoot.png';
}

function moveBigFoot() {
  var picture = document.getElementById("bigFoot"); 
  alert('Woohoo, you win! You found Bigfoot!');

  var x = Math.random() * 300;
  var y = Math.random() * 300;

  picture.style.top = x + 'px';
  picture.style.left = y + 'px';

  scoreCounter++;
}
