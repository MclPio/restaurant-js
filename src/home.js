function homepage() {
  const content = document.getElementById('content');

  const header = document.createElement('h1');
  header.innerText = 'Frozen is the new fresh';
  content.appendChild(header);

  const description = document.createElement('p');
  description.innerText = 'From years of experience of cooking pizza in the kitchen, Michael invites you to experience the deluxe dining experience of frozen pizza. Enjoy complementary water with optional soda to be served.'
  content.appendChild(description);

  // const myImage = new Image();
  // myImage.src = Pizza;
  // myImage.width = '600'
  // myImage.alt = 'A cheese pizza with golden crust, cherry tomatoes, rosemary, and a large yellow tomato on a wooden surface.'
  // content.appendChild(myImage);
}

export { homepage };