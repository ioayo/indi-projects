const data = {
    "goods": {
        "estate": 10000000,
        "quarter": 3000000,
        "car": 500000,
        "macbook": 150000,
        "iphone": 60000,
        "burger": 200
    }
};

const persons = {
    "government": 1000000,
    "oilman": 550000,
    "banker": 350000,
    "middleCoder": 100000,
    "doctor" : 50000,
    "kassir": 20000,
}
function calc(price, monthIncome) {

    const secondsInMonth = 30 * 24 * 60 * 60;
    const moneyPerSecond = monthIncome / secondsInMonth;
    return price / moneyPerSecond;

}

function renderData(data, monthIncome) {
    const list = document.getElementById('cards');
    let html = '';
    let calculated;
    for (var key in data.goods) {
        calculated = calc(data.goods[key], monthIncome);
        html += `<li id="${key}"><span class="product">${key}</span><span class="calculated"> ${calculated}</span></li>`
    };
    list.innerHTML = html;

};

function renderHtmlPersons(persons) {

    for (var key in persons) {

        
    }

}

renderData(data, 30000);

// TODO
// 1. Create Object with Persons with month incomes
// 2. Render HTML string and create lists with each person
