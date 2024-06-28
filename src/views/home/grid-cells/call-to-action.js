function callToAction() {
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

  return cta_div;
}

export { callToAction };