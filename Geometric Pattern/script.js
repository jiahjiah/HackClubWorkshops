var NUM_CIRCLES = 12
var circleDiameter
var circleRadius
var rVal
var gVal
var bVal

//run only once, at the beginning
function setup() {
    createCanvas(1000, 1000)
    
    frameRate(10)

    circleDiameter = width / (NUM_CIRCLES + 1) //file stores width of canvas in variable called width
    circleRadius = circleDiameter / 2

    rVal = 255
    gVal = 0
    bVal = 0

}

//run repeatedly after setup() finishes
function draw() {

    var isShifted = false

    var y = height
    while (y >= 0) {
        var x;
        if (isShifted) {
            x = circleRadius
        } else {
            x = 0
        }

        while (x <= width) {
            fill(color(rVal, gVal, bVal))
            stroke(color(rVal, gVal, bVal))
            circle(x, y, circleDiameter)
            x = x + circleRadius + 100
        }

        y -= circleRadius
        isShifted = !isShifted

        rVal = (rVal + 254) % 256
        gVal = (gVal + 7) % 256
        bVal = (bVal + 3) % 256
    }
}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometricPattern', 'png')
    } 
    return false //ignore any default behavior
}
  