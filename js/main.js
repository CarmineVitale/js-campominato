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





//Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.




//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.




//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.