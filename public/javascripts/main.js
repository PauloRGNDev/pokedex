function capitalizeFirstLetter(text) {
    if (!text) return ''; // Verifica se o texto não está vazio
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
console.log('hello')

let response;
async function getPokemon(pokemonName){
    console.log(response)
    try{
        pokemonName = pokemonName.toLowerCase();
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        data = response.data;
        console.log('aff')
        return data;
        console.log('aff')
        console.log(response)
    } catch(err){
        console.log('hello')
    }
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