import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';

export default function hamburgerMenu() {
  // const hamburgerButton = document.createElement('button');
  // hamburgerButton.setAttribute('id', 'toggle');
  // hamburgerButton.setAttribute('aria-expanded', 'false');

  // hamburgerButton.textContent = 'Menu';
  const closeIcon = document.createElement('span');
  closeIcon.setAttribute('id', 'toggle');
  closeIcon.setAttribute('class', 'material-icons');
  closeIcon.textContent = 'menu';

  return closeIcon;
}
