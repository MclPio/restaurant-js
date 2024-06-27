import menuData from './menu.json';

function createMenuItem(title, desc, price, imgSrc=null, imgDesc=null) {
  const node = document.createElement('li')

  const titleEle = document.createElement('h3');
  titleEle.innerHTML = `<strong>${title}</strong>`;

  const descEle = document.createElement('p');
  descEle.innerText = desc;

  const priceEle = document.createElement('p');
  priceEle.innerHTML = `$${price.toFixed(2)}`;

  if (imgSrc) {
    const imgEle = new Image();
    imgEle.src = imgSrc;
    imgEle.alt = imgDesc;
    node.append(titleEle, descEle, priceEle, imgEle);
    return node;
  };
  
  node.append(titleEle, descEle, priceEle);
  return node;
}

function menu() {
  const content = document.getElementById('content');

  const header = document.createElement('h1');
  header.innerText = 'Delicious is not fictitious';
  content.appendChild(header);

  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu';

  menuData.menu.forEach(category => {
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category.category;
    menuContainer.appendChild(categoryTitle);

    const itemList = document.createElement('ul');

    category.items.forEach(item => {
      itemList.appendChild(createMenuItem(item.name, item.description, item.price ));
    });

    menuContainer.appendChild(itemList);
  });

  content.appendChild(menuContainer);
}

export { menu };