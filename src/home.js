import main_image from './img/image1.jpg';


function loadHome(element) {

    // Heading
    const heading_div = document.createElement('div');
    const heading = document.createElement('h1');
    heading.innerText = 'The Pizza Co.';
    heading_div.classList.add('title');
    heading_div.append(heading);

    // Description
    const p1_div = document.createElement('div');
    const p1 = document.createElement('p');
    p1.innerText = 'Welcome to The Pizza Co. Here we express our passion for good food and conversations with friends. We offer the classics as well as our or your own creations. Come join us for a nice cozy time!';
    p1_div.classList.add('description');
    p1_div.append(p1);

    // Info

    // const info_div = document.createElement('div');
    // info_div.classList.add('info-container');

    const info_heading = document.createElement('h3');
    info_heading.innerText = 'Hours';

    const hours_div = document.createElement('div');

    const day_div = document.createElement('div');
    day_div.classList.add('days-container');
    const weekdays = document.createElement('p');
    const saturday = document.createElement('p');
    const sunday = document.createElement('p');

    weekdays.innerText = 'Monday - Friday: 9am - 10pm';
    saturday.innerText = 'Saturday: 10am - 11pm';
    sunday.innerText = 'Sunday: 10am - 5pm';
    day_div.append(weekdays, saturday, sunday);

    hours_div.append(info_heading, day_div);

    // Image

    const imagediv = document.createElement('div');


    const myImage = new Image();

    myImage.src = main_image;
    myImage.style.height = '40%';
    myImage.style.width = '40%';
    imagediv.append(myImage)

    // info_div.append(hours_div);


    element.append(heading_div, imagediv, p1_div, hours_div);

}

export default loadHome
