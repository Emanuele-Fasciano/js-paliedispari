// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//input element
const buttonEl = document.getElementById("button")
const userWordEl = document.getElementById("text_input")
const resultEl = document.getElementById("result")

buttonEl.addEventListener(
    "click",
    function(){
        
        const userWord = userWordEl.value
        let outputMessage;

    const reverseWord = reverseString(userWord); // salvo la stringa al contrario in una variabile

    if(userWord == reverseWord){
    outputMessage = `la parola ${userWord} è palindroma`;
    } else {
    outputMessage = `la parola ${userWord} non è palindroma`;
    }
    //output element
    resultEl.innerHTML = `${outputMessage}`
        }
)


function reverseString(str) { // dichiaro una funzione che invertirà le stringhe
   
    let newString = "";  // creo una stringa vuota dove inserirò la parola al contrario
 
    for (let i = str.length - 1; i >= 0; i--) { // creo un loop di decremento che invertirà la stringa
        newString += str[i];
    }
    return newString; // return della stringa al contrario
}


