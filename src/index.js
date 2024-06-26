import { homepage } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';
import './style.css';

homepage();
const navbar = document.getElementById('navbar');
const content = document.getElementById('content');

navbar.addEventListener('click', (event) => {

  if (event.target.id == 'home') {
    content.innerHTML = '';
    homepage();
  } else if (event.target.id == 'menu') {
    content.innerHTML = '';
    menu();
  } else if (event.target.id == 'about') {
    content.innerHTML = '';
    about();
  };
})

