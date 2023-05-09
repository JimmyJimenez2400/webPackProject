export default function liElementNavbar(
  text,
  className,
  linkName,
  functionCall
) {
  const liElement = document.createElement('li');
  liElement.setAttribute('class', `${className}-1`);

  const linkElement = document.createElement('a');
  linkElement.setAttribute('class', `${linkName}`);
  linkElement.setAttribute('href', `${functionCall}`);
  linkElement.textContent = `${text}`;

  liElement.appendChild(linkElement);

  return liElement;
}
