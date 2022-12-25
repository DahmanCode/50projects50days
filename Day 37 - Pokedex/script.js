const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#F4E7DA',
  rock: '#D5D5D4',
  fairy: '#FCEAFF',
  poison: '#98D7A5',
  bug: '#F8D5A3',
  dragon: '#FC9D85',
  psychic: '#EAEDA1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
  for (let i = 1; i < pokemon_count; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokemonCard(data)
  console.log(data)
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')
  
  const id = pokemon.id.toString().padStart(3, '0')
  
  const poke_types = pokemon.types.map(type => type.type.name)
  const type = main_types.find(type => poke_types.indexOf(type) > -1)
  const color = colors[type]

  pokemonEl.style.backgroundColor = color

  const pokemonInnerHTML = `
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${pokemon.name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `

  pokemonEl.innerHTML = pokemonInnerHTML

  poke_container.appendChild(pokemonEl)
}

fetchPokemons()