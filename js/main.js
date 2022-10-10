// Функция, возвращающая случайное целое число из переданного диапазона [min, max] включительно.

function getRndInteger(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRndInteger(1, 20);

// Функция для проверки максимальной длины строки

function validateStrLength (string, length) {
  return string.length <= length;
}

validateStrLength('four', 4);
