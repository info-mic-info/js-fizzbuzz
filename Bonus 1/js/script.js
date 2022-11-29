// PROBLEMA

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1) stampare i numeri da 1 a 100 X
// 2) per i multipli di 3 stampare “Fizz” al posto del numero
// 3) per i multipli di 5 stampi “Buzz” posto del numero
// 4) per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



for (let i = 1; i <= 100; i++) {



    if (i % 3 === 0 && i % 5 === 0) {

       let element = '<div class="fizzbuzz"> ${i} </div>'
        
        // 'FizzBuzz'
    }

    else if (i % 3 === 0) {
        element = 'Fizz'
    }

    else if (i % 5 === 0) {
        element = 
        
        // 'Buzz'
    }

    else {
        element =  i
    }

    document.getElementById("my-element").innerHTML = element;

    console.log (element)

} 