const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');
textSpan.style.fontSize = `${fontSizeControl.value}px`;

const changeFontSize = event => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

fontSizeControl.addEventListener('input', changeFontSize);

