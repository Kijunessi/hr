const MOON = '🌙';
const SUN = '☀️';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = LIGHT_MODE;

const btn = document.querySelector('#theme-switcher');

init();

function init() {
  let storedMode = sessionStorage.getItem('mode');
  if (!storedMode) {
    storedMode = DEFAULT_MODE;
    sessionStorage.setItem('mode', DEFAULT_MODE);
  }
  setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
  if (mode === DARK_MODE) {
    btn.textContent = SUN;
    document.body.classList.add(DARK_MODE);

  } else if (mode === LIGHT_MODE) {
    btn.textContent = MOON;
    document.body.classList.remove(DARK_MODE);

  }
}

btn.addEventListener('click', function() {
  let mode = sessionStorage.getItem('mode');
  if (mode) {
    let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
    setMode(newMode);
    sessionStorage.setItem('mode', newMode);
  }
})

function setLogo(mode = DEFAULT_MODE) {
  if (mode === DARK_MODE) {
    btn.textContent = SUN;
    document.body.classList.add(DARK_LOGO);

  } else if (mode === LIGHT_MODE) {
    btn.textContent = MOON;
    document.body.classList.remove(DARK_LOGO);

  }
};

function logoSwap() {
  if (mode === LIGHT_MODE) {
    document.body.classList.add("Images/Light-Image.png");
  } else if (mode === DARK_MODE) {
    document.body.classList.remove("Images/Dark-Image.png");
  }

};