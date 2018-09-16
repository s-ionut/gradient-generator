/* variables declaration */
const body = document.getElementById("gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const css = document.querySelector("h3");
const button = document.getElementById("button");

/* update colors when opening for the first time the website */
const updateColor = (color1, color2) =>{
	body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
	css.textContent = body.style.background;
}

/* get a random color using Hex */
const randomHexColor = () => Math.floor(Math.random()*16777215).toString(16);

/* update the colors once "Random" button's been pressed */
const randomColors = () =>{
	color1.value = "#" + randomHexColor();
	color2.value = "#" + randomHexColor();
	updateColor(color1.value, color2.value);
}

/* update color when it has been choosen using the color picker */
const getGradient = () => updateColor(color1.value, color2.value);

updateColor(color1.value, color2.value);
color1.addEventListener("input", getGradient);
color2.addEventListener("input", getGradient);
button.addEventListener("click", randomColors);
