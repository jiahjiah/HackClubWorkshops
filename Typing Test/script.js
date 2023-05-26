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
)
const text = 'Hello There! I hope your day is going well. My name is Jia! Thanks for trying out my typing test. Fun fact: did you known the oldest known pet cat existed 9,500 years ago? It predates Egyptian art about cats by over 4,000 years!'
const textArr = text.split(' ')
//split every letter into a <span> element
//goes thru textArr and calls func, what func returns, map adds it to htmlArr
const htmlArr = textArr.map((item, index, array) => {
    if (item === ' ') {
        return `<span class="space" id="span${index}">${item}</span>`
    }
    return `<span class="char" id="span${index}">${item}</span>`
})
let errors = []
textContainer.innerHTML = htmlArr.join('')
let firstTime = true
let currentPos = 0
let backspaceNeeded = false
let currentTime = 0
let repeat
