import water_image from './img/water.jpg';
import coffee_image from './img/coffee.jpg';

function loadMenu(element) {

    // -- BEVERAGES --

    const beverage_div = document.createElement('div');
    const beverages = document.createElement('h3');
    const beverage_container = document.createElement('div');
    beverage_container.classList.add('item-container');

    beverages.innerText = 'Beverages';


    // WATER

    const water_div = document.createElement('div');
    const water_h4 = document.createElement('h4');
    const water_text = document.createElement('p');
    const water_img_div = document.createElement('div');

    water_div.classList.add('item-div');

    // image

    const water_img = new Image();
    water_img.src = water_image;
    water_img.style.height = '50%';
    water_img.style.width = '35%';
    water_img.style.borderRadius = '10px';

    water_h4.innerText = 'Water';
    water_h4.classList.add('item-title');

    water_text.innerText = 'Natural spring water with ice.';
    water_img_div.append(water_img);
    water_img_div.classList.add('img-div');
    water_div.append(water_h4, water_text, water_img_div);

    // COFFEE

    const coffee_div = document.createElement('div');
    const coffee_h4 = document.createElement('h4');
    const coffee_text = document.createElement('p');
    const coffee_img_div = document.createElement('div');

    coffee_div.classList.add('item-div');

    // image

    const coffee_img = new Image();
    coffee_img.src = coffee_image;
    coffee_img.style.height = '50%';
    coffee_img.style.width = '35%';
    coffee_img.style.borderRadius = '10px';

    coffee_h4.innerText = 'Coffee';
    coffee_h4.classList.add('item-title');

    coffee_text.innerText = 'A Warm cup of quality coffee';
    coffee_img_div.append(coffee_img);
    coffee_img_div.classList.add('img-div');
    coffee_div.append(coffee_h4, coffee_text, coffee_img_div);

    // Append beverages to container div

    beverage_container.append(water_div, coffee_div);

    beverage_div.append(beverages, beverage_container);

    // -- CLASSIC PIZZA --

    const classic_div = document.createElement('div');
    const classic_h3 = document.createElement('h3');
    const classic_container = document.createElement('div');
    classic_container.classList.add('item-container');

    classic_h3.innerText = 'Classic Pizza';

    classic_div.append(classic_h3, classic_container);

    element.append(beverage_div, classic_div);

}

export default loadMenu