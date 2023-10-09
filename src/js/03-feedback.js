import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_FORM_KEY = 'feedback-form-state';
let formData = {};

const { email, message } = formRef.elements;

email.required = true;
message.required = true;

populateInputFields();

formRef.addEventListener('input', throttle(handleFormInput, 500));
formRef.addEventListener('submit', handleFormSubmit);

function handleFormInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else {
    formData.message = event.target.value;
  }
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

function populateInputFields() {
  if (JSON.parse(localStorage.getItem(LOCALSTORAGE_FORM_KEY))) {
    const parsedFormData = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_FORM_KEY)
    );
    email.value = parsedFormData.email || '';
    message.value = parsedFormData.message || '';
    formData.email = parsedFormData.email;
    formData.message = parsedFormData.message;
  }
}
