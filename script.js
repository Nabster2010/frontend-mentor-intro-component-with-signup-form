const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

const isEmpty = ({ value }) => {
  return value?.trim() === "";
};
const validateEmail = ({ value }) => {
  if (isEmpty(value)) return false;
  return !String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const varToString = (nameObject) => {
  for (let varName in nameObject) {
    return varName;
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  btn.classList.add("opacity-60");
  if (
    !isEmpty(fname) &&
    !isEmpty(lname) &&
    !validateEmail(email) &&
    !isEmpty(password)
  ) {
    alert("success");
    [fname, lname, email, password].forEach((el) => (el.value = ""));
    return;
  } else {
    if (isEmpty(fname)) {
      [...document.getElementsByClassName("err-fname")].forEach((element) => {
        element.classList.remove("hidden");
      });
      fname.classList.add("border-red");
    }
    if (isEmpty(lname)) {
      [...document.getElementsByClassName("err-lname")].forEach((element) => {
        element.classList.remove("hidden");
      });
      lname.classList.add("border-red");
    }
    if (validateEmail(email)) {
      [...document.getElementsByClassName("err-email")].forEach((element) => {
        element.classList.remove("hidden");
      });
      email.classList.add("border-red");
    }
    if (isEmpty(password)) {
      [...document.getElementsByClassName("err-password")].forEach(
        (element) => {
          element.classList.remove("hidden");
        }
      );
      password.classList.add("border-red");
    }
    return;
  }
});
