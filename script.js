const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');

    buttonRight.onclick = function () {
      document.getElementById('list').scrollBy({
        left: +400,
        behavior: 'smooth'
      }) 
    };
    buttonLeft.onclick = function () {
      document.getElementById('list').scrollBy({
        left: -400,
        behavior: 'smooth'
      }) 
    };