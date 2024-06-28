import soda from './soda-600w.jpg';

function contentSixthCell() {
  //hero3 figure
  const hero3_figure = document.createElement('figure');
  hero3_figure.className = 'image is-1by1'

  //hero3 image
  const hero3_image = new Image();
  hero3_image.src = soda;
  hero3_image.className = 'rounded-custom'
  hero3_image.alt = 'A freshly baked Margherita pizza with basil leaves, sliced into quarters on a wooden surface';
  hero3_figure.appendChild(hero3_image);

  return hero3_figure;
};

export { contentSixthCell };