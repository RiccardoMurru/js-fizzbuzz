/**
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
    per i multipli di 3 stampi “Fizz” al posto del numero
    per i multipli di 5 stampi Buzz.
    per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 */

 var number;
 var list = document.getElementById('list');



 for (var i = 1; i < 101; i++ ) {
     // stampa i numeri da 1 a 100
    number = i;
    

    // multipli di 3 e 5: FizzBuzz
    if ((number % 3  == 0) && (number % 5 == 0)) {
        list.innerHTML += '<li class="fizzbuzz">' + 'FizzBuzz' + '</li>';

    // multipli di 3: Fizz  
    } else if (number % 3 == 0) {
        list.innerHTML += '<li class="fizz">' + 'Fizz' + '</li>';

    // multipli di 5: Buzz    
    } else if (number % 5 == 0) {
        list.innerHTML += '<li class="buzz">' + 'Buzz' + '</li>';
        
    } else {
        list.innerHTML += '<li>' + number + '</li>';
        
    }
 }