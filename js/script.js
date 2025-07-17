const images = ["images/uminagomi_dish1.jpg", "images/uminagomi_dish2.jpg", "images/uminagomi_dish3.jpg","images/wonder_dish_1.jpg","images/wonder_dish_2.jpg","images/wonder_dish_3.jpg"];
let current = 0;
const visual = document.querySelector('.main-visual img');
setInterval(() => {
  current = (current + 1) % images.length;
  visual.src = images[current];
}, 4000);