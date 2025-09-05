const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const inputValue = inputBox.value.trim();
  if (inputBox.value === "") {
    document.querySelector(".error").style.display = "block";
    return;
  }
  if (
    inputValue.toLowerCase() === "aminul islam" ||
    inputValue.toLowerCase() === "Aminul islam"
  ) {
    window.open(
      "https://www.facebook.com/profile.php?id=100093614353745",
      "_blank"
    );
    inputBox.value = "";
    return; // stop function so nothing else is added
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    document.querySelector(".error").style.display = "none";
  }

  inputBox.value = "";

  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
