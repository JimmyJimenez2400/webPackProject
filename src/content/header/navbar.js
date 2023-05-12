//Import Image
import liElementNavbar from '../../helpful_functions/liElementMaker';
import hamburgerMenu from '../../helpful_functions/hamburgerMarker';

export default function navbar() {
  const sectionContainer = document.createElement('section');
  sectionContainer.setAttribute('id', 'navbarContainer');

  const navbarContainer = document.createElement('nav');
  // Grab this for hamburger menu
  navbarContainer.setAttribute('class', 'navbar');
  navbarContainer.setAttribute('role', 'navigation');
  sectionContainer.appendChild(navbarContainer);

  const left_side = document.createElement('section');
  const right_side = document.createElement('section');
  left_side.setAttribute('class', 'left-side');
  right_side.setAttribute('class', 'right-side');

  const titleContainer = document.createElement('section');
  titleContainer.setAttribute('class', 'titleContainer');

  const logoTitle = document.createElement('h1');
  logoTitle.setAttribute('class', 'logoTitle');
  logoTitle.textContent = 'Bondi';

  titleContainer.appendChild(logoTitle);

  left_side.appendChild(titleContainer);

  const buttonContainer = document.createElement('section');
  buttonContainer.setAttribute('class', 'buttonContainer');

  buttonContainer.appendChild(hamburgerMenu());
  right_side.appendChild(buttonContainer);

  navbarContainer.appendChild(left_side);
  navbarContainer.appendChild(right_side);

  const unorderListContainer = document.createElement('ul');
  unorderListContainer.setAttribute('class', 'not-active');
  unorderListContainer.setAttribute('class', 'nav-links');

  right_side.appendChild(unorderListContainer);
  unorderListContainer.appendChild(
    liElementNavbar('HOME', 'liElement', 'userLink', '#', 'home')
  );
  unorderListContainer.appendChild(
    liElementNavbar('ABOUT', 'liElement', 'userLink', '#', 'about')
  );
  unorderListContainer.appendChild(
    liElementNavbar('MENU', 'liElement', 'userLink', '#', 'menu')
  );
  unorderListContainer.appendChild(
    liElementNavbar('CONTACT', 'liElement', 'userLink', '#', 'contact')
  );

  return sectionContainer;
}

//Section Container
// -> nav
// ->->div (imgHolder)
// ->->->img
// ->->ul (nav-list)
// ->->-> li * 4

//make a function for hamburger menu
