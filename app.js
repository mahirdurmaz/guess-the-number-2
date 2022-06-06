const input = document.querySelector("input");
const button = document.querySelector("button");
const explain = document.getElementById("explain");
let numOfAttempts = 0;
let randomNum = Math.floor(Math.random() * 50) + 1;

button.addEventListener("click", () => {
  if (input.value == randomNum) {
    explain.textContent = "Congrats! You found the number.";
    explain.style.backgroundColor = "rgb(18, 230, 35)";
    explain.style.color = "black";
    document.body.style.backgroundColor = "rgb(18, 230, 35)";
    numOfAttempts--;
  } else if (input.value < randomNum) {
    if ((explain.style.animation = "shake .8s")) {
      explain.style.animation = "none";
    }
    explain.textContent = "Go higher.";
    explain.style.backgroundColor = "rgb(223, 24, 24)";
    explain.style.color = "black";
    document.body.style.backgroundColor = "rgb(223, 24, 24)";
    explain.style.animation = "shake .8s";
  } else {
    explain.textContent = "Go lower.";
    explain.style.backgroundColor = "rgb(255, 230, 0)";
    explain.style.color = "black";
    explain.style.animation = "shake .8s";
    document.body.style.backgroundColor = "rgb(255, 230, 0)";
  }
  numOfAttempts++;
  document.getElementById("num").textContent = numOfAttempts;
});
