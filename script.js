const fan = document.getElementById("fan");
const speedRange = document.getElementById("speedRange");
const speedValue = document.getElementById("speedValue");

// Update fan speed when slider changes
speedRange.addEventListener("input", () => {
  setSpeed(speedRange.value);
});

// Function to set fan speed
function setSpeed(speed) {
  speedValue.textContent = speed;

  if (speed == 0) {
    fan.style.animationDuration = "0s"; // stopped
  } else {
    // Higher speed → faster rotation
    fan.style.animationDuration = (6 / speed) + "s";
  }

  // Update slider position when using buttons
  speedRange.value = speed;
}
