const speech = new p5.SpeechRec('en-US', parseResult)
//mic stays active after you've said the first phrase
speech.continuous = true
speech.interimResults = false

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  fill(25)

  textSize(48)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Courier New", system-ui, sans-serif')
  text('SAY A COLOUR', width / 2, height / 2)
  speech.start()
}

function draw() {
  
}

function parseResult() {
  if (speech.resultValue) {
    const color = speech.resultString.replace(/\s/g, '').split('stop').pop().toUpperCase()
    background(color)
    text(color, width / 2, height / 2)
    console.log(color)
  }
}