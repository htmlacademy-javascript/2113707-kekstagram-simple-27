import {rndInteger, randomArrElement} from './util.js';

// Константы
const PHOTOS_QTY = {min: 1, max: 25};
const LIKES_QTY = {min: 15, max: 200};
const COMMENTS_QTY = {min: 0, max: 200};
const DESCRIPTION = ['Прекрасная композиция', 'Отличные цвета', 'Не уверен, что мне это нравится', 'Удивительное фото', '☮'];

// объект массива — фотография
const createdPhoto = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: randomArrElement(DESCRIPTION),
  likes: rndInteger(LIKES_QTY.min, LIKES_QTY.max),
  comments: rndInteger(COMMENTS_QTY.min, COMMENTS_QTY.max),
});

// массив объектов - фотографий

const getPhotos = Array.from({length: PHOTOS_QTY.max}, createdPhoto);

export {getPhotos};
