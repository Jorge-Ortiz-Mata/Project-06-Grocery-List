
// ---------------------------- CREATE OBJECTS. ------------------------------

const inputBox = document.getElementById('inputBox');
const submitButton = document.getElementById('submitButton');
const listObjects = document.querySelector('.listObjects');
const clearListButton = document.querySelector('.clearListButton');
const goodParameter = document.querySelector('.goodParameter');
const badParameter = document.querySelector('.badParameter');
const clearParameter = document.querySelector('.clearParameter');

// ---------------------------- FUNCTIONS ------------------------------

setItemsToListFunction = (numbers) => {

    listObjects.innerHTML=``;
    
    for(let i = 0; i < numbers.length; i++) {
        const article = document.createElement('article');
        listObjects.appendChild(article);
        article.classList.add('article');
        article.innerHTML = `<p>${i}. <b>${numbers[i]}</b></p> <button id="removeButton">Remove</button>`;
    }

} 

// ---------------------------- EVENT LISTENERS ------------------------------

window.addEventListener('load', function () {

    let localStorageStatus = localStorage.getItem('Numbers');
    numbers = JSON.parse(localStorage.getItem('Numbers'));

    if (localStorageStatus !== null) {

        listObjects.innerHTML=``;

        for(let i = 0; i < numbers.length; i++) {
            const article = document.createElement('article');
            listObjects.appendChild(article);
            article.classList.add('article');
            article.innerHTML = `<p>${i}. <b>${numbers[i]}</b></p><button id="removeButton">Remove</button>`;
        }
    }

})

submitButton.addEventListener('click', function () {

    let localStorageStatus = localStorage.getItem('Numbers');
    const inputValue = inputBox.value;

    if(inputValue.length > 0) {

        setTimeout (showGoodMessageFunction = () => {
            goodParameter.classList.add('showMessage');
        }, 0);

        if (localStorageStatus === null) {
            numbers = [inputValue];
            localStorage.setItem('Numbers', JSON.stringify(numbers));
        }
        else if (localStorageStatus !== null) {
            numbers = JSON.parse(localStorage.getItem('Numbers'));
            numbers.push(inputValue);
            localStorage.setItem('Numbers', JSON.stringify(numbers));
        }

        setItemsToListFunction(numbers);
        inputBox.value = ``;

        setTimeout (showGoodMessageFunction = () => {
            goodParameter.classList.remove('showMessage');
        }, 1000);

    }

    else if(inputValue.length === 0) {
        setTimeout (showBadMessageFunction = () => {
            badParameter.classList.add('showMessage');
        }, 0);

        setTimeout (showBadMessageFunction = () => {
            badParameter.classList.remove('showMessage');
        }, 1000);
    }
});

clearListButton.addEventListener('click', function () {
    localStorage.clear();
    listObjects.innerHTML=``;
    setTimeout (showClrMessageFunction = () => {
        clearParameter.classList.add('showMessage');
    }, 0);

    setTimeout (showClrMessageFunction = () => {
        clearParameter.classList.remove('showMessage');
    }, 1000);
});
