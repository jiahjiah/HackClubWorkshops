Tone.start()
const synth = new Tone.Synth().toDestination()
var colour;  

document.onkeydown = function (e) {
  e = e || window.event
  var key = e.which || e.keyCode
  if (key === 83) {
    colour = "#FF0000"
    playNote('C')
  }
  if (key == 68) {
    colour = "#FF7F00"
    playNote('D')
  }
  if (key == 70) {
    colour = "#FFFF00"
    playNote('E')
  }
  if (key == 71) {
    colour = "#00FF00"
    playNote('F')
  }
  if (key == 72) {
    colour = "#0000FF"
    playNote('G')
  }
  if (key == 74) {
    colour = "#4B0082"
    playNote('A')
  }
  if (key == 75) {
    colour = "#9400D3"
    playNote('B')
  }
}

function playNote(note) {
  synth.triggerAttackRelease(`${note}4`, '8n')
  document.getElementById(note).style.background = colour

  setTimeout(() => {
    document.getElementById(note).style.background ='white'
  }, 200)
}