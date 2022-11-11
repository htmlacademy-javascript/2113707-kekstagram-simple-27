const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const imgPreviewElement = document.querySelector('.img-upload__preview img');

const setPictureScale = () => {
  const currentValue = parseFloat(scaleValueElement.value);
  imgPreviewElement.style.transform = `scale(${currentValue / MAX_SCALE})`;
};

const onSmallerButton = () => {
  const currentScaleValue = parseFloat(scaleValueElement.value);
  if (currentScaleValue > MIN_SCALE) {
    scaleValueElement.value = `${currentScaleValue - SCALE_STEP}%`;
    setPictureScale();
  }
};

const onBiggerButton = () => {
  const currentScaleValue = parseFloat(scaleValueElement.value);
  if (currentScaleValue < MAX_SCALE) {
    scaleValueElement.value = `${currentScaleValue + SCALE_STEP}%`;
    setPictureScale();
  }
};

const resetScale = () => {
  setPictureScale(DEFAULT_SCALE);
};

smallerButtonElement.addEventListener('click', onSmallerButton);
biggerButtonElement.addEventListener('click', onBiggerButton);

export { resetScale };
