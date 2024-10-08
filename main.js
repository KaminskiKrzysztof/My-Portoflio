// go up arrow

window.onscroll = function () {
	let scrollToTopButton = document.getElementById('scrollToTop');
	if (
		document.body.scrollTop > 350 ||
		document.documentElement.scrollTop > 350
	) {
		scrollToTopButton.style.display = 'block';
	} else {
		scrollToTopButton.style.display = 'none';
	}
};

document.getElementById('scrollToTop').addEventListener('click', function () {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

// send alert

const alretBtn = document.querySelector('.contact-btn');

const sendAlert = () => {
	alert(
		`Currently I don't have the backend abilities to create such an event ☹️ Besides, I didn't want to copy & paste ready solution from chatGPT 😜`
	);
};

alretBtn.addEventListener('click', sendAlert);
