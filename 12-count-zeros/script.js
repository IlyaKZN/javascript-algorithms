/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
    let numberZeros = 0;
    let numbers = [];

    for (i = 1; i <= n; i++) {
        numbers.splice(0, 0, i);
    }

    numbers.forEach((number) => {
        number = String(number);
        num = number.split('');
        num.forEach((m) => {
            if (m === '0') {
                numberZeros++;
            }
        })   
    })
    return numberZeros;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
