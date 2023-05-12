function cardBuilder(titleOfThing, priceOfThing, ingredientsOfThing, imageSrc) {
  const section = document.createElement('section');

  section.setAttribute('class', 'card');

  const imageContainer = document.createElement('section');
  imageContainer.setAttribute('class', 'imageContainer');

  section.appendChild(imageContainer);

  const image = new Image();
  image.setAttribute('class', 'image');
  image.src = `${imageSrc}`;

  const topRow = document.createElement('section');
  topRow.setAttribute('class', 'topRow');

  const title = document.createElement('h4');
  title.setAttribute('class', 'title');

  title.textContent = `${titleOfThing}`;

  const pricing = document.createElement('h4');
  pricing.setAttribute('class', 'pricing');

  pricing.textContent = `${priceOfThing}`;

  topRow.appendChild(title);
  topRow.appendChild(pricing);

  section.appendChild(topRow);

  const bottomRow = document.createElement('section');
  bottomRow.setAttribute('class', 'bottomRow');

  const paragraphText = document.createElement('p');
  paragraphText.setAttribute('class', 'paragraphText');

  paragraphText.textContent = `${ingredientsOfThing}`;

  bottomRow.appendChild(paragraphText);

  section.appendChild(bottomRow);

  imageContainer.appendChild(image);

  return section;
}

export { cardBuilder };
