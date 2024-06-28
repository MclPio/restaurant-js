function contentFirstCell() {
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
  
    // hero1 button
    const hero1_button = document.createElement('button');
    hero1_button.className = 'button is-rounded hero1-button';
    hero1_button.innerText = 'Order Now';
    hero1.appendChild(hero1_button);

    return hero1;
};

export { contentFirstCell };