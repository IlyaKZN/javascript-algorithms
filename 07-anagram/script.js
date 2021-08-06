/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    let anagramBool = new Boolean;
    str1 = str1.toLowerCase().split('');
    str2 = str2.toLowerCase().split('');
    if (str1.join() !== str2.join()) {
        str1 = str1.sort();
        str2 = str2.sort();
        if (str1.join() === str2.join()) {
            anagramBool = true;
        } else {
            anagramBool = false;
        }
    } else {
        anagramBool = false;
    }
    return anagramBool;
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false