let h1 = document.createElement("h1");
h1.innerText = "Type into the input to see this text change!";
document.body.appendChild(h1);

let formInput = document.createElement("input");
formInput.setAttribute("type", "text");
document.body.appendChild(formInput);

formInput.addEventListener("change", function () {
  h1.innerText = formInput.value;
});

let headerOne = document.createElement("h2");
headerOne.textContent = "Header One";
const arr = ["Example Domain", "First Click", "Second Click", "Third Click"];

function handleClicks() {
  switch (headerOne.innerText) {
    case arr[0]:
      headerOne.innerText = arr[1];
      break;
    case arr[1]:
      headerOne.innerText = arr[2];
      break;
    case arr[2]:
      headerOne.innerText = arr[3];
      break;
    default:
      headerOne.innerText = arr[0];
      break;
  }
}
headerOne.addEventListener("click", handleClicks());
