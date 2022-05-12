const placeholder = 'placeholder';

for (let i = 1; i < 4; i++) {
  const file = require(`../static/${placeholder}-${i}.png`);

  console.info(file);
}

const ref = document.body.dataset.imgRef;
const img = require(`../static/${placeholder}-body-${ref}.png`);

document.body.style.backgroundImage = `url(${img})`

require('./comment');
require('./big');

export default function say(message) {
  alert(message);
};

alert('test');
