function contentFifthCell() {
  //hero3 container
  const hero3 = document.createElement('div');
  hero3.className = 'cell content'

  // hero3 heading
  const hero3_header = document.createElement('div');
  hero3_header.innerText = "Enjoy Complimentary Beverages";
  hero3_header.className = 'hero2 title is-2';
  hero3.appendChild(hero3_header);

  // hero3 desc
  const hero3_desc = document.createElement('p');
  hero3_desc.className = 'roboto'
  hero3_desc.innerText = 'Complimentary water is always available, with optional soda for your enjoyment.';
  hero3.appendChild(hero3_desc);

  return hero3;
};

export { contentFifthCell };