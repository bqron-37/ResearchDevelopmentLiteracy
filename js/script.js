const images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let current = 0;
const visual = document.querySelector('.main-visual img');
setInterval(() => {
  current = (current + 1) % images.length;
  visual.src = images[current];
}, 4000);