document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const contactItem = document.createElement('li');
    contactItem.textContent = `${name}: ${phone}`;

    document.getElementById('contactList').appendChild(contactItem);

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});