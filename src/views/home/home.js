import { fixedGrid } from './fixed-grid.js';

function homepage() {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.className = 'container';
  container.appendChild(fixedGrid());
  content.appendChild(container);
}

export { homepage };