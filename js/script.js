const catImages = document.querySelectorAll('.cat-img');

catImages.forEach((image) => {
  let clicksNumber = 0;
  const imageCopy = image;
  image.addEventListener('click', () => {
    clicksNumber += 1;
    imageCopy.nextElementSibling.firstChild.innerHTML = clicksNumber;
  }, false);
});
