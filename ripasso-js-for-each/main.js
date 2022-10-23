//alert('funziono')

const words = ['ciao', 'arrivederci', 'addio'];

words.forEach((element, index, array) => {
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
objects.forEach((element) => {
    console.log(`
    ${element.name}'s color is ${element.color}
    `);
});

objects.forEach((element) => {
    console.log(`${element.name}'s color is ${element.color}`);
});