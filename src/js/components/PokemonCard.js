// This creates a card
export function PokemonCard(image, name, description, link) {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = ` 
      <div class="card">
        <img src="${image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
        <a class="btn btn-warning" href="${link}" target="_blank">Read More</a>

         
        </div>
      </div>`;
  return div;
}
