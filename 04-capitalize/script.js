/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/


function capitalize(str) {
    const strWords = str.split(' ');
    let collectedStr = '';

    for (i = 0; i < strWords.length; i++) {
      const firstLetter = strWords[i].slice(0, 1).toUpperCase();
      const secondLetters = strWords[i].slice(1);
      const finishedWord = firstLetter + secondLetters;
      collectedStr += finishedWord + ' ';
    };
    const finishedStr = collectedStr.slice(0, -1);
    return finishedStr;
};

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"