
// ---------------------------- SELECTING OBJECTS. ------------------------------

// ---- HTML Inputs Form class. ---

const inputBox = document.getElementById('inputBox');
const listObjects = document.querySelector('.listObjects');

// ---- Buttons. ----

const submitButton = document.getElementById('submitButton');
const clearListButton = document.querySelector('.clearListButton');

// ---- Messages. ----

const goodParameter = document.querySelector('.goodParameter');
const badParameter = document.querySelector('.badParameter');
const clearParameter = document.querySelector('.clearParameter');
const removeParameter = document.querySelector('.removeParameter');

// ---- Get local storage value. ----

let localStorageStatus = localStorage.getItem('Numbers');

// ---------------------------- FUNCTIONS ------------------------------

// ---- Update items list. ---

updateGroceryListFunction = (numbers) => {
    listObjects.innerHTML=``;
    
    for(let i = 0; i < numbers.length; i++) {
        const article = document.createElement('article');
        listObjects.appendChild(article);
        article.classList.add('article');
        article.innerHTML = `<p>${i}. <b>${numbers[i]}</b></p> <button class="removeButton">Remove</button>`;
    }
    // ---- Remove buttons event. ---

    const articles = document.querySelectorAll('.article');
    const removeButtons = document.querySelectorAll('.removeButton');

    removeButtons.forEach(function (removeButton) {

        removeButton.addEventListener('click', function () {
            console.log(removeButtons);
            removeButtons.forEach(function (removeButtonNew) {
                let i = 0;
                if(removeButton === removeButtonNew) {
                    i++;
                    console.log(i);
                }
                else if (removeButton !== removeButtonNew) {
                    i = i;
                }
            });
        removeItemMessageFunction();
    });
});
}

// ---- Show Remove message on web app. ---

removeItemMessageFunction = () => {
    setTimeout (showRemoveMessageFunction = () => {
        removeParameter.classList.add('showMessage');
    }, 0);

    setTimeout (showRemoveMessageFunction = () => {
        removeParameter.classList.remove('showMessage');
    }, 1000);
}

// ---- Show Bad message on web app. ---

emptyBoxMessageFunction = () => {
    setTimeout (showBadMessageFunction = () => {
        badParameter.classList.add('showMessage');
    }, 0);

    setTimeout (showBadMessageFunction = () => {
        badParameter.classList.remove('showMessage');
    }, 1000);
}

// ---- Show Clear message on web app. ---

clearListMessageFunction = () => {
    setTimeout (showClrMessageFunction = () => {
    clearParameter.classList.add('showMessage');
    }, 0);

    setTimeout (showClrMessageFunction = () => {
    clearParameter.classList.remove('showMessage');
    }, 1000);
}

// ---------------------------- EVENT LISTENERS ------------------------------

// ---- Print array on document if localStorageStatus is different of null. ----

if(localStorageStatus !== null) {
    const numbers = JSON.parse(localStorage.getItem('Numbers'));
    updateGroceryListFunction(numbers);
}

// ---- Submit button event. ---

submitButton.addEventListener('click', function () {

    let localStorageStatus = localStorage.getItem('Numbers');
    const inputValue = inputBox.value;    

    if(inputValue.length > 0) {
        goodParameter.classList.add('showMessage');

        if (localStorageStatus === null) {
            numbers = [inputValue];
            localStorage.setItem('Numbers', JSON.stringify(numbers));
        }
        else if (localStorageStatus !== null) {
            numbers = JSON.parse(localStorage.getItem('Numbers'));
            console.log(numbers);
            numbers.push(inputValue);
            console.log(numbers);
            localStorage.setItem('Numbers', JSON.stringify(numbers));
        }

        updateGroceryListFunction(numbers);
        inputBox.value = ``;

        setTimeout (showGoodMessageFunction = () => {
            goodParameter.classList.remove('showMessage');
        }, 1000);
    }   
    else if(inputValue.length === 0) {
        emptyBoxMessageFunction ();
    }
});

// ---- Clear local storage. ---

clearListButton.addEventListener('click', function () {
    localStorage.clear();
    listObjects.innerHTML=``;
    clearListMessageFunction ();
});
