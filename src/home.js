import margarita from './margarita-600w.jpg';
import pepperoni from './pepperoni-600w.jpg';
import soda from './soda-600w.jpg'

function homepage() {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.className = 'container';

  const fixed_grid = document.createElement('div');
  fixed_grid.className = 'fixed-grid has-1-cols-mobile has-2-cols-tablet has-2-cols-desktop has-2-cols-widescreen has-2-cols-fullhd'

  // grid
  const grid = document.createElement('div');
  grid.className = 'grid';
  
  //hero1 container
  const hero1 = document.createElement('div');
  hero1.className = 'cell content'

  // hero1 heading
  const hero1_header = document.createElement('div');
  hero1_header.innerText = "Frozen Is The New Fresh";
  hero1_header.className = 'hero1';
  hero1.appendChild(hero1_header);

  // hero1 desc
  const hero1_desc = document.createElement('p');
  hero1_desc.className = 'roboto'
  hero1_desc.innerText = 'Welcome to Chill Pizza, where we believe in fresh, delicious pizza every time. Our pizzas are made with premium ingredients and frozen immediately to lock in flavour and quality.';
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
  hero1_image.className = 'rounded-custom'
  hero1_image.alt = 'A freshly baked Margherita pizza with basil leaves, sliced into quarters on a wooden surface';
  hero1_figure.appendChild(hero1_image);

  grid.appendChild(hero1_figure);

  //hero2 container
  const hero2 = document.createElement('div');
  hero2.className = 'cell content'

  // hero2 heading
  const hero2_header = document.createElement('div');
  hero2_header.innerText = "Why Our Pizza?";
  hero2_header.className = 'hero2';
  hero2.appendChild(hero2_header);

  // hero2 desc
  const hero2_desc = document.createElement('ul');
  hero2_desc.className = 'roboto';
  const item1 = document.createElement('li');
  item1.innerText = 'Always Fresh: Freezing captures peak freshness, ensuring every bite is delicious.';
  const item2 = document.createElement('li');
  item2.innerText = 'Quality Ingredients: We use only the best toppings and cheeses for a superior taste.';
  const item3 = document.createElement('li');
  item3.innerText = 'Convenient: Enjoy in-store or order online for a quick, tasty meal at home.';
  hero2_desc.append(item1, item2, item3);
  hero2.appendChild(hero2_desc);

  //hero2 figure
  const hero2_figure = document.createElement('figure');
  hero2_figure.className = 'image is-1by1'

  //hero2 image
  const hero2_image = new Image();
  hero2_image.src = pepperoni;
  hero2_image.className = 'rounded-custom'
  hero2_image.alt = 'A close-up of a pepperoni pizza with melted cheese and crispy pepperoni slices.';
  hero2_figure.appendChild(hero2_image);
  grid.appendChild(hero2_figure);

  grid.appendChild(hero2);

  //hero3 container
  const hero3 = document.createElement('div');
  hero3.className = 'cell content'

  // hero3 heading
  const hero3_header = document.createElement('div');
  hero3_header.innerText = "Enjoy Complimentary Beverages";
  hero3_header.className = 'hero2';
  hero3.appendChild(hero3_header);

  // hero3 desc
  const hero3_desc = document.createElement('p');
  hero3_desc.className = 'roboto'
  hero3_desc.innerText = 'Complimentary water is always available, with optional soda for your enjoyment.';
  hero3.appendChild(hero3_desc);
  grid.appendChild(hero3);
  
  //hero3 figure
  const hero3_figure = document.createElement('figure');
  hero3_figure.className = 'image is-1by1'

  //hero3 image
  const hero3_image = new Image();
  hero3_image.src = soda;
  hero3_image.className = 'rounded-custom'
  hero3_image.alt = 'A freshly baked Margherita pizza with basil leaves, sliced into quarters on a wooden surface';
  hero3_figure.appendChild(hero3_image);

  grid.appendChild(hero3_figure);

  // call to action hero
  const cta_div = document.createElement('div');
  cta_div.className = 'cell is-col-span-2';

  const hero_section = document.createElement('section');
  hero_section.className = 'hero is-medium hero-is-custom gradient';

  const hero_body = document.createElement('div');
  hero_body.className = 'hero-body';

  const cta_title = document.createElement('p');
  cta_title.className = 'cta_banner';
  cta_title.innerText = 'Order Now and Taste the Difference!';


  //cta buttons
  const cta_buttons = document.createElement('div');
  cta_buttons.className = 'cta-buttons';

  const cta_button1 = document.createElement('button');
  cta_button1.className = 'button is-rounded';
  cta_button1.innerText = 'Order Now';

  const cta_button2 = document.createElement('button');
  cta_button2.className = 'button is-rounded';
  cta_button2.innerText = 'Visit In-Store';

  cta_buttons.append(cta_button1, cta_button2);

  hero_body.appendChild(cta_title);
  hero_body.appendChild(cta_buttons);
  hero_section.appendChild(hero_body);

  cta_div.appendChild(hero_section);
  grid.appendChild(cta_div);


  fixed_grid.appendChild(grid);
  container.appendChild(fixed_grid);
  content.appendChild(container);
}

export { homepage };