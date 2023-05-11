function menuSkeletonBuild() {
  const section = document.createElement('section');
  section.setAttribute('class', 'mealRow');
  const leftSide = document.createElement('section');
  leftSide.setAttribute('class', 'leftSideMealName');
  const rightSide = document.createElement('section');
  rightSide.setAttribute('class', 'rightSideMealName');

  section.appendChild(leftSide);
  section.appendChild(rightSide);

  rightSide.appendChild(cardBuilder());
  return section;
}

function cardBuilder() {
  const section = document.createElement('section');

  return section;
}

export { menuSkeletonBuild, cardBuilder};
