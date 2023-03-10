import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_FORM_KEY = 'feedback-form-state';
let formData = {};

formRef.elements.email.required = true;
formRef.elements.message.required = true;

populateInputFiels();

formRef.addEventListener('input', throttle(handleFormInput, 500));
formRef.addEventListener('submit', handleFormSubmit);

function handleFormInput(event) {
  formData[event.target.name] = event.target.value;
  const stringifyFormData = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_FORM_KEY, stringifyFormData);
}

function handleFormSubmit(event) {
  event.preventDefault();
  let parsedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_FORM_KEY));
  if (parsedFormData) {
    console.log(parsedFormData);
  }
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_FORM_KEY);
}

function populateInputFiels() {
  // const parsedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_FORM_KEY));
  if (JSON.parse(localStorage.getItem(LOCALSTORAGE_FORM_KEY))) {
    const parsedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_FORM_KEY));
    formRef.elements.email.value = parsedFormData.email || '';
    formRef.elements.message.value = parsedFormData.message || '';
  }
}
