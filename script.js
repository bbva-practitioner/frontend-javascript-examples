function handlePromptButtonClick() {
  const userInput = prompt("Escribir un mensaje");
  document.getElementById("button-input").textContent = userInput;
}

function handleAddBoxButtonClick() {
  const boxes = document.getElementsByClassName("box");
  const box = boxes[0].cloneNode();
  box.textContent = boxes.length + 1;

  const boxesContainer = document.getElementsByClassName("boxes-container")[0];
  const notABox = boxesContainer.getElementsByClassName("not-a-box")[0];

  boxesContainer.insertBefore(box, notABox);
}

function handleFormSubmit(event) {
  event.preventDefault();
  alert("Enviando");
}

function handleBoxClick(event) {
  if (event.target.className === "box") {
    alert("Box clicked");
  }
}

document
  .getElementById("form-section")
  .getElementsByTagName("form")[0]
  .addEventListener("submit", handleFormSubmit);

document
  .getElementsByClassName("boxes-container")[0]
  .addEventListener("click", handleBoxClick);
