function liElementCreate(className) {
  const liElement = document.createElement('li');
  liElement.setAttribute('class', `${className}`);

  return liElement;
}

export { liElementCreate };
