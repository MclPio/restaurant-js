function about() {
  const content = document.getElementById('content');
  const node = document.createElement('div');
  node.className = 'contact'

  const name = document.createElement('h2');
  name.innerText = 'Michael';

  const phone = document.createElement('p');
  phone.innerText = '123 123 1234';

  const email = document.createElement('p');
  email.innerText = 'michael@world.pizza'

  const role = document.createElement('p');
  role.innerText = 'Head Chef';

  node.append(name, role, phone, email);
  content.appendChild(node);
}

export { about };