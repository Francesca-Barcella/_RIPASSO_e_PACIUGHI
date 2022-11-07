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
