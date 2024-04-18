'use strict'

// DOM - объектная модель документа (document object model)

const box = document.getElementById('box'); //получение элемента по айдишнику (id всегда уникален на текущей странице)

const btns = document.getElementsByTagName('button'); //получение всех элементов на странице с таким тегом, в итоге формируется псевдомассив
const btn1 = document.getElementsByTagName('button')[1]; // получение определенной кнопки (происходит уже из массива на предыдущем шаге)

const circles =  document.getElementsByClassName('circle'); //получение html коллекции (псевдомассив) по названию класса

const hearts = document.querySelectorAll('.haert'); //получение элементов страницы по их селектору, при указании аргумента (селектора) перед ним обязательно ставится точка каким бы элементом страницы не выступал этот селектор (класс, тэг или что угодно)
hearts.forEach(item => {                            // для такого способа получения элементов страницы существует метод forEach (для выше перчисленных способов вообще не существует методов, т.к. это псевдомассивы)
    console.log(item);
})

const oneHeart = document.querySelector('.heart') // принцип тот же что и у querySelectorAll, но берет самый первый элемент на странице который попадает под требуемый селектор