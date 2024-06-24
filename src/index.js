import Pizza from './pizza.jpg'

const myImage = new Image();
myImage.src = Pizza;
myImage.width = '600'
myImage.alt = 'A cheese pizza with golden crust, cherry tomatoes, rosemary, and a large yellow tomato on a wooden surface.'
const element = document.getElementById('content');
element.appendChild(myImage);