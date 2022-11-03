//Валидация формы загрузки фотографии

import {isEscapeKey} from './util.js';

const userForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');

const pristine = new Pristine(userForm,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
  },
  true
);

const showModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKey);
};

const hideModal = () => {
  userForm.reset();
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKey);
};

function onEscapeKey(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
}

uploadFile.addEventListener('change', () => {
  showModal();
});

closeButton.addEventListener('click', () => {
  hideModal();
});

userForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
