import './style.css';
import main_image from './image1.jpg';
import loadMenu from './menu';
import loadHome from './home';


const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');
const content = document.getElementById('content');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

menuTab.addEventListener('click', (e) => {
    console.log(e.target);
    removeAllChildNodes(content);
    loadMenu(content);

});

homeTab.addEventListener('click', (e) => {
    removeAllChildNodes(content);
    loadHome(content);
});




loadHome(content);


