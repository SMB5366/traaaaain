let start = Date.now()

let timer = setInterval(function() {
	let timePassed = Date.now() - start;
	if (timePassed >= 5000) {
		clearInterval(timer);
		return;
	}
	draw(timePassed);
}, 20);


function draw(timePassed) {
	train.style.left = timePassed / 10 + 'px';
	train.style.top = timePassed / 10 + 'px';
} 