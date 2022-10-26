const { createApp } = Vue;

createApp({
    data() {

        return {
            //message: 'hello vue!',
            title: 'Ripasso vue js',
            isButtonDisabled: true, // DISABILITATO
            //isButtonDisabled: false, // ABILITATO
            //isButtonDisabled: '', // STRINGA VUOTA === false == ABILITATO

        }
    }
}).mount('#app');
