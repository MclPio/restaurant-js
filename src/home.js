import margarita from './margarita-600w.jpg'

function homepage() {
  const content = document.getElementById('content');
  const fixed_grid = document.createElement('div');
  fixed_grid.className = 'fixed-grid has-1-cols-mobile has-2-cols-tablet has-2-cols-desktop has-2-cols-widescreen has-2-cols-fullhd'

  // grid
  const grid = document.createElement('div');
  grid.className = 'grid';
  
  //hero1 container
  const hero1 = document.createElement('div');
  hero1.className = 'cell'

  // hero1 heading
  const hero1_header = document.createElement('div');
  hero1_header.innerText = "Frozen Is The New Fresh";
  hero1_header.className = 'hero1';
  hero1.appendChild(hero1_header);

  // hero1 desc
  const hero1_desc = document.createElement('p');
  hero1_desc.className = 'roboto'
  hero1_desc.innerText = 'Welcome to Chill Pizza, where we believe in fresh, delicious pizza every time. Our pizzas are made with premium ingredients and frozen immediately to lock in flavour and quality';
  hero1.appendChild(hero1_desc);
  grid.appendChild(hero1);

  // hero1 button
  const hero1_button = document.createElement('button');
  hero1_button.className = 'button is-rounded hero1-button';
  hero1_button.innerText = 'Order Now';
  hero1.appendChild(hero1_button);

  //hero1 figure
  const hero1_figure = document.createElement('figure');
  hero1_figure.className = 'image is-1by1'

  //hero1 image
  const hero1_image = new Image();
  hero1_image.src = margarita;
  hero1_image.alt = 'A freshly baked Margherita pizza with basil leaves, sliced into quarters on a wooden surface';

  hero1_figure.appendChild(hero1_image);
  grid.appendChild(hero1_figure);

  fixed_grid.appendChild(grid);
  content.append(fixed_grid);  
  // const myImage = new Image();
  // myImage.src = Pizza;
  // myImage.width = '600'
  // myImage.alt = 'A cheese pizza with golden crust, cherry tomatoes, rosemary, and a large yellow tomato on a wooden surface.'
  // content.appendChild(myImage);
}

export { homepage };