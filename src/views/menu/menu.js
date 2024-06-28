import menuData from './menu.json';

function createMenuItem(title, desc, price, imgSrc=null, imgDesc=null) {
  const node = document.createElement('li')
  const titlePrice = document.createElement('div');
  titlePrice.className = 'title-price';

  const titleEle = document.createElement('h3');
  titleEle.innerHTML = `<strong>${title}</strong>`;
  titleEle.className = 'roboto';

  const descEle = document.createElement('p');
  descEle.className = 'item-desc'
  descEle.innerText = desc;

  const priceEle = document.createElement('p');
  priceEle.className = 'item-price'
  priceEle.innerHTML = `$${price.toFixed(2)}`;
  
  titlePrice.append(titleEle, priceEle);
  if (imgSrc) {
    const imgEle = new Image();
    imgEle.src = imgSrc;
    imgEle.alt = imgDesc;
    node.append(titlePrice, descEle, imgEle);
    return node;
  };
  
  node.append(titlePrice, descEle );
  return node;
}

function menu() {
  const content = document.getElementById('content');
  const section = document.createElement('section');
  const container = document.createElement('div');
  container.className = 'container'
  section.className = 'section';

  const header = document.createElement('h1');
  header.innerText = 'Delicious Is Not Fictitious';
  header.className = 'menu-heading-1 title is-2';
  container.appendChild(header);

  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu';

  menuData.menu.forEach(category => {
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category.category;
    categoryTitle.className = 'menu-heading-2 title is-3'
    menuContainer.appendChild(categoryTitle);

    const itemList = document.createElement('ul');

    category.items.forEach(item => {
      itemList.appendChild(createMenuItem(item.name, item.description, item.price ));
    });

    menuContainer.appendChild(itemList);
  });
  container.appendChild(menuContainer);
  section.appendChild(container);
  content.appendChild(section);
}

export { menu };