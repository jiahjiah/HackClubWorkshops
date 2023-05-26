const text = document.querySelector('.text') 
const secretDiv = document.querySelector('.secret-div')

const keys = [] //keys pressed by user
const secretCode = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'] //konami code

//more about library: https://github.com/Agezao/confetti-js/
//target: which canvas it will appear
//size: size of confetti particles
//max: number props to be rendered
const confettiSettings = { target: 'my-canvas', size: 1.4, max: 150 }
const confetti = new ConfettiGenerator(confettiSettings)


function keysDetector(e) {
    keys.push(e.key)
    console.log(keys)

    if (keys.length > secretCode.length) {
        keys.shift() //remove first element of array
    }

    if (JSON.stringify(keys) === JSON.stringify(secretCode)) { //stringify will convert JS object to JSON string
        secretDiv.style.display = 'block'
        secretDiv.classList.add('secret');
        confetti.render()

        //documentation for anime: https://animejs.com/documentation/
    }
}

anime({
    targets: 'body',
    rotate: '1turn',
    backgroundColor: '#fcba03',
    duration: 2000,
})

window.addEventListener('keyup', keysDetector)
