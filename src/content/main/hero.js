export default function hero() {
  const heroContainer = document.createElement('section');
  heroContainer.setAttribute('id', 'heroContainer');

  const hero = document.createElement('section');
  hero.setAttribute('class', 'hero');

  heroContainer.appendChild(hero);

  const mainTitle = document.createElement('h1');
  mainTitle.setAttribute('class', 'mainTitle');
  mainTitle.textContent = 'Fresh Italian Cuisine';

  const bottomSection = document.createElement('section');
  bottomSection.setAttribute('class', 'bottomSection');

  const subText = document.createElement('h3');
  subText.setAttribute('class', 'subText');
  subText.textContent = 'Check Out Our Menu!';

  const foodMenu = document.createElement('button');
  foodMenu.setAttribute('class', 'foodMenuBtn');
  foodMenu.textContent = 'Go To Menu';

  hero.appendChild(mainTitle);
  hero.appendChild(bottomSection);
  bottomSection.appendChild(subText);
  bottomSection.appendChild(foodMenu);

  return heroContainer;
}
