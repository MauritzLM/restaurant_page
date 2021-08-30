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
    console.log(e.target);
    removeAllChildNodes(content);
    loadMenu(content);

});

homeTab.addEventListener('click', (e) => {
    removeAllChildNodes(content);
    loadHome(content);
});

contactTab.addEventListener('click', (e) => {
    removeAllChildNodes(content);
    loadContact(content);
})




loadHome(content);


