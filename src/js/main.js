import { shuffle } from "fast-shuffle";
import Fuse from "fuse.js";

import data from "./data.json";
import { PokemonCard } from "./components/PokemonCard";

// DOM TARGETING
const inputEl = document.querySelector("input");
const cardsRowEl = document.querySelector("#cards-row");

function renderPokemon(list) {
  console.log(list);
  cardsRowEl.innerHTML = "";

  for (let pokeObj of list) {
    const pokemon = PokemonCard(
      pokeObj.image,
      pokeObj.name,
      pokeObj.description,
      pokeObj.link
    );
    cardsRowEl.appendChild(pokemon);
  }
}

function renderFilteredPokemon(term) {
  const fuse = new Fuse(data, {
    keys: ["name"],
  });

  const filtered = fuse.search(term).map((obj) => obj.item);

  renderPokemon(filtered);
}

// Input element on change
inputEl.addEventListener("input", (event) => {
  const currValue = event.target.value.toLowerCase().trim();
  renderFilteredPokemon(currValue);
});

// Focus input on slash keypress
document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    inputEl.focus();
  }
});

renderPokemon(shuffle(data));
