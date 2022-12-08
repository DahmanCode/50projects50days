const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const toolbox = document.getElementById('toolbox')
const size = document.getElementById('size')

let isPressed = false
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY

})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined

})

canvas.addEventListener('mousemove', (e) => {
  
  if(isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }

})

toolbox.addEventListener('click', e => {
  if(e.target.id === 'clear') {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
})

toolbox.addEventListener('change', e => {
  if(e.target.id === 'color') {
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
  }
})

let width = i = 20

toolbox.addEventListener('click', e => {
  if(e.target.id === 'decrease' && 5 < i) {
    i -= 5
    width = size.innerText = i
  } else if(e.target.id === 'increase' && i < 40) {
    i += 5
    width = size.innerText = i
  }
})

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, width, 0, Math.PI * 2)
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineWidth = width * 2
  ctx.stroke()
}

drawCircle()
drawLine()