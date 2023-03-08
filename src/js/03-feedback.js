import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_FORM_KEY = 'feedback-form-state';
let formData = {};

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
  //   const currentStorageValue = JSON.parse(
  //     localStorage.getItem(LOCALSTORAGE_FORM_KEY)
  //   );
  //   console.log(currentStorageValue);
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_FORM_KEY);
}

function populateInputFiels() {
  const savedFormData = localStorage.getItem(LOCALSTORAGE_FORM_KEY);
  const parsedFormData = JSON.parse(savedFormData);
  if (parsedFormData) {
    formData = parsedFormData;
    formRef.elements.message.value = parsedFormData.message || '';
    formRef.elements.email.value = parsedFormData.email || '';
  }
}
