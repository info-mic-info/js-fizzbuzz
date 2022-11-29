// PROBLEMA

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1) stampare i numeri da 1 a 100 X
// 2) per i multipli di 3 stampare “Fizz” al posto del numero
// 3) per i multipli di 5 stampi “Buzz” posto del numero
// 4) per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// const container= document.querySelector (' .container')

// for (let i = 1; i <= 100; i++) {

//     let element 

//     if (i % 3 === 0 && i % 5 === 0) {

//        element = '<div class="fizzbuzz"> fizzbuzz </div>'

//         // 'FizzBuzz'
//     }

//     else if (i % 3 === 0) {
//         element = '<div class="fizzbuzz"> fizzbuzz </div>'
//     }

//     else if (i % 5 === 0) {
//         element = '<div class="fizzbuzz"> fizzbuzz </div>'
//     }

//     else {
//         element = `<div class="fizzbuzz"> ${i} </div>`
//     }



// container.innerHTML += element;

//     console.log (element)

// } 


const container = document.querySelector(' .container')

for (let i = 1; i <= 100; i++) {

    let class_name = 'element'
    let element_value = ""



    if (i % 3 === 0 && i % 5 === 0) {
        element_value = "FizzBuzz"
        class_name += ' bg-red'


        
    }

    else if (i % 3 === 0) {
        element_value = "Fizz"
        class_name += ' bg-green txt-white'
    }

    else if (i % 5 === 0) {
        element_value = "Buzz"
    }

    else {
        element_value = i
    }


    // container.innerHTML =  container.innerHTML + .....;
    container.innerHTML += `<div class="${class_name}"> ${element_value} </div>`;


}





