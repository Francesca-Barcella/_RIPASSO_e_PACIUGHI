//alert('funziono')

const words = ['ciao', 'arrivederci', 'addio'];

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
objects.forEach((object, i, objects_array)=> {
    console.log(object); // stampa l'intero oggetto dell'array
    console.log(i); // stampa l'indice dell'oggetto
    console.log(objects_array); //stampa l'intero array
})

objects.forEach((object, i)=> {
    console.log(object.name); // stampa i nomi di ogni oggetto dell'array
    console.log(object.color); // stampa i colori di ogni oggetto dell'array
    console.log(i); 
})

// stampa i nomi e i colori di ogni oggetto dell'array sulla stessa riga
console.log(object.name, object.color); 
objects.forEach((object)=> {
})

