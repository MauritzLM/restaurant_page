function loadContact(element) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');

    div.append(h3);

    h3.innerText = 'Contact Us';

    element.append(div);

}

export default loadContact