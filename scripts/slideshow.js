var i = 0;
var imgs = ['images/classroom1.jpg', 'images/classroom2.jpg', 'images/classroom3.jpg', 'images/classroom4.jpg', 'images/classroom5.jpg', 'images/classroom6.jpg', 'images/classroom7.jpg',
			'images/classroom8.jpg'];
var time = 5000;

function transition() {
  document.slideshow.src = imgs[i];
  if (i < imgs.length - 1) {
    i++;
  }
  else { 
    i = 0;
  }
  setTimeout("transition()", time)
}
window.onload = transition;