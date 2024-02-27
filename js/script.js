

/* Slider */
var swiper = new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
	},
});

/* Work-Tabs */
document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.work__btn').forEach(function (e) {
		e.addEventListener('click', function (e) {
			const tab = e.currentTarget.dataset.path;
			document.querySelectorAll('.tab-content').forEach(function (e) {
				e.classList.remove('tab-content_activ');
			});
			document.querySelector(`[data-target='${tab}']`).classList.add('tab-content_activ');
		});

		e.addEventListener('click', function (e) {
			const tabDefault = e.currentTarget.dataset.default;
			document.querySelectorAll('.work__btn').forEach(function (e) {
				e.classList.remove('work__btn_default');
			});
			document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn_default');
		});
	});
});


/* Accordion */
$(function () {
	$("#accordion").accordion({
		collapsible: true
	});
});
