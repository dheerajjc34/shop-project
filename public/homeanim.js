window.onload = function(){
	var letters = document.querySelectorAll('.letter');
	var contador = 0;

	var interval = setInterval(function(){
		letters[contador].classList.add("anim");
		contador++;

		if (contador == letters.length) {
			clearInterval(interval);
		}

	},250);
}

var mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove',cursor);

function cursor(e){
	mouseCursor.style.top = e.pageY + "px";
	mouseCursor.style.left = e.pageX + "px";

}
