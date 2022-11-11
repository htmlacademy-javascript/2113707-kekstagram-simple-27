import { getData } from './api.js';
import { alertMessage } from './alerts.js';

const usersPicturesElement = document.querySelector('.pictures');
const usersPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderSimilarPictures = (pictures) => {

  const pictureFragment = document.createDocumentFragment(); // Fragment

  pictures.forEach(({url, likes, comments}) => {
    const picture = usersPicturesTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments;

    pictureFragment.appendChild(picture);

    return picture;
  });

  usersPicturesElement.appendChild(pictureFragment); //Fragment
};

getData(renderSimilarPictures, alertMessage);
