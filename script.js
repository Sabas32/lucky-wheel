const spinButton = document.querySelector("#spinButton");
const outerCir = document.querySelector("#outerCir");
const innerCir = document.querySelector("#innerCir");

var value1 = Math.ceil(Math.random() * 3600);
var value2 = Math.ceil(Math.random() * -3600);

function handleSpin() {
  outerCir.style.transform = `rotate(${value1}deg)`;
  innerCir.style.transform = `rotate(${value2}deg)`;
  value1 = value1 + Math.ceil(Math.random() * 3600);
  value2 = value2 + Math.ceil(Math.random() * -3600);
}

spinButton.addEventListener("click", handleSpin);
