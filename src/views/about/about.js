function about() {
  const content = document.getElementById('content');
  const node = document.createElement('div');
  node.className = 'section'
  const container = document.createElement('div');
  container.className = 'container';

  const name = document.createElement('h2');
  name.innerText = 'Miharu | みはる';
  name.className = 'chef-name'

  const phone = document.createElement('p');
  phone.innerText = '123 123 1234';
  phone.className = 'chef-details';

  const email = document.createElement('p');
  email.innerText = 'miharu@world.pizza'
  email.className = 'chef-details';

  const role = document.createElement('p');
  role.innerText = 'Head Chef';
  role.className = 'chef-details';

  container.append(name, role, phone, email)
  node.append(container);
  content.appendChild(node);
}

export { about };