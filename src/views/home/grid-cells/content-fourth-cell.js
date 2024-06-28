function contentFourthCell() {
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

  return hero2
};

export { contentFourthCell };