export default function menu() {
  const menuContainer = document.createElement('section');
  menuContainer.setAttribute('id', 'menuContainer');

  const menu = document.createElement('section');
  menu.setAttribute('class', 'menu');

  menuContainer.appendChild(menu);

  return menuContainer;
}
