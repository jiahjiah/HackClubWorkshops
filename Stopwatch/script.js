//var vs let: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
// let is the better ver of var, you can redefine var many times (which can cause bugs),
// if you don't realize, while redefining is not possible with let

//if you print console.log(greeter) before it is defined, it prints undefined while
//let gives reference error

//const is like let but cannot be updated

const millisec = document.querySelector('.milliseconds')
const sec = document.querySelector('.seconds')
const min = document.querySelector('.minutes')
const hour = document.querySelector('.hours')

const startButton = document.querySelector('.start')

let milliNum = 0
let secNum = 0
let minNum = 0
let hourNum = 0

let isStopped = true

let INTERVAL //used to clear or set intervals

function milliseconds() {
    milliNum++

    if (milliNum < 10) {
        millisec.innerHTML = '0' + milliNum
    } else {
        millisec.innerHTML = milliNum
    }

    if (milliNum == 99) {
        milliNum = 0
        seconds()
    }
}

function seconds() {
    secNum++

    if (secNum < 10) {
        sec.innerHTML = '0' + secNum
    } else {
        sec.innerHTML = secNum
    }

    if (secNum == 59) {
        secNum = 0
        minutes()
    }
}

function minutes() {
    minNum++

    if (minNum < 10) {
        min.innerHTML = '0' + minNum
    } else {
        min.innerHTML = minNum
    }

    if (minNum == 59) {
        minNum = 0
        hours()
    }
}

function hours() {
    hourNum++

    if (hourNum < 10) {
        hour.innerHTML = '0' + hourNum
    } else {
        hour.innerHTML = hourNum
    }
}

function start() {
    clearInterval(INTERVAL) //clear all intervals if any before setting new interval
    //setInterval() takes in func & interval time
    INTERVAL = setInterval(() => {
        //set a new interval of 0.010 s (1 ms), call millliseconds() every 0.010s
        milliseconds()
    }, 10) 
    startButton.innerHTML = "START"
}

function stop() {
    clearInterval(INTERVAL)
    startButton.innerHTML = "RESUME"
}

function reset() {
    clearInterval(INTERVAL)
    milliNum = 0
    secNum = 0
    minNum = 0
    millisec.innerHTML = '00'
    sec.innerHTML = '00'
    min.innerHTML = '00'
}
