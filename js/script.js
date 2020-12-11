var nome = prompt('Scrivi il tuo nome');
var cognome = prompt('Scrivi il tuo cognome');
var colore = prompt('Qual è il tuo colore preferito');

var psw = nome + cognome + colore + '19';
psw = psw.toLowerCase();
document.getElementById('user-psw').innerHTML = psw;
