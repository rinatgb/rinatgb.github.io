const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');
const list = document.getElementById('list');
var mouseDown = false;
var startX, scrollLeft;


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

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - list.offsetLeft;
  scrollLeft = list.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

list.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - list.offsetLeft;
  const scroll = x - startX;
  list.scrollLeft = scrollLeft - scroll;
});

list.addEventListener('mousedown', startDragging, false);
list.addEventListener('mouseup', stopDragging, false);
list.addEventListener('mouseleave', stopDragging, false);