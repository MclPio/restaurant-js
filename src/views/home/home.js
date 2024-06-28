import { fixedGrid } from './fixed-grid.js';
import { callToAction } from './grid-cells/call-to-action.js';

function homepage() {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.className = 'container';
  container.appendChild(fixedGrid());
  container.appendChild(callToAction());
  content.appendChild(container);
}

export { homepage };