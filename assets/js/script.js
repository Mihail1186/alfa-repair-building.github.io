
window.addEventListener('DOMContentLoaded', () => {


	// // alert("hello, gulp");

	const body = document.body;
	const menuBtn = document.querySelector('.header__burger');
	const menuBody = document.querySelector('.header__nav');


	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		body.classList.toggle('_lock');
	});




	// const body = document.querySelector('body');
	// const burgerBtn = document.querySelector('.icon__menu');
	// const menuBody = document.querySelector('.main-navigation');
	// const toTop = document.getElementById('toTop');
	// const headerFixed = document.getElementById('headerFixed');
	// const animItems = document.querySelectorAll('._anim-items');





	/* ==========================================
	если зашли на устройтся с поддержкой тач-события, даем определенные классы навигации
	================================================ */
	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	}

	if (isMobile.any()) {
		body.classList.add('touch');
		let arrow = document.querySelectorAll('.arrow');
		for (i = 0; i < arrow.length; i++) {
			let thisLink = arrow[i].previousElementSibling;
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];

			thisLink.classList.add('parent');
			arrow[i].addEventListener('click', function () {
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			});
		}
	} else {
		body.classList.add('mouse');
	}



});
