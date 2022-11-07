//alert('funziono')

const words = ['ciao', 'weekend lungo', 'addio'];
console.log(words);
//aggiunge un alemento alla fine
words.push('bentornato');
words.push('buon viaggio');
words.push('buone vacanze');
words.push('arrivederci');
//viene aggiunto un alemento all'inizio dell'array
words.unshift('come va?')
words.unshift('tutto bene?')

//rimuove l'ultimo elemento dell'array
words.pop(); // toglie arrivederci
//rimuove il primo elemento dell'arraya
words.shift(); // toglie tutto bene?
//mette in ordine alfabetico/numerico crescente
words.sort();
//trovare l'ultimo elemenento dell'array senza specificare il numero dell'indice
let word = words[words.length - 1]
console.log('log dell\'ultima parola dell\'array = ' + word);

words.forEach((element, index, words_array) => {
    console.log(element, index);
});

console.log('');

//concatenare due array

const myGirls = ["Cecilie", "Lone"];
console.log(myGirls);
const myBoys = ["Emil", "Tobias", "Linus"];
console.log(myBoys);

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const user = [
    'Francesca',
    43,
    ['Giulia', 'Andrea', 'Marco']
]

console.log(user);
//fare il console log di Andrea
//praticamente user[1] si riferisci al primo array e la seconda parentesti quadra [1]si riferisce al secondo array contenuto all'interno del primo
console.log(user[2][1]);