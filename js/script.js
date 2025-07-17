const images = [
  {src:"images/uminagomi_dish1.jpg", class: "sweets1"},
  {src:"images/uminagomi_dish2.jpg", class: "sweets2"},
  {src:"images/uminagomi_dish3.jpg", class: "sweets3"},
  {src:"images/wonder_dish_1.jpg", class: "sweets4"},
  {src:"images/wonder_dish_2.jpg", class: "sweets5"},
  {src:"images/wonder_dish_3.jpg", class: "sweets6"}
];
let current = 0;
const visual = document.querySelector('.main-visual img');
setInterval(() => {
  current = (current + 1) % images.length;
  visual.src = images[current].src;
  visual.className = images[current].class; // クラスを切り替え
}, 4000);