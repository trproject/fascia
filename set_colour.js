var colors = ["#6ba2d1", "#675c8c", "#f4bf79", "#9da5af", "#737f67"];
var currentIndex = 0;

setInterval(function() {
	document.body.style.cssText = "background-color: " + colors[currentIndex];
	currentIndex++;
	if (currentIndex == undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
}, 21000);
