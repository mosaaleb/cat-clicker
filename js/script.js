let clicksNumber = 0;

let catPicture = document.getElementById("cat-image");
catPicture.addEventListener('click', function() {
  clicksNumber++;
  clicksNumberContainer = document.querySelector(".clicks-counter");
  clicksNumberContainer.innerHTML = clicksNumber;
}, false);
