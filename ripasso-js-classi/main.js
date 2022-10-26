//alert('funziono');

class persona {
	constructor(nome, cognome) {
		this.nome = nome;
		this.cognome = cognome;
		this.email = "";
		this.indirizzo = "";
	} 
	mostraNomeCompleto() {
		return this.nome + " " + this.cognome;
	}
}

var marioRossi = new persona("Mario", "Rossi");