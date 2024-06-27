import { homepage } from './home/home.js';
import { menu } from './menu/menu.js';
import { about } from './about/about.js';
import { navbarBurger } from '../views/navbar.js';
import '../styles/custom-bulma.css';

navbarBurger();
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

