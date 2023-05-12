import '../style.css';
import navbar from '../content/header/navbar';
import toggleHambugerMenu from '../helpful_functions/toggleHamburgerMenu';
import hero from '../content/main/hero';

export default function pageLoad() {
  //Selecting Body and Create Content Element
  const body = document.querySelector('body');
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  body.appendChild(content);

  //Header
  function header() {
    const headerContainer = document.createElement('header');
    headerContainer.setAttribute('id', 'headerContainer');
    headerContainer.appendChild(navbar());
    return headerContainer;
  }

  //Main Body
  function mainBody() {
    const mainContainer = document.createElement('main');
    mainContainer.setAttribute('id', 'mainContainer');
    mainContainer.appendChild(hero());
    return mainContainer;
  }

  content.appendChild(header());
  content.appendChild(mainBody());
}
