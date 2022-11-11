import { isEscapeKey } from './util.js';
import { resetScale } from './user-picture-scale.js';
import { resetEffects } from './user-picture-effects.js';
import { sendData } from './api.js';
import { showAlert } from './alerts.js';

const userFormElement = document.querySelector('.img-upload__form');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const uploadFileElement = document.querySelector('#upload-file');
const closeButtonElement = document.querySelector('#upload-cancel');
const uploadButtonElement = document.querySelector('#upload-submit');

//Блокировка кнопки отправки формы
const blockSubmitButton = () => {
  uploadButtonElement.disabled = true;
  uploadButtonElement.textContent = 'Идет отправка...';
};

//Разблокировка кнопки отправки формы
const unblockSubmitButton = () => {
  uploadButtonElement.disabled = false;
  uploadButtonElement.textContent = 'Опубликовать';
};

//Пристин экземпляр
const pristine = new Pristine(userFormElement,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
  },
  true
);

//Показать модальное окно
const showModal = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKey);
  userFormElement.addEventListener('submit', onFormSubmitButton);
};

//Закрыть модальное окно
const hideModal = () => {
  userFormElement.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKey);
  userFormElement.removeEventListener('submit', onFormSubmitButton);
};

function onEscapeKey(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
}

// Listners
uploadFileElement.addEventListener('change', () => {
  showModal();
});

closeButtonElement.addEventListener('click', () => {
  hideModal();
});

userFormElement.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

// Действия при нажатии на кнопку отправки формы
function onFormSubmitButton (evt) {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendData(
      () => {
        hideModal();
        showAlert('success');
        unblockSubmitButton();
      },
      () => {
        showAlert('error');
        unblockSubmitButton();
      },
      formData
    );
  }
}

export { onFormSubmitButton };
