// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt("inserisci una parola");

const reverseWord = reverseString(userWord); // salvo la stringa al contrario in una variabile

if(userWord == reverseWord){
    console.log(`la parola ${userWord} è palindroma`);
} else {
    console.log(`la parola ${userWord} non è palindroma`);
}



function reverseString(str) { // dichiaro una funzione che invertirà le stringhe
   
    let newString = "";  // creo una stringa vuota dove inserirò la parola al contrario
 
    for (let i = str.length - 1; i >= 0; i--) { // creo un loop di decremento che invertirà la stringa
        newString += str[i];
    }
    return newString; // return della stringa al contrario
}
