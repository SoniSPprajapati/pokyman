// alert("Hi");
const inputEl = document.querySelector("input");
console.log(inputEl);
// inputEl.focus();
document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    event.preventDefault();
    inputEl.focus();
  }
});
