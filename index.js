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
 Первая часть строки ввода состоит из целых чисел через запятую, следующая часть состоит из разделенных пробелом целых чисел.
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
    console.log('Правая диагональ = ' + rightDiagonal);

    for (let i = columns - 1; i < arr.length - 1; i += (columns - 1)) {
        // console.log(arr[i]);
        leftDiagonal += arr[i];
    }
    console.log('Левая диагональ = ' + leftDiagonal);
    // Делаем проверку: если из "правая" диагональ больше "левой", то вычитаем как есть. Если "правая" меньше, то добавляем по математическим правилам перед скобкой знак "-", чтоюы число
    // стало положительным.
    if (rightDiagonal > leftDiagonal) {
        return rightDiagonal - leftDiagonal;
    } else {
        return -(rightDiagonal - leftDiagonal);
    }
}

console.log('Разница сумм диагоналей = ' + diagonalDifference(array)); // Разница сумм диагоналей равна - 48
console.log('Разница сумм диагоналей = ' + diagonalDifference(array_2)); // Разница сумм диагоналей равна - 117


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

console.log('Разница сумм диагоналей = ' + diagonalDifference(array)); // Разница сумм диагоналей равна - 2.




/** Задача:
 * Вычислить длины диагоналей матрицы и абсолютную разницу между ними в случае, когда массив данных имеет вложенные массивы:
 * Если вложенный массив содержит элементов больше, чем требуется для построения квадратной матрицы - ограничить массив.
 *
 * */
let array = [ [ 11, 2, 4, 3 ], [ 4, 5, 6, 1 ], [ 10, 8, -12, 1 ] ];

function diagonalDifference(arr) {
    let rightDiagonal = 0;
    let leftDiagonal = 0;

    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i].length = arr.length;
        console.log('Правая диагональ ' + arr[i][i]);
        rightDiagonal += arr[i][i];

        arr[i].reverse();
        console.log('Левая диагональ ' + arr[i][i]);
        leftDiagonal += arr[i][i]  ;
    }
    console.log('Сумма диагонали = ' + rightDiagonal);
    console.log('Сумма диагонали = ' + leftDiagonal);

    if (rightDiagonal > leftDiagonal) {
        return rightDiagonal - leftDiagonal;
    } else {
        return -(rightDiagonal - leftDiagonal);
    }
}

console.log('Разница сумм диагоналей = ' + diagonalDifference(array));




/** Задача:
 *Имеется массив целых чисел от -n до +n. Необходимо вычислить все положительные числа, все отрицательные и числа равные 0.
 * Найти соотношение количества положительных, отрицательных и "нулевых" чисел к общему количеству чисел в массиве.
 * Записать результат соотношения, как десятичную дробь с 6 знаками после запятой.
 * Конечный результат должен быть представлен в виде строк:
 * 1 строка - результат соотношения положительных чисел;
 * 2 строка - результат соотношения отрицательных чисел;
 * 3 строка - результат соотношения "нулевых" чисел.
 * Например:
 0.500000
 0.333333
 0.166667
 *
 * */
let array = [ -4, 3, -9, 0, 4, 1 ];

function plusMinus(arr) {
    let positive = [];
    let negative = [];
    let zero = [];
    arr.forEach(function(item){
        if(item > 0){
            positive.push(item);
        }
        if(item < 0){
            negative.push(item);
        }
        if(item === 0){
            zero.push(item);
        }
    });

    let strPositive = (positive.length/arr.length).toFixed(6);
    let strNegative = (negative.length/arr.length).toFixed(6);
    let strZero = (zero.length/arr.length).toFixed(6);

    let result = strPositive + '\n' + strNegative + '\n' + strZero;
    // или через массив...
//let result = [];
//result.push(strPositive, strNegative, strZero);
//result = result.join('\n');
    console.log(typeof result);
    return result;
}

console.log('Результат соотношения:' + '\n' + plusMinus(array));
// Результат соотношения:
// 0.500000
// 0.333333
// 0.166667





/** Задача:
 * Написать функцию, которая выводила бы в консоль лестницу, высота и ширина основания которой равнялась бы целому числу 'n':
 * Пример:
 #
 ##
 ###
 ####
 #####
 ######
 Высота и ширина основания лестницы равна 6 '#':
 * */
function staircase(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
        let newArr = arr.map((item) => item = '#');
        let str = newArr.join('');
        console.log(str);
    }
}

staircase(6);
// #
// ##
// ###
// ####
// #####
// ######

/** ИЛИ */
function staircase(n) {
    let str =new Array(n+1).join('#');
    for(let i = 1; i <= n; i++){
        let newStr = str.substr(-[i], [i]);
        console.log(newStr);
    }
}
staircase(6);
// #
// ##
// ###
// ####
// #####
// ######



/**Задача:
 * Усложним предыдущую задачу и построим лестницу с выравниванием по правому краю.
 * Пример:
      #
     ##
    ###
   ####
  #####
 ######
 * Иные условия задачи остаются прежними.
 *
 * */
function staircase(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    let newArr = arr.map((item) => item = ' ');
    for (let i = 0; i < newArr.length; i++) {
        newArr.shift();
        newArr.push('#');
        let str = newArr.join('');
        console.log(str);
    }
}

staircase(6);
//      #
//     ##
//    ###
//   ####
//  #####
// ######



/** Задача:
 * Написать функцию, которая выводила бы в консоль ёлочку, ширина основания которой равнялась бы целому нечетному числу 'n':
 * Пример:
      *
     ***
    *****
   *******
  *********

 * */

function christmasTree(n) {
    let arr = [];
    let newArr = [];
    let resultArr = [];
    for (let i = 0; i < n; i++) {
        arr.push(' ');
    }
    let center = (n-1)/2;
    for(let j=1; j<=n; j++){
        newArr.push('*');
        let filterArr = newArr.filter(function(item, i, arr){
            if(arr.length%2 !== 0){
                return arr;
            }
        });
        if(filterArr.length > 0){
            resultArr.push(filterArr);
        }
    }
    for(let i=0; i <= center; i++){
        let str = resultArr[i].join('');
        let count = center;
        count -= i;
        arr.splice(count, n, str);
        let resultStr = arr.join('');
        console.log(resultStr);
    }
}

christmasTree(9);

//     *
//    ***
//   *****
//  *******
// *********


/**
 * Второй способ решения задачи.
 *
 * */
function staircase(n) {
    if(n%2 === 0){
        n = n +1;
    }
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(' ');
    }

    let center = (n-1)/2;
    arr[center] = '*';

    let str = arr.join('');
    console.log(str);
    for(let i=1; i <= center; i++){
        arr.splice(center, 0, '**');

        arr.shift();

        let resultStr = arr.join('');
        console.log(resultStr);
    }
}

staircase(8);

//     *
//    ***
//   *****
//  *******
// *********