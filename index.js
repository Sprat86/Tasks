/** Задача:
 *
 Есть 2 игрока. Результаты каждого сохраняются в индивидуальный массив данных.
 Если порядковый номер первого игрока больше порядкового номера второго - первому присуждается очко и наоборот.
 Например, (см. ниже) 17 < 99 - очко присуждается второму игроку, 28 > 16  - первому игроку.
 Очки должны быть представлены в виде массива из двух чисел, например, [2, 1].
 * */
let a = [17, 28, 30];
let b = [99, 16, 8];

function compareTriplets(a, b) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            arr1.push(a[i]);
        } else if (a[i] < b[i]) {
            arr2.push(b[i]);
        }
    }
    let result = [arr1.length, arr2.length];
    return result;
}

let count = compareTriplets(a, b);
console.log(count); // [2, 1]

/** А теперь представим результат в виде строки:*/
let str = count.join(':');
console.log('Игра завершена со счётом ' + str); // Игра завершена со счётом 2:1


/** Задача:
 * Вычислите и выведите сумму элементов в массиве, учитывая, что некоторые из этих целых чисел могут быть довольно большими.

 Описание функции
 Завершите функцию aVeryBigSum. Она должена возвращать сумму всех элементов массива.

 aVeryBigSum имеет следующие параметры:

 ar : массив целых чисел.

 Формат ввода
 Первая часть строки ввода состоит из целых чисел через запятую, следующая часть содержит из разделенных пробелом целых чисел.
 * */

let str = '5, 10, 20, 1000000001 1000000002 1000000003 1000000004 1000000005';
let arr = str.replace(/,/g, '').split(' ');
console.log(arr); // ["5", "10", "20", "1000000001", "1000000002", "1000000003", "1000000004", "1000000005"]
function aVeryBigSum(ar) {
    let result = ar.reduce(function (sum, elem) {
        return sum + +elem; // пишем +elem, чтобы преобразовать элемент массива из строки в число.
    }, 0);
    return result;
}

console.log(aVeryBigSum(arr)); //5000000050


/**
 * Задача:
 * Представить массив целых чисел arr, как квадратную матрицу.
 * Например: массив [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * Квадратная матрица:
 1    2   3
 4    5   6
 7    8   9
 Правая диагональ - 1, 5, 9
 Левая диагональ - 3, 5, 7.

 Рассчитайте абсолютную разницу между суммами ее диагоналей.
 Если в массиве больше элементов, чем необходимо для матрицы - ненужные элементы отбросить.
 Функция diagonalDifference(arr) должна принимать массив с неограниченным количеством целых чисел.
 * */


let array = [4, 5, 8, 8, 10, 1, 34, 6, 98, 34, 67, 1, 5, 7, 21, 57, 45, 27];
let array_2 = [1, 34, 6, 98, 34, 67, 14, 5, 88, 8, 10, 5, 7, 21, 57, 45, 27, 34, 6, 98, 34, 67, 34, 54, 45, 5, 8, 2];

function diagonalDifference(arr) {
    let columns = Math.floor((Math.sqrt(arr.length)));
    console.log(columns); // 4
    arr.length = Math.pow(columns, 2);
    console.log(arr); // [4, 5, 8, 8, 10, 1, 34, 6, 98, 34, 67, 1, 5, 7, 21, 57];
    let rightDiagonal = 0;
    let leftDiagonal = 0;

    for (let i = 0; i < arr.length; i += (columns + 1)) {
        // console.log(arr[i]);
        rightDiagonal += arr[i];
    }
    console.log('Правая диагональ равна ' + rightDiagonal);

    for (let i = columns - 1; i < arr.length - 1; i += (columns - 1)) {
        // console.log(arr[i]);
        leftDiagonal += arr[i];
    }
    console.log('Левая диагональ равна ' + leftDiagonal);
    // Делаем проверку: если из "правая" диагональ больше "левой", то вычитаем как есть. Если "правая" меньше, то добавляем по математическим правилам перед скобкой знак "-", чтоюы число
    // стало положительным.
    if (rightDiagonal > leftDiagonal) {
        return rightDiagonal - leftDiagonal;
    } else {
        return -(rightDiagonal - leftDiagonal);
    }
}

console.log('Разница сумм диагоналей равна - ' + diagonalDifference(array)); // Разница сумм диагоналей равна - 48
console.log('Разница сумм диагоналей равна - ' + diagonalDifference(array_2)); // Разница сумм диагоналей равна - 117


/** Задача:
 * Схожа с предыдущей, однако в ней первый элемент массива принимает значение количества столбцов/строк матрицы.
 * Остальные элементы - часть матрицы.
 * Если в массиве больше элементов, чем необходимо для матрицы - ненужные элементы отбросить.
 * Если значение первого элемента не удовлетворяет условиям задачи - сделать проверку.
 */

let array = [3, 1, 2, 3, 4, 5, 6, 9, 8, 9, 1, 5];

function diagonalDifference(arr) {
    if (Math.pow(arr[0], 2) > arr.length) {
        return console.log('Первый элемент массива не соответствует заданным условиям!');
    }

    let rightDiagonal = 0;
    let leftDiagonal = 0;
    arr.length = Math.pow(arr[0], 2) + 1;
    console.log(arr); // [3, 1, 2, 3, 4, 5, 6, 9, 8, 9]

    for (let i = 1; i < arr.length; i += (arr[0] + 1)) {
        rightDiagonal += arr[i];
    }
    console.log(rightDiagonal);

    for (let i = arr[0]; i < arr.length - 1; i += (arr[0] - 1)) {
        leftDiagonal += arr[i];
    }
    console.log(leftDiagonal);
    if (rightDiagonal > leftDiagonal) {
        return rightDiagonal - leftDiagonal;
    } else {
        return -(rightDiagonal - leftDiagonal);
    }
}

console.log('Разница сумм диагоналей равна - ' + diagonalDifference(array)); // Разница сумм диагоналей равна - 2.





















