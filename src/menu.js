import water_image from './img/water.jpg';
import coffee_image from './img/coffee.jpg';
import hawaiin_image from './img/hawaiin_pizza.jpg';
import pollo_image from './img/pollo_pizza.jpg';
import neapolitan_image from './img/neapolitan_pizza.jpg';
import pepperoni_image from './img/pepperoni_pizza.jpg';

function loadMenu(element) {

    // -- BEVERAGES --

    const beverage_div = document.createElement('div');
    const beverages = document.createElement('h3');
    const beverage_container = document.createElement('div');
    beverage_container.classList.add('item-container');

    beverages.innerText = 'Beverages';


    // 1.WATER

    const water_div = document.createElement('div');
    const water_h4 = document.createElement('h4');
    const water_text = document.createElement('p');
    const water_img_div = document.createElement('div');
    const water_price = document.createElement('h4');

    water_div.classList.add('item-div');

    // image

    const water_img = new Image();
    water_img.src = water_image;
    water_img.style.height = '150px';
    water_img.style.width = '150px';
    water_img.style.objectFit = 'cover';
    water_img.style.borderRadius = '10px';

    // content

    water_h4.innerText = 'Water';
    water_h4.classList.add('item-title');
    water_price.innerText = '$1';
    water_price.classList.add('item-price');

    water_text.innerText = 'Natural spring water with ice.';
    water_img_div.append(water_img);
    water_img_div.classList.add('img-div');
    water_div.append(water_h4, water_text, water_img_div, water_price);

    // 2.COFFEE

    const coffee_div = document.createElement('div');
    const coffee_h4 = document.createElement('h4');
    const coffee_text = document.createElement('p');
    const coffee_img_div = document.createElement('div');
    const coffee_price = document.createElement('h4');

    coffee_div.classList.add('item-div');

    // image

    const coffee_img = new Image();
    coffee_img.src = coffee_image;
    coffee_img.style.height = '150px';
    coffee_img.style.width = '150px';
    coffee_img.style.objectFit = 'cover';
    coffee_img.style.borderRadius = '10px';

    // content

    coffee_h4.innerText = 'Coffee';
    coffee_h4.classList.add('item-title');
    coffee_price.innerText = '$2';
    coffee_price.classList.add('item-price');

    coffee_text.innerText = 'A Warm cup of quality coffee';
    coffee_img_div.append(coffee_img);
    coffee_img_div.classList.add('img-div');
    coffee_div.append(coffee_h4, coffee_text, coffee_img_div, coffee_price);

    // Append beverages to container div

    beverage_container.append(water_div, coffee_div);

    beverage_div.append(beverages, beverage_container);

    // -- PIZZA --

    const pizza_div = document.createElement('div');
    const pizza_h3 = document.createElement('h3');
    const pizza_container = document.createElement('div');
    pizza_container.classList.add('item-container');

    pizza_h3.innerText = 'Pizza';

    // 1.Hawaiin Pizza

    const hawaiin_div = document.createElement('div');
    const hawaiin_h4 = document.createElement('h4');
    const hawaiin_text = document.createElement('p');
    const hawaiin_img_div = document.createElement('div');
    const hawaiin_price = document.createElement('h4');

    hawaiin_div.classList.add('item-div');

    // image

    const hawaiin_img = new Image();
    hawaiin_img.src = hawaiin_image;
    hawaiin_img.style.height = '150px';
    hawaiin_img.style.width = '150px';
    hawaiin_img.style.objectFit = 'cover';
    hawaiin_img.style.borderRadius = '10px';

    // content

    hawaiin_h4.innerText = 'Hawaiin';
    hawaiin_h4.classList.add('item-title');
    hawaiin_price.innerText = '$7';
    hawaiin_price.classList.add('item-price');

    hawaiin_text.innerText = 'Deliciously salty and sweet! With chicken, pineapple, red onions and cheese.';
    hawaiin_img_div.append(hawaiin_img);
    hawaiin_img_div.classList.add('img-div');
    hawaiin_div.append(hawaiin_h4, hawaiin_text, hawaiin_img_div, hawaiin_price);

    // 2.Pepperoni Pizza

    const pepperoni_div = document.createElement('div');
    const pepperoni_h4 = document.createElement('h4');
    const pepperoni_text = document.createElement('p');
    const pepperoni_img_div = document.createElement('div');
    const pepperoni_price = document.createElement('h4');

    pepperoni_div.classList.add('item-div');

    // image

    const pepperoni_img = new Image();
    pepperoni_img.src = pepperoni_image;
    pepperoni_img.style.height = '150px';
    pepperoni_img.style.width = '150px';
    pepperoni_img.style.objectFit = 'cover';
    pepperoni_img.style.borderRadius = '10px';

    // content

    pepperoni_h4.innerText = 'Pepperoni';
    pepperoni_h4.classList.add('item-title');
    pepperoni_price.innerText = '$7';
    pepperoni_price.classList.add('item-price');

    pepperoni_text.innerText = 'Topped with Pepperoni, cheese and tomato pasta sauce.';
    pepperoni_img_div.append(pepperoni_img);
    pepperoni_img_div.classList.add('img-div');
    pepperoni_div.append(pepperoni_h4, pepperoni_text, pepperoni_img_div, pepperoni_price);



    // 3.Neapolitan Pizza

    const neapolitan_div = document.createElement('div');
    const neapolitan_h4 = document.createElement('h4');
    const neapolitan_text = document.createElement('p');
    const neapolitan_img_div = document.createElement('div');
    const neapolitan_price = document.createElement('h4');

    neapolitan_div.classList.add('item-div');

    // image

    const neapolitan_img = new Image();
    neapolitan_img.src = neapolitan_image;
    neapolitan_img.style.height = '150px';
    neapolitan_img.style.width = '150px';
    neapolitan_img.style.objectFit = 'cover';
    neapolitan_img.style.borderRadius = '10px';

    // content

    neapolitan_h4.innerText = 'Neapolitan';
    neapolitan_h4.classList.add('item-title');
    neapolitan_price.innerText = '$8';
    neapolitan_price.classList.add('item-price');

    neapolitan_text.innerText = 'Naples-style pizza with mozarella cheese and tomatoes.';
    neapolitan_img_div.append(neapolitan_img);
    neapolitan_img_div.classList.add('img-div');
    neapolitan_div.append(neapolitan_h4, neapolitan_text, neapolitan_img_div, neapolitan_price);

    // 4.Pollo Pizza

    const pollo_div = document.createElement('div');
    const pollo_h4 = document.createElement('h4');
    const pollo_text = document.createElement('p');
    const pollo_img_div = document.createElement('div');
    const pollo_price = document.createElement('h4');

    pollo_div.classList.add('item-div');

    // image

    const pollo_img = new Image();
    pollo_img.src = pollo_image;
    pollo_img.style.height = '150px';
    pollo_img.style.width = '150px';
    pollo_img.style.objectFit = 'cover';
    pollo_img.style.borderRadius = '10px';

    // content

    pollo_h4.innerText = 'Pollo';
    pollo_h4.classList.add('item-title');
    pollo_price.innerText = '$8';
    pollo_price.classList.add('item-price');

    pollo_text.innerText = 'Grilled chicken, green bell peppers, olives and cheese';
    pollo_img_div.append(pollo_img);
    pollo_img_div.classList.add('img-div');
    pollo_div.append(pollo_h4, pollo_text, pollo_img_div, pollo_price);



    // Append Classic pizzas to container div 

    pizza_container.append(hawaiin_div, pepperoni_div, neapolitan_div, pollo_div);

    pizza_div.append(pizza_h3, pizza_container);

    element.append(beverage_div, pizza_div);

}

export default loadMenu