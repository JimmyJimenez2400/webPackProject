export default function contactPage() {
  const contactContainer = document.createElement('section');
  contactContainer.setAttribute('id', 'contactContainer');

  const contact = document.createElement('section');
  contact.setAttribute('class', 'contact');

  contactContainer.appendChild(contact);

  const heading = document.createElement('h2');

  heading.textContent = 'Contact Page';

  contact.appendChild(heading);

  const contactForm = document.createElement('form');
  contactForm.setAttribute('class', 'contactForm');
  contactForm.setAttribute(
    'action',
    'https://formspree.io/jimmyjimenez24000@gmail.com'
  );
  contactForm.setAttribute('method', 'POST');

  contact.appendChild(contactForm);

  const unorderdList = document.createElement('ul');

  contactForm.appendChild(unorderdList);

  unorderdList.appendChild(
    liElement_Input('name', 'Your Name:', 'input', 'name', 'text', 'user_name')
  );
  unorderdList.appendChild(
    liElement_Input('email', 'Email:', 'input', 'email', 'email', 'user_email')
  );

  unorderdList.appendChild(
    liElement_Input(
      'message',
      'Message:',
      'textarea',
      'message',
      'text',
      'user_message'
    )
  );

  const listItem2 = document.createElement('li');

  const buttonSubmit = document.createElement('button');
  buttonSubmit.setAttribute('type', 'submit');
  buttonSubmit.textContent = 'submit';

  listItem2.appendChild(buttonSubmit);

  unorderdList.appendChild(listItem2);

  return contactContainer;
}

function liElement_Input(
  labelID,
  labelContext,
  inputElement,
  inputID,
  inputType,
  inputName
) {
  const listItem = document.createElement('li');
  listItem.classList.add('listItem');

  const labelForName = document.createElement('label');
  labelForName.setAttribute('id', `${labelID}`);
  labelForName.textContent = `${labelContext}`;

  const inputForName = document.createElement(`${inputElement}`);
  inputForName.setAttribute('id', `${inputID}`);
  inputForName.setAttribute('type', `${inputType}`);
  inputForName.setAttribute('name', `${inputName}`);

  listItem.appendChild(labelForName);
  listItem.appendChild(inputForName);

  return listItem;
}
