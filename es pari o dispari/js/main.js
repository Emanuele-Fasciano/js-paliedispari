// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//imput elements
const userChoiseEl = document.getElementById("userChoise")
const userNumberEl = document.getElementById("userNumber")
const evenOrOddEl = document.getElementById("evenOrOdd")
const whoWinEl = document.getElementById("whoWin")
const buttonEl = document.getElementById("button")
const resetEl = document.getElementById("reset")

buttonEl.addEventListener(
    "click",
    function () {
        let userChoise = userChoiseEl.value//L'utente sceglie pari o dispari

        let userNumber = parseInt(userNumberEl.value) // L'utente inserisce inserisce un numero da 1 a 5
        let evenOrOddMessage;
        let whoWin;

        const pcNumber = pcRandomNUmber(); // salvo il numero randomico del pc in una costante
        console.log(`numero dell pc: ${pcNumber}`);

        const sommaPcUserNumber = userNumber + pcNumber; // sommo i due numeri
        console.log(`la somma dei due numeri è ${sommaPcUserNumber}`);

        if(isEaven(sommaPcUserNumber)){ 
          evenOrOddMessage = "il numero è pari"  // se sommaPcUserNumber è pari stampo "il numero è pari"
        } else {
          evenOrOddMessage = "il numero è dispari"  // se sommaPcUserNumber è dispari stampo "il numero è dispari"
        }
        evenOrOddEl.innerHTML = evenOrOddMessage  // stampo nell HTML il risultato

        if(isEaven == true && userChoise == "pari"){  // verifico se l' user ha scelto in modo vincente "pari o dispari"
         whoWin = `Complimenti, hai vinto`
        }
        else if(isEaven == false && userChoise == "dispari"){
        whoWin = `Complimenti, hai vinto`
        } else{
        whoWin = `ritenta, ha vinto il pc`
        }
        whoWinEl.innerHTML = whoWin;  // stampo nell' HTML chi ha vinto

    }
)

resetEl.addEventListener(  // resetto per giocare un' altra partita
	"click",
	function () {
		userChoiseEl.value = "";
		userNumberEl.value = "";
        evenOrOddEl.innerHTML = "";
        whoWinEl.innerHTML = "";
	}
)


function pcRandomNUmber (){  // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    const resault = Math.floor(Math.random() * 5) + 1;

    return resault
}

function isEaven(number) {  // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    if(number % 2 == 0){
        return  true
    } else{
        return false
    }
    
}


