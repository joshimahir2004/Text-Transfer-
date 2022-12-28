let InputData = document.getElementById("form-input");
let Box = document.getElementById("display-input");
let new_data = (InputData.value.style.backgroundColor = "red");
let myfun = () => {
  let new_data = InputData.value;
  localStorage.setItem("data", new_data);

  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }

  let old_data = JSON.parse(localStorage.getItem("data"));
  old_data.push(new_data);

  localStorage.setItem("data", JSON.stringify(old_data));

};

function show() {
  if (localStorage.getItem("data") != null) {
    Box.innerHTML = JSON.parse(localStorage.getItem("data"));
  }
}