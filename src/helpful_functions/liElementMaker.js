export default function liElementNavbar(
  text,
  className,
  linkName,
  functionCall,
  IDname
) {
  const liElement = document.createElement('li');
  liElement.setAttribute('class', `${className}-1`);

  const linkElement = document.createElement('a');
  linkElement.setAttribute('class', `${linkName}`);
  linkElement.setAttribute('href', `${functionCall}`);
  linkElement.textContent = `${text}`;
  linkElement.setAttribute('id', `${IDname}`);

  liElement.appendChild(linkElement);

  return liElement;
}
