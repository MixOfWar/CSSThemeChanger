const lightButton = document.querySelector('#light');
const darkButton = document.querySelector('#dark');
const solarButton = document.querySelector('#solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
	body.classList.add(theme);
	isSolar && body.classList.add('solar');
}

//Button Event handlers

lightButton.onclick = () => {
	body.classList.replace('dark', 'light');
	localStorage.setItem('theme', 'light');
};

darkButton.onclick = () => {
	body.classList.replace('light', 'dark');
	localStorage.setItem('theme', 'dark');
};

solarButton.onclick = () => {
	if (body.classList.contains('solar')) {
		body.classList.remove('solar');
		solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `;

		solarButton.innerText = 'Solarize';

		localStorage.removeItem('isSolar');
	} else {
		solarButton.style.cssText = `
      --bg-solar: white;
    `;

		body.classList.add('solar');
		solarButton.innerText = 'Normalize';
		localStorage.setItem('isSolar', true);
	}
};
