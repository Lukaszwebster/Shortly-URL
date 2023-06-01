const buttonHamburger = document.querySelector(".hamburger");
const box = document.querySelector(".box");
const linkInput = document.querySelector(".linkInput");
const shortBtn = document.querySelector(".shortenButton");
const divResult = document.getElementById("result");
const linksArray = [];
buttonHamburger.addEventListener("click", () => {
	box.classList.toggle("hidden");
});
async function fetchShorten(link) {
	const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
		method: "POST",
	});
	const jsonData = await response.json();
	console.log(jsonData);

	const {
		result: { short_link, original_link },
	} = jsonData;
	linksArray.push({ short_link, original_link });
}
shortBtn.addEventListener("click", async () => {
	console.log(linkInput.value);
	await fetchShorten(linkInput.value);
	showElements();
});
const showElements = () => {
	linksArray.forEach((el) => {
		divResult.innerHTML = `<div>${el.original_link}, ${el.short_link}</div><br>`;
	});
};
