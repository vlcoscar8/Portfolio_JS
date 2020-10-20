import { fetchPokemonList } from '../api/call-to-api-list';

const displayPokemonList = () => {
  const pokedex = document.getElementById('pokedex');
  const pokemon = fetchPokemonList();

  pokemon.then((pokemons) => {
    const pokemonHTMLString = pokemons.map((pokemon) =>
      `<li id="${pokemon.id}" class="flex-item">
        <img class="flex-item-image" src="${pokemon.image}"/>
        <h2 class="flex-item-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="flex-item-subtitle">Type: ${pokemon.type}</p>
      </li>`
    ).join("");
    pokedex.innerHTML = pokemonHTMLString;
  });
};

export { displayPokemonList };
