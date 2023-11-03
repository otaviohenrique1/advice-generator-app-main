const slipId = document.getElementById("slip_id");
const slip_advice = document.getElementById("slip_advice");

async function logMovies() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const adviceslip = await response.json();
  const item = adviceslip.slip;
  slipId.innerHTML = item.id;
  slip_advice.innerHTML = item.advice;
}

logMovies();