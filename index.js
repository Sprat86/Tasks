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




/** Задача:
 * Есть строка с целыми числами. Например: '55 1 20 3 2 41 4 5 38'.
 * Необходимо написать функцию, которая возвращала бы строку, содержащую через пробел сумму с первого до предпоследнего элемента и сумму со второго до последнего элемента.
 * При том, что числа в строке должны быть отсортированы по возвастанию.
 * Например:
 * строка с целыми числами: 3, 1, 5, 4, 2
 * отсортированная по возрастанию: 1, 2, 3, 4, 5
 * сумма с первого до предпоследнего элемента (минимальная сумма) - 1+2+3+4 = 10
 * сумма со второго до последнего элемента (максимальная сумма) - 2+3+4+5 = 14
 * Вывод в консоль: 10 14
 * */
let str = '55 1 20 3 2 41 4 5 38';

function miniMaxSum(str) {
    let resultMin = 0;
    let resultMax = 0;
    let arr = str.split(' ');

    arr = arr.map(function(item){
        return +item;
    });

    function sortArr(a, b){
        if (a > b){
            return 1
        }
        if (a < b){
            return -1
        }
        if (a === b){
            return 0
        }
    }

    arr.sort(sortArr);

    for(let i = 0; i < arr.length-1; i++){
        resultMin +=arr[i];
    }

    for(let i = 1; i < arr.length; i++){
        resultMax +=arr[i];
    }

    let result = [resultMin, resultMax].join(' ');
    return result;
}

console.log("Результат равен: " + miniMaxSum(str));
// Результат равен: 114 168


/**
 * или другой способ решения предыдущей задачи:
 * */
let str = '55 1 20 3 2 41 4 5 38';

function miniMaxSum(str) {

    let arrMin = str.split(' ');
    let arrMax = str.split(' ');

    arrMin = arrMin.map(function(item){
        return +item;
    });

    arrMax = arrMax.map(function(item){
        return +item;
    });

    function sortArr(a, b){
        if (a > b){
            return 1
        }
        if (a < b){
            return -1
        }
        if (a === b){
            return 0
        }
    }

    function reduceArr(sum, item){
        return sum + item
    }

    let resultMin = arrMin.sort(sortArr);
    let resultMax = arrMax.sort(sortArr);

    resultMin.pop();
    resultMin = resultMin.reduce(reduceArr);

    resultMax.shift();
    resultMax = resultMax.reduce(reduceArr);


    let result = [resultMin, resultMax].join(' ');
    return result;
}

console.log("Результат равен: " + miniMaxSum(str));
// Результат равен: 114 168




/** Задача:
 На вечеринку приглашены дети разных возрастов. Однако, один из конкурсов предусматривал участие детей самых старших по возрасту.
 Необходимо написать функцию, которая возвращала бы количество участников конкурса.
 Возраст участников вечеринки представлен массивом целых чисел.
 Например, [3, 5, 7, 8, 4, 8]
 Из них самые старшие по возрасту - 2 человека, им по 8 лет. Они и будут допущены до конкурса.
 * */

let arr = [1, 3, 5, 7, 4, 7, 8, 9, 4, 6, 7, 9, 6, 9, 3, 9];

function partyAgeMax (ar) {

    function sortArr(a, b){
        if (a>b){
            return 1
        }
        if (a<b){
            return -1
        }
        if (a === b){
            return 0
        }
    }

    ar.sort(sortArr);
    ar.reverse();

    let resultArr = ar.filter(function(item, i, arr){
        if (arr[0] === arr[i]){
            return item;
        }
    });

    let result = resultArr.length;
    return result;
}
console.log("В конкурсе могут участвовать " + partyAgeMax(arr) + " ребенка.");
// В конкурсе могут участвовать 4 ребенка.




/** Задача:
 * Дана строка со значением времени в формате АМ/РМ.
 * Необходимо написать функцию, которая возвращает время в 24-часовом формате.
 * Например:
 '11:00:45PM' = "23:00:45"
 '11:00:45AM' = "11:00:45"
 '12:24:13PM' = "12:24:13"
 '12:24:13AM' = "00:24:13"
 *
 */
let time = '11:00:45PM';
let time_2 = '11:00:45AM';
let time_3 = '12:24:13PM';
let time_4 = '12:24:13AM';

function timeConversion(s) {
    let hour = 12;

    if (s.indexOf('PM') !== -1) {
        let result = s.slice(0, -2);

        if (result.indexOf('12') !== -1){
            return result;
        }else {
            let str = result.slice(0, 2);
            hour = String(+str + hour);
            if (hour >= '00' && hour <= 23) {
                return hour.concat(result.slice(2));
            }
        }
    }

    if (s.indexOf('AM') !== -1) {
        let result = s.slice(0, -2);
        if (result.indexOf('12') !== -1){
            hour = '00';
            return hour.concat(result.slice(2));
        } else {
            return result;
        }
    }

}

timeConversion(time);   // "23:00:45"
timeConversion(time_2); // "11:00:45"
timeConversion(time_3); // "12:24:13"
timeConversion(time_4); // "00:24:13"




/** Задача:
 * В Университете перед сессией студентам необходимо сдать зачет на балл не ниже 50. Однако у преподавателя есть своя система поощрения.
 * Он округляет студентам баллы по следующей схеме:
 1. Если при округлении до 5 единиц разница между баллом студента и округленным баллом меньше 3, то оставляет округленный балл.
 Например: балл студента = 73. Округление до 5 единиц = 74. 75 - 73 < 3. Значит остается 75.
 2. Если при округлении до 5 единиц разница между баллом студента и округленным баллом равна 3, то оставляет балл студента.
 Например: балл студента = 57. Округление до 5 единиц = 60. 60 - 57 = 3. Значит остается 57.
 3. Если же балл студента даже при округлении не дотягивает до проходного балла, то остается балл студента.
 Например: балл студента 42. Балл после округления = 45. Значит остается 42.
 Необходимо написать функцию, которая возвращала бы количество студентов, допущенных до зачета (набравших проходной балл) и
 количество студентов, отправленных на пересдачу (не набравших проходной балл).
 *
 * Баллы студентов представлены в виде массива целых чисел.
 **/
let arr = [ 73, 67, 29, 81, 30, 58, 68, 33, 51 ];

function gradingStudents(grades) {
    let arrGrades = [];

    function roundGrade (num){
        return Math.ceil(num/5)*5;
    }

    grades.forEach(function(item){
        if ((item + 5) < 50) {
            arrGrades.push(item)
        } else if((roundGrade(item) - item) < 3){
            arrGrades.push(roundGrade(item));
        } else if((roundGrade(item) - item) >= 3){
            arrGrades.push( item);
        }
    });

    let arrTest = arrGrades.filter((item)=> {
        if(item >= 50){
            return item;
        }
    });

    let arrFail = arrGrades.filter((item)=> {
        if(item < 50){
            return item;
        }
    });

    let strTest = "До сессии допущены " + arrTest.length + " студента(ов).";
    let strFail = "Отправлены на пересдачу " + arrFail.length + " студента(ов).";
    let result = strTest + '\n' + strFail;
    return result;
}

gradingStudents(arr);

// "До сессии допущены 6 студента(ов).
// Отправлены на пересдачу 3 студента(ов)."

