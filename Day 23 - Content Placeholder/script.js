const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated = document.querySelectorAll('.animated-bg')
const animated2 = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 4000)

function getData() {
  let img = document.createElement('img')
  img.src= 'images/img.jpg'
  header.append(img)


  title.innerText = 'Lorem ipsum dolor sit amet.'
  excerpt.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, suscipit?'

  // profile_img.innerHTML = '<img src="images/face.jpg" alt="">'
  let img2 = document.createElement('img')
  img2.src= 'images/face.jpg'
  profile_img.append(img2)
  name.innerText = 'Elaammari Dahman'
  date.innerText = 'Dec 10, 2022'

  animated.forEach((bg) => bg.classList.remove('animated-bg'))
  animated2.forEach((bg2) => bg2.classList.remove('animated-bg-text'))

}