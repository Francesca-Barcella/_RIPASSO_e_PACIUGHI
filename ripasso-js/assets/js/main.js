// creare array con lista della spesa - (const)
const shoppingList = [
    '250 g di mascarpone',
    '250 g di panna fresca liquida',
    '60 g di zucchero a velo',
    'pavesini',
    'Nutella',
    '150 g di caffè',
    '70 g di latte',
    'zucchero'
]
//console.log(shoppingList);

// prendere <ul> dal dom
const listaSpesaUl = document.querySelector('.lista_spesa');
//console.log(listaSpesaUl);

// creare ciclo while - (while)
let i = 0;

while (i < shoppingList.length) {
    const listItem = shoppingList[i];
    //console.log(listItem);
    i++
    //aggiungere <li></li> a listaSpesaUl
    const liElement = `<li>${listItem}</li>`;
    //console.log(liElement);
    //inserire liElement in <ul></ul>
    listaSpesaUl.insertAdjacentHTML('beforebegin', liElement);
}


/****************************************************
TENTIAMO CON APPEND
****************************************************/

/* const tiramisuIngredients = [
    '250 g di mascarpone',
    '250 g di panna fresca liquida',
    '60 g di zucchero a velo',
    'pavesini',
    'Nutella',
    '150 g di caffè',
    '70 g di latte',
    'zucchero'
] */

const mascarpone = document.getElementById('mascarpone');
console.log(mascarpone);
mascarpone.innerHTML = ('mascarpone');

const pannaFresca = document.getElementById('panna_fresca');
console.log(pannaFresca);
pannaFresca.innerHTML = ('panna fresca liquida');

const zuccheroAvelo = document.createElement('p');
zuccheroAvelo.innerHTML = '60 g di zucchero a velo';
document.getElementById('zucchero_velo').append(zuccheroAvelo);

