console.log('APP LOADED', document);

document.addEventListener('DOMContentLoaded', () => {
    const dictatorDetailsForm = document.querySelector('#dictator-details-form');
    dictatorDetailsForm.addEventListener('submit', handleDDFormSubmit);
});

const handleDDFormSubmit = function (event) {
    event.preventDefault();
    
    const dictatorListItem = createDictatorListItem(event.target);
    const dictatorList = document.querySelector('#dictator-list');
    dictatorList.appendChild(dictatorListItem);

    event.target.reset();
};

const createDictatorListItem = function (form) {
    const dictatorListItem = document.createElement('li');
    dictatorListItem.classList.add('dictator-list-item');

    const title = document.createElement('h3');
    title.textContent = form.title.value;
    dictatorListItem.appendChild(title);

    const firstName = document.createElement('h3');
    firstName.textContent = form.firstName.value;
    dictatorListItem.appendChild(firstName);

    const surname = document.createElement('h3');
    surname.textContent = form.surname.value;
    dictatorListItem.appendChild(surname);

    const dictatorType = document.createElement('h4');
    dictatorType.textContent = form.dictatorType.value;
    dictatorListItem.appendChild(dictatorType);



    return dictatorListItem;
};