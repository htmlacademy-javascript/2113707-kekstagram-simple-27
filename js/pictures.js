// модуль отвечает за отрисовку миниатюр
import {getPhotos} from './data.js';

const usersPictures = document.querySelector('.pictures');
const usersPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment(); // Fragment

getPhotos.forEach(({url, description, likes, comments}) => {
  const picture = usersPicturesTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments;

  pictureFragment.appendChild(picture);

  return picture;
});

usersPictures.appendChild(pictureFragment); //Fragment
