let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let calculate = document.getElementById("calculate");

function volume_sphere() {
  let r = parseFloat(radius.value); // Convert input to number
  let vol = (4 / 3) * Math.PI * Math.pow(r, 3); // Correct exponentiation
  volume.value = vol.toFixed(2); // Set the value of input field with 2 decimal places
}

calculate.addEventListener("click", volume_sphere);
