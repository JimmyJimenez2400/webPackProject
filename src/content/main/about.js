import aboutImg from '../../../src/images/aboutImage.jpg';

export default function aboutCompany() {
  const aboutContainer = document.createElement('section');
  aboutContainer.setAttribute('id', 'aboutContainer');

  const about = document.createElement('section');
  about.setAttribute('class', 'about');

  aboutContainer.appendChild(about);

  const leftSideText = document.createElement('section');
  const rightSideImg = document.createElement('section');

  leftSideText.setAttribute('class', 'leftSideText');
  rightSideImg.setAttribute('class', 'rightSideImg');

  about.appendChild(leftSideText);
  about.appendChild(rightSideImg);

  const title = document.createElement('h1');
  const textContainer = document.createElement('section');

  title.setAttribute('class', 'aboutTitle');
  title.textContent = 'About Us';

  textContainer.setAttribute('class', 'textContainer');

  leftSideText.appendChild(title);
  leftSideText.appendChild(textContainer);

  const subTitle = document.createElement('h3');
  subTitle.setAttribute('class', 'subTitle');
  subTitle.textContent = 'In italy 1934,';

  const paragraphText = document.createElement('p');
  paragraphText.setAttribute('class', 'paragraphText');
  paragraphText.textContent =
    'Morbi eu pellentesque est, vitae rhoncus sapien. Mauris sollicitudin ligula leo, at congue lectus aliquam laoreet. Sed ac purus at nisl tincidunt tristique. Suspendisse molestie eget ex vel consequat. Nunc ultrices bibendum aliquam. Sed libero sem, volutpat vitae quam ut, maximus facilisis mauris. Cras nec metus eget mi vestibulum dapibus in vel urna. Proin fermentum venenatis libero, non molestie odio. Aliquam hendrerit ac mi vitae consectetur. Integer id sem quis neque congue maximus. Vivamus sit amet condimentum enim.';

  textContainer.appendChild(subTitle);
  textContainer.appendChild(paragraphText);

  const imageOfRestaurant = new Image();
  imageOfRestaurant.src = aboutImg;

  imageOfRestaurant.setAttribute('class', 'imageoOfRestaurant');
  imageOfRestaurant.setAttribute('alt', 'Picture of restaurant');

  rightSideImg.appendChild(imageOfRestaurant);

  return aboutContainer;
}

// [TEXT] [IMG]

//
