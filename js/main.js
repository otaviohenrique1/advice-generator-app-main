const slipId = document.getElementById("slip_id");
const slip_advice = document.getElementById("slip_advice");
const slip_dice = document.getElementById("slip_dice");

let id = "";
let advice = "";

async function logMovies() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const adviceslip = await response.json();
  const item = adviceslip.slip;

  id = item.id
  advice = item.advice

  slipId.innerHTML = id;
  slip_advice.innerHTML = advice;
}

if (id === "" && advice === "") {
  slipId.innerHTML = "***";
  slip_advice.innerHTML = "***************";
}

slip_dice.addEventListener("click", () => {
  logMovies();
})

// const teste = { slip: { id: 222, advice: "Respect other people's opinions, even when they differ from your own." } }

// slipId.innerHTML = teste.slip.id;
// slip_advice.innerHTML = teste.slip.advice;
