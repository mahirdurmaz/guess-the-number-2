const input = document.getElementById("input");
const guessBtn = document.getElementById("guess");
const resetBtn = document.getElementById("reset");
const explain = document.getElementById("explain");
const lockInput = document.createAttribute("readonly");
lockInput.value = "readonly";
let numOfAttempts = 0;
let randomNum = Math.floor(Math.random() * 49) + 1;

guessBtn.addEventListener("click", () => {
  if (input.value == randomNum) {
    explain.textContent = "Congrats! You found the number.";
    explain.style.backgroundColor = "rgb(18, 230, 35)";
    explain.style.color = "white";
    explain.style.animation = "shake .8s";
    document.body.style.backgroundColor = "rgb(18, 230, 35)";
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
    resetBtn.style.animation = "size .8s";
    input.setAttributeNode(lockInput);
  } else if (input.value < randomNum) {
    explain.textContent = "Go higher.";
    explain.style.backgroundColor = "rgb(223, 24, 24)";
    explain.style.color = "white";
    document.body.style.backgroundColor = "rgb(223, 24, 24)";
    explain.style.animation = "shake .8s";
  } else {
    explain.textContent = "Go lower.";
    explain.style.backgroundColor = "rgb(255, 230, 0)";
    explain.style.color = "white";
    explain.style.animation = "shake .8s";
    document.body.style.backgroundColor = "rgb(255, 230, 0)";
  }
  numOfAttempts++;
  document.getElementById("num").textContent = numOfAttempts;
});

resetBtn.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * 49) + 1;
  numOfAttempts = 0;
  guessBtn.style.display = "inline";
  guessBtn.style.animation = "size .8s";
  resetBtn.style.display = "none";
  explain.style.color = "rgb(124, 124, 124)";
  explain.textContent = "Guess a number between 1-50";
  explain.style.backgroundColor = "white";
  document.body.style.backgroundColor = "white";
  document.getElementById("num").textContent = numOfAttempts;
  input.removeAttributeNode(lockInput);
  input.value = "";
});
