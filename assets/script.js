const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dotsContainer = document.querySelector('.dots');
const taglineElement = document.querySelector('#banner p');
const imageElement = document.querySelector('.banner-img');
const imagesFolder = './assets/images/slideshow/';
const arrowNext = document.querySelector('.arrow_right');
const arrowBack = document.querySelector('.arrow_left');
const allDots = createDots(dotsContainer, slides.length);

let index = 0

update()

arrowNext.addEventListener('click', () => {
	if (index < slides.length - 1) {
		index++;
	} else {
		index = 0;
	}
	update(index)
})

arrowBack.addEventListener('click', () => {
	if (index > 0) {
		index--;
	} else {
		index = slides.length - 1;
	}
	update(index)
})

function update() {
	allDots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
	taglineElement.innerHTML = slides[index].tagLine;
	imageElement.src = imagesFolder + slides[index].image;
}

function createDots(container, dotsCount) {
	for (let i = 0; i < dotsCount; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		container.appendChild(dot);
	}
	return document.querySelectorAll('.dot');
}
