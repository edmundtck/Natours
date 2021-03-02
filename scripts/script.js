const menu = document.querySelector('.menu');

const links = document.querySelectorAll('.nav__link');

menu.addEventListener('click', function() {
	this.classList.toggle('active');
});

links.forEach((link) => {
	link.addEventListener('click', function() {
		if (menu.classList.contains('active')) {
			menu.classList.toggle('active');
		}
	});
});
