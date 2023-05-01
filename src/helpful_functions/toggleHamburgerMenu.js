export default function toggleHambugerMenu() {
  let hamburgerButton = document.querySelector('#toggle');
  const menu = document.querySelector('.not-active');
  console.log(hamburgerButton);
  console.log(menu);

  hamburgerButton.addEventListener('click', function () {
    if (menu.classList.contains('is-active')) {
      console.log('FOUND');
      this.setAttribute('aria-expanded', 'false');
      menu;
      menu.classList.add('not-active');
      menu.classList.remove('is-active');
      hamburgerButton.textContent = 'menu';
      hamburgerButton.style.backgroundColor = '#53917E';
      return;
    } else {
      console.log('NOT FOUND');
      menu.classList.remove('not-active');
      menu.classList.add('is-active');
      hamburgerButton.textContent = 'close';
      hamburgerButton.style.backgroundColor = `#6D1A36`;
      this.setAttribute('aria-expanded', 'true');
      return;
    }
  });

  return hamburgerButton;
}
