//illustration is top level class that handles canvas element, 
//holding all shapes in scene + displays it


const ws = new Zdog.Illustration({
    element: '.smile', //use to match render with canvas tag
    resize: 'fullscreen', //modify size in which model will be rendered
    dragRotate: true
})
  

let dome = new Zdog.Hemisphere({
    addTo: ws,
    diameter: 120,
    // fill enabled by default
    // disable stroke for crisp edge
    stroke: false,
    color: '#C25',
    backface: '#EA0',
});

new Zdog.Hemisphere({
    addTo: ws,
    diameter: 20,
    // fill enabled by default
    // disable stroke for crisp edge
    stroke: false,
    color: '#000000',
    backface: "#000000",
    translate: { x: 20, z: 0 },
    rotate: { z: -Zdog.TAU/8 },
})

new Zdog.Hemisphere({
    addTo: ws,
    diameter: 20,
    // fill enabled by default
    // disable stroke for crisp edge
    stroke: false,
    color: '#000000',
    backface: "#000000",
    translate: { x: -20, z: 0 },
    rotate: { z: -Zdog.TAU/8 },
})

new Zdog.Shape({
    addTo: ws,
    path: [
      { x: -40, y: 10 },   // start
      { arc: [ // start next arc from last end point
        { x:  0, y:  60 }, // corner
        { x:  40, y:  10 }, // end point
      ]},
    ],
    closed: false,
    stroke: 10,
    color: '#636'
  });
  

  

function animateModel() {
    ws.rotate.y += 0.01
    ws.updateRenderGraph()
    requestAnimationFrame(animateModel)
}
  
  animateModel()
  