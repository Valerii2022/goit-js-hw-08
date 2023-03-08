import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(handleFormInput, 500));
formRef.addEventListener('submit', handleFormSubmit);

populateInputFiels();

const formData = {};

function handleFormInput(event) {
  formData[event.target.name] = event.target.value;
  const stringifyFormData = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', stringifyFormData);
}

function handleFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function populateInputFiels() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  const parsedFormData = JSON.parse(savedFormData);
  if (parsedFormData) {
    formRef.elements.message.value = parsedFormData.message || '';
    formRef.elements.email.value = parsedFormData.email || '';
  }
} 
