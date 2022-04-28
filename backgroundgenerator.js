var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
	css.textContent = body.style.background + ";";
}

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

function moveCommand(direction) {
	var whatHappens;
	switch(direction){
		case "forward":
		whatHappens = "You encounter a monster";
		break;
		case "back":
		whatHappens = "You arrived home";
		break;
		case "right":
		whatHappens = "You found a river";
		break;
		case "left":
		whatHappens = "You run into a troll";
		break;
		default:
		whatHappens = "Please enter a valid direct";
	}
	return whatHappens;
}