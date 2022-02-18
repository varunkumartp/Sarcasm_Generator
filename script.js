const inputText = document.getElementById("inputBox");
const outputText = document.getElementById("outputBox");
const copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", (e) => {
  outputText.select();
  navigator.clipboard.writeText(outputText.value);
});

inputText.addEventListener("input", (e) => {
  const value = String(e.target.value).toLowerCase();
  let count = 0;
  let sarcasm = "";
  for (letter of value) {
    if (count++ % 2 !== 0 && letter !== " ") {
      sarcasm += letter.toUpperCase();
    } else {
      sarcasm += letter;
      if (letter === " ") count--;
    }
  }
  outputText.value = sarcasm;
});
