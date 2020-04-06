//Il computer deve generare 16 numeri casuali tra 1 e 100.

var bombe = [];
var num;
for (var i = 0; i < 16; i++) {
    num = Math.floor(Math.random()* 100) + 1;
    console.log(num);
    
    
    if (!bombe.includes(num)) {
        bombe.push(num);
    } else {
        i = i - 1;
    }

}

console.log(bombe);



//In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

var numUser;
var listaNumUser = [];
var gioco = true;
var punteggio = 0;



while (gioco) {
    numUser = parseInt(prompt('Inserisci un numero da 1 a 100'));
    if (bombe.includes(numUser)) {
        console.log('Hai perso');
        console.log('Il tuo punteggio è' + punteggio);
        
        gioco = false;
}
else if (listaNumUser.includes(numUser)) {
    console.log('inserisci un numero che non hai mai inserito');
    
}
else {
    listaNumUser.push(numUser);
    console.log('vai avanti');
    punteggio++;
    
}
}


//Se il numero  è presente nella lista dei numeri generati BOMBE (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.




//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.




//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.