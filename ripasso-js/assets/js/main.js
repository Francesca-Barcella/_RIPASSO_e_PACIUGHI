/* // creare array con lista della spesa - (const)
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
} */


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


//METODO 1 - const + innerhtml
//pesco l'elemento dal dom
const mascarpone = document.getElementById('mascarpone');
// assegno alla variabile un valore con innerHTML e in automatico entra nel dom
mascarpone.innerHTML = ('mascarpone');

//METODO 2 - innerhtml
//per evitare un passaggio evito di creare la variabile e assegno direttamente al "pescaggio" un valore sempre con innerHTML
document.getElementById('panna_fresca').innerHTML = ('panna fresca liquida 2')

//METODO 3 - createElement + append
//aggiungo un li con createElement
const zuccheroAvelo = document.createElement('li');
const pavesini = document.createElement('li');
//do un valore stringa alla variabile
zuccheroAvelo.innerHTML = '60 g di zucchero a velo';
pavesini.innerHTML = 'pavesini';
//appendo la mia variabile ad ul del dom
document.querySelector('.lista_ingredienti').append(zuccheroAvelo);
document.querySelector('.lista_ingredienti').append(pavesini);


//generare serie di numeri random unici
const bombs = [];
while(bombs.length < 16){
    const bomb = Math.floor(Math.random() * 100) + 1;
    if(bombs.indexOf(bomb) === -1) bombs.push(bomb);
}
console.log(bombs);







