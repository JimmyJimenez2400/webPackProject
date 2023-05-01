export default function aboutCompany() {
  const aboutContainer = document.createElement('section');
  aboutContainer.setAttribute('id', 'aboutContainer');

  const about = document.createElement('section');
  about.setAttribute('class', 'about');

  aboutContainer.appendChild(about);

  const leftSideText = document.createElement('article');
  const rightSideImg = document.createElement('section');

  about.appendChild(leftSideText);
  about.appendChild(rightSideImg);

  return aboutContainer;
}
