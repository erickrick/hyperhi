const cursor = document.querySelector("div.cursor");
const canvasTag = document.querySelector("canvas.in")

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
    context.fillStyle = "red";
    
  }

  const startDraw =  function(canvas) {
      const context = canvas.getContext("2d")
      context.fillStyle = "yellow"
  }
  //let's draw based on three things, canvas, x, and y

  const moveDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")
    context.rect(x - 20, y - 20, 40, 40)
    context.fill()

  }

// when I let go of click i make cursor smaller

const shrinkCursor = function () {
    cursor.classList.remove("is-down")
}

document.addEventListener("mousedown", function() {
    growCursor();
    startDraw(canvasTag);
    
})

document.addEventListener("mouseup", function() {
    shrinkCursor()
})

document.addEventListener("mousemove", function (event) {
    console.log(event)
    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasTag, event.pageX, event.pageY)

})

setUpCanvas(canvasTag)