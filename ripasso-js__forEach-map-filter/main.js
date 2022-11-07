//#region CICLO FOR EACH

//alert('funziono')

const words = ['ciao', 'arrivederci', 'addio'];
console.log(words);
words.pop();
words.push('bentornato');


words.forEach((element, index, words_array) => {
    console.log(element, index);
});

const objects = [
    {
        name: 'bal',
        color: 'red'
    },
    {
        name: 'chair',
        color: 'pink'
    },
    {
        name: 'skirt',
        color: 'white'
    },
]

//i backpick si portano dietro lo spazio dell'andare a capo anche nella console
console.log('esempio con arrow function e backtick a capo');
objects.forEach((element) => {
    console.log(`
    ${element.name}'s color is ${element.color}
    `);
});

console.log('');

//esempio senza andate a capo
console.log('esempio con arrow function e senza backpick a capo');
objects.forEach((element) => {
    console.log(`${element.name}'s color is ${element.color}`);
});

console.log('');

//esempio senza arrow function
console.log('esempio senza arrow function ma con function anonima');
objects.forEach(function (element) {
    console.log(`${element.name}'s color is ${element.color}`);
});

console.log('');

//non siamo abbligati a stampare ogni volta tutti e tre i parametri ma solo quello che ci serve
objects.forEach((object, i, objects_array) => {
    console.log(object); // stampa l'intero oggetto dell'array
    console.log(i); // stampa l'indice dell'oggetto
    console.log(objects_array); //stampa l'intero array
})

objects.forEach((object, i) => {
    console.log(object.name); // stampa i nomi di ogni oggetto dell'array
    console.log(object.color); // stampa i colori di ogni oggetto dell'array
    console.log(i);
})

// stampa i nomi e i colori di ogni oggetto dell'array sulla stessa riga
objects.forEach((object) => {
    console.log(object.name, object.color);
})

//#endregion CICLO FOR EACH

console.log('');
console.log('');

//#region CICLO MAP
// simile al forEach ma in più necessita un RETURN e ci restituisce un array NUOVO
// anche per map si può mettere element, index, array in base a come ci servono
// dobbiamo salvarla dentro una variabile per avere un nuovo array


const numbers = [10, 25, 30]
console.log('array con numeri iniziali ' + numbers);

const dubleNumbers = numbers.map(function (numb) {
    return numb * 2;
});

console.log('lista dei numeri raddoppiati ' + dubleNumbers); // 20, 50, 60,

const newNumbers = []
numbers.forEach(element => {
    newNumbers.push(element * 2)
})

console.log('nuovo array ' + newNumbers);
//#endregion CICLO MAP

console.log('');

console.log('');

//#region CICLO FILTER
// simile al Map ma restituisce solo valori che soddisfaziono la condizione data
// anche per map si può mettere element, index, array in base a come ci servono
// dobbiamo salvarla dentro una variabile per avere un nuovo array
const numberi = [12, 25, 30, 66, 71]

const isPari = numberi.filter((numb) => {
    if (numb % 2 === 0) {
        return true;
    }
    return false;
});
// così mi restituisce una stringa coi numeri pari 12, 30
console.log('lista dei numeri pari dell\'arrey = ' + isPari); 

// così ricrea un vero e proprio array
console.log(isPari); 

const numeriPari = []
isPari.forEach((element) => {
    numeriPari.push(element)
});

console.log('nuovi array con solo i numeri pari = ' + numeriPari);
console.log(numeriPari);

//ESEMPIO CON ARROW FUNCTIONSEMPLIFICATO
console.log('esempio con arrow functions semplificato');
const numeriArrow = [12, 25, 30, 66, 71];
//posso evitare la doppia parentesi() perchè c'è un solo parametro
// posso evitare le parentesi {} e il return perchè essendo sulla stessa linea le prime non servono e il secondo è implicito 
const pariArrow = numeriArrow.filter(numero => numero % 2 === 0);
console.log(pariArrow);

//#endregion CICLO FILTER