const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

function toRight() {
  activeSlide++

  if(activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
}

function toLeft() {
  activeSlide--

  if(activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
}

rightBtn.addEventListener('click', () => {
  toRight()
})

body.addEventListener('keydown', e => {
  
  if(e.keyCode === 39)
    toRight()
})

leftBtn.addEventListener('click', () => {
  toLeft()
})

body.addEventListener('keydown', e => {
  
  if(e.keyCode === 37)
    toLeft()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active')
  })
  slides[activeSlide].classList.add('active')
}