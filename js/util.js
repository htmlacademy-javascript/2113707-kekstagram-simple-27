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

//Функция возвразающая рандомный элемента массива
const randomArrElement = (array) => array[rndInteger(0, array.length - 1)];

// Функция проверки нажатия esc
const isEscapeKey = (evt) => evt.key === 'Escape';

export {rndInteger, strLengthValidation, randomArrElement, isEscapeKey};

