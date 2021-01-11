console.log('APP LOADED', document);

document.addEventListener('DOMContentLoaded', () => {
    const dictatorDetailsForm = document.querySelector('#dictator-details-form');
    dictatorDetailsForm.addEventListener('submit', handleDDFormSubmit);
});

const handleDDFormSubmit = function (event) {
    event.preventDefault();    
};

console.log('Form Submit Handler', document);