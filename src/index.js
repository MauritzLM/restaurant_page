import './style.css';
import main_image from './img/image1.jpg';
import water_image from './img/water.jpg';
import loadMenu from './menu';
import loadHome from './home';
import loadContact from './contact';


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
    removeAllChildNodes(content);
    menuTab.classList.add('selected-nav');
    homeTab.classList.remove('selected-nav');
    contactTab.classList.remove('selected-nav');
    loadMenu(content);

});

homeTab.addEventListener('click', (e) => {
    removeAllChildNodes(content);
    homeTab.classList.add('selected-nav');
    menuTab.classList.remove('selected-nav');
    contactTab.classList.remove('selected-nav');
    loadHome(content);
});

contactTab.addEventListener('click', (e) => {
    removeAllChildNodes(content);
    contactTab.classList.add('selected-nav');
    menuTab.classList.remove('selected-nav');
    homeTab.classList.remove('selected-nav');
    loadContact(content);
})




loadHome(content);


