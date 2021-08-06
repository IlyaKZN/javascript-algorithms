/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    for (n = 1 ; n <= num ; n++) {
        if (n % 3 === 0 && n % 5 === 0) {
            console.log('fizzbuzz');
        } else
        if (n % 3 === 0) {
            console.log('fizz');
        } else 
        if (n % 5 === 0) {
            console.log('buzz');
        } else
            console.log(n);
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));