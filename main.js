const buttonHamburger = document.querySelector(".hamburger");
const box = document.querySelector(".box");
buttonHamburger.addEventListener("click", () => {
	box.classList.toggle("hidden");
});
