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
	linkInput.value = "";
});
const showElements = () => {
	linksArray.forEach((el) => {
		divResult.innerHTML = `<div class="originalLink">${el.original_link}</div> <div class="line"></div> <button type="button" class="btn"><span class="shortLink">${el.short_link}</span><span class="copy">Copy</span><span class="copied hide">Copied!</span></button>`;
	});
	const copied = document.querySelector(".copied");
	const copy = document.querySelector(".copy");
	copy.addEventListener("click", () => {
		copy.classList.add("hide");
		copied.classList.remove("hide");
	});
};
