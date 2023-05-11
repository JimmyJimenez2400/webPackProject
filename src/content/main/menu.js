import {
  menuSkeletonBuild,
  cardBuilder,
} from '../../../src/helpful_functions/menuSkeleton';

export default function menu() {
  const menuContainer = document.createElement('section');
  menuContainer.setAttribute('id', 'menuContainer');

  const menu = document.createElement('section');
  menu.setAttribute('class', 'menu');

  menuContainer.appendChild(menu);

  menu.appendChild(menuSkeletonBuild());

  const selectRightSide = document.querySelector('.rightSideMealName');

  selectRightSide.textContent = 'HELLLO';
  return menuContainer;
}
