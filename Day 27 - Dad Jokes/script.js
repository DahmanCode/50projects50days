const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

getJokes()

jokeBtn.addEventListener('click', getJokes)

function getJokes() {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  fetch('https://icanhazdadjoke.com/', config)
  .then(res => res.json())
  .then(data => 
    joke.innerText = data.joke
  );
}