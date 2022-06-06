
const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('[type="number"]'),
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  clearBtn: document.querySelector('[data-destroy]'),
}

let startingSize = 30;
let step = 10;
let startingFontSize = 10;
let fontSizeStep = 5;

function createBoxes(amount) {
  amount = refs.input.value;

  const arrayToInjection = [];

  for (let i = 1; i <= amount; i += 1){
    const newBox = document.createElement('div');
    newBox.style.width = `${startingSize + step}px`;
    newBox.style.height = `${startingSize + step}px`;
    newBox.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    newBox.style.margin = "5px auto 5px";
    newBox.style.display = 'flex';
    newBox.style.alignItems = 'center'
    newBox.style.justifyContent = 'center';
    newBox.style.alignItems = 'center';
    newBox.style.fontSize = `${startingFontSize + fontSizeStep}px`;
    newBox.textContent = ` `

    step += 10;
    fontSizeStep += 4;

    arrayToInjection.push(newBox)
  }
  refs.boxes.append(...arrayToInjection)
}

function clearBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
  step = 10;
  fontSizeStep = 5;
}

refs.createBtn.addEventListener('click', createBoxes);
refs.clearBtn.addEventListener('click', clearBoxes);