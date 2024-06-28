import pepperoni from './pepperoni-600w.jpg';

function contentThirdCell() {
  //hero2 figure
  const hero2_figure = document.createElement('figure');
  hero2_figure.className = 'image is-1by1'

  //hero2 image
  const hero2_image = new Image();
  hero2_image.src = pepperoni;
  hero2_image.className = 'rounded-custom'
  hero2_image.alt = 'A close-up of a pepperoni pizza with melted cheese and crispy pepperoni slices.';
  hero2_figure.appendChild(hero2_image);

  return hero2_figure;
};

export { contentThirdCell };