let mySlide = 1;
showDivs(mySlide);

function plusDivs(n) {
  showDivs((mySlide += n));
}

function showDivs(n) {
  let slide = document.getElementsByClassName("mySlides");
  if (n > slide.length) {
    mySlide = 1;
  }
  if (n < 1) {
    mySlide = slide.length;
  }
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[mySlide - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 3000);

const buttonleft = document.getElementById("buttonleft");
buttonleft.addEventListener("click", () => {
  plusDivs(-1);
});

const buttonright = document.getElementById("buttonright");
buttonright.addEventListener("click", () => {
  plusDivs(1);
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.body.addEventListener("click", (event) => {
  if (!hamburgerMenu.contains(event.target) && !nav.contains(event.target)) {
    nav.classList.remove("open");
  }
});

function validateForm() {
  const nameInput = document.getElementById("name");
  const nameValue = nameInput.value.trim();
  const selectElement = document.getElementById("travel-select");
  const selectedValue = selectElement.value;
  const errorMessageElement = document.getElementById("error-msg");

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();

  if (nameValue === "") {
    errorMessageElement.innerHTML = "Nama tidak boleh kosong.";
    return false;
  }

  if (selectedValue === "defaultoption") {
    errorMessageElement.innerHTML = "Anda belum memilih option";
    return false;
  }

  const stringemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!stringemail.test(emailValue)) {
    errorMessageElement.innerHTML = "Masukkan alamat email yang valid.";
    return false;
  }

  if (nameValue.length < 3) {
    errorMessageElement.innerHTML =
      "Nama harus terdiri dari minimal 3 karakter.";
    return false;
  }
  errorMessageElement.innerHTML = "";
  return true;
}
