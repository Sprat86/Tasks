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

/** ИЛИ */
function staircase(n) {
    let arr = [];
    let str = '#';
    for (let i = 0; i < n; i++) {
        arr.push(str);
        str += '#';
    }
    let result = arr.join('\n');
    console.log(result);
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




/** Задача:
 По краям участка дачника расположены плодовые деревья. Слева от участка яблоня, справа - апельсиновое дерево.
 Если плод яблони падает слева от дерева, то он не попадает на участок, если справа - оказывается на участке, если долетает. С апельсиновым наоборот.
 Границы участка обозначены параметрами функции 's' и 't'. Расположение яблони обозначено буквой 'a', апельсинового дерева буквой 'b'.
 Также на вход функция принимает параметр 'apples' - это массив целых чисел, где положительное число показывает, что плод упал справа от дерева, а отрицательное - слева.
 Величина показывает на какое расстояние от дерева удалился плод. Тоже самое верно и в отношении параметра 'oranges'.
 Например: Участок расположен от s = 7 до t = 15. Яблоня расположена на точке a = 5, а апельсиновое дерево на точке b = 15.
 apples = [2, -2, 1, -4, 3] - 2 яблока упали слева от яблони, 3 яблока - справа. Для oranges - аналогично.
 Необходимо написать функцию, которая возвращала бы количество яблок и апельсинов, упавших на участок дачника.
 *
 * */
let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1, 5, 3, -6, -3, 7, 2];
let oranges = [5, -6, -8, 3, 2, 4, 7, -5, -1];


function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let resultApples = apples.filter((item)=>{
        if(s <= item + a && item + a <= t) {
            return item;
        }
    });

    let resultOranges = oranges.filter((item)=>{
        if(s <= item + b && item + b <= t) {
            return item;
        }
    });

    let result = "На участок дачника упадет яблок - " + resultApples.length + " и апельсинов - " + resultOranges.length;
    return result;

// console.log(resultApples.length + '\n' + resultOranges.length);
}

countApplesAndOranges(s, t, a, b, apples, oranges);

// "На участок дачника упадет яблок - 4 и апельсинов - 3"




/** Задача:
 Два кролика устроили соревнования между собой.
 Первый кролик стартует из точки "х1" и его прыжок равен "v1". Второй кролик стартует из точки "х2" и его прыжок равен "v2".
 Необходимо написать функцию, которая расчитает, смогут ли кролики пересечься в одной точке на N-ном прыжке.
 Если они встретятся, то результатом выполнения функции должна быть строка 'Да, кролики встретятся на N-ном прыжке.', если им встретиться не удастся - 'Нет, кролики встретиться не смогут.'
 Надо учесть, что если второй кролик стартует дальше и его прыжок больше, то первый никогда его не догонит.
 Каждый из кроликов может сделать по 100 прыжков.
 */
let rabbit1 = 0;
let value1 = 2;
let rabbit2 = 11;
let value2 = 1;

function rabbitJump(x1, v1, x2, v2) {
    let result;
    let result1 = x1;
    let result2 = x2;
    let count = 0;

    if (x1 < x2 && v1 < v2){
        return result = 'Нет, кролики встретиться не смогут.';
    }

    for(let i = 1; i <= 100; i++){
        result1 += v1;
        result2 += v2;
        count++;

        if (result1 === result2) {
            return result = 'Да, кролики встретятся на ' + count + ' прыжке.';
        }

    }
    if(result1 !== result2) {
        return result = 'Нет, кролики встретиться не смогут.';
    }

}

rabbitJump(rabbit1, value1, rabbit2, value2);

// "Да, кролики встретятся на 11 прыжке."




/** Задача:
 Есть 2 массива целых четных чисел. Первый массив представлен однозначными числами, второй - двузначными.
 Необходимо определить, сколько чисел в интервале между последним числом первого массива и первым числом второго массива делятся без остатка на любое число двух массивов.
 Например: два массива a = [2, 6] и b = [24, 36]. Между ними 2 числа, которые делятся без остатка на все элементы массивов - 6 и 12. 6%2=0, 6%6=0, 24%6=0, 36%6=0.
 Тоже самое верно и для 12: 12%2=0, 12%6=0, 24%12=0, 36%12=0.
 Результат работы функции необходимо представить в виде строки, где указать сколько чисел делится без остатка и перечислить эти числа.
 * */
let a = [ 2, 4 ];
let b = [ 16, 32, 96 ];

function getTotalX(a, b) {

    let start = a[a.length-1];
    let end = b[0];
    let count = a.length + b.length;
    let result = [];

    for(let i = start; i <= end; i++){
        for (let j = 0; j < a.length; j++){
            if((i % a[j]) === 0){
                result.push(i);
            }
        }
        for (let k = 0; k < b.length; k++){
            if((b[k] % i) === 0){
                result.push(i);
            }
        }
    }

    let obj = {};
    let numbersCount = [];
    let numbers = [];

    result.forEach(function(item){
        obj[item] = obj[item] + 1 || 1;
    });

/** ИЛИ
    let obj = result.reduce(function(sum, item) {
        sum[item] = (sum[item] || 0) + 1;
        return sum;
    }, {});
    console.log(obj);
 Тогда let obj = {} не нужен.
*/

    for (let key in obj) {
        if(obj[key] === count){
            numbersCount.push(obj[key]);
            numbers.push(key);
        }
    }
    return str = "Чисел, на которые делятся без остатка все элементы двух массивов - " + numbersCount.length + ". Это числа: " + numbers;
}

getTotalX(a, b);

// "Чисел, на которые делятся без остатка все элементы двух массивов - 3. Это числа: 4,8,16"


/** Решение предыдущей задачи без использования объекта (через массивы):*/
let a = [ 2, 4 ];
let b = [ 16, 32, 96 ];

function getTotalX(a, b) {

    let start = a[a.length-1];
    let end = b[0];
    let result = [];

    let count = a.length + b.length;

    for(let i = start; i <= end; i++){
        for (let j = 0; j < a.length; j++){
            if((i % a[j]) === 0){
                result.push(i);
            }
        }

        for (let k = 0; k < b.length; k++){
            if((b[k] % i) === 0){
                result.push(i);
            }
        }
    }

    let arrayUniq = Array.from(new Set(result));
    let arrayRepeat = [];
    let numbersCount = [];
    let numbers = [];

    result.forEach((item)=>{
        for (let j = 0; j < arrayUniq.length; j++){
            if (arrayUniq[j] === item) {
                arrayRepeat.push(0);
                arrayRepeat[j]++;

                if (arrayRepeat[j] === count) {
                    numbersCount.push(arrayRepeat[j]);
                    numbers.push(arrayUniq[j]);
                }
            }
        }
    });

    return str = "Чисел, на которые делятся без остатка все элементы двух массивов - " + numbersCount.length + ". Это числа: " + numbers;
}

getTotalX(a, b);

// "Чисел, на которые делятся без остатка все элементы двух массивов - 3. Это числа: 4,8,16"




/** Задача:
  Чапаев каждый день после обеда заходит в тир. Там он стреляет по мишеням и записывает результат в блокнот. Раз в несколько дней он подводит статистику своих успехов.
 За отправную точку подсчета результатов он принимает первый день. Если последующий день неудачный, то он записывает очко в графу "Худший результат",
 если последующий день удачный - в графу "Лучший результат". Если последующий день с таким же результатом - графы остаются без изменений.
 Если "Удачный результат" больше предыдущего, то очки следующих дней расчитываются, отталкиваясь от этого результата.
 Например:

 Дни                     1     2     3    4     5      6       7       8       9

Очки                     10    5     20   20    4      5       2       25      1
Лучший результат         10    10    20   20    20     20      20      25      25
Худший результат         10    5     5    5     4      4       2       2       1

 Там образом, Чапаев побивал свой рекорд дважды - в 3 и 8 день. И ухудшал четырежды - во 2, 5, 7, 9 дни.
 Необходимо написать функцию, результатом которой была бы строка "Чапаев улучшал свой результат N раз(а). И ухудшал свой результат N раз(а)"
 *
 * */
let scores = [ 10, 5, 20, 5, 20, 4, 5, 2, 25, 1 ];

function breakingRecords(scores) {

    let highestScore = scores[0];
    let lowestScore = scores[0];
    let arrHighest = [];
    let arrLowest = [];

    scores.forEach((item)=>{
        if(highestScore < item ){
            highestScore = item;
            arrHighest.push(highestScore);
        }

        if(item < lowestScore){
            lowestScore = item;
            arrLowest.push(item);
        }
    });

    let str = 'Чапаев улучшал свой результат ' + arrHighest.length + ' раз(а). И ухудшал свой результат ' + arrLowest.length + ' раз(а)';
    return str;
}

breakingRecords(scores);

// "Чапаев улучшал свой результат 2 раз(а). И ухудшал свой результат 4 раз(а)"




/** Задача:
Организаторы лотереи решили поощрить игроков, чьи билеты не оказались выигрышными, следующим образом:
 Берется число месяца рождения игрока, например, 3 и день, например, 15. Если 3 стоящие подряд в невыигрышном билете цифры образуют в сумме 15, то
 участнику выдается дополнительный билет для участия в следующем розыгрыше.
Числа невыигрышного билета представлены массивом.

 Например:
 Цифры билета лотереи 1, 4, 5, 6, 13, 32, 0, 4, 25, 11.
 Игрок родился 5 числа 2 месяца.
 Таким образом под условия подходят рядом стоящие 2 (по числу месяца) цифры: 1 и 4, 0 и 4.
 Следовательно, игрок получит 2 дополнительных билета.

 Необходиом написать функцию, которая возвращает строку следующего содержания:
 "Игрок лотереи получит N дополнительный(ых) билет(а/ов) для участия в следующем розыгрыше."
 * */
let number = [ 15, 2, 10, 3, 2, 13, 25, 2, 11, 0, 0, 15 ];
let day = 15;
let month = 3;

function birthday(s, d, m) {

    let result = [];

    s.forEach((item, i, arr) => {
        let arrSumma;
        if(m <= arr.length) {
            let arrDel = arr.slice(i, m++);
            arrSumma = arrDel.reduce((sum, item) => sum + item);
        }
        if (arrSumma === d){
            result.push(arrSumma);
        }
    });

    let str = "Игрок лотереи получит " + result.length + " дополнительный(ых) билет(а/ов) для участия в следующем розыгрыше.";
    return str;
}

birthday(number, day, month);
// "Игрок лотереи получит 3 дополнительный(ых) билет(а/ов) для участия в следующем розыгрыше."




/** Задача:
 В колоду парных карточек игры случайным образом подмешалась часть колоды другой такой же игры.
 Числа, указанные на карточках, представлены целочисленным массивом.
 Например:
 Карточки игры: 10, 20, 20, 10, 10, 30, 50, 10, 20.
 Из них пары имеют карточки с цифрами 10, 20. При чем карточек с цифрами 10 - 2 пары.
 Всего же пары имеют три карточки.
 Необходимо написать функцию, которая выводила бы строку: "Из колоды карточек игры пары имеют N карточки(ек)"
 *
 * */
let cards = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(arr) {

    let obj = {};
    arr.forEach(function(item){
        if (!obj[item]) {
            obj[item] = 1;
        }else {
            obj[item]++;
        }
    });

    let arrCount = [];
    for (let key in obj) {
        let count = Math.floor(obj[key] / 2);
        arrCount.push(count);
    }

    let result = arrCount.reduce((sum, item) => sum + item);
    let str = "Из колоды " + result + " карточки(ек) имеют пары.";
    return str;
}

sockMerchant(cards);
// "Из колоды 3 карточки(ек) имеют пары."




/** Задача:
 Числа массива представлены целыми числами.
 Например, [1, 2, 3, 4, 5, 6].
 Необходимо написать функцию, результатом которой была бы строка, показывающая сколько сумм любых двух чисел делится без остатка на число 'k'.
 Например, число k = 5. На 5 делятся суммы чисел 1 и 4, 2 и 3, 4 и 6. Как видно, числа не обязательно должны стоять рядом.
 В результате надо вывести строку "На число "k" делится сумма 3 пар чисел"
 Число n в параметрах функции означает количество чисел, переданных в массив.
 *
 * */
let arr = [1, 3, 2, 6, 1, 2];
let number = 6;
let splitter = 3;

function sumPairs (n, k, ar) {
    let arrPairs = [];

    for (let i = 0; i < ar.length - 1; i++) {

        for (let b = i + 1; b < n; b++) {

            arrPairs.push([ar[i], ar[b]]);
        }
    }

    let arrResult = [];

    arrPairs.forEach((item) => {
        return item.reduce((sum, item) => {
            if ((sum + item) % k === 0) {
                arrResult.push(sum + item);
            }
        });
    });

    return "На число " +  k + " делится сумма " +  arrResult.length + " пар(ы) чисел.";
}

sumPairs(number, splitter, arr);
// "На число 3 делится сумма 5 пар(ы) чисел."




/** Задача:
Студенту - орнитологу профессор дал задание на каникулы - наблюдать за птицами, обитающими в его регионе. Результатом наблюдений студента должен стать вывод: какой
 из редких видов птиц наиболее распространен.
 Идентификационный номер редкости птиц (шкала), представлен в виде массива целых чисел. Чем меньше число, тем реже вид птицы.
 Например: [3, 2, 3, 2, 1]
 Представлено 3 вида птиц. Самый редкий из них под номером 1, самый распространенный - под номером 3.
 Птиц второго и третьего вида встречается по два экземпляра, но самый редкий их них второй. Это и является результатом работы.
 Необходимо написать функцию, которая выводила бы строку "Наиболее распространенные из самых редких видов птиц птицы под номером N.
 Их за время наблюдения было насчитано в количестве N"
 */
let birds = [ 1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4 ];

function migratoryBirds(arr) {
    let objBirds = {};

    arr.forEach((item) => {
        if (objBirds[item]) {
            objBirds[item]++;
        } else {
            objBirds[item] = 1;
        }
    });

    let arrBirds = [];
    for (let key in objBirds) {
        arrBirds.push({ID: key, value: objBirds[key]});
    }

    arrBirds.sort((a, b) => {return a.value - b.value});

    let arrResult = arrBirds.filter((item, i, arr) => {
        if (item.value === arr[arr.length-1].value){
            return item;
        }
    });

    return "Наиболее распространенные из самых редких видов птиц птицы под номером " + arrResult[0].ID + ". Их за время наблюдения было насчитано в количестве " +  arrResult[0].value;
}

migratoryBirds(birds);
// "Наиболее распространенные из самых редких видов птиц птицы под номером 3. Их за время наблюдения было насчитано в количестве 3"




/** Задача:
 Два маленьких мальчика соревнуются за право съесть единственно оставшуюся печенюшку. Их движение к объекту представлено линейно, шаг равен целому числу. Их позиции обозначены, как
 х - точка отправления первого мальчика;
 y- точка отправления второго мальчика;
 z - точка положения печенюшки.
 Движутся мальчики с одинаковой скоростью. Печенюшка неподвижно ждет своего часа.
 Необходимо написать функцию, которая возвращала бы строку:
 1) если первым доберется первый мальчик - "Правом первым откусить печенюшку обладает boy A";
 2) если первым доберется второй мальчик - "Правом первым откусить печенюшку обладает boy B";
 3) если они одновременно добираются до цели, то начинается словестная перепалка за печенье и формально выигрывает печенье, потому что они так и не решили, кто же откусит первым.
 В таком случае выводим строку "В ходе соревнований ни одна печенюшка не пострадала"
 Например:
                        точка отправления
 мальчик А                  25 (10)
 мальчик В                  75 (30)
 печенье                    70 (20)

 Представим линейно:

 25-------------------70--------------------75

 Очевидно, что до печенья быстрее доберется мальчик В.
 Или:

 10-------------------20--------------------30

 К цели оба мальчика придут одновременно.
 *
 */




