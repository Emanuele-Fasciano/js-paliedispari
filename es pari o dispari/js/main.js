// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userChoise = prompt("scegliere pari o dispari") //L'utente sceglie pari o dispari
console.log(`l' user sceglie: ${userChoise}`);

// while(userChoise != "pari"){
//     userChoise = prompt("scegliere pari o dispari")
// }

let userNumber = parseInt(prompt("scegliere un numero da 1 a 5")) // L'utente inserisce inserisce un numero da 1 a 5
console.log(`numero dell user: ${userNumber}`);

while(userNumber > 6){
    userNumber = parseInt(prompt("scegliere un numero da 1 a 5"))
}

 const pcNumber = pcRandomNUmber(); // salvo il numero randomico del pc in una costante
 console.log(`numero dell pc: ${pcNumber}`);

 const sommaPcUserNumber = userNumber + pcNumber; // sommo i due numeri
 console.log(`la somma dei due numeri è ${sommaPcUserNumber}`);

 if(isEaven(sommaPcUserNumber)){
    console.log("il numero è pari");
 } else {
    console.log("il numero è dispari");
 }

if(isEaven == true && userChoise == "pari"){
    console.log(`vince l' user`);
}
else if(isEaven == false && userChoise == "dispari"){
    console.log(`vince l' user`);
} else{
    console.log(`vince il pc`);
}


debugger;
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


