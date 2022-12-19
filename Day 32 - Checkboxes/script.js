const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClicksdOne) {
  if(good.checked && cheap.checked && fast.checked) {
    if(good === theClicksdOne) {
      fast.checked = false
    }

    if(cheap === theClicksdOne) {
      good.checked = false
    }

    if(fast === theClicksdOne) {
      cheap.checked = false
    }
  }
}