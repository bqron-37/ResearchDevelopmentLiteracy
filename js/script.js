const images = ["images/test_1.jpg", "images/test_2.jpg", "images/test_3.jpg"];
let current = 0;
const visual = document.querySelector('.main-visual img');
setInterval(() => {
  current = (current + 1) % images.length;
  visual.src = images[current];
}, 4000);