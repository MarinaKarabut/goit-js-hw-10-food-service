import cardDishes from '../menu.json'


import cardCreateFunction from "../templates/cards.hbs";


const menuList = document.querySelector('.js-menu')
const cardHTMarkup = cardCreateFunction(cardDishes);

menuList.insertAdjacentHTML("beforeend", cardHTMarkup)