import main_image from './image1.jpg';
import loadMenu from './menu';

function loadHome(element) {

    const heading = document.createElement('h1');
    const p1 = document.createElement('p');
    const myImage = new Image();

    myImage.src = main_image;

    heading.innerText = 'Restaurant Page';
    p1.innerText = 'The Best Restaurant in town!';


    element.appendChild(heading);
    element.appendChild(p1);
    element.appendChild(myImage);

}

export default loadHome
