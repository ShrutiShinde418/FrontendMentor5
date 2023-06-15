let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let email1 = id("email"),
  email2 = id("email1"),
  error = classes("error");

const regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");

let form1 = document.querySelector("#form1");
let form2 = document.querySelector("#form2");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(email1, 0, "Please check your email");
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(email2, 1, "Please check your email");
});

let engine = (id, serial, message) => {
  console.log(id.value);
  if (regex.test(id.value.trim())) {
    id.style.border = "1px solid black";
    error[serial].innerHTML = "";
    error[serial].style.marginBottom = "0";
    if (id == email1) {
      id.style.marginBottom = "1.25rem";
    }
  } else {
    error[serial].innerHTML = message;
    error[serial].style.marginBottom = "0.25rem";
    id.style.border = "1px solid #dc2626";
    if (id == email1) {
      id.style.marginBottom = "0.25rem";
    }
  }
};
