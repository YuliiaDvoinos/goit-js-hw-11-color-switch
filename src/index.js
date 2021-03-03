import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    bodyRef: document.querySelector('body'),
    startBtnRef: document.querySelector('[data-action="start"]'),
    stoptBtnRef: document.querySelector('[data-action="stop"]')
};
let intervalColorChange = undefined;
refs.startBtnRef.addEventListener('click', start);
refs.stoptBtnRef.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackground(color) {
  refs.bodyRef.style.backgroundColor = color;
}


function start() {
  intervalColorChange = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, 5);
    changeBackground(colors[randomNumber]);
  }, 1000);
  refs.stoptBtnRef.removeAttribute('disabled');
    refs.startBtnRef.setAttribute('disabled', true);
    console.log('start color changing');
}
function stop() {
  clearInterval(intervalColorChange);
  refs.startBtnRef.removeAttribute('disabled');
    refs.stoptBtnRef.setAttribute('disabled', true);
    console.log('stop color changing');
}