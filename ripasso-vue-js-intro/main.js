const { createApp } = Vue;

createApp({
    data() {

        return {
            message: 'hello vue!',
            title: 'Ripasso vue js',
            //isButtonDisabled: true, // DISABILITATO
            isButtonDisabled: false, // ABILITATO
            //isButtonDisabled: '', // STRINGA VUOTA === false == ABILITATO
            number: 3,
            userName: '',
            textColor: 'color',

            isActive: true,
            hasError: false,
           
           
            classObject:{
                active: true,
                'text-primary': true,
                'text-decoration-line-through': true
            },

            //gestione attributi di un tag
            attributiDiv: {
                id: 'bgColor',
                    //se gli do class container ed ho installato bootsrap prende già le impostazioni di bootstrap
                class: 'container',
                },
    }
},

    methods: {
    changeColor: function () {
        console.log('hai cliccato cambia colore');
        // con il this recupera textColor perchè il methods che lo usa è scritto all'ìinterno del blocco createApp
        if (this.textColor === 'color') {
            this.textColor = 'newColor';
        } else {
            this.textColor = 'color';
        }
    }
}
}).mount('#app');
