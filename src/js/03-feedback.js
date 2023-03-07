import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
// const textareaRef = document.querySelector('textarea');

formRef.addEventListener('input', handleFormInput);
formRef.addEventListener('submit', handleFormSubmit);

populateInputFiels();
const feedbackFormData = {};

function handleFormInput(event) {
  feedbackFormData[event.target.name] = event.target.value;
  const stringifyFormData = JSON.stringify(feedbackFormData);
  localStorage.setItem('feedback-form-state', stringifyFormData);
  // ----------------------------------------------------------------------------
  //   const inputValue = event.target.value;

  //   localStorage.setItem('feedback-form-state', inputValue);

  //   const savedfeedback = localStorage.getItem('feedback-form-state');
  //   const parsedfeedback = JSON.parse(savedfeedback);

  //   const parsedfeedback = localStorage.getItem('feedback-form-state');
  //   event.target.textContent = parsedfeedback;
}

function handleFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  localStorage.removeItem('feedback');
}

function populateInputFiels() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const parsedSavedMessage = JSON.parse(savedMessage);
  console.log(parsedSavedMessage);
  console.dir(formRef.elements);
}
