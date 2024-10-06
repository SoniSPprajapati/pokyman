import data from "./data.json";
// Dom Targeting
const cardRow = document.querySelector("#card-row");
const inputEl = document.querySelector("input");

for (let pokomonobj of data) {
  const div = document.createElement("div");
  div.classList.add("col");

  div.innerHTML = `
          <div class="card">
            <img
              src="${pokomonobj.image}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${pokomonobj.name}</h5>
              <p class="card-text">
                ${pokomonobj.description}
              </p>
            </div>
          </div>
        
      </div>`;
  cardRow.appendChild(div);
}

console.log(cardRow);

// fetch the name
for (let pokomonobj of data) {
  console.log(pokomonobj.name);
}

console.log(inputEl);

// inputEl.focus();
document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    event.preventDefault();
    inputEl.focus();
  }
});
