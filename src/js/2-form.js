const LOCAL_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));
if (localData) {
  formData.email = JSON.parse(localStorage.getItem(LOCAL_KEY)).email ?? '';
  formData.message = JSON.parse(localStorage.getItem(LOCAL_KEY)).message ?? '';
}
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', event => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.elements.email.value || !form.elements.message.value) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(LOCAL_KEY);
    for (let item in formData) {
      formData[item] = '';
    }
    form.reset();
  }
});
