
// ---------------------------- CREATE OBJECTS. ------------------------------

const inputBox = document.getElementById('inputBox');
const submitButton = document.getElementById('submitButton');
const listObjects = document.querySelector('.listObjects');
const clearListButton = document.querySelector('.clearListButton');
const goodParameter = document.querySelector('.goodParameter');
const badParameter = document.querySelector('.badParameter');
const clearParameter = document.querySelector('.clearParameter');
const removeParameter = document.querySelector('.removeParameter');

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

// ---- Set items to the once you click submit ---

setItemsToListFunction = () => {
    updateGroceryListFunction(numbers);

    if(numbers.length == 1) {
        const removeButton2 = document.querySelector('.removeButton');
        removeButton2.addEventListener('click', function () {
            removeItemMessageFunction ();   // Message of remove item.
            const article = removeButton2.parentElement;
            article.remove();
            numbers.splice(0,1);
            localStorage.setItem('Numbers', JSON.stringify(numbers));
        });
    }

    else if(numbers.length > 1) {
        const removeButtons1 = document.querySelectorAll('.removeButton');

        removeButtons1.forEach(function(removeButton1) {

            removeButton1.addEventListener('click', function () {

                removeItemMessageFunction ();   // Message of remove item.

                removeButtons1.forEach(function(removeButtonNew1) {
                    let i = 0;
                    if (removeButtonNew1 === removeButton1) {
                        const articles = listObjects.querySelectorAll('.article');
                        const article = removeButton1.parentElement;

                        articles.forEach(function (articleNew) {
                            if(article === articleNew) {
                                i = i;
                                numbers = JSON.parse(localStorage.getItem('Numbers'));
                                numbers.splice(i, 1);
                                localStorage.setItem('Numbers', JSON.stringify(numbers));
                                updateGroceryListFunction(numbers);
                            }
                            else if(article !== articleNew) {
                                i++;
                            }
                        });
                    }
                });
            });
        });
    }
}

// ---------------------------- EVENT LISTENERS ------------------------------

// ---- Window event listener. ---

window.addEventListener('load', function () {

    let localStorageStatus = localStorage.getItem('Numbers');
    numbers = JSON.parse(localStorage.getItem('Numbers'));

    if (localStorageStatus !== null) {

        updateGroceryListFunction (numbers);  

        if(numbers.length == 1) {
            const removeButton2 = document.querySelector('.removeButton');
            removeButton2.addEventListener('click', function () {
                removeItemMessageFunction ();   // Message of remove item.
                const article = removeButton2.parentElement;
                article.remove();
                numbers.splice(0,1);
                localStorage.setItem('Numbers', JSON.stringify(numbers));
            });
        }

        else if (numbers.length > 1) {

            const removeButtons1 = document.querySelectorAll('.removeButton');

            removeButtons1.forEach(function(removeButton1) {

                removeButton1.addEventListener('click', function () {

                    removeItemMessageFunction ();

                    removeButtons1.forEach(function(removeButtonNew1) {

                        if (removeButtonNew1 === removeButton1) {
                            const articles = listObjects.querySelectorAll('.article');
                            let i = 0;
                            const article = removeButton1.parentElement;

                            articles.forEach(function (articleNew) {
                                if(article === articleNew) {
                                    i = i;
                                    numbers = JSON.parse(localStorage.getItem('Numbers'));
                                    numbers.splice(i, 1);
                                    localStorage.setItem('Numbers', JSON.stringify(numbers)); 
                                    updateGroceryListFunction(numbers);
                                }
                                else if(article !== articleNew) {
                                    i++;
                                }
                            });
                        }
                    });
                });
            });
        }
    }
});

// ---- Submit button event. ---

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
