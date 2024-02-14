const circle = document.getElementById("percentage-circle");
const value = document.getElementById("percentage-number");
const newClients = document.getElementById("new-clients");
const allClients = document.getElementById("all-clients");
const button = document.querySelector(".calculator__chart__button");
const error = document.querySelector(".calculator__error");

newClients.addEventListener("input", drawProgress);
allClients.addEventListener("input", drawProgress);
button.addEventListener("click", drawProgress);

let interval;
let errorInterval;

const circumference = circle.getTotalLength() + 3;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function drawProgress(e) {
  resetAnimation();

  if (validateInputs()) {
    let i = 0;
    // Calculate the percentage
    const percentage = ((newClients.value * 100) / allClients.value).toFixed(0);
    interval = setInterval(() => {
      circle.style.strokeDashoffset = circumference - (i / 100) * circumference;
      value.innerHTML = i + "%";
      i++;
      if (i > percentage) {
        clearInterval(interval);
      }
    }, 50);
  }
}

function resetAnimation() {
  // Clear intervals
  clearInterval(interval);
  clearInterval(errorInterval);

  // Clear circle
  circle.style.strokeDashoffset = circumference;

  // Clear error
  error.innerHTML = null;
  error.style.display = "none";

  // Set Percentage
  value.innerHTML = "0%";
}

function validateInputs() {
  let flag = true;
  // New clients should not be empty and be possitive number
  if (+newClients.value < 0) {
    showError("Incorrect new clients value");
    flag = false;
  }
  // All clients should not be empty and be possitive number
  else if (!allClients.value || +allClients.value < 1) {
    showError("Incorrect all clients value");
    flag = false;
  }
  // All clients should be bigger or equal to new clients
  else if (+newClients.value > +allClients.value) {
    showError("New clients should be less than all clients");
    flag = false;
  }

  return flag;
}

function showError(message) {
  if (!error.innerHTML) {
    error.style.display = "block";
    error.innerHTML = message;
    errorInterval = setInterval(() => {
      error.innerHTML = null;
      error.style.display = "none";
      clearInterval(errorInterval);
    }, 3000);
  }
}
