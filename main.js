import './style.css';

const accordions = document.querySelectorAll('.accordion');

const openAccordion = (accordion) => {
	const content = accordion.querySelector('.accordion-wrapper-content');
	accordion.classList.add('active');
	content.style.maxHeight = content.scrollHeight + 'px';
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector('.accordion-wrapper-content');
	accordion.classList.remove('active');
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const content = accordion.querySelector('.accordion-wrapper-content');
	console.log(content.scrollHeight);

	accordion.addEventListener('click', function () {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	});
});
