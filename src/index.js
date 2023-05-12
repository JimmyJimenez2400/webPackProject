import pageLoad from './pageLoad/pageLoad';
import './style.css';
import aboutCompany from './content/main/about';
import hero from './content/main/hero';
import menu from './content/main/menu';
import contactPage from './content/main/contact';

pageLoad();

const allTabs = document.querySelectorAll('.liElement-1');

const mainContainer = document.querySelector('#mainContainer');

console.log(mainContainer);

function clearMainContainer() {
  mainContainer.innerHTML = '';
  return;
}

allTabs.forEach((tab) => {
  console.log(tab);

  tab.addEventListener('click', (e) => {
    console.log(e.target.id);

    switch (e.target.id) {
      case 'home':
        clearMainContainer();
        mainContainer.appendChild(hero());
        console.log('Pressing Home');
        break;
      case 'about':
        clearMainContainer();
        mainContainer.appendChild(aboutCompany());
        console.log('Pressing About');
        break;
      case 'menu':
        clearMainContainer();
        mainContainer.appendChild(menu());
        console.log('Pressing Menu');
        break;
      case 'contact':
        clearMainContainer();
        mainContainer.appendChild(contactPage());
        console.log('Pressing Contact');
        break;
    }
  });
});

// Tab Switching
// Main Problem: Make each li element have their own tab(function call())
// When user presses on a link, example "Home". We want to make the mainContainer contain home function or module??
// When user clicks another link, we want to remove home function, and add the new function

// Require, add event listeners to each tab
// Must wipre out current tab and runs the correct 'tab module'

// 1. Add Event Listeners to our tabs
// 2. Check if it works
// 3. We want to see if the home tab works and shows only
// 4. Next, we want to make an if statement
