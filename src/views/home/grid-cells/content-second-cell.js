import margarita from './margarita-600w.jpg';

function contentSecondCell() {
//hero1 figure
  const hero1_figure = document.createElement('figure');
  hero1_figure.className = 'image is-1by1';

  //hero1 image
  const hero1_image = new Image();
  hero1_image.src = margarita;
  hero1_image.className = 'rounded-custom';
  hero1_image.alt = 'A freshly baked Margherita pizza with basil leaves, sliced into quarters on a wooden surface';
  hero1_figure.appendChild(hero1_image);

  return hero1_figure;
};

export { contentSecondCell };