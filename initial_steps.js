'use strict';

a = 14;
console.log(a);

let number = 7;
const leftBorderWidth = 1;


const arrObj = {
	a: 'a',
	'1': 'b',
	2: 'c'
};

const b = 'b';
arrObj[b] = '1234';
console.log(arrObj[b]);
console.log(arrObj.b);

alert('Hello!');

// const result = confirm('Are you here?');
console.log(result);

const answer = +prompt('How old are you?', '18');
console.log(typeof(answer));
console.log(answer + 5);

const answers = [];
answers[0] = prompt('what is your name?', '');
answers[1] = prompt('what is your last name?', '');
answers[2] = prompt('How old are you?', '');

document.write(answers);

console.log(typeof(null));

// &&  - оператор "и"
// ||  - оператор "или"
// === - строгое сравнение
// ==  - сравнение не строгое (значение из строки можно сравнить с числовым типом данных, если в строке только число)
// !   - оператор отрицания

// Условия:
if (4 == 5) {
	console.log('ok!');
} else {
	console.log('Error');
};


if (num < 49) {
	console.log('Error!');
} else if (num > 100) {
	console.log('Too much!');
} else {
	console.log('Ok!');
};


//Тернарный оператор:
(num == 50) ? console.log('Ok!') : console.log('Error');



const num = 50;
switch (num) {
case 49:
	console.log('Неверно');
	break;
case 100:
	console.log('Неверно');
	break;
case 51:
	console.log('В дырочку!');
	break;
default:
	console.log('Сегодня не твой день!');
	break;
};

//Циклы
let das = 50;

while (das < 55) {
	console.log(das);
	das++;
};

do {
	console.log(das);
	das++;
}
while (das < 55);

for (let i = 1; i > 0; i++) {
	console.log(das);
	das++;
}

//МЕТКИ
first: for (let i = 0; i< 3; i++) { //Создали метку first, чтобы можно было по ней обращаться непосредственно к данному циклу
	console.log(`First level: ${i}`);
	for (let j = 0; j< 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k< 3; k++) {
			if (k === 2) continue first; // Здесь так же можно применить команду break
			console.log(`Third level: ${k}`);
		}			
	}
}

for (let i = 5; i <= 10; i++) {
	console.log(i);
}

for (let j = 20; j >= 10; j--) {
	if (j === 13) break;
	console.log(j);
}

for (let i = 2; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

let i = 2;
while (i <= 16) {
	if (i % 2 != 0) {
		console.log(i);
	}
	i++;
}

for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

const arrayOfNumbers = [];
for (let i = 0; i <= 5; i++) {
	arrayOfNumbers[i] = i + 5;
}
console.log(arrayOfNumbers);



const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
for (let i = 0; i < arr.length; i++) {
	result[i] = arr[i];
}
console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
// 	if (typeof(data[i]) == 'string') {
// 		data[i] += ' - done'; 
// 	} else {
// 		data[i] = data[i] * 2;
// 	}
// }
// console.log(data);
// const result = [];
// let j = 0;
// for (let k = data.length - 1; k >= 0; k--) {
// 	result[j] = data[k];
// 	j++;
// }
// console.log(result);

//Рисуем елочку из звездочек
const lines = 10;
let result = '';
for (let i = 0; i < lines; i++) {
	let j = lines - 1 - i;
	let k = i * 2 + 1;
	while (j > 0) {
		result += ' ';
		j--;
	}
	while (k > 0) {
		result += '*';
		k--;
	}
	result += '\n';
}
result += '\n';
console.log(result);


//ФУНКЦИИ

//Function Declaration функция м.б. использована до её объявления
function showFirstMessage (text) {
	console.log(text);
	let num = 20;
}
showFirstMessage('Hello mazafaka!');


// function calc(a, b) {
// 	return (a + b);
// }
// console.log(calc(4, 3));

function ret () {
	let num = 50;

	//

	return num;
}
const anotherNum = ret();
console.log(anotherNum);

//Function Expression функция испоользуется строго после её объявления
const logger = function() {
	console.log('YOOOO!');
};
logger();
 
//Стрелочные функции - такие функции не имеют контекста и зачастую применяются в качестве обработчика событий
const calc1 = (a, b) => a + b; // Если действие одно, то можно записать в одну строчку в таком виде

const calc2 = (a, b) => {   //если требуется расписать несколько событий то выделяется тело функции в стандартном виде
	console.log('все дела');
	return a + b;
};

function getMathResult(num1, num2) {
	let result = '' + num1;
	if (typeof(num2) !== 'number' || num2 <= 0) {
		return +result;
	} else {
		for (i = 2; i <= num2; i++) {
			result += `---${num1 * i}`;
		}
		return result;
	}
}

console.log(getMathResult(10, 5));

//Методы и свойства строк и чисел
console.dir(Number); //данная команда введенная в консоли в девтулз позволяет вывести свойства чисел в js

const str = 'test';
str.trim(); //Метод обрезающий все пробелы в начале и в конце строки
str[i]; // i-ый элемент строки
console.log(str.toUpperCase()); //перевод в верхний регистр
console.log(str.toLowerCase()); // перевод в нижний регистр

str.indexOf('-----'); //позволяет найти индекс элемента строки, где начинается искомая подстрока либо первое расположение одной буквы в строке (в качестве аргумента передается подстрока либо буква)
str.slice(i, j); //позволяет вывести часть строки (элемент с троки с индексом второго аргумента не входит в выводимый результат), метод поддерживает отрицательные аргументы тогда счет идет с конца строки
str.substring(i, j); // возвращает часть строки ограниченную индексами элементов(последний индекс НЕ включительно), отрицательные элементы не поддерживает
str.substr(i, j); //первый аргумент - индекс элемента с которого начнется подстрока, второй аргумент - длина подстроки (не индекс элемента)

const num3 = 12.2;
Math.round(num); //методи из библиотека Math округляющий число
parseInt('12.2px'); //метод переводит в нужную систему исчисления, но конкретно здесь вернет число 12 (тип данных числовой)
parseFloat('12.2px'); //вернет 12.2


function calculateVolumeAndArea(num) {
	if (typeof(num) != 'number' || num <= 0 || parseInt(num) != num) {
		console.log('При вычислении произошла ошибка');
	} else {
		console.log(`Объем куба: ${num * num * num}, площадь всей поверхности: ${num * num * 6}`);
	}
}
calculateVolumeAndArea(15.5);

console.log(typeof(undefined));

function getCoupeNumber(num) {
	if (typeof(num) != 'number' || num < 0 || parseInt(num) != num) {
		console.log('Ошибка. Проверьте правильность введенного номера места');
	} else if (num == 0 || num > 36) {
		console.log('Таких мест в вагоне не существует');
	} else {
		console.log(Math.ceil(num / 4));
	}
}
getCoupeNumber(7.7);

function getTimeFromMinutes(minutes) {
	if (typeof(minutes) != 'number' || minutes < 0 || parseInt(minutes) != minutes) {
		console.log('Ошибка, проверьте данные');
	} else {
		const hours = Math.floor(minutes / 60);
		const minutes2 = minutes % 60;
		if (hours % 10 === 1) {
			console.log(`Это ${hours} час и ${minutes2} минут`);
		} else if (hours % 10 === 2 || hours % 10 === 3 || hours % 10 === 4) {
			console.log(`Это ${hours} часа и ${minutes2} минут`);
		} else {
			console.log(`Это ${hours} часов и ${minutes2} минут`);
		}
	}
}

getTimeFromMinutes(-150);

function findMaxNumber(num1, num2, num3, num4) {
	if (typeof(num4) == 'undefined' || typeof(num1) != 'number' || typeof(num2) != 'number' || typeof(num3) != 'number' || typeof(num4) != 'number') {
		console.log(0);
	} else {
		console.log(Math.max(num1, num2, num3, num4));
	}
}

findMaxNumber(1, 2, 3, 11);

//Числа Фибоначи
function fib(num) {
	let result = '';
	if (typeof(num) != 'number' || num <= 0) {
		return result;
	} else {
		switch(num) {
		case 1:
			console.log(result += '0');
		case 2:
			return result += '0 1';
		default:
			result = '0 1';
			let privInt = 0;
			let curInt = 1;
			let nextInt;
			for (let i = 3; i <= num; i++) {
				nextInt = curInt + privInt;
				privInt = curInt;
				curInt = nextInt;
				result += ' ' + nextInt;
			}
		}
		console.log(result);
	}
}

fib(0);

//Callback - позволяет вызывать функцию внутри другой функции и оставаться уверенным, что вызванная функция выполнится в определенный момент (после определенных действий), когда её вызовут
function learnJS (lang, callback) { //здесь callback указывает, что при вызове функции в качестве аргумента будет передана другая функция. которая будет выполняться внутри
	console.log(`Я учу: ${lang}`);
	callback;  //в этом месте будет вызываться любая функция переданная в качесве аргумента
}

function done () {
	console.log('Я прошел этот урок!');
}
learnJS('JavaScript', done); //второй аргумент это функция, она всего лишь передается здесь поэтому записывается без скобок (не вызывается), вызываться данная функция будет внутри тела другой функции 


//Методы работы с объектами
const object = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() { // в качестве свойства объекта может выступать функция встроенная в этот объект
		console.log('Test');
	}
};
// delete object.name; //удаляет свойство (элемент) объекта
// console.log(object);
for (let key in object) { //метод FOR...IN обработки свойств объекта (перебираются подряд все свойства внутри объекта и с ними выполнятеся определенное действие)
	if (typeof(object[key]) === 'object') {
		for (let i in object[key]) { //Здесь вложен еще цикл для обработки объекта внутри объекта, иначе выводится просто уведомление, свойство внутри объекта так же является объектом
			console.log(`Свойство ${i} имеет значение ${object[key][i]}`);
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${object[key]}`);
	}	
}

console.log(Object.keys(object).length); //позволяет массив со всеми ключами свойств в объекте, далее применяем к этому массиву метод подсчта его длины...т.о. получаем длину объекта, т.к. прямого метода для получения длины объекта не существует

object.makeTest(); //вызов функции заданной внутри объекта

const {border, bg} = object.colors; //деструктуризация объектов вложенных в другие объекты
console.log(border); //вывод в консоль значение свойства от вложенного в объект объекта

Object.assign(arr1, arr2); // такой метод позволяет добавить свойства одного объекта (arr2) в другой объект (arr1), создается поверхностная копия второго объекта (не ссылка)


//Методы работы с массивами
arr.pop(); //удаляет последний элемент массива
arr.push(10); // добавляет элемент в конец массива

for (let value of arr) {  //метод FOR...OF обработки свойств массива и подобных ему сущностей (перебираются подряд все элементы внутри массива и с ними выполнятеся определенное действие)
	// do something
}

arr.forEach(function(item, i, arr) { // метод позволяет перебрать все элементы массива, в него можно вписать функцию которая будет применяться к каждому элементу, при этом для функции можно задать три аргумента (значение элемента, его индекс в массиве, ссылка на массив)
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str1= prompt('', '');
const products = str1.split(', '); // метод позволяет формировать массив из исходной строки по определенному разделителю - указывается как аргумент
products.join(' '); // метод позволяет сформировать строку из элементов массива с определенным разделителем - указывается как аргумент
products.sort(); //метод сортирует массив по алфавиту (только если массив состоит из строк), если массив состоит из чисел то они будут сортироваться так же как строки по симовольно

arr.sort(function (a, b) { //такой способ применения метода сорт позволяет отсортировать массивы с числами по возрастанию 
	return a - b;
});

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //Метод позволяет создать поверхностную копию масива (не ссылку)

const video = ['youtube', 'vimeo', 'rutube'];
	  blogs = ['wordpress', 'livejournal', 'blogger'];
	  internet = [...video, ...blogs, 'vk', 'facebook']; //это оператор разворота (spread оператор), который разворачивает массивы внутри других переменных, при этом создается поверхностная копия предшествующих массивов
	  													 // spread поператор может применяться для создания поверхностных копий так же и для ОБЪЕКТОВ

const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function (plan) {
		let result = `Мне ${plan.age} и я владею языками:`;
		for (let value of plan.skills.languages) {
			result += ` ${value.toUpperCase()}`;
		}
		console.log(result);
	}
};

function showExperience(plan) {
	let result ='';
	const currentArr = {};
	for (let key in plan) {
	    if (typeof(plan[key]) === 'object') {
		    for (let i in plan[key]) {
			    currentArr[i] = plan[key][i];
		    }
	    } else {
		    currentArr[key] = plan[key];
	    }	
	}
	console.log(currentArr['exp']);
	if (Object.keys(currentArr.programmingLangs).length === 0) {
		console.log(result);
	} else {
		for (let key in currentArr.programmingLangs) {
			result += `Язык ${key} изучен на ${currentArr.programmingLangs[key]}\n`;
		}
	}
	console.log(result);
}

showExperience(personalPlanPeter);

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

const {programmingLangs} = personalPlanPeter.skills;
console.log(programmingLangs);


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	for (let value of arr) {
		console.log(value.toLowerCase());
	}
}
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';
console.log()

function reverse(str) {
	let result = '';
	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	console.log(result);
}
reverse(someString);

//add some new comments

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const arr1 = [];

function availableCurr(arr, missingCurr) {
    result = 'Доступные валюты:\n';
    // arr = [...baseCurrencies, ...additionalCurrencies];
    if (typeof(arr[0]) == 'undefined') {
        console.log('Нет доступных валют');

    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == missingCurr) {
                continue;
            } else {
                result += `${arr[i]}\n`;
            }
        }
    }
    console.log(arr1);
}

availableCurr(arr1, 'UAH');

// Основы объектно-ориентированного программирования, прототипно-ориентированное наследование
const soldier = {
	health: 400,
	armor: 100
}
const john = {
	health: 100
}
Object.setPrototypeOf(john, soldier); //установливает прототипно-оринтированную связь между объектом john и soldier, таким образом второй аргумент является прототипом для первого аргумента
									  // т.е. для объекта john будут унаследовану свойства и методы от его прототипа даже если они для него явно не указаны
const george = Object.create(soldier); //одномоментно создает объект с наследованием всех свойств, функйций и методов от прототипа (аргумент в скобках)
