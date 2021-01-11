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

    return dictatorListItem;
};