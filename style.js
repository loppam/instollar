const burger = document.getElementById("demo");
const nav = document.getElementById("non");


burger.addEventListener("click", myFunction);

function myFunction() {
  burger.classList.toggle("responsive");
  nav.classList.toggle('display');
}
