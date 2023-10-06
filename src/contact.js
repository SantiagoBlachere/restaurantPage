

export default function contact() {
    const rootDiv = document.querySelector('#content');

    const contactContainer = document.createElement('section');
    contactContainer.classList.add('contact');

    const titleContact = document.createElement('h2');
    titleContact.innerText = 'CONTACTO';
    contactContainer.appendChild(titleContact);

    const contacts = document.createElement('p');
    contacts.innerText = `Dirección: Calle de la Desilusión, No. 123
    Ciudad: Ciudad Desastre
    Teléfono: (555) 123-4567
    Correo electrónico: info@pancheriaosvaldo.com`
    contactContainer.appendChild(contacts);

    rootDiv.appendChild(contactContainer);
}