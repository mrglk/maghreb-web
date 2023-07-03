import Validator from './classes/Validator';
import {
  openModal,
} from './initModals';

export function initForms() {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', submitForm);
  });
}

function submitForm(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const validator = new Validator(form);
  const formData = new FormData(form);

  const url = form.getAttribute('action');
  const isFormValid = validator.validate();

  const button = form.querySelector('input[type="submit"]') || form.querySelector('button[type="submit"]');

  if (!url || !isFormValid) {
    return;
  }

  if (button) {
    button.setAttribute('disabled', 'disabled');
  }

  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => {
      form.reset();
      button.removeAttribute('disabled');
      form.id === 'subscribe' ? openModal('thanksSubscribe') : openModal('thanksApplication');
    });

  if (button) {
    button.removeAttribute('disabled');
  }
}