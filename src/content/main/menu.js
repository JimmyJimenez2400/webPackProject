import { cardBuilder } from '../../../src/helpful_functions/menuSkeleton';

export default function menu() {
  const menuContainer = document.createElement('section');
  menuContainer.setAttribute('id', 'menuContainer');

  const menu = document.createElement('section');
  menu.setAttribute('class', 'menu');

  menuContainer.appendChild(menu);

  /* ================================ */

  const section1 = document.createElement('section');
  section1.setAttribute('class', 'Drinks');

  const leftSide1 = document.createElement('section');
  leftSide1.setAttribute('class', 'leftSide');

  const title1 = document.createElement('h3');
  title1.setAttribute('class', 'title');
  title1.textContent = 'Drinks';

  leftSide1.appendChild(title1);
  const rightSide1 = document.createElement('section');
  rightSide1.setAttribute('class', 'rightSide');

  section1.appendChild(leftSide1);
  section1.appendChild(rightSide1);

  rightSide1.appendChild(
    cardBuilder(
      'Aperivito',
      '14.95',
      'Aperitivo is known to be an excellent drink that prepares the digestive system before one sits down for a delicious Italian dinner.'
    )
  );

  rightSide1.appendChild(
    cardBuilder(
      'Negroni',
      '15.00',
      'Negroni is made from one part of gin, one part of Campari, and one part of red Vermouth, and garnished with a slice of orange.'
    )
  );

  rightSide1.appendChild(
    cardBuilder(
      'Campari',
      '16.43',
      'Campari is now a widely favourite drink in Italy and across the world. Made from a mixture of herbs, spices, fruits and alcohol, Gaspare Campari formulated the bitter recipe for the drink that later took over Italy and Europe by storm.'
    )
  );

  rightSide1.appendChild(
    cardBuilder(
      'Americano',
      '17.32',
      'This famous Italian beverage is widely served with ice and a slice of lemon or orange'
    )
  );

  /* ================================== */

  const section2 = document.createElement('section');
  section2.setAttribute('class', 'Appetizers');

  const leftSide2 = document.createElement('section');
  leftSide2.setAttribute('class', 'leftSide');

  const title2 = document.createElement('h3');
  title2.setAttribute('class', 'title');
  title2.textContent = 'Appetizers';

  leftSide2.appendChild(title2);
  const rightSide2 = document.createElement('section');
  rightSide2.setAttribute('class', 'rightSide');

  section2.appendChild(leftSide2);
  section2.appendChild(rightSide2);

  rightSide2.appendChild(
    cardBuilder(
      'Bruschetta',
      '25.00',
      'Tomatoes | Garlic | Basil | Red Onion | Olive Oil | Balsamic Vinegar | Baguette | Salt and Pepper'
    )
  );

  rightSide2.appendChild(
    cardBuilder(
      'Eggplant Caponata',
      '25.00',
      'Eggplant | Red Pepper | Garlic | Canned Tomatoes | Olive Oil'
    )
  );

  rightSide2.appendChild(
    cardBuilder('Baked Goat Cheese Dip', '20.00', 'Sauce | Bread')
  );

  /* ============================== */

  const section3 = document.createElement('section');
  section3.setAttribute('class', 'Entrees');

  const leftSide3 = document.createElement('section');
  leftSide3.setAttribute('class', 'leftSide');

  const title3 = document.createElement('h3');
  title3.setAttribute('class', 'title');
  title3.textContent = 'Entrees';

  leftSide3.appendChild(title3);
  const rightSide3 = document.createElement('section');
  rightSide3.setAttribute('class', 'rightSide');

  section3.appendChild(leftSide3);
  section3.appendChild(rightSide3);

  /* ============================= */

  const section4 = document.createElement('section');
  section4.setAttribute('class', 'Deserts');

  const leftSide4 = document.createElement('section');
  leftSide4.setAttribute('class', 'leftSide');

  const title4 = document.createElement('h3');
  title4.setAttribute('class', 'title');
  title4.textContent = 'Deserts';

  leftSide4.appendChild(title4);
  const rightSide4 = document.createElement('section');
  rightSide4.setAttribute('class', 'rightSide');

  section4.appendChild(leftSide4);
  section4.appendChild(rightSide4);

  menu.appendChild(section1);
  menu.appendChild(section2);
  menu.appendChild(section3);
  menu.appendChild(section4);

  return menuContainer;
}
