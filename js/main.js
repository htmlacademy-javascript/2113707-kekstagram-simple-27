// Константы
const PHOTOS_QTY = {min: 1, max: 25};
const LIKES_QTY = {min: 15, max: 200}; //число — количество лайков, поставленных фотографии. Случайное число от 15 до 200
const COMMENTS_QTY = {min: 0, max: 200}; // число — количество комментариев, оставленных другими пользователями к фотографии. Случайное число от 0 до 200
const DESCRIPTION = ['Прекрасная композиция', 'Отличные цвета', 'Не уверен, что мне это нравится', 'Удивительное фото', '☮']; //описание фотографии

// Функция, возвращающая случайное целое число из переданного диапазона [min, max] включительно.

const rndInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);

};

// Функция для проверки максимальной длины строки

const strLengthValidation = (string, length) => string.length <= length;
strLengthValidation('four', 4);

//Функция возвразающая рандомный элемента массива

const randomArrElement = (array) => array[rndInteger(0, array.length - 1)];

// объект массива — фотография

const createdPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: randomArrElement(DESCRIPTION),
  likes: rndInteger(LIKES_QTY.min, LIKES_QTY.max),
  comments: rndInteger(COMMENTS_QTY.min, COMMENTS_QTY.max),
});

const getPhotos = () =>
  Array.from({ length: PHOTOS_QTY.max }, (_, photoIndex) =>
    createdPhoto(photoIndex + 1)
  );

getPhotos();
