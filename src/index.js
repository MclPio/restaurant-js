import { homepage } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';

homepage();
const navbar = document.getElementById('navbar');
const content = document.getElementById('content');

navbar.addEventListener('click', (event) => {
  content.innerHTML = '';

  if (event.target.id == 'home') {
    homepage();
  } else if (event.target.id == 'menu') {
    menu();
  } else if (event.target.id == 'about') {
    about();
  };
})

