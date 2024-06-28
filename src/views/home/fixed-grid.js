import { contentFirstCell } from './grid-cells/content-first-cell.js';
import { contentSecondCell } from './grid-cells/content-second-cell.js';
import { contentThirdCell } from './grid-cells/content-third-cell.js';
import { contentFourthCell } from './grid-cells/content-fourth-cell.js';
import { contentFifthCell } from './grid-cells/content-fifth-cell.js';
import { contentSixthCell } from './grid-cells/content-sixth-cell.js';

function fixedGrid() {
  // fixed grid
  const fixed_grid = document.createElement('div');
  fixed_grid.className = 'fixed-grid has-1-cols-mobile has-2-cols-tablet has-2-cols-desktop has-2-cols-widescreen has-2-cols-fullhd'
  // grid
  const grid = document.createElement('div');
  grid.className = 'grid';

  grid.appendChild(contentFirstCell());
  grid.appendChild(contentSecondCell());
  grid.appendChild(contentThirdCell());
  grid.appendChild(contentFourthCell());
  grid.appendChild(contentFifthCell());
  grid.appendChild(contentSixthCell());
  fixed_grid.appendChild(grid);

  return fixed_grid;
}

export { fixedGrid };