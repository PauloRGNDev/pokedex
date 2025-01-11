function capitalizeFirstLetter(text) {
    if (!text) return ''; // Verifica se o texto não está vazio
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

async function getPokemon(pokemonName){
    pokemonName = pokemonName.toLowerCase();
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    console.log(response)
    if(response == undefined){
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
    }
    dt = response.data;
    return dt;
}

function fillPokemonInfos(pokemon){
    const pokeName = document.querySelector('.pokedex .name');
    const pokeNumber = document.querySelector('.pokedex .number');
    const pokeImg = document.querySelector('img.pokemon');
    pokeName.textContent = capitalizeFirstLetter(pokemon.species.name);
    pokeNumber.textContent = `Nº ${pokemon.id}`;
    pokeImg.setAttribute('src', `${pokemon.sprites.front_default}`)
}

const searchField = document.querySelector('input')
searchField.addEventListener('change', async (e) => {
    try{
        const pokemon = await getPokemon(e.target.value);
        fillPokemonInfos(pokemon);
    } catch(err){
        const pokeName = document.querySelector('.pokedex .name');
        const pokeNumber = document.querySelector('.pokedex .number');
        const pokeImg = document.querySelector('img.pokemon');

        //set values
        pokeNumber.textContent= "";
        pokeImg.setAttribute('src', ``);
        pokeName.textContent = e.target.value == '' ?"" : "POKEMON INVÁLIDO, DIGITE UM NOME VÁLIDO";
    }
})