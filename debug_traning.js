const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '10$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: false
};

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = {name: 'Mike', age: 32};
    console.log(data);
    return copy;
}

console.log(transferWaitors(restorantData));


function isAverageLunchPriceTrue(fDish, sDish, average) {
    console.log(+fDish['price'].slice(0, -1), typeof(+fDish['price'].slice(0, -1)));
    console.log(+sDish['price'].slice(0, -1), typeof(+sDish['price'].slice(0, -1)));
    if (+fDish['price'].slice(0, -1) + (+sDish['price'].slice(0, -1)) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], +restorantData.averageLunchPrice.slice(0, -1)));


function isOpen(prop) {
    let answer;
    return prop ? answer = 'Открыто' : answer = 'Закрыто';
}

console.log(isOpen(restorantData['openNow']))