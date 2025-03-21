let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

window.increment = function() {
  count += 1;
  countEl.textContent = count;
};

window.save = function() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
};