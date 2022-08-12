var step = document.querySelectorAll('.step');
var trackTop = document.querySelector('.track-top');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var stepCircle = document.querySelectorAll('.step-circle');

var initialnum = 0;

function stepCircleShow(num) {

	for(var y of stepCircle) {
		y.style.visibility = 'hidden';
	}
	stepCircle[num].style.visibility = 'visible';

	if(num >= 1) {
		prev.style.backgroundColor = 'var(--clr-blue)';
		prev.style.pointerEvents = 'auto';
	}else{
		prev.style.backgroundColor = 'var(--clr-grey2)';
		prev.style.pointerEvents = 'none';
	}

	if(num == stepCircle.length-1) {
		next.style.backgroundColor = 'var(--clr-grey2)';
		next.style.pointerEvents = 'none';
	}else{
		next.style.backgroundColor = 'var(--clr-blue)';
		next.style.pointerEvents = 'auto';
	}
}

stepCircleShow(initialnum);

var a = 0;

next.addEventListener('click', function() {
	var x = 1;
	initialnum += x;
	a += 33.33;
	trackTop.style.width = a + '%';
	stepCircleShow(initialnum);
	for(let i=0; i<=initialnum; i++) {
		stepCircle[i].style.visibility = 'visible';
	}
})

prev.addEventListener('click', function() {
	var x = (-1);
	initialnum += x;
	a -= 33.33;
	trackTop.style.width = a + '%';
	stepCircleShow(initialnum);
	for(let i=0; i<=initialnum; i++) {
		stepCircle[i].style.visibility = 'visible';
	}
})