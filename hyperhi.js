const cursor = document.querySelector("div.cursor");
const canvasIn = document.querySelector("canvas.in")
const canvasOut = document.querySelector("canvas.out")
let isMouseDown = false;

// when I hold mouse down, make cursor bigger
const growCursor = function() {
    cursor.classList.add("is-down");
}

const moveCursor = function (x, y) {
cursor.style.left = x + "px"
cursor.style.top = y + "px"
}

//set up a canvas
const setUpCanvas = function (canvas){
    const bodyTag = document.querySelector("body")
    const w = window.innerWidth
    const h = window.innerHeight
    const dpi = window.devicePixelRatio
    //this is how you can input how to detect the type of screen we are on
    canvas.width = w * dpi
    canvas.height = h * dpi
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"
    //we're going to set up the context to be whatever mode of canvas we are working in. 3d, 2d, etc?  this is where we sor that out.
    const context = canvas.getContext("2d")
    context.scale(dpi, dpi);

if (canvas.classList.contains("in")) {
    context.fillStyle = "#000000";
    context.strokeStyle = "#ffffff"
}
else {
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#000000"
}
    context.lineWidth = 60
    context.lineCap = "round"
    context.lineJoin = "round"
    context.shadowBlur = 30
    context.shadowColor = context.strokeStyle

    context.rect(0, 0, w, h)
    context.fill();
    
  }

  const moveDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")
    if (isMouseDown){
        context.lineTo(x, y);
        context.stroke();
    }
  }

  const startDraw =  function(canvas, x, y) {
      const context = canvas.getContext("2d")
      context.moveTo(x, y)
      context.beginPath();
  }
  //let's draw based on three things, canvas, x, and y
// when I let go of click i make cursor smaller

const shrinkCursor = function () {
    cursor.classList.remove("is-down")
}

setUpCanvas(canvasIn)
setUpCanvas(canvasOut)

document.addEventListener("mousedown", function(event) {
    isMouseDown = true;
    growCursor();
    startDraw(canvasIn, event.pageX, event.pageY);
    startDraw(canvasOut, event.pageX, event.pageY);
  
})

document.addEventListener("mouseup", function() {
    isMouseDown = false; 
    shrinkCursor()
    
})

document.addEventListener("mousemove", function (event) {
    console.log(event)
    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasIn, event.pageX, event.pageY)
    moveDraw(canvasOut, event.pageX, event.pageY)

})

// if window is resized page refreshes to contain the image.

window.addEventListener("resize", function (){
    setUpCanvas(canvasIn)
    setUpCanvas(canvasOut)
})

document.addEventListener("touchstart", function (event) {
    isMouseDown = true
    growCursor()
    startDraw(canvasIn, event.pageX, event.pageY)
    startDraw(canvasOut, event.pageX, event.pageY)
  })
  
  document.addEventListener("touchend", function () {
    isMouseDown = false
    shrinkCursor()
  })
  
  document.addEventListener("touchmove", function (event) {
    console.log(event)
    // event.pageX -&gt; where we are on the page across
    // event.pageY -&gt; where we are on the page downwards
    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasIn, event.pageX, event.pageY)
    moveDraw(canvasOut, event.pageX, event.pageY)
  })
