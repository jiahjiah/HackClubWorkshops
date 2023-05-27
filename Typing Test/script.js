'use strict';

let main = document.getElementById('main');
let textContainer = document.getElementById('text-container');
let resultsContainer = document.getElementById('results');
let wpmText = document.getElementById('wpm');
let accuracyText = document.getElementById('accuracy');
let timeText = document.getElementById('time');

//lists all keys we won't count as errors
const invalidKeys = 'F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 Escape Tab CapsLock Shift Control Alt Meta ArrowLeft ArrowRight ArrowDown ArrowUp Enter'.split(
    ' ',
);

const text = 'Hello there! I hope your day is going well. My name is Jia! Thanks for trying out my typing test. Fun fact: did you known the oldest known pet cat existed 9,500 years ago? It predates Egyptian art about cats by over 4,000 years!';

const textArr = text.split('');

//split every letter into a <span> element
//goes thru textArr and calls func, what func returns, map adds it to htmlArr
const htmlArr = textArr.map((item, index, array) => {
    if (item === ' ') {
        return `<span class="space" id="span${index}">${item}</span>`
    }
    return `<span class="char" id="span${index}">${item}</span>`
})

let errors = [] //stores any mistakes made while typing
textContainer.innerHTML = htmlArr.join('') //join together all span elements 
let firstTime = true //check if it's the user's first letter typed
let currentPos = 0 //track current position of the user in the textArr array
let backspaceNeeded = false //tells program that a backspace has been typed
let currentTime = 0 //stores time in seconds
let repeat //set an interval for the timer

//event listens on the whole page (called it from document)
//function takes in one argument (event variable)
document.addEventListener('keydown', event => {
    if (event.key === ' ') {
        event.preventDefault() //prevent normal behavior of the key
        //if we don't do this, the page scrolls automatically to the end
    }
    if (firstTime) {
        firstTime = false;
        repeat = setInterval(() => currentTime++, 1000) //function to call (arrow function)
    }
    // mde sure key is one of gernal key presses + that the key isn't in invalidKeys array
    if (event.location === 0 && !invalidKeys.includes(event.key)) {
        //give function access to key
        handleKey(event.key);
    }
});

function handleKey(key) {
    let span = document.getElementById(`span${currentPos}`).style;
    if (!backspaceNeeded) {
        if (key === textArr[currentPos]) {
            span.color = 'green';
            currentPos++;
        } else {
            if (textArr[currentPos] === ' ') {
                span.backgroundColor = 'red';
            } else {
                span.color = 'red';
            }
            backspaceNeeded = true;
            errors.push(textArr[currentPos]);
        }
    } else {
        if (event.key === 'Backspace') {
            if (textArr[currentPos] === ' ') {
                span.backgroundColor = 'transparent';
            } else {
                span.color = 'black';
            }
            backspaceNeeded = false;
        }
    }
    if (currentPos === textArr.length) {
        clearInterval(repeat);
        handleEnd();
    }
}

function handleEnd() {
    let wpm = Math.floor(textArr.length / 5 / (currentTime / 60));
    let accuracy = Math.floor(
        ((textArr.length - errors.length) / textArr.length) * 100,
    );
    let multiples = Math.floor(currentTime / 60);
    let seconds = currentTime - multiples * 60;
    wpmText.innerHTML = `${wpm} wpm`;
    accuracyText.innerHTML = `${accuracy}%`;
    timeText.innerHTML = `${multiples} m ${seconds} s`;
    main.style.display = 'none';
    resultsContainer.style.display = 'block';
}