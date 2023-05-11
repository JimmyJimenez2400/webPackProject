import '../style.css';
import navbar from '../content/header/navbar';
import toggleHambugerMenu from '../helpful_functions/toggleHamburgerMenu';
import aboutCompany from '../content/main/about';
import hero from '../content/main/hero';
import menu from '../content/main/menu';
import contactPage from '../content/main/contact';

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
    mainContainer.appendChild(menu());
    return mainContainer;
  }

  //Footer
  function footer() {
    const footerContainer = document.createElement('footer');
    footerContainer.setAttribute('id', 'footerContainer');

    return footerContainer;
  }

  content.appendChild(header());
  content.appendChild(mainBody());
  content.appendChild(footer());
}
